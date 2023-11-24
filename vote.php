<?php
if (array_key_exists('for', $_POST) && array_key_exists('against', $_POST)) {
  include '_connection.php';

  $for_index = $_POST['for'];
  $against_index = $_POST['against'];
  $resultFor = pg_query_params($dbconn, 'UPDATE votes SET balance = balance + 1, countFor = countFor + 1 WHERE id = $1', array($for_index)) or die('Query failed: ' . pg_last_error());
  $resultAgainst = pg_query_params($dbconn, 'UPDATE votes SET balance = balance - 1, countAgainst = countAgainst + 1 WHERE id = $1', array($against_index)) or die('Query failed: ' . pg_last_error());
  pg_free_result($resultFor);
  pg_free_result($resultAgainst);
  pg_close($dbconn);
  echo "success";
} else {
  header('HTTP/1.0 404 not found');
  echo "fail";
}
?>

