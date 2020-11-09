<?php
$name=filter_input(INPUT_POST,'name',FILTER_DEFAULT);
echo json_encode($name);