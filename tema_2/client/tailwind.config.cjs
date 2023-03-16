/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#D0BCFF",
                secondary: "#CCC2DC",
                tertiary: "#EFB8C8",
                error: "#F2B8B5",
                background: "#1C1B1F",
                on: {
                    primary: "#381E72",
                    secondary: "#332D41",
                    tertiary: "#492532",
                    error: "#601410",
                    background: "#E6E1E5",
                },
                container: {
                    primary: "#4F378B",
                    secondary: "#4A4458",
                    tertiary: "#633B48",
                    error: "#8C1D18",
                    surface: "#1C1B1F",
                },
                "on-container": {
                    primary: "#EADDFF",
                    secondary: "#E8DEF8",
                    tertiary: "#FFD8E4",
                    error: "#F9DEDC",
                    surface: "#CAC4D0",
                },
                dark: {
                    primary: "#6750A4",
                    secondary: "#625B71",
                    tertiary: "#7D5260",
                    error: "#B3261E",
                    background: "#FFFBFE",
                    on: {
                        primary: "#FFFFFF",
                        secondary: "#FFFFFF",
                        tertiary: "#FFFFFF",
                        error: "#FFFFFF",
                        background: "#1C1B1F",
                    },
                    container: {
                        primary: "#EADDFF",
                        secondary: "#E8DEF8",
                        tertiary: "#FFD8E4",
                        error: "#F9DEDC",
                        surface: "#FFFBFE",
                    },
                    "on-container": {
                        primary: "#21005D",
                        secondary: "#1D192B",
                        tertiary: "#31111D",
                        error: "#410E0B",
                        surface: "#1C1B1F",
                    },
                },
            },
        },
    },
    plugins: [],
};
