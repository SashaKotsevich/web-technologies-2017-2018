<?php
function output_with_search($search_value){
    $str=file_get_contents('movies.json');
    $result=array();
    $data=json_decode($str,true);
    foreach ($data as $key => $value) {
        if(strstr($value['title'],$search_value)){
            array_push($result,$value);
        }
    }
   echo json_encode($result);
   return;
}
?>