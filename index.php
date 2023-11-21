<h1>Updated 2</h1>
<?php
$dbconn = pg_connect("host=localhost dbname=ultimate user=ultimate_user password=pass123") or die('Could not connect: ' . pg_last_error());
$query = 'SELECT * FROM users';
$result = pg_query($query) or die('Query failed: ' . pg_last_error());

echo "<ul>\n";
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
  foreach ($line as $col_value) {
    echo "\t<li>$col_value</li>\n";
  }
}
echo "</ul>\n";

pg_free_result($result);
pg_close($dbconn);
?>
