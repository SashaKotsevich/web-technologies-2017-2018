<?php

class MoviesRoute
{
    public static function route($method, $urlData, $formData)
    {
        require_once "controllers/controller.php";
        require_once "config.php";

        if ($method === "GET") {
            $db=new MainController();

            if (count($urlData) === 0) {

                return $db->output_all();

            } elseif ($urlData[0] === 'search') {

                return $db->output_with_search($formData['title']);

            } elseif ($urlData[0] === 'pagination') {

                return $db->output_with_pagination((int) $formData['offset'], (int) $formData['limit']);

            } elseif ($urlData[0] === 'sort') {

                return $db->output_with_sort((int) $formData['sort_direction'], $formData['field']);

            } else {

                return $db->output_with_id((int) $urlData[0]);

            }
        }

        header('HTTP/1.0 400 Bad Request');
        return json_encode(array(
            'error' => 'Bad Request',
        ));
    }

}
