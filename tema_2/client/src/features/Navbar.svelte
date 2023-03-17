<script lang="ts">
    import { SunIcon, MoonIcon } from "svelte-feather-icons";
    import logo from "../assets/svelte.svg";
    import { Link, useLocation } from "svelte-navigator";
    const location = useLocation();

    type Route = "/" | "/facts" | "/newsletter";
    let router: { [key in Route]: boolean } = {
        "/": true,
        "/facts": false,
        "/newsletter": false,
    };

    function navigateTo(route: Route): void {
        Object.entries(router).map(([key, value]) => {
            router[key] = false;
        });
        router[route] = true;
    }

    let light: boolean = true;
    function toggleDarkTheme(): void {
        light = !light;
        light
            ? document.documentElement.classList.remove("dark")
            : document.documentElement.classList.add("dark");
    }
</script>

<nav
    class="w-full bg-on-secondary dark:bg-dark-container-primary flex justify-center items-center px-14"
>
    <div
        class="mr-auto flex justify-center items-center gap-4 text-on-background dark:text-dark-on-background text-3xl font-bold py-6"
    >
        <img src={logo} alt="logo" class="w-12" />
        <span>DailyInfo</span>
    </div>
    <div
        class="flex justify-center items-center gap-20 text-2xl text-on-container-secondary dark:text-dark-on-container-primary"
    >
        <Link
            to="/"
            on:click={() => navigateTo("/")}
            class={`py-2 ${
                router["/"]
                    ? "border-b-2 border-on-container-secondary dark:border-dark-on-container-primary"
                    : "border-b-2 border-on-secondary dark:border-dark-container-primary"
            }`}>Weather</Link
        >
        <Link
            to="/facts"
            on:click={() => navigateTo("/facts")}
            class={`py-2 ${
                router["/facts"]
                    ? "border-b-2 border-on-container-secondary dark:border-dark-on-container-primary"
                    : "border-b-2 border-on-secondary dark:border-dark-container-primary"
            }`}>Facts</Link
        >
        <Link
            to="/newsletter"
            on:click={() => navigateTo("/newsletter")}
            class={`py-2 ${
                router["/newsletter"]
                    ? "border-b-2 border-on-container-secondary dark:border-dark-on-container-primary"
                    : "border-b-2 border-on-secondary dark:border-dark-container-primary"
            }`}>Newsletter</Link
        >
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
