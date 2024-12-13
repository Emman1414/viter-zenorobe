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
  // check data
  checkPayload($data);
  // get data
  $banner->banner_aid = $_GET['bannerid'];
  $banner->banner_title = checkIndex($data, "banner_title");
  $banner->banner_image = checkIndex($data, "banner_image");
  $banner->banner_excerpt = checkIndex($data, "banner_excerpt");
  $banner->banner_created = date("Y-m-d H:i:s");
  $banner->banner_datetime = date("Y-m-d H:i:s");
  checkId($banner->banner_aid);

//checks current data to avoid same entries from being updated
// $banner_title_old = checkIndex($data, 'banner_title_old');
// compareTitle($banner, $banner_title_old, $banner->banner_title);
// checkId($banner->banner_aid);

  // update
  $query = checkUpdate($banner);
  returnSuccess($banner, "banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();