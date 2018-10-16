<?php
function output_with_id($id){
    $str=file_get_contents('movies.json');
    $data=json_decode($str,true);
    foreach ($data as $key => $value) {
        if($id===(int)$value['id']){
            echo json_encode($value);
            return;
        }
    }
    echo json_encode(array(
        'error' => 'Not Found'
    ));
    return;

}

?>