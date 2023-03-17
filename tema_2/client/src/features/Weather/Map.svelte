<script lang="ts">
    import { onMount } from "svelte";
    import { Map } from "@onsvisual/svelte-maps";
    import maplibre, { Marker } from "maplibre-gl";

    export let latitude: number;
    export let longitude: number;

    let map: Map;
    let zoom: number;
    let center = {};
    const marker: Marker = new Marker({ color: "#FF3B00" });

    onMount(() => {
        map.addControl(new maplibre.NavigationControl({ showCompass: true }), "top-left");
        marker.setLngLat([longitude, latitude]).addTo(map);

        map.on("click", (e: any) => {
            const { lng, lat } = e.lngLat.wrap();
            latitude = lat;
            longitude = lng;
        });
    });

    $: marker.setLngLat([longitude, latitude]);
</script>

<div id="map">
    <Map
        id="map"
        style="https://api.maptiler.com/maps/streets/style.json?key=UVpfPJernqBKUkPk7mUM"
        location={{ lng: longitude, lat: latitude, zoom: 14 }}
        bind:map
        bind:zoom
        bind:center
    />
</div>

<style>
    #map {
        width: 100%;
        height: 60vh;
        position: relative;
    }
</style>
