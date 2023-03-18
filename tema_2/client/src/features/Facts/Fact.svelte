<script lang="ts">
    import { onMount } from "svelte";
    import { RefreshCcwIcon, RefreshCwIcon } from "svelte-feather-icons";
    import Spinner from "../../components/Spinner.svelte";
    import config from "../../config";
    import type { IFact } from "./types.d";

    const getRandomFact = (): void => {
        fetch(`${config.__SERVER}/facts/random`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => (fact = res))
            .catch((err) => console.log("[ERROR] - facts ", err));
    };

    let fact: IFact;
    onMount(() => {
        getRandomFact();
    });
</script>

<div
    class="bg-container-primary shadow-md rounded-md p-5 pb-10
            dark:bg-dark-container-primary w-full h-96"
>
    {#if typeof fact === "undefined"}
        <Spinner />
    {:else}
        <header class="flex justify-start items-center mb-8">
            <div class="">
                <span class="text-basic text-on-background dark:text-dark-on-background"
                    >Category:</span
                >
                <span class="text-xl font-medium text-tertiary dark:text-dark-tertiary">
                    {fact?.category?.toUpperCase()}
                </span>
            </div>
            <button
                on:click={getRandomFact}
                class="ml-auto bg-on-container-tertiary text-on-tertiary p-2 rounded-lg shadow-sm 
                    transition-all duration-100        
                    hover:bg-container-tertiary hover:text-on-container-tertiary 
                    dark:bg-on-tertiary dark:text-dark-on-tertiary dark:shadow-md
                    dark:hover:bg-dark-on-tertiary dark:hover:text-on-tertiary "
            >
                <RefreshCcwIcon size={"28"} />
            </button>
        </header>
        <div class="text-4xl text-primary mb-4 dark:text-dark-primary">
            {fact?.question ?? "An error occurred"}
        </div>
        <div class="text-xl text-on-background dark:text-dark-on-background">
            {fact?.answer ?? "Try again later"}
        </div>
    {/if}
</div>
