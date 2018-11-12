<?php

class MainController
{

    public static function output_all($filedata)
    {
        return $filedata;
    }

    public static function output_with_id($id, $filedata)
    {
        $data = json_decode($filedata, true);
        foreach ($data as $key => $value) {
            if ($id === (int) $value['id']) {
                return json_encode($value);

            }
        }
        return json_encode(array(
            'error' => 'Not Found',
        ));
    }

    public static function output_with_pagination($offset, $limit, $filedata)
    {
        $data = json_decode($filedata, true);
        $result = array_slice($data, $offset, $limit);
        return json_encode($result);
    }

    public static function output_with_search($search_value, $filedata)
    {
        $result = array();
        $data = json_decode($filedata, true);
        foreach ($data as $key => $value) {
            if (strstr($value['title'], $search_value)) {
                array_push($result, $value);
            }
        }
        return json_encode($result);
    }

    public static function output_with_sort($sort_direction_int, $field, $filedata)
    {
        $data = json_decode($filedata, true);
        include_once 'sortfunctions/sort_functions.php';
        $sort_direction = '';
        if ($sort_direction_int === 1) {
            $sort_direction = '_reverse';
        }
        usort($data,$field . '_sort' . $sort_direction);
        return json_encode($data);
    }

}
