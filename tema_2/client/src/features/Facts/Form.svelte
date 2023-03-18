<script lang="ts">
    import { FilePlusIcon } from "svelte-feather-icons";
    import config from "../../config";
    import { Category } from "./types.d";

    let category: Category = Category.GENERAL;
    let question: string = "";
    let answer: string = "";

    const handleSubmit = (e: any): void => {
        if (!category || !question || !answer) {
            e.preventDefault();
        }

        fetch(`${config.__SERVER}/facts`, {
            method: "POST",
            body: JSON.stringify({ category, question, answer }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log("[ERROR] - create ", err));
    };
</script>

<form class="h-full" on:submit={(e) => handleSubmit(e)}>
    <div class="flex justify-center items-end gap-10">
        <div class="flex flex-col gap-2 w-1/5">
            <label
                for="category_select"
                class="text-on-background text-2xl dark:text-dark-on-background">CATEGORY</label
            >
            <select
                bind:value={category}
                class="text-background rounded-md px-4 py-1 text-xl dark:bg-dark-container-primary"
            >
                {#each Object.values(Category) as c}
                    <option value={c}>{c.at(0).toUpperCase() + c.slice(1)}</option>
                {/each}
            </select>
        </div>
        <div class="flex flex-col gap-2 w-4/5">
            <label
                for="category_select"
                class="text-on-background text-2xl dark:text-dark-on-background">QUESTION</label
            >
            <input
                bind:value={question}
                class="text-background rounded-md px-4 py-1 text-xl dark:bg-dark-container-primary"
            />
        </div>
        <button
            type="submit"
            class="bg-container-primary text-on-container-primary flex justify-center items-center 
                rounded-md px-4 py-1 text-2xl font-medium
                dark:bg-dark-primary
                transition-all duration-100
                hover:bg-on-container-primary hover:text-container-primary
                dark:hover:bg-primary hover:dark:text-container-primary"
        >
            <FilePlusIcon class="" />
            <span class="mx-3">CREATE</span>
        </button>
    </div>
    <div class="flex flex-col gap-2 w-full mt-4">
        <label
            for="category_select"
            class="text-on-background text-2xl dark:text-dark-on-background">ANSWER</label
        >
        <textarea
            rows="3"
            bind:value={answer}
            class="text-background rounded-md px-4 py-1 text-xl dark:bg-dark-container-primary"
        />
    </div>
</form>
