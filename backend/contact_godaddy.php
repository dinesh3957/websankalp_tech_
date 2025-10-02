<?php
// GoDaddy-Optimized Contact Form Handler
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
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields']);
    exit();
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

try {
    // Save to database
    $stmt = $pdo->prepare("INSERT INTO official_contacts (name, email, phone, message, product_info, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->execute([$name, $email, $phone, $message, $product_info]);
    
    // GoDaddy-Compatible Email Settings
    $to_email = "info@websankalp.com";  // Replace with your actual domain email
    $subject = "New Contact Form Submission - WebSankalp Technologies";
    
    // Email content
    $email_body = "
    New Contact Form Submission:
    
    Name: $name
    Email: $email
    Phone: $phone
    
    Message:
    $message
    
    Product Info: $product_info
    
    Submitted: " . date('Y-m-d H:i:s') . "
    ";
    
    // GoDaddy-friendly email headers
    $headers = array(
        'From: noreply@' . $_SERVER['HTTP_HOST'],  // Use your domain
        'Reply-To: ' . $email,
        'Return-Path: noreply@' . $_SERVER['HTTP_HOST'],
        'X-Mailer: PHP/' . phpversion(),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8'
    );
    
    // Send email (GoDaddy supports mail() function)
    $email_sent = false;
    if (function_exists('mail')) {
        $email_sent = mail($to_email, $subject, $email_body, implode("\r\n", $headers));
    }
    
    // Success response
    $response = [
        'success' => true,
        'message' => 'Thank you! Your message has been received. We will contact you soon.',
        'email_sent' => $email_sent
    ];
    
    echo json_encode($response);
    
} catch (Exception $e) {
    // Log error for debugging
    error_log("Contact form error: " . $e->getMessage());
    
    echo json_encode([
        'success' => false, 
        'message' => 'Sorry, there was a problem submitting your message. Please try again or call us directly.'
    ]);
}
?>