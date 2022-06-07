<script>
    import TodoItem from "src/lib/todo-item.svelte";
    const title = "Todo"
</script>

<style>
    
</style>
<svelte:head>
    <title>{title}</title>
</svelte:head>
<div class="todo">
    <h1>Welcome to SvelteKit</h1>
<form method="" action="">
    <input type="text" placeholder="" aria-label="">
</form>
<TodoItem></TodoItem>
</div>
