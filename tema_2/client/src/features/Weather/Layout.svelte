<script lang="ts">
    import Form from "./Form.svelte";
    import Map from "./Map.svelte";

    let latitude: number = 0;
    let longitude: number = 0;
</script>

<div class="p-20 h-full">
    <div class="text-on-background dark:text-dark-on-background mb-20">
        <p class="text-3xl">Get the current whether anywhere on the world</p>
        <p class="text-xl">Enter a location or select one on the map</p>
    </div>
    <div class="flex justify-start items-start h-5/6">
        <div class="w-1/2 h-full">
            <Form bind:latitude bind:longitude />
        </div>
        <div class="w-1/2 ">
            <Map />
        </div>
    </div>
</div>
