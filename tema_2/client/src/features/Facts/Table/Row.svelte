<script lang="ts">
    import type { Category, IFact } from "../types.d";

    export let id: number;
    export let fact: IFact;
</script>

<div
    class={`grid grid-cols-10 text-on-background items-center py-3 ${
        id % 2 === 0
            ? "bg-on-container-secondary text-container-secondary dark:bg-dark-on-container-primary dark:text-on-container-secondary"
            : ""
    }`}
>
    <div class="col-span-1 text-center">#{id ?? 0}</div>
    <div class="col-span-2 text-start">{fact.category?.toUpperCase()}</div>
    <div class="col-span-5">{fact.question}</div>
    <div class="col-span-2 text-center">?</div>
</div>
