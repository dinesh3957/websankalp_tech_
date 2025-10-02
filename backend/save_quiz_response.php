<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

try {
    // Get form data
    $name = $_POST['name'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $quiz_type = $_POST['quiz_type'] ?? '';
    $quiz_title = $_POST['quiz_title'] ?? '';
    
    // Validate required fields
    if (empty($name) || empty($mobile) || empty($quiz_type)) {
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit;
    }
    
    // Validate mobile number
    if (!preg_match('/^\d{10}$/', $mobile)) {
        echo json_encode(['success' => false, 'message' => 'Invalid mobile number format']);
        exit;
    }
    
    // Prepare SQL for insertion using PDO
    $sql = "INSERT INTO quiz_responses (name, mobile, quiz_type, quiz_title";
    $placeholders = "VALUES (:name, :mobile, :quiz_type, :quiz_title";
    $params = [
        ':name' => $name,
        ':mobile' => $mobile,
        ':quiz_type' => $quiz_type,
        ':quiz_title' => $quiz_title
    ];
    
    // Add questions and answers dynamically
    for ($i = 0; $i < 9; $i++) {
        $question_key = "q{$i}_question";
        $answer_key = "q{$i}_answer";
        
        if (isset($_POST[$question_key]) && isset($_POST[$answer_key])) {
            $sql .= ", question_" . ($i + 1) . ", answer_" . ($i + 1);
            $placeholders .= ", :question_" . ($i + 1) . ", :answer_" . ($i + 1);
            $params[":question_" . ($i + 1)] = $_POST[$question_key];
            $params[":answer_" . ($i + 1)] = $_POST[$answer_key];
        }
    }
    
    $sql .= ") " . $placeholders . ")";
    
    // Execute query using PDO
    $stmt = $pdo->prepare($sql);
    
    if ($stmt->execute($params)) {
        echo json_encode([
            'success' => true, 
            'message' => 'Quiz response saved successfully',
            'id' => $pdo->lastInsertId()
        ]);
    } else {
        throw new Exception("Execute failed");
    }
    
} catch (Exception $e) {
    error_log("Quiz Response Error: " . $e->getMessage());
    echo json_encode([
        'success' => false, 
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>