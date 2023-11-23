<?php
if (array_key_exists('name', $_POST)) {
  echo "<p>The name is: " . htmlspecialchars($_POST['name']) . "</p>\n";
  $dbconn = pg_connect('host=localhost dbname=ultimate user=ultimate_user password=pass123') or die('Could not connect: ' . pg_last_error());
  $result = pg_query_params($dbconn, 'SELECT * FROM users WHERE LOWER(name) LIKE LOWER($1)', array($_POST['name'])) or die('Query failed: ' . pg_last_error());
  if (pg_num_rows($result)) {
    echo "<ul>\n";
    while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
      foreach ($line as $col_value) {
        echo "\t<li>$col_value</li>\n";
      }
    }
    echo "</ul>\n";
  } else {
    echo "<p>No matches.</p>";
  }
  pg_free_result($result);
  pg_close($dbconn);
} else {
  echo "<p>No matches.</p>";
}
?>

