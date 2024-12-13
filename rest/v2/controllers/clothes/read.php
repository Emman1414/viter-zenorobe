<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clothes = new Clothes($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("clothesid", $_GET)) {
  $clothes->clothes_aid = $_GET['clothesid'];
  checkId($clothes->clothes_aid);
  $query = checkReadById($clothes);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($clothes);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();