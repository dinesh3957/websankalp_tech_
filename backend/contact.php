<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    // Fallback to regular POST data
    $input = $_POST;
}

// Validate required fields
$name = trim($input['name'] ?? '');
$phone = trim($input['phone'] ?? '');
$email = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');
$product_info = trim($input['product_info'] ?? '');

if (empty($name) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Name, phone, and email are required fields'
    ]);
    exit();
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Please enter a valid email address'
    ]);
    exit();
}

try {
    // Insert into database
    $stmt = $pdo->prepare("INSERT INTO official_contacts (name, phone, email, message, product_info) VALUES (?, ?, ?, ?, ?)");
    $result = $stmt->execute([$name, $phone, $email, $message, $product_info]);
    
    if ($result) {
        echo json_encode([
            'success' => true, 
            'message' => 'Your inquiry has been submitted successfully!',
            'id' => $pdo->lastInsertId()
        ]);
    } else {
        throw new Exception('Failed to save contact information');
    }
    
} catch (PDOException $e) {
    error_log('Database error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Database error. Please try again later.'
    ]);
} catch (Exception $e) {
    error_log('Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'An error occurred. Please try again later.'
    ]);
}
?>