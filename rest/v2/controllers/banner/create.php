<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$banner = new Banner($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$banner->banner_is_active = 1;
$banner->banner_title = checkIndex($data, "banner_title");
$banner->banner_image = checkIndex($data, "banner_image");
$banner->banner_excerpt = checkIndex($data, "banner_excerpt");
$banner->banner_created = date("Y-m-d H:i:s");
$banner->banner_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
isNameExist($banner, $banner->banner_title);


$query = checkCreate($banner);

returnSuccess($banner, "banner", $query);
