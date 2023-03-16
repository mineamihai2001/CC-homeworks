<script lang="ts">
    import "./app.css";
    import Navbar from "./features/Navbar.svelte";
    import WeatherLayout from "./features/Weather/Layout.svelte";
</script>

<main class="w-full h-full bg-background dark:bg-dark-background">
    <Navbar />
    <div class="h-full">
        <WeatherLayout />
    </div>
</main>
