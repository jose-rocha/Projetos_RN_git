<?php 
$name = filter_input(INPUT_POST,  'name', FILTER_SANITIZE_SPECIAL_CHARS);
$arr = [
    'name'=>$name,
    'age'=> 29,
    'city'=> 'São Bernardo do Campo'
];

echo json_encode($arr);

// echo $name;
