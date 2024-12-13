<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$banner = new Banner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("bannerid", $_GET)) {
  $banner->banner_aid = $_GET['bannerid'];
  checkId($banner->banner_aid);
  $query = checkReadById($banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();