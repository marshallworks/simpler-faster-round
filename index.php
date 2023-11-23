<?php include '_header.php'; ?>
<h1>Which Pokémon is Rounder?</h1>
<div class="voter">
  <div class="left">
    <h2 id="name-left">Name</h2>
    <img id="img-left" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png">
    <button id="vote-left">Rounder</button>
  </div>
  <div class="or">or</div>
  <div class="right">
    <h2 id="name-right">Name</h2>
    <img id="img-right" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png">
    <button id="vote-right">Rounder</button>
  </div>
</div>
<div style="display: none"><?php
for ($i = 0; $i <= 1010; $i++) {
  echo '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' . $i . '.png">';
}
?></div>
<script type="application/json" id="pokemon-data"><?php include 'pokemon.json'; ?></script>
<?php include '_footer.php'; ?>

