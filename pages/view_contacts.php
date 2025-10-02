<?php
// Database configuration
$host = '127.0.0.1:3307';
$dbname = 'websankalp';
$username = 'root';
$password = '';

try {
    // Create PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get all contact submissions
    $sql = "SELECT * FROM official_contacts ORDER BY created_at DESC";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
} catch (PDOException $e) {
    die("Database error: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Submissions - WebSankalp Technologies</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        .stats {
            background: #5883d9;
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background: #5883d9;
            color: white;
            font-weight: 600;
        }
        tr:nth-child(even) {
            background: #f9f9f9;
        }
        tr:hover {
            background: #f0f4f8;
        }
        .no-data {
            text-align: center;
            padding: 40px;
            color: #666;
        }
        .product-info {
            font-weight: 600;
            color: #5883d9;
        }
        .message {
            max-width: 200px;
            word-wrap: break-word;
        }
        .date {
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Product Inquiry Submissions</h1>
        
        <div class="stats">
            <strong>Total Submissions: <?php echo count($contacts); ?></strong>
        </div>
        
        <?php if (empty($contacts)): ?>
            <div class="no-data">
                <h3>No contact submissions found</h3>
                <p>When customers submit inquiries through the product popup, they will appear here.</p>
            </div>
        <?php else: ?>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Product Info</th>
                        <th>Message</th>
                        <th>Submitted At</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($contacts as $contact): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($contact['id']); ?></td>
                            <td><?php echo htmlspecialchars($contact['name']); ?></td>
                            <td><?php echo htmlspecialchars($contact['phone']); ?></td>
                            <td><?php echo htmlspecialchars($contact['email']); ?></td>
                            <td class="product-info"><?php echo htmlspecialchars($contact['product_info'] ?: 'N/A'); ?></td>
                            <td class="message"><?php echo htmlspecialchars($contact['message'] ?: 'No message'); ?></td>
                            <td class="date"><?php echo date('Y-m-d H:i:s', strtotime($contact['created_at'])); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>
        
        <div style="margin-top: 30px; text-align: center;">
            <a href="../index.html" style="color: #5883d9; text-decoration: none;">← Back to Website</a> |
            <a href="product.html" style="color: #5883d9; text-decoration: none;">View Products</a>
        </div>
    </div>
</body>
</html>