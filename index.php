<?php include '_header.php'; ?>
<h1>Search for Users</h1>
<form class="smart" data-post="/user_search" data-target=".results">
  <label for="name">Name: <input name="name" id="name" type="text"></label>
  <button type="submit">Submit</button>
</form>
<div class="results"></div>
<?php include '_footer.php'; ?>

