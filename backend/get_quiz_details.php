<?php
header('Content-Type: application/json');
require_once 'config.php';

if (!isset($_GET['id']) || empty($_GET['id'])) {
    echo json_encode(['success' => false, 'message' => 'Quiz ID is required']);
    exit;
}

$quizId = (int)$_GET['id'];

try {
    $stmt = $pdo->prepare("SELECT * FROM quiz_responses WHERE id = ?");
    $stmt->execute([$quizId]);
    $quiz = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($quiz) {
        echo json_encode(['success' => true, 'quiz' => $quiz]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Quiz not found']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
}
?>