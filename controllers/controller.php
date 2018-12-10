<?php

class MainController
{
    public $dbConnection;
    function __construct(){
        $this->dbConnection= new PDO('mysql:dbname=webbd;host=localhost', 'root', '');
    }

    public  function output_all()
    {
        $sth =$this->dbConnection->prepare("SELECT * FROM `movies`");
    $sth->execute();
        return json_encode($sth->fetch(PDO::FETCH_ASSOC));
    }

    public function output_with_id($id)
    {
        $sth= $this->dbConnection->prepare("SELECT * FROM `movies` WHERE `id`=?");
        $sth->execute(array($id));
        return json_encode($sth->fetch(PDO::FETCH_ASSOC));
    }

    public function output_with_pagination($offset, $limit, $filedata)
    {
        $sth= $this->dbConnection->prepare("SELECT * FROM `movies` WHERE `id`>? LIMIT ?");
        $sth->execute(array($id,$offset));
        return json_encode($sth->fetch(PDO::FETCH_ASSOC));
    }

    public function output_with_search($search_value)
    {
        $sth= $this->dbConnection->prepare("SELECT * FROM `movies` WHERE `title`=?");
        $sth->execute(array($search_value));
        return json_encode($sth->fetch(PDO::FETCH_ASSOC));
    }

    public function output_with_sort($sort_direction_int, $field)
    {
        
        if ($sort_direction_int === 1) {
            $sth= $this->dbConnection->prepare("SELECT * FROM `movies` ORDER BY ?");
            $sth->execute(array($field));
            return json_encode($sth->fetch(PDO::FETCH_ASSOC));
        }else{
            $sth= $this->dbConnection->prepare("SELECT * FROM `movies` ORDER BY ? DESC");
            $sth->execute(array($field));
            return json_encode($sth->fetch(PDO::FETCH_ASSOC));
        }
        
    }

}
