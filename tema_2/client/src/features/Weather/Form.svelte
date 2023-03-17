<script lang="ts">
    import { GlobeIcon } from "svelte-feather-icons";

    export let latitude: number;
    export let longitude: number;

    export let handleSubmit: () => void;
</script>

<form class="flex items-end gap-5" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col gap-2 w-1/3">
        <label class="text-on-background text-2xl dark:text-dark-on-background" for="latitude"
            >Latitude</label
        >
        <input
            class="text-background rounded-md px-4 py-1 text-xl dark:bg-dark-container-primary"
            id="latitude"
            type="number"
            step="any"
            bind:value={latitude}
        />
    </div>
    <div class="flex flex-col gap-2 w-1/3">
        <label class="text-on-background text-2xl dark:text-dark-on-background" for="latitude"
            >Longitude</label
        >
        <input
            class="text-background rounded-md px-4 py-1 text-xl dark:bg-dark-container-primary"
            id="latitude"
            type="number"
            step="any"
            bind:value={longitude}
        />
    </div>
    <button
        type="submit"
        class="bg-container-primary text-on-container-primary flex justify-center items-center 
                    rounded-md px-3 py-1 text-2xl font-semibold
                    dark:bg-dark-primary"
    >
        <span class="mx-3">GO</span>
        <GlobeIcon class="mx-3" />
    </button>
</form>
