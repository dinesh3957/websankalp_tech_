<?php
session_start();
require_once '../backend/config.php';

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: login.php');
    exit();
}

$message = '';
$error = '';

if ($_POST) {
    $name = trim($_POST['name']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    
    if (!empty($name) && !empty($username) && !empty($password)) {
        try {
            // Check if username already exists
            $checkStmt = $pdo->prepare("SELECT COUNT(*) FROM admin WHERE username = ?");
            $checkStmt->execute([$username]);
            
            if ($checkStmt->fetchColumn() > 0) {
                $error = 'Username already exists!';
            } else {
                // Check if 'name' column exists
                $checkColumn = $pdo->query("SHOW COLUMNS FROM admin LIKE 'name'");
                $nameColumnExists = $checkColumn->rowCount() > 0;
                
                if ($nameColumnExists) {
                    $stmt = $pdo->prepare("INSERT INTO admin (name, username, password) VALUES (?, ?, ?)");
                    $stmt->execute([$name, $username, $password]);
                } else {
                    // If name column doesn't exist, insert without it
                    $stmt = $pdo->prepare("INSERT INTO admin (username, password) VALUES (?, ?)");
                    $stmt->execute([$username, $password]);
                }
                $message = 'Admin user added successfully!';
            }
        } catch (PDOException $e) {
            $error = 'Database error: ' . $e->getMessage();
        }
    } else {
        $error = 'Please fill in all fields!';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Admin - WebSankalp</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
        }

        .navbar {
            background: #5883d9ff;
            color: white;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .navbar h1 {
            font-size: 24px;
        }

        .navbar a {
            color: white;
            text-decoration: none;
            padding: 8px 16px;
            background: #4169b3;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .navbar a:hover {
            background: #2c5282;
        }

        .content {
            padding: 30px;
            max-width: 600px;
            margin: 0 auto;
        }

        .form-card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .form-card h2 {
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }

        .form-group input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        .form-group input:focus {
            outline: none;
            border-color: #5883d9ff;
        }

        .btn {
            width: 100%;
            padding: 12px;
            background: #5883d9ff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .btn:hover {
            background: #4169b3;
        }

        .message {
            padding: 12px;
            margin-bottom: 20px;
            border-radius: 5px;
            text-align: center;
        }

        .success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <h1>Add New Admin</h1>
        <a href="dashboard.php">← Back to Dashboard</a>
    </nav>

    <div class="content">
        <div class="form-card">
            <h2>Add New Admin User</h2>
            
            <?php if (!empty($message)): ?>
                <div class="message success"><?php echo htmlspecialchars($message); ?></div>
            <?php endif; ?>
            
            <?php if (!empty($error)): ?>
                <div class="message error"><?php echo htmlspecialchars($error); ?></div>
            <?php endif; ?>
            
            <form method="POST" action="">
                <div class="form-group">
                    <label for="name">Full Name *</label>
                    <input type="text" id="name" name="name" placeholder="Enter full name" required 
                           value="<?php echo isset($_POST['name']) ? htmlspecialchars($_POST['name']) : ''; ?>">
                </div>
                
                <div class="form-group">
                    <label for="username">Username *</label>
                    <input type="text" id="username" name="username" placeholder="Enter username" required 
                           value="<?php echo isset($_POST['username']) ? htmlspecialchars($_POST['username']) : ''; ?>">
                </div>
                
                <div class="form-group">
                    <label for="password">Password *</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" required>
                </div>
                
                <button type="submit" class="btn">Add Admin User</button>
            </form>
        </div>
    </div>
</body>
</html>