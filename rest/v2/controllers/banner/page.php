<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../models/banner/Banner.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$banner = new Banner($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        // get task id from query string
        $banner->banner_start = $_GET['start'];
        $banner->banner_total = 11;
        //check to see if task id in query string is not empty and is number, if not return json error
        checkLimitId($banner->banner_start, $banner->banner_total);

        $query = checkReadLimit($banner);
        $total_result = checkReadAll($banner);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $banner->banner_total,
            $banner->banner_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();