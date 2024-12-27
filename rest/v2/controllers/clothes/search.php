<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../models/clothes/Clothes.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clothes = new Clothes($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);


    $clothes->clothes_search = $data['searchValue'];

    http_response_code(200);

    if ($data['isFilter']) {
        $clothes->clothes_is_active = checkIndex($data, 'statusFilter');

        if ($clothes->clothes_search != '') {
            $query = checkFilterActiveSearch($clothes);
            getQueriedData($query);
        }
        $query = checkFilterActive($clothes);
        getQueriedData($query);
    }

    $query = checkSearch($clothes);
    getQueriedData($query);


    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
