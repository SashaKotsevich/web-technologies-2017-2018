<?php
function route($method, $urlData, $formData) {
    $str=file_get_contents('movies.json');
   
    if ($method === 'GET' && count($urlData) === 0) {
      include_once 'controllers/output_all.php';
      output_all();  
      

    }elseif ($method === 'GET' && $urlData[0]==='search') {
        
        include_once 'controllers/output_with_search.php';
        output_with_search($formData['title']);
        return;

    } elseif ($method === 'GET' && $urlData[0]==='pagination') {
        
        include_once 'controllers/output_with_pagination.php';
        output_with_pagination((int)$formData['offset'],(int)$formData['limit']);
        return;

    }elseif ($method === 'GET' && $urlData[0]==='sort') {
       
        include_once 'controllers/output_with_sort.php';
        output_with_sort((int)$formData['sort_direction'],$formData['field']);
        return;

    }else{

        include_once 'controllers/output_with_id.php';
        output_with_id((int)$urlData[0]);
        return;

    }

   
 
   
    header('HTTP/1.0 400 Bad Request');
    echo json_encode(array(
        'error' => 'Bad Request'
    ));
}



?>