<?php
require_once 'config.php';

if (!isset($_GET['id']) || empty($_GET['id'])) {
    die('Quiz ID is required');
}

$quizId = (int)$_GET['id'];

try {
    $stmt = $pdo->prepare("SELECT * FROM quiz_responses WHERE id = ?");
    $stmt->execute([$quizId]);
    $quiz = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$quiz) {
        die('Quiz not found');
    }
} catch (PDOException $e) {
    die('Database error: ' . $e->getMessage());
}

// Set headers for HTML display (will be converted to PDF by browser)
header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Response Report - <?php echo htmlspecialchars($quiz['name']); ?></title>
    <style>
        @page {
            size: A4;
            margin: 20mm;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
        }
        
        .container {
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }
        
        .header {
            background: linear-gradient(135deg, #5883d9, #4a70c6);
            color: white;
            padding: 30px;
            text-align: center;
            margin-bottom: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(88, 131, 217, 0.3);
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: bold;
        }
        
        .header h2 {
            font-size: 18px;
            font-weight: normal;
            opacity: 0.9;
        }
        
        .info-card {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 30px;
            border-left: 5px solid #5883d9;
        }
        
        .info-card h3 {
            color: #5883d9;
            font-size: 18px;
            margin-bottom: 15px;
            border-bottom: 2px solid #e9ecef;
            padding-bottom: 8px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .info-item {
            display: flex;
            flex-direction: column;
        }
        
        .info-label {
            font-weight: bold;
            color: #495057;
            font-size: 14px;
            margin-bottom: 5px;
        }
        
        .info-value {
            color: #333;
            font-size: 16px;
            padding: 8px 12px;
            background: white;
            border-radius: 5px;
            border: 1px solid #dee2e6;
        }
        
        .responses-section {
            margin-bottom: 30px;
        }
        
        .section-title {
            background: #5883d9;
            color: white;
            padding: 15px 20px;
            font-size: 20px;
            font-weight: bold;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .response-item {
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }
        
        .response-item:hover {
            transform: translateY(-2px);
        }
        
        .question-number {
            background: #5883d9;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
            font-size: 14px;
        }
        
        .question-text {
            font-weight: bold;
            color: #495057;
            font-size: 16px;
            margin-bottom: 12px;
            line-height: 1.5;
        }
        
        .answer-text {
            background: linear-gradient(135deg, #d4edda, #c3e6cb);
            color: #155724;
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 15px;
            border-left: 4px solid #28a745;
            margin-left: 45px;
            font-weight: 500;
        }
        
        .footer {
            background: #f8f9fa;
            border-top: 3px solid #5883d9;
            padding: 25px;
            text-align: center;
            margin-top: 40px;
            border-radius: 10px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        
        .footer p {
            margin: 5px 0;
            color: #666;
        }
        
        .footer .company-name {
            font-size: 18px;
            font-weight: bold;
            color: #5883d9;
            margin-bottom: 10px;
        }
        
        .footer .generated-date {
            font-size: 14px;
            color: #495057;
            font-weight: bold;
        }
        
        .footer .contact-info {
            font-size: 12px;
            color: #666;
            margin-top: 10px;
        }
        
        @media print {
            body {
                background: white !important;
                -webkit-print-color-adjust: exact;
            }
            
            .container {
                max-width: none;
                margin: 0;
                padding: 0;
            }
            
            .response-item {
                break-inside: avoid;
                page-break-inside: avoid;
            }
            
            .header, .info-card, .response-item {
                box-shadow: none;
            }
        }
        
        .logo-container {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .logo-container img {
            max-height: 60px;
            width: auto;
            margin-bottom: 10px;
        }
        
        @media screen {
            .action-buttons {
                position: fixed;
                top: 20px;
                right: 20px;
                display: flex;
                gap: 10px;
                z-index: 1000;
            }
            
            .print-button {
                background: #28a745;
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                font-weight: bold;
                box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
                transition: all 0.3s ease;
            }
            
            .print-button:hover {
                background: #218838;
                transform: translateY(-2px);
            }
            
            .close-button {
                background: #dc3545;
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                font-weight: bold;
                box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
                transition: all 0.3s ease;
            }
            
            .close-button:hover {
                background: #c82333;
                transform: translateY(-2px);
            }
        }
        
        @media print {
            .action-buttons {
                display: none !important;
            }
        }
    </style>
</head>
<body>
    <div class="action-buttons">
        <button class="print-button" onclick="window.print()">🖨️ Print/Save as PDF</button>
        <button class="close-button" onclick="closePDFWindow()">❌ Close</button>
    </div>
    
    <div class="container">
        <div class="header">
            <div class="logo-container">
                <img src="../assets/images/websankapl_logo.png" alt="WebSankalp Technologies" onerror="this.style.display='none'">
            </div>
          
            <h2>Product Quiz Response Report</h2>
        </div>
        
        <div class="info-card">
            <h3>📋 Customer Information</h3>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Customer Name</span>
                    <span class="info-value"><?php echo htmlspecialchars($quiz['name']); ?></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Mobile Number</span>
                    <span class="info-value"><?php echo htmlspecialchars($quiz['mobile']); ?></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Quiz Category</span>
                    <span class="info-value"><?php echo htmlspecialchars($quiz['quiz_type']); ?></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Response Date</span>
                    <span class="info-value"><?php echo date('F j, Y g:i A', strtotime($quiz['created_at'])); ?></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Quiz Title</span>
                    <span class="info-value"><?php echo htmlspecialchars($quiz['quiz_title']); ?></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Response ID</span>
                    <span class="info-value">#<?php echo $quiz['id']; ?></span>
                </div>
            </div>
        </div>
        
        <div class="responses-section">
            <div class="section-title">
                💬 Quiz Questions & Customer Responses
            </div>
            
            <?php
            $responseCount = 0;
            for ($i = 1; $i <= 9; $i++) {
                $question = $quiz["question_$i"];
                $answer = $quiz["answer_$i"];
                
                if (!empty($question) && !empty($answer)) {
                    $responseCount++;
                    ?>
                    <div class="response-item">
                        <div class="question-text">
                            <span class="question-number"><?php echo $responseCount; ?></span>
                            <?php echo htmlspecialchars($question); ?>
                        </div>
                        <div class="answer-text">
                            <strong>Customer's Answer:</strong> <?php echo htmlspecialchars($answer); ?>
                        </div>
                    </div>
                    <?php
                }
            }
            ?>
        </div>
        
        <div class="footer">
            <div class="footer-content">
                <p class="company-name">WebSankalp Technologies</p>
                <p class="generated-date">Report Generated: <?php echo date('F j, Y \a\t g:i A'); ?></p>
                <p>Product Consultation Quiz Response Analysis</p>
                <p class="contact-info">
                    📞 +91 9326825895 / 08007226877 | 
                    📧 info@websankalp.com | 
                    🌐 www.websankalp.com
                </p>
            </div>
        </div>
    </div>
    
    <script>
        // Auto-print functionality for seamless PDF generation
        document.addEventListener('DOMContentLoaded', function() {
            // Check if this is accessed for PDF generation
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('auto_print') === '1') {
                setTimeout(function() {
                    window.print();
                }, 1000);
            }
        });
        
        // Enhanced print styles
        window.addEventListener('beforeprint', function() {
            document.querySelector('.print-button').style.display = 'none';
        });
        
        window.addEventListener('afterprint', function() {
            document.querySelector('.action-buttons').style.display = 'flex';
        });
        
        // Close PDF window function
        function closePDFWindow() {
            // Try to close the window
            if (window.opener) {
                // If opened from another window, close this window and focus parent
                window.opener.focus();
                window.close();
            } else {
                // If opened directly, redirect to dashboard
                window.location.href = '../admin/dashboard.php#quiz-tab';
            }
        }
        
        // Enhanced print styles
        window.addEventListener('beforeprint', function() {
            document.querySelector('.action-buttons').style.display = 'none';
        });
    </script>
</body>
</html>