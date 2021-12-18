<script lang="ts">
    import Game from "./Game.svelte";
</script>

<main>
    <h1 class="title">Mimita escapa escapa</h1>

    <Game />
</main>

<div class="footer w-100">
    <div class="container w-100">
        <p class="text-muted text-center w-100" />
    </div>
</div>

<style>
    main {
        padding: 1em;
        margin: 0 auto;
    }

    .title {
        text-transform: uppercase;
        text-align: center;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }

        .title {
            font-size: 1.6em;
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        background: white;
    }
</style>
