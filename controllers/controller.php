<?php

class MainController
{
   
    public  function output_all()
    {
        try {
            $connection = new Mongo('localhost');
            $cursor = $connection->moviesDb->movies->find();
        } catch (MongoConnectionException $exeption) {
            die('Error connecting');
        }
        $connection->close();
        return iterator_to_array($cursor);
    }

    public function output_with_id($id)
    {
        try {
            $connection = new Mongo('localhost');
           
            $criterion= array(
                'id' => (int)$id
            );
            $cursor = $connection->MoviesDb->movies->find($criterion);
        } catch (MongoConnectionException $exeption) {
            die('Error connecting ');
        }
        $connection->close();
        return iterator_to_array($cursor);
    }

    public function output_with_pagination($offset, $limit)
    {
        try {
            $connection = new Mongo('localhost');
            $cursor = $connection->MoviesDb->movies->find()->limit($quantity)->skip($start);
        } catch (MongoConnectionException $exeption) {
            die('Error connecting ');
        } catch (MongoCursorException $exeption) {
        }
        $connection->close();
        return iterator_to_array($cursor);
    }

    public function output_with_search($search_value)
    {
        try {
            $connection = new Mongo('localhost');
           
            $criterion= array(
                'title' => new MongoRegex("/$search_value/i")
            );
            $cursor = $connection->MoviesDb->movies->find($criterion);
        } catch (MongoConnectionException $exeption) {
            die('Error connecting ');
        }
        $connection->close();
        return iterator_to_array($cursor);
    }

    public function output_with_sort($sort_direction_int, $field)
    {
        
        try {
            $connection = new Mongo('localhost');
            if ($direction == 1) $cursor = $connection->MoviesDb->movies->find()->sort(array("$field" => 1));
            else $cursor = $collection->find()->sort(array("$field" => -1));
        } catch (MongoConnectionException $exeption) {
            die('Error connecting');
        } catch (MongoCursorException $exeption) {
        }
        $conn->close();
        return iterator_to_array($cursor);
        
    }

}
