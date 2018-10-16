<?php
function output_with_pagination($offset,$limit){
        $str=file_get_contents('movies.json');
        $data=json_decode($str,true);
        $result=array_slice($data,$offset,$limit);
        echo json_encode($result); 
        return;
}


?>