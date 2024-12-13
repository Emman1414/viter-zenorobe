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
  // check data
  checkPayload($data);
  // get data
  $clothes->clothes_aid = $_GET['clothesid'];
  $clothes->clothes_title = checkIndex($data, "clothes_title");
  $clothes->clothes_image1 = checkIndex($data, "clothes_image1");
  $clothes->clothes_image2 = checkIndex($data, "clothes_image2");
  $clothes->clothes_price = checkIndex($data, "clothes_price");
  $clothes->clothes_category_id = checkIndex($data, "clothes_category_id");
  $clothes->clothes_created = date("Y-m-d H:i:s");
  $clothes->clothes_datetime = date("Y-m-d H:i:s");
  checkId($clothes->clothes_aid);

//checks current data to avoid same entries from being updated
// $clothes_title_old = checkIndex($data, 'clothes_title_old');
// compareTitle($clothes, $clothes_title_old, $clothes->clothes_title);
// checkId($clothes->clothes_aid);

  // update
  $query = checkUpdate($clothes);
  returnSuccess($clothes, "clothes", $query);
}

// return 404 error if endpoint not available
checkEndpoint();