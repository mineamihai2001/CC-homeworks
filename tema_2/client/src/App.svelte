<script lang="ts">
    import "./styles/app.css";
    import Navbar from "./features/Navbar.svelte";
    import WeatherLayout from "./features/Weather/Layout.svelte";
    import { Route, Router, Link } from "svelte-navigator";
</script>

<main class="w-full h-full bg-background dark:bg-dark-background">
    <Router>
        <Navbar />
        <div class="h-full">
            <Route path="/">
                <WeatherLayout />
            </Route>
            <Route path="/facts">Facts</Route>
            <Route path="/newsletter">Newsletter</Route>
        </div>
    </Router>
</main>
