<?php
// GoDaddy Database Configuration
// Update these values with your GoDaddy cPanel database details

$host = 'localhost';                    // Usually 'localhost' for GoDaddy
$port = '3306';                        // GoDaddy uses standard MySQL port
$dbname = 'your_cpanel_username_websankalp';  // Format: username_databasename
$username = 'your_cpanel_username_dbuser';    // Your database username
$password = 'your_database_password';         // Your database password

// GoDaddy-specific DSN (Data Source Name)
try {
    // For GoDaddy, sometimes you need to specify the full hostname
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    
    // Set timezone (important for GoDaddy servers)
    $pdo->exec("SET time_zone = '+00:00'");
    
} catch(PDOException $e) {
    // Enhanced error logging for GoDaddy troubleshooting
    error_log("Database connection failed: " . $e->getMessage());
    
    // User-friendly error message (don't expose database details)
    if (strpos($_SERVER['HTTP_HOST'], 'localhost') !== false) {
        // Show detailed error only on localhost
        die("Database connection failed: " . $e->getMessage());
    } else {
        // Generic error message on live site
        die("Website temporarily unavailable. Please try again later.");
    }
}

// GoDaddy hosting often requires these settings
ini_set('mysql.connect_timeout', 60);
ini_set('default_socket_timeout', 60);

/* 
GODADDY SETUP INSTRUCTIONS:
1. Login to your GoDaddy cPanel
2. Go to "MySQL Databases" 
3. Create new database (name will be: yourusername_websankalp)
4. Create database user (name will be: yourusername_dbuser) 
5. Add user to database with ALL PRIVILEGES
6. Update the values above with your actual details
7. Upload this file to backend/ folder
*/
?>