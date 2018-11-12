<?php

class MoviesRoute
{
    public static function route($method, $urlData, $formData)
    {
        require_once "controllers/controller.php";
        require_once "config.php";
        $filedata = file_get_contents($filepath);
        if ($method === "GET") {
            if (count($urlData) === 0) {

                return MainController::output_all($filedata);

            } elseif ($urlData[0] === 'search') {

                return MainController::output_with_search($formData['title'], $filedata);

            } elseif ($urlData[0] === 'pagination') {

                return MainController::output_with_pagination((int) $formData['offset'], (int) $formData['limit'], $filedata);

            } elseif ($urlData[0] === 'sort') {

                return MainController::output_with_sort((int) $formData['sort_direction'], $formData['field'], $filedata);

            } else {

                return MainController::output_with_id((int) $urlData[0], $filedata);

            }
        }

        header('HTTP/1.0 400 Bad Request');
        return json_encode(array(
            'error' => 'Bad Request',
        ));
    }

}
