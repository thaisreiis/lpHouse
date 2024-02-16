<?php

require_once('../../connection-factory/connection-factory.php');

$conn = ConnectionFactory::connection();

$stmt = $conn->prepare("SELECT id FROM newsletter WHERE email = ?");
$stmt->bind_param("s", $_POST['email_newsletter']);
$stmt->bind_result($id);
$stmt->execute();

if(!$stmt->fetch()){
    $stmt = $conn->prepare("INSERT INTO newsletter (email) VALUES (?)");
    $stmt->bind_param("s", $_POST["email_newsletter"]);
    $stmt->execute();
}

$stmt->close();
$conn->close();