<script lang="ts">
    import { CheckCircleIcon, XCircleIcon } from "svelte-feather-icons";
    import Spinner from "../../components/Spinner.svelte";
    import config from "../../config";
    import { sleep } from "../../utils";

    let email: string = "example@mail.com";
    let weather: boolean = true;
    let facts: boolean = true;

    let loading: boolean = false;
    let status: boolean = true;
    let showStatus: boolean = false;

    const sendEmail = async (): Promise<void> => {
        loading = true;
        await fetch(`${config.__SERVER}/email`, {
            method: "POST",
            body: JSON.stringify({ email, weather, facts }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                status = res.status === 200 ? true : false;
            })
            .catch((err) => {
                status = false;
            })
            .finally(() => {
                loading = false;
                showStatus = true;
            });
        await sleep();
        showStatus = false;
    };
</script>

<form class="flex flex-col items-start gap-10 mt-20" on:submit|preventDefault={sendEmail}>
    <div class="flex flex-col gap-2 w-1/3">
        <label class="text-on-background text-2xl dark:text-dark-on-background" for="email"
            >Email</label
        >
        <input
            class="text-background rounded-md px-4 py-1 text-xl dark:bg-dark-container-primary"
            id="email"
            type="email"
            bind:value={email}
        />
    </div>
    <div class="flex flex-col gap-2 mt-10">
        <label class="text-on-background text-2xl dark:text-dark-on-background" for="latitude"
            >What information do you want to receive?
        </label>
    </div>
    <div class="w-full flex flex-col gap-4">
        <div class="flex justify-start items-center gap-2 w-1/3">
            <input
                class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                id="weather_input"
                type="checkbox"
                bind:checked={weather}
            />
            <label
                class="text-on-background text-xl dark:text-dark-on-background"
                for="weather_input"
                >Weather Reports
            </label>
        </div>
        <div class="flex justify-start items-center gap-2 w-1/3">
            <input
                class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                id="facts_input"
                type="checkbox"
                bind:checked={facts}
            />
            <label class="text-on-background text-xl dark:text-dark-on-background" for="facts_input"
                >Random Facts
            </label>
        </div>
    </div>
    <button
        type="submit"
        class="bg-container-primary text-on-container-primary flex justify-center items-center 
                rounded-md px-3 py-1 text-2xl font-semibold
                dark:bg-dark-primary
                transition-all duration-100
                hover:bg-on-container-primary hover:text-container-primary
                dark:hover:bg-primary hover:dark:text-container-primary"
    >
        {#if !loading}
            {#if showStatus && status}
                <span class="mx-3">Success</span>
                <CheckCircleIcon class="text-green-500" />
            {:else if showStatus && !status}
                <span class="mx-3">Error</span>
                <XCircleIcon class="text-red-500" />
            {:else}
                <span class="mx-3">SEND</span>
            {/if}
        {:else}
            <span class="mr-3">Sending...</span>
            <Spinner text="Sending..." />
        {/if}
    </button>
</form>
