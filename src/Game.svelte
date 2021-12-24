<script lang="ts">
    import { onMount } from "svelte";
    import Item, { ItemState } from "./item";

    const maxTries = 3;
    const maxBlocks = 2;

    let size = 3;
    let targetX = 0;
    let targetY = 0;
    let items: Item[] = [];
    let info: string = "";

    $: gameIsOver = targetWasFound || targetDidEscape;
    $: targetWasFound = items.some((i) => i.state == ItemState.Found);
    $: targetDidEscape = items.filter((i) => i.state == ItemState.Clicked).length >= maxTries || availableItems.length == 0;
    $: availableItems = items.filter((i) => i.state == ItemState.Normal && (targetX != i.x || targetY != i.y));
    $: availableBlocks = maxBlocks - items.filter((i) => i.state == ItemState.Blocked).length;
    $: canBlock = availableBlocks > 0;
    $: availableTries = maxTries - items.filter((i) => i.state == ItemState.Clicked).length;

    onMount(() => reset());

    function forceUpdate() {
        items = [...items];
    }

    function reset() {
        info = "";
        items = [];

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const item = new Item(x, y);
                items = [...items, item];
            }
        }

        moveTarget();
    }

    function random(max: number): number {
        return Math.floor(Math.random() * max);
    }

    function moveTarget() {
        const availableItems = items.filter((i) => i.state == ItemState.Normal && (targetX != i.x || targetY != i.y));
        const randomIndex = random(availableItems.length);
        const newTargetItem = availableItems[randomIndex];
        targetX = newTargetItem.x;
        targetY = newTargetItem.y;
    }

    function isTarget(x: number, y: number, targetX: number, targetY: number): boolean {
        return targetX == x && targetY == y;
    }

    function resolveItemClass(item: Item, targetX: number, targetY: number): string {
        const { x, y } = item;
        const base = "btn grid-item text-center align-text-middle";
        const withTarget = isTarget(x, y, targetX, targetY) ? "with-target" : "without-target";
        const clicked = item.state == ItemState.Clicked ? "clicked" : "";
        const blocked = item.state == ItemState.Blocked ? "blocked" : "";
        return `${base} ${withTarget} ${clicked} ${blocked}`;
    }

    function handleTargetFound(item: Item) {
        item.state = ItemState.Found;
        forceUpdate();
        info = "¡Mimita encontrada! 😛";
    }

    function handleBlockClick(item: Item) {
        if (isTarget(item.x, item.y, targetX, targetY)) {
            handleTargetFound(item);
            return;
        }

        switch (item.state) {
            case ItemState.Normal:
                if (!canBlock) {
                    alert("¡No quedan bloqueos!");
                    return;
                }

                item.state = ItemState.Blocked;
                break;

            default:
                return;
        }

        forceUpdate();
    }

    function handleNormalClick(item: Item) {
        if (isTarget(item.x, item.y, targetX, targetY)) {
            handleTargetFound(item);
            return;
        }

        item.state = ItemState.Clicked;
        forceUpdate();

        const targetDidEscape = items.filter((i) => i.state == ItemState.Clicked).length >= maxTries || availableItems.length == 0;

        if (targetDidEscape) {
            info = "¡La Mimita ganó! 🤗";
            return;
        }

        moveTarget();
    }

    function handleBlockStart(item: Item) {
        item.blockTimer = setTimeout(() => {
            handleBlockClick(item);
        }, 300);
    }

    function handleBlockEnd(item: Item) {
        if (item.blockTimer) {
            clearTimeout(item.blockTimer);
        }
    }
</script>

<div class="game">
    <div class="row mb-3">
        <button class="btn btn-primary" on:click={() => reset()}>Reiniciar</button>
    </div>

    <div class="row info">
        <p><b>Mantener presionado para bloquear espacio (evita que la Mimita lo ocupe)</b></p>
        <p>Bloqueos disponibles: {availableBlocks}</p>
        <p>Intentos disponibles: {availableTries}</p>
    </div>

    <div class="row alert alert-primary" role="alert" hidden={info == ""}>{info}</div>

    <div class="row grid mb-3">
        {#each items as item}
            <button
                class={resolveItemClass(item, targetX, targetY)}
                on:click|preventDefault={() => handleNormalClick(item)}
                on:mousedown={() => handleBlockStart(item)}
                on:mouseup={() => handleBlockEnd(item)}
                on:touchstart={() => handleBlockStart(item)}
                on:touchend={() => handleBlockEnd(item)}
                disabled={gameIsOver || item.state != ItemState.Normal}
            >
                {item.state}
            </button>
        {/each}
    </div>
</div>

<style>
    .game {
        margin: 5%;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(70px, auto);
    }

    .grid-item {
        color: white;
        background-color: gray;
        vertical-align: middle;
        cursor: pointer;
    }

    .grid-item:hover {
        background-color: rgb(177, 177, 177);
    }

    /* .with-target {
        background-color: #198754;
    } */

    .clicked {
        cursor: unset;
        background-color: #0d6efd;
    }

    .clicked:hover {
        background-color: #0a5dda;
    }

    .blocked {
        background-color: #dc3545;
    }

    .blocked:hover {
        background-color: #b92d3b;
    }

    .info p {
        padding: 0;
    }
</style>
