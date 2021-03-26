<?php
header('Content-Type:text/plain');
$originUrl = isset($_POST['originUrl'])?$_POST['originUrl']:"";
//切換網域用
$type = isset($_POST['type'])?$_POST['type']:"";
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://shortener.godaddy.com/v1/?apikey=[your API key]&domain=[your doamin].'.$type.'&url='.$originUrl ,
  //type = com or tw
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>

