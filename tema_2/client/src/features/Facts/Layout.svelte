<script lang="ts">
    import Fact from "./Fact.svelte";
    import Form from "./Form.svelte";
    import Table from "./Table/Table.svelte";
</script>

<div class="p-20">
    <div class="text-on-background dark:text-dark-on-background mb-20">
        <p class="text-3xl">Get your random fact of the day</p>
        <p class="text-xl">Or create one of your own for others to see</p>
    </div>
    <div class="flex justify-start items-start gap-10">
        <div class="w-1/2 h-full flex justify-center items-start gap-10">
            <Fact />
        </div>
        <div class="w-1/2 h-full">
            <Table />
        </div>
    </div>
    <div class="w-full h-72 mt-20">
        <Form />
    </div>
</div>
