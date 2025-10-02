<?php
session_start();
require_once '../backend/config.php';

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: login.php');
    exit();
}

// Fetch all admin users
try {
    // First check if 'name' column exists
    $checkColumn = $pdo->query("SHOW COLUMNS FROM admin LIKE 'name'");
    $nameColumnExists = $checkColumn->rowCount() > 0;
    
    if ($nameColumnExists) {
        $stmt = $pdo->prepare("SELECT * FROM admin ORDER BY created_at DESC");
    } else {
        // If name column doesn't exist, select without it and add default name
        $stmt = $pdo->prepare("SELECT id, username, password, created_at, 'Admin User' as name FROM admin ORDER BY created_at DESC");
    }
    
    $stmt->execute();
    $adminUsers = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $adminUsers = [];
    $error_message = 'Error fetching admin users: ' . $e->getMessage();
}

// Handle date filter for interested users
$dateFilter = $_GET['date_filter'] ?? 'all';
$whereClause = '';
$params = [];

switch ($dateFilter) {
    case 'today':
        $whereClause = 'WHERE DATE(created_at) = CURDATE()';
        break;
    case 'this_week':
        $whereClause = 'WHERE created_at >= DATE_SUB(NOW(), INTERVAL 1 WEEK)';
        break;
    case 'this_month':
        $whereClause = 'WHERE MONTH(created_at) = MONTH(NOW()) AND YEAR(created_at) = YEAR(NOW())';
        break;
    case 'last_month':
        $whereClause = 'WHERE MONTH(created_at) = MONTH(NOW() - INTERVAL 1 MONTH) AND YEAR(created_at) = YEAR(NOW() - INTERVAL 1 MONTH)';
        break;
    case 'last_3_months':
        $whereClause = 'WHERE created_at >= DATE_SUB(NOW(), INTERVAL 3 MONTH)';
        break;
    default:
        $whereClause = '';
}

// Fetch interested users (official contacts)
try {
    // Check if official_contacts table exists
    $checkTable = $pdo->query("SHOW TABLES LIKE 'official_contacts'");
    $tableExists = $checkTable->rowCount() > 0;
    
    if ($tableExists) {
        $contactQuery = "SELECT * FROM official_contacts $whereClause ORDER BY created_at DESC";
        $contactStmt = $pdo->prepare($contactQuery);
        $contactStmt->execute($params);
        $interestedUsers = $contactStmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Get total count
        $countQuery = "SELECT COUNT(*) as total FROM official_contacts $whereClause";
        $countStmt = $pdo->prepare($countQuery);
        $countStmt->execute($params);
        $totalContacts = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];
    } else {
        $interestedUsers = [];
        $totalContacts = 0;
        $contact_error = 'Official contacts table not found. Please run the SQL command first.';
    }
} catch (PDOException $e) {
    $interestedUsers = [];
    $totalContacts = 0;
    $contact_error = 'Error fetching contact data: ' . $e->getMessage();
}

// Fetch quiz responses
try {
    $checkQuizTable = $pdo->query("SHOW TABLES LIKE 'quiz_responses'");
    $quizTableExists = $checkQuizTable->rowCount() > 0;
    
    if ($quizTableExists) {
        $quizQuery = "SELECT * FROM quiz_responses $whereClause ORDER BY created_at DESC";
        $quizStmt = $pdo->prepare($quizQuery);
        $quizStmt->execute($params);
        $quizResponses = $quizStmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Get total count
        $quizCountQuery = "SELECT COUNT(*) as total FROM quiz_responses $whereClause";
        $quizCountStmt = $pdo->prepare($quizCountQuery);
        $quizCountStmt->execute($params);
        $totalQuizResponses = $quizCountStmt->fetch(PDO::FETCH_ASSOC)['total'];
    } else {
        $quizResponses = [];
        $totalQuizResponses = 0;
        $quiz_error = 'Quiz responses table not found. Please run the SQL command first.';
    }
} catch (PDOException $e) {
    $quizResponses = [];
    $totalQuizResponses = 0;
    $quiz_error = 'Error fetching quiz data: ' . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - WebSankalp</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            margin: 0;
            padding: 0;
            padding-top: 70px;
            min-height: 100vh;
        }

        .main-container {
            display: flex;
            min-height: calc(100vh - 70px);
            gap: 0;
        }

        .navbar {
            background: #5883d9ff;
            color: white;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1001;
            height: 70px;
            box-sizing: border-box;
        }

        .navbar h1 {
            font-size: 24px;
        }

        .navbar-logo {
            height: 40px;
            margin-right: 15px;
            transition: transform 0.2s ease;
        }

        .navbar-logo:hover {
            transform: scale(1.05);
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .username {
            font-size: 16px;
            font-weight: bold;
        }

        .logout-btn {
            background: #ff4757;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            transition: background 0.3s;
        }

        .logout-btn:hover {
            background: #ff3742;
        }

        .sidebar {
            width: 280px;
            background: white;
            box-shadow: 2px 0 4px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            position: sticky;
            top: 0;
            height: calc(100vh - 70px);
            overflow-y: auto;
        }

        .sidebar-header {
            padding: 20px;
            border-bottom: 1px solid #e0e0e0;
            background: linear-gradient(135deg, #5883d9ff, #4169b3);
            color: white;
        }

        .sidebar-header h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
        }

        .sidebar-menu {
            flex: 1;
            padding: 0;
        }

        .sidebar-tab {
            display: block;
            width: 100%;
            padding: 20px 25px;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            color: #666;
            text-align: left;
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            position: relative;
        }

        .sidebar-tab:hover {
            background: #f8f9fa;
            color: #333;
        }

        .sidebar-tab.active {
            color: #5883d9ff;
            background: #f8f9ff;
            border-left: 4px solid #5883d9ff;
        }

        .sidebar-tab .tab-icon {
            margin-right: 12px;
            font-size: 18px;
        }

        .sidebar-tab .tab-count {
            float: right;
            background: #e0e0e0;
            color: #666;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
        }

        .sidebar-tab.active .tab-count {
            background: #5883d9ff;
            color: white;
        }

        .dashboard-content {
            flex: 1;
            padding: 30px;
            overflow-y: auto;
        }

        .mobile-menu-toggle {
            display: none;
            background: #5883d9ff;
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 18px;
            border-radius: 5px;
            margin-right: 15px;
        }

        .welcome-card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }

        .welcome-card h2 {
            color: #333;
            margin-bottom: 10px;
        }

        .welcome-card p {
            color: #666;
            font-size: 16px;
        }

        .admin-section {
            background: white;
            margin-top: 30px;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 15px;
        }

        .section-header h3 {
            color: #333;
            font-size: 22px;
        }

        .add-admin-btn {
            background: #28a745;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            transition: background 0.3s;
        }

        .add-admin-btn:hover {
            background: #218838;
        }

        .pdf-btn {
            background: #dc3545;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            transition: background 0.3s;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .pdf-btn:hover {
            background: #c82333;
        }

        .admin-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .admin-table th,
        .admin-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        .admin-table th {
            background: #f8f9fa;
            font-weight: bold;
            color: #333;
        }

        .admin-table tr:hover {
            background: #f5f5f5;
        }

        .admin-table .password-field {
            font-family: monospace;
            background: #f0f0f0;
            padding: 4px 8px;
            border-radius: 3px;
            font-size: 12px;
        }

        .no-data {
            text-align: center;
            color: #666;
            padding: 40px;
            font-style: italic;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: linear-gradient(135deg, #5883d9ff, #4169b3);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }

        .stat-card h4 {
            font-size: 14px;
            margin-bottom: 5px;
            opacity: 0.9;
        }

        .stat-card .stat-number {
            font-size: 32px;
            font-weight: bold;
        }

        .date-filter {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }

        .date-filter select {
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background: white;
            font-size: 14px;
        }

        .contact-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .contact-table th,
        .contact-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        .contact-table th {
            background: #f8f9fa;
            font-weight: bold;
            color: #333;
        }

        .contact-table tr:hover {
            background: #f5f5f5;
        }

        .message-cell {
            max-width: 250px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .message-cell:hover {
            white-space: normal;
            word-wrap: break-word;
        }

        .product-info {
            font-size: 12px;
            color: #666;
            background: #f0f0f0;
            padding: 2px 6px;
            border-radius: 3px;
        }

        .stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
        }

        .tab-content {
            display: none;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 30px;
            margin-bottom: 20px;
        }

        .tab-content.active {
            display: block;
        }

        /* Quiz Modal Styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 800px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            position: absolute;
            top: 15px;
            right: 20px;
        }

        .close:hover {
            color: #333;
        }

        .quiz-details h3 {
            color: #5883d9;
            margin-bottom: 20px;
            border-bottom: 2px solid #e9ecef;
            padding-bottom: 10px;
        }

        .quiz-info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .quiz-info p {
            margin: 8px 0;
        }

        .response-item {
            background: white;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
        }

        .response-item .question {
            color: #495057;
            margin-bottom: 8px;
            font-weight: 600;
        }

        .response-item .answer {
            color: #28a745;
            margin: 0;
            padding-left: 20px;
        }

        /* Action Buttons */
        .view-btn {
            background: #17a2b8;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        }

        .view-btn:hover {
            background: #138496;
        }

        .export-btn {
            background: #28a745;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        }

        .export-btn:hover {
            background: #218838;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
            .main-container {
                flex-direction: column;
            }

            .mobile-menu-toggle {
                display: block;
            }

            .sidebar {
                position: fixed;
                top: 70px;
                left: -280px;
                width: 280px;
                height: calc(100vh - 70px);
                z-index: 1000;
                transition: left 0.3s ease;
                box-shadow: 2px 0 10px rgba(0,0,0,0.3);
            }

            .sidebar.open {
                left: 0;
            }

            .sidebar-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 999;
            }

            .sidebar-overlay.active {
                display: block;
            }

            .dashboard-content {
                padding: 20px 15px;
                width: 100%;
            }

            .stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 15px;
            }

            .stat-card {
                padding: 15px;
            }

            .stat-card .stat-number {
                font-size: 24px;
            }

            .tab-content {
                padding: 20px 15px;
            }

            .admin-table,
            .contact-table {
                font-size: 12px;
            }

            .admin-table th,
            .admin-table td,
            .contact-table th,
            .contact-table td {
                padding: 8px 4px;
            }

            .password-field {
                font-size: 10px;
                padding: 2px 4px;
            }

            .message-cell {
                max-width: 120px;
            }

            .product-info {
                font-size: 10px;
                padding: 1px 4px;
            }

            .section-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }

            .date-filter {
                width: 100%;
                justify-content: flex-start;
            }

            .date-filter select {
                flex: 1;
                max-width: 200px;
            }

            .sidebar-tab {
                padding: 18px 25px;
                font-size: 15px;
            }
        }

        @media (max-width: 480px) {
            .stats-grid {
                grid-template-columns: 1fr !important;
            }

            .dashboard-content {
                padding: 15px 10px;
            }

            .navbar {
                padding: 10px 15px;
            }

            .navbar h1 {
                font-size: 16px;
            }

            .navbar-logo {
                height: 32px;
                margin-right: 10px;
            }

            .username {
                font-size: 14px;
            }

            .logout-btn {
                padding: 6px 12px;
                font-size: 12px;
            }

            .sidebar {
                width: 260px;
                left: -260px;
            }

            .sidebar-tab {
                padding: 15px 20px;
                font-size: 14px;
            }

            .sidebar-tab .tab-icon {
                margin-right: 8px;
                font-size: 16px;
            }

            /* Make tables horizontally scrollable on very small screens */
            .table-wrapper {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
            }

            .admin-table,
            .contact-table {
                min-width: 600px;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div style="display: flex; align-items: center;">
            <button class="mobile-menu-toggle" onclick="toggleSidebar()">☰</button>
            <img src="../assets/images/websankapl_logo.png" alt="WebSankalp Logo" class="navbar-logo">
        
        </div>
        <div class="user-info">
            <span class="username">Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</span>
            <a href="logout.php" class="logout-btn">Logout</a>
        </div>
    </nav>

    <div class="sidebar-overlay" onclick="closeSidebar()"></div>

    <div class="main-container">
        <!-- Left Sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h3>📊 Dashboard Menu</h3>
            </div>
            <div class="sidebar-menu">
                <button class="sidebar-tab active" onclick="switchTab('admin-tab', this)">
                    <span class="tab-icon">👥</span>
                    Admin Users
                    <span class="tab-count"><?php echo count($adminUsers); ?></span>
                </button>
                <button class="sidebar-tab" onclick="switchTab('contacts-tab', this)">
                    <span class="tab-icon">📞</span>
                    Interested Users
                    <span class="tab-count"><?php echo $totalContacts; ?></span>
                </button>
                <button class="sidebar-tab" onclick="switchTab('quiz-tab', this)">
                    <span class="tab-icon">❓</span>
                    Quiz Responses
                    <span class="tab-count"><?php echo $totalQuizResponses ?? 0; ?></span>
                </button>
            </div>
        </div>

        <!-- Main Content -->
        <div class="dashboard-content">
        <div class="welcome-card">
            <h2>Welcome to Admin Dashboard</h2>
            <p>You are successfully logged in to the WebSankalp admin panel.</p>
        </div>

        <!-- Statistics -->
        <div class="stats-grid">
            <div class="stat-card">
                <h4>Total Admin Users</h4>
                <div class="stat-number"><?php echo count($adminUsers); ?></div>
            </div>
            <div class="stat-card">
                <h4>Interested Users</h4>
                <div class="stat-number"><?php echo $totalContacts; ?></div>
            </div>
            <div class="stat-card">
                <h4>Active Sessions</h4>
                <div class="stat-number">1</div>
            </div>
            <div class="stat-card">
                <h4>System Status</h4>
                <div class="stat-number">✓</div>
            </div>
        </div>

            <!-- Content will be dynamically loaded based on sidebar selection -->

        <!-- Admin Management Tab -->
        <div id="admin-tab" class="tab-content active">
            <div class="section-header">
                <h3>Admin Users Management</h3>
                <a href="add_admin.php" class="add-admin-btn">+ Add New Admin</a>
            </div>
            
            <?php if (isset($error_message)): ?>
                <div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 5px; margin-bottom: 20px;">
                    <?php echo htmlspecialchars($error_message); ?>
                </div>
            <?php endif; ?>

            <?php if (!empty($adminUsers)): ?>
                <div class="table-wrapper">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Created At</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($adminUsers as $admin): ?>
                            <tr>
                                <td><?php echo htmlspecialchars($admin['id']); ?></td>
                                <td><?php echo htmlspecialchars($admin['name'] ?? 'N/A'); ?></td>
                                <td><?php echo htmlspecialchars($admin['username']); ?></td>
                                <td>
                                    <span class="password-field"><?php echo htmlspecialchars($admin['password']); ?></span>
                                </td>
                                <td><?php echo date('M j, Y g:i A', strtotime($admin['created_at'])); ?></td>
                                <td>
                                    <?php if ($admin['username'] === $_SESSION['username']): ?>
                                        <span style="color: #28a745; font-weight: bold;">● Active (You)</span>
                                    <?php else: ?>
                                        <span style="color: #6c757d;">● Inactive</span>
                                    <?php endif; ?>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="no-data">
                    <p>No admin users found. <a href="add_admin.php">Add the first admin user</a></p>
                </div>
            <?php endif; ?>
        </div>

        <!-- Interested Users Tab -->
        <div id="contacts-tab" class="tab-content">
            <div class="section-header">
                <h3>Interested Users</h3>
                <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                    <div class="date-filter">
                        <label for="date-filter">Filter by:</label>
                        <select id="date-filter" onchange="filterByDate()">
                            <option value="all" <?php echo $dateFilter === 'all' ? 'selected' : ''; ?>>All Time</option>
                            <option value="today" <?php echo $dateFilter === 'today' ? 'selected' : ''; ?>>Today</option>
                            <option value="this_week" <?php echo $dateFilter === 'this_week' ? 'selected' : ''; ?>>This Week</option>
                            <option value="this_month" <?php echo $dateFilter === 'this_month' ? 'selected' : ''; ?>>This Month</option>
                            <option value="last_month" <?php echo $dateFilter === 'last_month' ? 'selected' : ''; ?>>Last Month</option>
                            <option value="last_3_months" <?php echo $dateFilter === 'last_3_months' ? 'selected' : ''; ?>>Last 3 Months</option>
                        </select>
                    </div>
                    <button onclick="generatePDF('<?php echo $dateFilter; ?>')" class="pdf-btn" title="Download PDF Report">
                        📄 Export PDF
                    </button>
                </div>
            </div>
            
            <?php if (isset($contact_error)): ?>
                <div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 5px; margin-bottom: 20px;">
                    <?php echo htmlspecialchars($contact_error); ?>
                </div>
            <?php endif; ?>

            <?php if (!empty($interestedUsers)): ?>
                <p style="color: #666; margin-bottom: 15px;">
                    Showing <?php echo count($interestedUsers); ?> contact(s) 
                    <?php if ($dateFilter !== 'all'): ?>
                        for <?php echo str_replace('_', ' ', $dateFilter); ?>
                    <?php endif; ?>
                </p>
                
                <div class="table-wrapper">
                    <table class="contact-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Product Interest</th>
                                <th>Message</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($interestedUsers as $contact): ?>
                            <tr>
                                <td><?php echo htmlspecialchars($contact['id']); ?></td>
                                <td><?php echo htmlspecialchars($contact['name']); ?></td>
                                <td>
                                    <a href="tel:<?php echo htmlspecialchars($contact['phone']); ?>">
                                        <?php echo htmlspecialchars($contact['phone']); ?>
                                    </a>
                                </td>
                                <td>
                                    <a href="mailto:<?php echo htmlspecialchars($contact['email']); ?>">
                                        <?php echo htmlspecialchars($contact['email']); ?>
                                    </a>
                                </td>
                                <td>
                                    <?php if (!empty($contact['product_info'])): ?>
                                        <span class="product-info"><?php echo htmlspecialchars($contact['product_info']); ?></span>
                                    <?php else: ?>
                                        <span style="color: #999;">General Inquiry</span>
                                    <?php endif; ?>
                                </td>
                                <td class="message-cell" title="<?php echo htmlspecialchars($contact['message']); ?>">
                                    <?php echo htmlspecialchars($contact['message'] ?? 'No message'); ?>
                                </td>
                                <td><?php echo date('M j, Y g:i A', strtotime($contact['created_at'])); ?></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="no-data">
                    <p>No interested users found 
                        <?php if ($dateFilter !== 'all'): ?>
                            for <?php echo str_replace('_', ' ', $dateFilter); ?>
                        <?php endif; ?>
                    </p>
                </div>
            <?php endif; ?>
        </div>

        <!-- Quiz Responses Tab -->
        <div id="quiz-tab" class="tab-content">
            <div class="section-header">
                <h3>Quiz Responses</h3>
                <div class="filter-section">
                    <label for="quiz-filter">Filter by:</label>
                    <select id="quiz-filter" onchange="filterQuizByDate()">
                        <option value="all" <?php echo $dateFilter === 'all' ? 'selected' : ''; ?>>All Time</option>
                        <option value="today" <?php echo $dateFilter === 'today' ? 'selected' : ''; ?>>Today</option>
                        <option value="this_week" <?php echo $dateFilter === 'this_week' ? 'selected' : ''; ?>>This Week</option>
                        <option value="this_month" <?php echo $dateFilter === 'this_month' ? 'selected' : ''; ?>>This Month</option>
                        <option value="last_month" <?php echo $dateFilter === 'last_month' ? 'selected' : ''; ?>>Last Month</option>
                        <option value="last_3_months" <?php echo $dateFilter === 'last_3_months' ? 'selected' : ''; ?>>Last 3 Months</option>
                    </select>
                    <span class="total-count">Total: <?php echo $totalQuizResponses; ?> responses</span>
                </div>
            </div>
            
            <?php if (isset($quiz_error)): ?>
                <div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 5px; margin-bottom: 20px;">
                    <?php echo htmlspecialchars($quiz_error); ?>
                </div>
            <?php endif; ?>

            <?php if (!empty($quizResponses)): ?>
                <div class="table-wrapper">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Quiz Type</th>
                                <th>Responses</th>
                                <th>Submitted At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($quizResponses as $response): ?>
                            <tr>
                                <td><?php echo htmlspecialchars($response['id']); ?></td>
                                <td><?php echo htmlspecialchars($response['name']); ?></td>
                                <td><a href="tel:<?php echo htmlspecialchars($response['mobile']); ?>"><?php echo htmlspecialchars($response['mobile']); ?></a></td>
                                <td><?php echo htmlspecialchars($response['quiz_type']); ?></td>
                                <td>
                                    <button onclick="viewQuizDetails(<?php echo $response['id']; ?>)" class="view-btn">View Details</button>
                                </td>
                                <td><?php echo date('M j, Y g:i A', strtotime($response['created_at'])); ?></td>
                                <td>
                                    <button onclick="exportQuizToPDF(<?php echo $response['id']; ?>)" class="export-btn">Export PDF</button>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="no-data">
                    <p>No quiz responses found 
                        <?php if ($dateFilter !== 'all'): ?>
                            for <?php echo str_replace('_', ' ', $dateFilter); ?>
                        <?php endif; ?>
                    </p>
                </div>
            <?php endif; ?>
        </div>

        <!-- Quiz Details Modal -->
        <div id="quizModal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close" onclick="closeQuizModal()">&times;</span>
                <h2>Quiz Response Details</h2>
                <div id="quizDetailsContent">
                    <!-- Quiz details will be loaded here -->
                </div>
            </div>
        </div>
        
        </div> <!-- End dashboard-content -->
    </div> <!-- End main-container -->
    
    <script>
        // Sidebar functionality
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        }

        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }

        // Tab switching functionality
        function switchTab(tabId, buttonElement) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all sidebar tabs
            const sidebarTabs = document.querySelectorAll('.sidebar-tab');
            sidebarTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected tab and activate button
            document.getElementById(tabId).classList.add('active');
            buttonElement.classList.add('active');
            
            // Store active tab in localStorage for persistence
            localStorage.setItem('activeTab', tabId);

            // Close sidebar on mobile after tab selection
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        }
        
        // Date filter functionality
        function filterByDate() {
            const filterValue = document.getElementById('date-filter').value;
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('date_filter', filterValue);
            
            // Preserve active tab
            const activeTab = localStorage.getItem('activeTab');
            if (activeTab) {
                currentUrl.hash = activeTab;
            }
            
            window.location.href = currentUrl.toString();
        }
        
        // PDF generation functionality
        function generatePDF(dateFilter) {
            const pdfUrl = `../backend/generate_pdf.php?date_filter=${dateFilter}`;
            window.open(pdfUrl, '_blank');
        }


        
        // Initialize dashboard on page load
        document.addEventListener('DOMContentLoaded', function() {
            // Check if there's a date filter that should show contacts tab
            const urlParams = new URLSearchParams(window.location.search);
            const dateFilter = urlParams.get('date_filter');
            
            // Check for stored active tab or URL hash
            let activeTab = localStorage.getItem('activeTab');
            if (window.location.hash) {
                activeTab = window.location.hash.substring(1);
            } else if (dateFilter && dateFilter !== 'all') {
                // If there's a date filter, show contacts tab
                activeTab = 'contacts-tab';
            }
            
            // Switch to appropriate tab
            if (activeTab && document.getElementById(activeTab)) {
                const tabButton = document.querySelector(`[onclick="switchTab('${activeTab}', this)"]`);
                if (tabButton) {
                    switchTab(activeTab, tabButton);
                }
            }

            // Handle window resize to manage sidebar behavior
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    closeSidebar(); // Close mobile sidebar when switching to desktop
                }
            });
        });
        
        // Handle responsive table scrolling
        function addTableScrollIndicator() {
            const tableWrappers = document.querySelectorAll('.table-wrapper');
            tableWrappers.forEach(wrapper => {
                const table = wrapper.querySelector('table');
                if (table && table.scrollWidth > wrapper.clientWidth) {
                    wrapper.style.borderRight = '3px solid #5883d9ff';
                    wrapper.title = 'Scroll horizontally to see more columns';
                }
            });
        }
        
        // Add scroll indicators on window resize
        window.addEventListener('resize', addTableScrollIndicator);
        window.addEventListener('load', addTableScrollIndicator);

        // Quiz-specific functions
        function filterQuizByDate() {
            const dateFilter = document.getElementById('quiz-filter').value;
            window.location.href = `dashboard.php?date_filter=${dateFilter}#quiz-tab`;
        }

        function viewQuizDetails(quizId) {
            fetch(`../backend/get_quiz_details.php?id=${quizId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        displayQuizDetails(data.quiz);
                    } else {
                        alert('Error loading quiz details: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Failed to load quiz details');
                });
        }

        function displayQuizDetails(quiz) {
            let content = `
                <div class="quiz-details">
                    <h3>${quiz.quiz_title}</h3>
                    <div class="quiz-info">
                        <p><strong>Name:</strong> ${quiz.name}</p>
                        <p><strong>Mobile:</strong> <a href="tel:${quiz.mobile}">${quiz.mobile}</a></p>
                        <p><strong>Quiz Type:</strong> ${quiz.quiz_type}</p>
                        <p><strong>Submitted:</strong> ${new Date(quiz.created_at).toLocaleString()}</p>
                    </div>
                    <div class="quiz-responses">
                        <h4>Responses:</h4>
            `;

            for (let i = 1; i <= 9; i++) {
                const question = quiz[`question_${i}`];
                const answer = quiz[`answer_${i}`];
                if (question && answer) {
                    content += `
                        <div class="response-item">
                            <p class="question"><strong>Q${i}:</strong> ${question}</p>
                            <p class="answer"><strong>A:</strong> ${answer}</p>
                        </div>
                    `;
                }
            }

            content += `
                    </div>
                </div>
            `;

            document.getElementById('quizDetailsContent').innerHTML = content;
            document.getElementById('quizModal').style.display = 'flex';
        }

        function closeQuizModal() {
            document.getElementById('quizModal').style.display = 'none';
        }

        function exportQuizToPDF(quizId) {
            // Open the PDF generation page in a new window
            const pdfWindow = window.open(`../backend/generate_quiz_pdf.php?id=${quizId}&auto_print=1`, '_blank');
            
            // Optional: Show a loading message
            const originalText = event.target.textContent;
            event.target.textContent = 'Generating PDF...';
            event.target.disabled = true;
            
            // Re-enable button after a delay
            setTimeout(() => {
                event.target.textContent = originalText;
                event.target.disabled = false;
            }, 3000);
        }

        // Close modal when clicking outside
        document.addEventListener('click', function(e) {
            const modal = document.getElementById('quizModal');
            if (e.target === modal) {
                closeQuizModal();
            }
        });
    </script>
</body>
</html>