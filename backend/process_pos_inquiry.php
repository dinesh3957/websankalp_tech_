<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Include configuration
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get JSON input
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        
        // Debug: Log the received data
        error_log("Received JSON: " . $json);
        error_log("Decoded data: " . print_r($data, true));
        
        if (!$data) {
            throw new Exception('Invalid JSON data - Raw input: ' . substr($json, 0, 200));
        }
        
        // For POS forms, we only require email and phone
        $required_fields = ['email', 'phone'];
        foreach ($required_fields as $field) {
            if (empty($data[$field])) {
                throw new Exception("Missing required field: $field");
            }
        }
        
        // Prepare SQL statement for POS inquiries
        $stmt = $pdo->prepare("
            INSERT INTO product_inquiries (
                product_type, application_area, environment, scanning_distance,
                scanning_frequency, data_format, connectivity, accuracy_requirement,
                operating_temperature, budget_range, implementation_timeline,
                specific_requirements, company_name, contact_person, email, 
                phone, additional_notes, created_at
            ) VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW()
            )
        ");
        
        $result = $stmt->execute([
            $data['productType'] ?? 'POS System',
            $data['applicationArea'] ?? 'Point of Sales',
            $data['environment'] ?? 'Retail Environment',
            $data['scanningDistance'] ?? 'Standard POS Range',
            $data['scanningFrequency'] ?? null,
            $data['dataFormat'] ?? 'POS Transaction Data',
            $data['connectivity'] ?? null,
            $data['accuracyRequirement'] ?? 'High',
            $data['operatingTemperature'] ?? 'Standard Office Environment',
            $data['budgetRange'] ?? null,
            $data['implementationTimeline'] ?? null,
            $data['specificRequirements'] ?? null,
            $data['companyName'] ?? null,
            $data['contactPerson'] ?? null,
            $data['email'],
            $data['phone'],
            $data['additionalNotes'] ?? null
        ]);
        
        if ($result) {
            echo json_encode([
                'success' => true,
                'message' => 'POS inquiry submitted successfully!',
                'inquiry_id' => $pdo->lastInsertId()
            ]);
        } else {
            throw new Exception('Failed to save inquiry');
        }
        
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Error: ' . $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?>