<script lang="ts">
    import config from "../../config";
    import Form from "./Form.svelte";
    import Map from "./Map.svelte";
    import Result from "./Result.svelte";
    import type { IWeatherResult } from "./types";

    let latitude: number = 47.151726;
    let longitude: number = 27.587914;

    let result: IWeatherResult;

    const handleSubmit = (): void => {
        fetch(config.__SERVER + `/weather?latitude=${latitude}&longitude=${longitude}`, {
            method: "GET",
            headers: {},
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                result = res;
            })
            .catch((err) => console.log("[ERROR] - ", err));
    };
</script>

<div class="p-20 h-full">
    <div class="text-on-background dark:text-dark-on-background mb-20">
        <p class="text-3xl">Get the current whether anywhere on the world</p>
        <p class="text-xl">Enter a location or select one on the map</p>
    </div>
    <div class="flex justify-start items-start h-5/6">
        <div class="w-1/2 h-full">
            <Form bind:latitude bind:longitude {handleSubmit} />
            <Result bind:result />
        </div>
        <div class="w-1/2 ">
            <Map bind:latitude bind:longitude />
        </div>
    </div>
</div>
