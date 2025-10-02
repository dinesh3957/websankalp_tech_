<?php
session_start();
require_once 'config.php';

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: ../admin/login.php');
    exit();
}

// Get date filter
$dateFilter = $_GET['date_filter'] ?? 'all';
$whereClause = '';
$params = [];

// Build filter display name
$filterDisplayName = '';
switch ($dateFilter) {
    case 'today':
        $whereClause = 'WHERE DATE(created_at) = CURDATE()';
        $filterDisplayName = 'Today';
        break;
    case 'this_week':
        $whereClause = 'WHERE created_at >= DATE_SUB(NOW(), INTERVAL 1 WEEK)';
        $filterDisplayName = 'This Week';
        break;
    case 'this_month':
        $whereClause = 'WHERE MONTH(created_at) = MONTH(NOW()) AND YEAR(created_at) = YEAR(NOW())';
        $filterDisplayName = 'This Month';
        break;
    case 'last_month':
        $whereClause = 'WHERE MONTH(created_at) = MONTH(NOW() - INTERVAL 1 MONTH) AND YEAR(created_at) = YEAR(NOW() - INTERVAL 1 MONTH)';
        $filterDisplayName = 'Last Month';
        break;
    case 'last_3_months':
        $whereClause = 'WHERE created_at >= DATE_SUB(NOW(), INTERVAL 3 MONTH)';
        $filterDisplayName = 'Last 3 Months';
        break;
    default:
        $whereClause = '';
        $filterDisplayName = 'All Time';
}

// Fetch interested users data
try {
    $checkTable = $pdo->query("SHOW TABLES LIKE 'official_contacts'");
    $tableExists = $checkTable->rowCount() > 0;
    
    if ($tableExists) {
        $contactQuery = "SELECT * FROM official_contacts $whereClause ORDER BY created_at DESC";
        $contactStmt = $pdo->prepare($contactQuery);
        $contactStmt->execute($params);
        $interestedUsers = $contactStmt->fetchAll(PDO::FETCH_ASSOC);
    } else {
        $interestedUsers = [];
    }
} catch (PDOException $e) {
    $interestedUsers = [];
}

// Set headers for PDF download
header('Content-Type: text/html; charset=utf-8');

// Generate current date and time
$reportDate = date('F j, Y g:i A');
$filename = "Interested_Users_Report_" . str_replace(' ', '_', $filterDisplayName) . "_" . date('Y-m-d_H-i-s');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interested Users Report - <?php echo $filterDisplayName; ?></title>
    <style>
        @page {
            margin: 20mm;
            size: A4;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            color: #333;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #5883d9ff;
        }
        
        .header img {
            max-height: 60px;
            max-width: 200px;
            margin-bottom: 10px;
        }
        
        .header h1 {
            color: #5883d9ff;
            font-size: 24px;
            margin-bottom: 5px;
        }
        
        .header h2 {
            color: #666;
            font-size: 18px;
            font-weight: normal;
            margin-bottom: 10px;
        }
        
        .report-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 5px;
        }
        
        .report-info div {
            flex: 1;
        }
        
        .report-info strong {
            color: #5883d9ff;
        }
        
        .summary {
            margin-bottom: 30px;
            padding: 15px;
            background: #e3f2fd;
            border-left: 4px solid #5883d9ff;
            border-radius: 5px;
        }
        
        .summary h3 {
            color: #5883d9ff;
            margin-bottom: 10px;
        }
        
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        
        .data-table th,
        .data-table td {
            padding: 8px;
            text-align: left;
            border: 1px solid #ddd;
            vertical-align: top;
        }
        
        .data-table th {
            background: #5883d9ff;
            color: white;
            font-weight: bold;
            font-size: 11px;
        }
        
        .data-table td {
            font-size: 10px;
        }
        
        .data-table tr:nth-child(even) {
            background: #f9f9f9;
        }
        
        .product-info {
            background: #e8f5e8;
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 9px;
            display: inline-block;
        }
        
        .message-cell {
            max-width: 150px;
            word-wrap: break-word;
            word-break: break-word;
        }
        
        .footer {
            margin-top: 50px;
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 10px;
            color: #666;
        }
        
        .no-data {
            text-align: center;
            padding: 40px;
            color: #666;
            font-style: italic;
        }
        
        .contact-info {
            color: #5883d9ff;
            text-decoration: none;
        }
        
        .print-controls {
            margin-bottom: 20px;
            text-align: center;
        }
        
        .print-btn {
            background: #5883d9ff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            margin: 0 10px;
        }
        
        .print-btn:hover {
            background: #4169b3;
        }
        
        /* Responsive Design for Mobile and Tablets */
        @media screen and (max-width: 1024px) {
            body {
                padding: 10px;
                font-size: 14px;
            }
            
            .header h1 {
                font-size: 20px;
            }
            
            .header h2 {
                font-size: 16px;
            }
            
            .header img {
                max-height: 50px;
            }
            
            .print-btn {
                padding: 8px 16px;
                font-size: 12px;
                margin: 5px;
            }
        }
        
        @media screen and (max-width: 768px) {
            body {
                padding: 5px;
                font-size: 13px;
            }
            
            .header {
                margin-bottom: 20px;
                padding-bottom: 15px;
            }
            
            .header h1 {
                font-size: 18px;
                margin-bottom: 3px;
            }
            
            .header h2 {
                font-size: 14px;
            }
            
            .header img {
                max-height: 40px;
                margin-bottom: 8px;
            }
            
            .report-info {
                flex-direction: column;
                gap: 10px;
                padding: 15px;
            }
            
            .report-info div {
                text-align: center;
                padding: 5px;
                background: white;
                border-radius: 3px;
                border: 1px solid #e0e0e0;
            }
            
            .summary {
                margin-bottom: 20px;
                padding: 10px;
                font-size: 12px;
            }
            
            .summary h3 {
                font-size: 14px;
            }
            
            .data-table {
                font-size: 9px;
                margin-bottom: 20px;
            }
            
            .data-table th,
            .data-table td {
                padding: 4px 2px;
                font-size: 8px;
            }
            
            .data-table th {
                font-size: 8px;
            }
            
            .message-cell {
                max-width: 80px;
                font-size: 7px;
            }
            
            .product-info {
                font-size: 7px;
                padding: 1px 3px;
            }
            
            .footer {
                margin-top: 30px;
                font-size: 8px;
                line-height: 1.3;
            }
            
            .print-controls {
                margin-bottom: 15px;
            }
            
            .print-btn {
                display: block;
                width: 100%;
                margin: 5px 0;
                padding: 12px;
                font-size: 14px;
            }
        }
        
        @media screen and (max-width: 480px) {
            body {
                font-size: 12px;
            }
            
            .header h1 {
                font-size: 16px;
            }
            
            .header h2 {
                font-size: 12px;
            }
            
            .header img {
                max-height: 35px;
            }
            
            .report-info {
                text-align: center;
            }
            
            .report-info strong {
                display: block;
                margin-bottom: 2px;
            }
            
            .data-table {
                display: block;
                overflow-x: auto;
                white-space: nowrap;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            
            .data-table thead,
            .data-table tbody,
            .data-table th,
            .data-table td,
            .data-table tr {
                display: block;
            }
            
            .data-table thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px;
            }
            
            .data-table tr {
                border: 1px solid #ccc;
                margin-bottom: 10px;
                padding: 10px;
                border-radius: 5px;
                background: #f9f9f9;
            }
            
            .data-table td {
                border: none;
                padding: 5px 0;
                text-align: left;
                font-size: 10px;
                word-wrap: break-word;
                white-space: normal;
            }
            
            .data-table td:before {
                content: attr(data-label) ": ";
                font-weight: bold;
                color: #5883d9ff;
                display: inline-block;
                width: 80px;
                margin-right: 10px;
            }
            
            .message-cell {
                max-width: none;
                word-wrap: break-word;
            }
            
            .no-data {
                padding: 20px;
                font-size: 12px;
            }
        }
        
        @media print {
            .print-controls {
                display: none;
            }
            
            body {
                font-size: 11px;
                padding: 0;
            }
            
            .data-table th,
            .data-table td {
                padding: 6px;
            }
            
            .header img {
                max-height: 50px;
            }
        }
    </style>
</head>
<body>
  


    <div class="header">
        <img src="../assets/images/websankapl_logo.png" alt="WebSankalp Technologies" style="height: 60px; margin-bottom: 10px;">
        <h1>WebSankalp Technologies</h1>
        <h2>Interested Users Report</h2>
    </div>
    
    <div class="report-info">
        <div>
            <strong>Report Period:</strong> <?php echo $filterDisplayName; ?>
        </div>
        <div>
            <strong>Generated On:</strong> <?php echo $reportDate; ?>
        </div>
        <div>
            <strong>Total Records:</strong> <?php echo count($interestedUsers); ?>
        </div>
    </div>
    
    <div class="summary">
        <h3>📊 Summary</h3>
        
        <p>This report contains <?php echo count($interestedUsers); ?> interested user record(s) for the period: <strong><?php echo $filterDisplayName; ?></strong></p>
        <p>Generated by: <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong></p>
     <div class="print-controls">
        <button class="print-btn" onclick="window.print()">🖨️ Print Report</button>
        <button class="print-btn" onclick="downloadPDF()">📄 Save as PDF</button>
        <button class="print-btn" onclick="window.close()">❌ Close</button>
    </div>
    </div>
    
    <?php if (!empty($interestedUsers)): ?>
        <table class="data-table">
            <thead>
                <tr>
                    <th style="width: 5%;">ID</th>
                    <th style="width: 15%;">Name</th>
                    <th style="width: 12%;">Phone</th>
                    <th style="width: 18%;">Email</th>
                    <th style="width: 15%;">Product Interest</th>
                    <th style="width: 20%;">Message</th>
                    <th style="width: 15%;">Date & Time</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($interestedUsers as $contact): ?>
                <tr>
                    <td data-label="ID"><?php echo htmlspecialchars($contact['id']); ?></td>
                    <td data-label="Name"><?php echo htmlspecialchars($contact['name']); ?></td>
                    <td data-label="Phone" class="contact-info"><?php echo htmlspecialchars($contact['phone']); ?></td>
                    <td data-label="Email" class="contact-info"><?php echo htmlspecialchars($contact['email']); ?></td>
                    <td data-label="Product Interest">
                        <?php if (!empty($contact['product_info'])): ?>
                            <span class="product-info"><?php echo htmlspecialchars($contact['product_info']); ?></span>
                        <?php else: ?>
                            <em>General Inquiry</em>
                        <?php endif; ?>
                    </td>
                    <td data-label="Message" class="message-cell">
                        <?php echo htmlspecialchars($contact['message'] ?? 'No message provided'); ?>
                    </td>
                    <td data-label="Date & Time"><?php echo date('M j, Y g:i A', strtotime($contact['created_at'])); ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>


            
        </table>
    <?php else: ?>
        <div class="no-data">
            <h3>No Data Found</h3>
            <p>No interested users found for the selected period: <strong><?php echo $filterDisplayName; ?></strong></p>
        </div>
    <?php endif; ?>

      
    
    <div class="footer">
        <p><strong>WebSankalp Technologies</strong> | Customer Relationship Management System</p>
        <p>E-104, Savali Homes, Survey No 153, Uruli Devachi, Pune - 412308</p>
        <p>📞 09326825895 / 08007226877 | ✉️ info@websankalp.com</p>
        <p>Report generated on <?php echo $reportDate; ?> | Confidential Document</p>
    </div>

    <script>
        function downloadPDF() {
            // Change title for PDF filename
            document.title = '<?php echo $filename; ?>';
            window.print();
        }
        
        // Auto-focus for better UX
        window.addEventListener('load', function() {
            document.body.focus();
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                window.print();
            }
            if (e.key === 'Escape') {
                window.close();
            }
        });
    </script>
</body>
</html>