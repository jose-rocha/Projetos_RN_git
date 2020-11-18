<?php
$pdo=new PDO("mysql:host=localhost;dbname=teste","root","");
$sql=$pdo->prepare("select * from book");
$sql->execute();
$data=$sql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);