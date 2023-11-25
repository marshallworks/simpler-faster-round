<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Round But Simpler</title>
    <meta name="description" content="Simple version of faster-round.t3.gg.">
    <meta name="author" content="Greg Marshall">
    <meta name="theme-color" content="#f3f4f6">
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <h1>Which Pokémon is Rounder?</h1>
    <div class="voter">
      <div class="left">
        <h2 id="name-left">Name</h2>
        <img id="img-left" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png" alt="Image loading.">
        <button id="vote-left">Rounder</button>
      </div>
      <div class="or">or</div>
      <div class="right">
        <h2 id="name-right">Name</h2>
        <img id="img-right" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png" alt="Image loading.">
        <button id="vote-right">Rounder</button>
      </div>
    </div>
    <div class="voter-results">
      <button id="show-hide-results">Show Results</button>
      <div id="results" class="hide"></div>
    </div>
    <div class="hide"><?php
      for ($i = 0; $i <= 1010; $i++) {
        echo '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' . $i . '.png" fetchpriority="low">';
      }
    ?></div>
    <script type="application/json" id="pokemon-data"><?php include 'pokemon.json'; ?></script>
    <script src="main.js" defer></script>
  </body>
</html>

