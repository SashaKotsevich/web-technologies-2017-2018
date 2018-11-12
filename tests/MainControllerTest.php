<?php
//namespace tests;
use PHPUnit\Framework\TestCase;

class MainControllerTest extends TestCase
{
    public function testoutput_all()
    {
        include_once "controllers/controller.php";

        $filedata = file_get_contents("testmovies.json");
        $this->assertSame(MainController::output_all($filedata), file_get_contents("testmovies.json"));
    }

    public function testoutput_with_id()
    {
        include_once "controllers/controller.php";
        
        $filedata = file_get_contents("testmovies.json");
        $this->assertSame('[' . MainController::output_with_id(445651, $filedata) . ']', json_encode(json_decode(file_get_contents("testmovies.json"))));

    }

    public function testoutput_with_pagination()
    {
        include_once "controllers/controller.php";
        
        $filedata = file_get_contents("testmovies.json");
        $this->assertSame( MainController::output_with_pagination(0,1, $filedata), json_encode(json_decode(file_get_contents("testmovies.json"))));

    }

    public function testoutput_with_search()
    {
        include_once "controllers/controller.php";
        
        $filedata = file_get_contents("testmovies.json");
        $this->assertSame( MainController::output_with_search("The Darkest Minds", $filedata), json_encode(json_decode(file_get_contents("testmovies.json"))));

    }
    public function testoutput_with_sort()
    {
        include_once "controllers/controller.php";
        
        $filedata = file_get_contents("testmoviessort.json");
        $this->assertSame( MainController::output_with_sort(1,'id', $filedata), json_encode(json_decode(file_get_contents("testmoviessort.json"))));

    }
   
}
