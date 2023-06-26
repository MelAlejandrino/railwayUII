<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $book = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO passenger (ticket_id, train_id, user_id, ticket_string, date_schedule, category, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "iiissss", $book->ticketId, $book->trainId, $book->userId, $book->ticketString, $book->dateSchedule, $book->category, $book->status);
        

        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record creation failed.'];
        }
        echo json_encode($response);
        break;
}
