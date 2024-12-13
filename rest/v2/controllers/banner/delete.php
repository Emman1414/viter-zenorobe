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
  // get data
  $banner->banner_aid = $_GET['bannerid'];
  checkId($banner->banner_aid);
  

  $query = checkDelete($banner);

  returnSuccess($banner, "Departments", $query);
}

// return 404 error if endpoint not available
checkEndpoint();