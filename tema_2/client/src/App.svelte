<script lang="ts">
    import "./styles/app.css";
    import Navbar from "./features/Navbar.svelte";
    import { Route, Router } from "svelte-navigator";
    import Weather from "./pages/Weather.svelte";
    import Facts from "./pages/Facts.svelte";
    import Newsletter from "./pages/Newsletter.svelte";
</script>

<main class="w-full bg-background dark:bg-dark-background">
    <Router>
        <Navbar />
        <div class="">
            <Route path="/">
                <Weather />
            </Route>
            <Route path="/facts">
                <Facts />
            </Route>
            <Route path="/newsletter">
                <Newsletter />
            </Route>
        </div>
    </Router>
</main>
