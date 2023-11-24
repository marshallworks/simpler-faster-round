<?php
header('Content-Type: application/json; charset=utf-8');
$dbconn = pg_connect('host=localhost dbname=ultimate user=ultimate_user password=pass123') or die('Could not connect: ' . pg_last_error());
$result = pg_query($dbconn, 'SELECT * FROM votes ORDER BY balance DESC');
$data = array();
while ($row = pg_fetch_row($result)) {
  array_push($data, array(intval($row[0]), intval($row[1]), intval($row[2]), intval($row[3])));
}
pg_free_result($result);
pg_close($dbconn);
echo json_encode($data);
?>
