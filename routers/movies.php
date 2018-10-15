<?php
function route($method, $urlData, $formData) {
    $str=file_get_contents('movies.json');
   // Получение информации о товаре
   // GET /goods/{goodId}
    if ($method === 'GET' && count($urlData) === 0) {
        
        echo $str;
        return;

    }elseif ($method === 'GET' && $urlData[0]==='search') {
        
        $result=array();
        $data=json_decode($str,true);
        foreach ($data as $key => $value) {
            if(strstr($value['title'],$formData['title'])){
                array_push($result,$value);
            }
        }
       echo json_encode($result);
       return;

    } elseif ($method === 'GET' && $urlData[0]==='pagination') {
        
        $data=json_decode($str,true);
        $result=array_slice($data,(int)$formData['offset'],(int)$formData['limit']);
        echo json_encode($result); 
        return;

    }elseif ($method === 'GET' && $urlData[0]==='sort') {
        
        $data=json_decode($str,true);
        include_once'resources/sort_functions.php';
        $sort_direction='';
        if((int)$formData['sort_direction']===1){
            $sort_direction='_reverse';
        }
        usort($data,$formData['field'].'_sort'.$sort_direction);
        echo json_encode($data);

        return;

    }else{

        $data=json_decode($str,true);
        foreach ($data as $key => $value) {
            if((int)$urlData[0]===(int)$value['id']){
                echo json_encode($value);
                return;
            }
        }
        echo json_encode(array(
            'error' => 'Not Found'
        ));
        return;

    }

   
 
   
    header('HTTP/1.0 400 Bad Request');
    echo json_encode(array(
        'error' => 'Bad Request'
    ));
}



?>