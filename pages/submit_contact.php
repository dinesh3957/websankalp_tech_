<?php
// Database configuration
$host = '127.0.0.1:3307'; // Your MySQL host with port
$dbname = 'websankalp';
$username = 'root'; // Your MySQL username
$password = ''; // Your MySQL password

// Set response header for JSON
header('Content-Type: application/json');

// Enable CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

try {
    // Create PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get form data
    $name = trim($_POST['name'] ?? '');
    $mobile = trim($_POST['mobile'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');
    $product_info = trim($_POST['product_info'] ?? '');
    
    // Validate required fields
    if (empty($name)) {
        throw new Exception('Name is required');
    }
    
    if (empty($mobile)) {
        throw new Exception('Mobile number is required');
    }
    
    if (empty($email)) {
        throw new Exception('Email is required');
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format');
    }
    
    // Validate mobile number (basic validation)
    if (!preg_match('/^[0-9]{10,15}$/', $mobile)) {
        throw new Exception('Invalid mobile number format');
    }
    
    // Prepare SQL statement
    $sql = "INSERT INTO official_contacts (name, phone, email, message, product_info, created_at) 
            VALUES (:name, :phone, :email, :message, :product_info, NOW())";
    
    $stmt = $pdo->prepare($sql);
    
    // Execute the statement
    $result = $stmt->execute([
        ':name' => $name,
        ':phone' => $mobile,
        ':email' => $email,
        ':message' => $message,
        ':product_info' => $product_info
    ]);
    
    if ($result) {
        $insertId = $pdo->lastInsertId();
        
        // Success response
        echo json_encode([
            'success' => true,
            'message' => 'Your inquiry has been submitted successfully! We will contact you soon.',
            'id' => $insertId
        ]);
    } else {
        throw new Exception('Failed to insert data');
    }
    
} catch (PDOException $e) {
    // Database error
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
} catch (Exception $e) {
    // Validation or other errors
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>