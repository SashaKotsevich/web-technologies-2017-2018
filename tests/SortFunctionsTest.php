<?php
require_once 'sortfunctions/sort_functions.php';
use PHPUnit\Framework\TestCase;

class TestSortFunctions extends TestCase
{
    public function testvote_count_sort()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(true, vote_count_sort($data[0], $data[1]));
    }

    public function testvote_count_sort_reverse()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(false, vote_count_sort_reverse($data[0], $data[1]));
    }

    public function testid_sort()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(true, id_sort($data[0], $data[1]));
    }

    public function testid_sort_reverse()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(false, id_sort_reverse($data[0], $data[1]));
    }

    public function testvote_average_sort()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(false, vote_average_sort($data[0], $data[1]));
    }

    public function testvote_average_sort_reverse()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(true, vote_average_sort_reverse($data[0], $data[1]));
    }

    public function testpopularity_sort()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(true, popularity_sort($data[0], $data[1]));
    }

    public function testpopularity_sort_reverse()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(false, popularity_sort_reverse($data[0], $data[1]));
    }

    public function testtitle_sort()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(-4, title_sort($data[0], $data[1]));
    }

    public function testtitle_sort_reverse()
    {
        $data = array();
        $data = json_decode(file_get_contents('testmoviessort.json'), true);
        $this->assertSame(4, title_sort_reverse($data[0], $data[1]));
    }
}
