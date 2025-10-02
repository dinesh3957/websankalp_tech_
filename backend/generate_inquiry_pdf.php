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

// Fetch product inquiries data
try {
    $checkTable = $pdo->query("SHOW TABLES LIKE 'product_inquiries'");
    $tableExists = $checkTable->rowCount() > 0;
    
    if ($tableExists) {
        $inquiryQuery = "SELECT * FROM product_inquiries $whereClause ORDER BY created_at DESC";
        $inquiries = $pdo->query($inquiryQuery)->fetchAll(PDO::FETCH_ASSOC);
    } else {
        $inquiries = [];
    }
} catch (Exception $e) {
    $inquiries = [];
}

// Set headers for PDF download
header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Inquiries Report - <?php echo $filterDisplayName; ?></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            color: #333;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #007bff;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .company-logo {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            margin-bottom: 5px;
        }
        .report-title {
            font-size: 18px;
            margin: 10px 0;
        }
        .report-info {
            font-size: 12px;
            color: #666;
            margin: 5px 0;
        }
        .stats {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .inquiry-item {
            border: 1px solid #ddd;
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 5px;
            page-break-inside: avoid;
        }
        .inquiry-header {
            background: #007bff;
            color: white;
            padding: 8px 12px;
            margin: -15px -15px 10px -15px;
            font-weight: bold;
        }
        .inquiry-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin: 10px 0;
        }
        .detail-item {
            margin-bottom: 5px;
        }
        .detail-label {
            font-weight: bold;
            color: #555;
        }
        .detail-value {
            color: #333;
        }
        .no-data {
            text-align: center;
            color: #666;
            font-style: italic;
            padding: 40px;
        }
        @media print {
            body { margin: 0; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="company-logo">WebSankalp Technologies</div>
        <div class="report-title">Product Inquiries Report - <?php echo $filterDisplayName; ?></div>
        <div class="report-info">Generated on: <?php echo date('F j, Y \a\t g:i A'); ?></div>
        <div class="report-info">Total Inquiries: <?php echo count($inquiries); ?></div>
    </div>

    <div class="stats">
        <h3>Report Summary</h3>
        <p><strong>Period:</strong> <?php echo $filterDisplayName; ?></p>
        <p><strong>Total Product Inquiries:</strong> <?php echo count($inquiries); ?></p>
        <p><strong>Report Generated:</strong> <?php echo date('F j, Y \a\t g:i A'); ?></p>
    </div>

    <?php if (empty($inquiries)): ?>
        <div class="no-data">
            <h3>No Product Inquiries Found</h3>
            <p>No product inquiries were found for the selected period: <?php echo $filterDisplayName; ?></p>
        </div>
    <?php else: ?>
        <?php foreach ($inquiries as $index => $inquiry): ?>
            <div class="inquiry-item">
                <div class="inquiry-header">
                    Inquiry #<?php echo $index + 1; ?> - <?php echo date('M j, Y', strtotime($inquiry['created_at'])); ?>
                </div>
                
                <div class="inquiry-details">
                    <div class="detail-item">
                        <div class="detail-label">Product Type:</div>
                        <div class="detail-value"><?php echo htmlspecialchars($inquiry['product_type'] ?? 'Not specified'); ?></div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Application Area:</div>
                        <div class="detail-value"><?php echo htmlspecialchars($inquiry['application_area'] ?? 'Not specified'); ?></div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Environment:</div>
                        <div class="detail-value"><?php echo htmlspecialchars($inquiry['environment'] ?? 'Not specified'); ?></div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Scanning Distance:</div>
                        <div class="detail-value"><?php echo htmlspecialchars($inquiry['scanning_distance'] ?? 'Not specified'); ?></div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Budget Range:</div>
                        <div class="detail-value"><?php echo htmlspecialchars($inquiry['budget_range'] ?? 'Not specified'); ?></div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Implementation Timeline:</div>
                        <div class="detail-value"><?php echo htmlspecialchars($inquiry['implementation_timeline'] ?? 'Not specified'); ?></div>
                    </div>
                </div>

                <?php if (!empty($inquiry['company_name']) || !empty($inquiry['contact_person'])): ?>
                <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">
                    <strong>Contact Information:</strong><br>
                    <?php if (!empty($inquiry['company_name'])): ?>
                        Company: <?php echo htmlspecialchars($inquiry['company_name']); ?><br>
                    <?php endif; ?>
                    <?php if (!empty($inquiry['contact_person'])): ?>
                        Contact Person: <?php echo htmlspecialchars($inquiry['contact_person']); ?><br>
                    <?php endif; ?>
                    <?php if (!empty($inquiry['email'])): ?>
                        Email: <?php echo htmlspecialchars($inquiry['email']); ?><br>
                    <?php endif; ?>
                    <?php if (!empty($inquiry['phone'])): ?>
                        Phone: <?php echo htmlspecialchars($inquiry['phone']); ?><br>
                    <?php endif; ?>
                </div>
                <?php endif; ?>

                <?php if (!empty($inquiry['specific_requirements']) || !empty($inquiry['additional_notes'])): ?>
                <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">
                    <?php if (!empty($inquiry['specific_requirements'])): ?>
                        <strong>Specific Requirements:</strong><br>
                        <?php echo nl2br(htmlspecialchars($inquiry['specific_requirements'])); ?><br><br>
                    <?php endif; ?>
                    <?php if (!empty($inquiry['additional_notes'])): ?>
                        <strong>Additional Notes:</strong><br>
                        <?php echo nl2br(htmlspecialchars($inquiry['additional_notes'])); ?>
                    <?php endif; ?>
                </div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>

    <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 15px;">
        <p>WebSankalp Technologies - Product Inquiries Report</p>
        <p>This report contains confidential business information. Please handle with appropriate care.</p>
    </div>

    <script>
        // Auto-print when page loads
        window.onload = function() {
            window.print();
        };
    </script>
</body>
</html>