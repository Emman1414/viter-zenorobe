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
  // get data
  $clothes->clothes_aid = $_GET['clothesid'];
  checkId($clothes->clothes_aid);
  

  $query = checkDelete($clothes);

  returnSuccess($clothes, "Departments", $query);
}

// return 404 error if endpoint not available
checkEndpoint();