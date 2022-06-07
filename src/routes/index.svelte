<script>
    import TodoItem from "src/lib/todo-item.svelte";
    const title = "Todo"
</script>

<style>
    .todo{
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }
    .new{
        margin: 0 0 0.5rem 0;
    }
    .new input{
        box-sizing: border-box;
        background: rgba(255, 255, 255,0);
        font-size: 8px;
        border-radius: 8px;
        text-align: center;
    }
    .todo :global(input){
        border: 1px solid transparent;
    }
    .todo :global(input:focus-visible){
        box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ff3c00 !important;
        outline: none;
    }
</style>
<svelte:head>
    <title>{title}</title>
</svelte:head>
<div class="todo">
    <h1>Welcome to SvelteKit</h1>
<form method="" action="" class="new">
    <input type="text" placeholder=" + type to add a todo" aria-label="add a Todo" name="text">
</form>
<TodoItem></TodoItem>
</div>
