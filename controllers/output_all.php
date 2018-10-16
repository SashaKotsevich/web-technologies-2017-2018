<?php
function output_all(){
    $str=file_get_contents('movies.json');
    echo $str;
    return;
}
?>