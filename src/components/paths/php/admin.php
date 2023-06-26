<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT email, userpassword FROM user_account WHERE admin_privilege = 'yes'";
        $result = mysqli_query($conn, $sql);
        $admins = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($admins);
        break;
}
