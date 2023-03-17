<script lang="ts">
    import config from "../../config";
    import type { IWeatherResult } from "./types";

    export let result: IWeatherResult;
    let icon: string;

    $: {
        icon = `${config.__WEATHER_URL}/${result?.weather?.at(0)?.icon}@4x.png`;
    }
</script>

<div class="text-on-background dark:text-dark-on-background flex justify-start items-center py-14">
    {#if typeof result !== "undefined"}
        {#if typeof result.weather.at(0).icon !== "undefined"}
            <figure class="w-64">
                <img class="w-64" src={icon} alt="result" />
            </figure>
        {/if}
        <div class="flex flex-col justify-center items-start gap-4">
            <span class="text-4xl text-tertiary dark:text-dark-tertiary"
                >{result?.weather.at(0).main ?? ""}</span
            >
            <span class="text-xl">{result?.weather.at(0).description ?? ""}</span>
        </div>
        <div class="flex flex-col justify-center item-start gap-2 ml-14">
            {#each Object.entries(result.main) as [key, value]}
                <div class="flex justify-start items-center gap-4">
                    <span class="text-xl"
                        >{key
                            .split("_")
                            .map((k) => k.at(0).toUpperCase() + k.slice(1))
                            .join(" ")}:</span
                    >
                    <span class="text-3xl text-primary dark:text-dark-primary ml-auto">{value}</span
                    >
                </div>
            {/each}
        </div>
    {/if}
</div>
