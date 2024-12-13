<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../models/clothes/Clothes.php';
// get payload

// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clothes = new Clothes($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  //checkApiKey();
  if (array_key_exists("clothesid", $_GET)) {
    // check data
    checkPayload($data);
    $clothes->clothes_aid = $_GET['clothesid'];
    $clothes->clothes_is_active = trim($data["isActive"]);
    checkId($clothes->clothes_aid);
    $query = checkActive($clothes);
    http_response_code(200);
    returnSuccess($clothes, "clothes", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
