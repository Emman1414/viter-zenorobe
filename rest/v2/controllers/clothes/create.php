<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clothes = new Clothes($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$clothes->clothes_is_active = 1;
$clothes->clothes_title = checkIndex($data, "clothes_title");
$clothes->clothes_image1 = checkIndex($data, "clothes_image1");
$clothes->clothes_image2 = checkIndex($data, "clothes_image2");
$clothes->clothes_price = checkIndex($data, "clothes_price");
$clothes->clothes_category_id = checkIndex($data, "clothes_category_id");
$clothes->clothes_created = date("Y-m-d H:i:s");
$clothes->clothes_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
// isNameExist($clothes, $clothes->clothes_title);


$query = checkCreate($clothes);

returnSuccess($clothes, "clothes", $query);
