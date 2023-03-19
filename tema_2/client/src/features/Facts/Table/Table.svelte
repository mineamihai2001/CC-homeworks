<script lang="ts">
    import { onMount } from "svelte";
    import config from "../../../config";
    import type { IFact } from "../types";
    import Row from "./Row.svelte";

    const getFacts = (): void => {
        fetch(`${config.__SERVER}/facts`)
            .then((res) => {
                if (res.status === 503) return [];
                return res.json();
            })
            .then((res) => (facts = res))
            .catch((err) => console.log("[ERROR] - all facts ", err));
    };

    let facts: Array<IFact> = [];
    onMount(() => {
        getFacts();
    });
</script>

<div
    class="bg-container-secondary rounded-lg h-96 py-3 flex flex-col
            dark:bg-dark-primary"
>
    <header class="grid grid-cols-10 text-on-background text-2xl pt-3 pb-6 border-b">
        <div class="col-span-1 text-center">ID</div>
        <div class="col-span-2 text-start">CATEGORY</div>
        <div class="col-span-5">QUESTION</div>
        <div class="col-span-2 text-center">ANSWER</div>
    </header>
    <div class="overflow-auto flex-auto">
        {#each facts as fact, i}
            <Row bind:fact id={i + 1} />
        {/each}
    </div>
</div>
