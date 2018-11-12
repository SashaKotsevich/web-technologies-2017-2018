<?php

function vote_count_sort($x, $y)
{
    return ($x['vote_count'] < $y['vote_count']);
}

function id_sort($x, $y)
{
    return ($x['id'] < $y['id']);
}

function vote_average_sort($x, $y)
{
    return ($x['vote_average'] < $y['vote_average']);
}

function popularity_sort($x, $y)
{
    return ($x['popularity'] < $y['popularity']);
}

function title_sort($x, $y)
{
    return strcasecmp($x['title'], $y['title']);
}

function vote_count_sort_reverse($y, $x)
{
    return ($x['vote_count'] < $y['vote_count']);
}

function id_sort_reverse($y, $x)
{
    return ($x['id'] < $y['id']);
}

function vote_average_sort_reverse($y, $x)
{
    return ($x['vote_average'] < $y['vote_average']);
}

function popularity_sort_reverse($y, $x)
{
    return ($x['popularity'] < $y['popularity']);
}

function title_sort_reverse($y, $x)
{
    return strcasecmp($x['title'], $y['title']);
}
