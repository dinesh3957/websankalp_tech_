<?php
// Database configuration
$host = 'localhost';
$port = '3307';      // XAMPP MySQL port
$dbname = 'websankalp';
$username = 'root';  // Default XAMPP username
$password = '';      // Default XAMPP password (empty)

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>