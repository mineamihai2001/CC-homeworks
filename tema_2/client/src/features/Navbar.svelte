<script lang="ts">
    import { SunIcon, MoonIcon } from "svelte-feather-icons";
    import logo from "../assets/svelte.svg";

    let light: boolean = true;

    function toggleDarkTheme() {
        light = !light;
        light
            ? document.documentElement.classList.remove("dark")
            : document.documentElement.classList.add("dark");
    }
</script>

<nav
    class="w-full bg-on-secondary dark:bg-dark-container-primary flex justify-center items-center px-14"
>
    <div class="mr-auto" />
    <div
        class="flex justify-center items-center gap-4 text-on-background dark:text-dark-on-background text-3xl font-bold py-6"
    >
        <img src={logo} alt="logo" class="w-12" />
        <span>WeatherApp</span>
    </div>
    <div
        class="ml-auto flex rounded-full px-2 py-1 gap-2
            bg-container-secondary text-on-container-secondary
            dark:bg-dark-on-secondary dark:text-dark-on-container-secondary"
    >
        <button
            class={`rounded-full p-1 cursor-pointer ${
                !light &&
                "bg-on-container-secondary text-on-secondary dark:bg-dark-on-container-secondary dark:text-dark-on-secondary"
            }`}
            on:click={toggleDarkTheme}
        >
            <SunIcon size="24" />
        </button>
        <button
            class={`rounded-full p-1 cursor-pointer ${
                light &&
                "bg-on-container-secondary text-on-secondary dark:bg-dark-on-container-secondary dark:text-dark-on-secondary"
            }`}
            on:click={toggleDarkTheme}
        >
            <MoonIcon size="24" />
        </button>
    </div>
</nav>
