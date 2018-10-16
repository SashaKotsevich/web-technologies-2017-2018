<?php
function output_with_sort($sort_direction_int,$field){
 $str=file_get_contents('movies.json');
 $data=json_decode($str,true);
 include_once 'services/sort_functions.php';
 $sort_direction='';
 if($sort_direction_int===1){
     $sort_direction='_reverse';
 }
 usort($data,$field.'_sort'.$sort_direction);
 echo json_encode($data);

 return;
}
?>