<?php
// Redirect file for inquiry PDF generation
// This file redirects to the correct backend location

$dateFilter = $_GET['date_filter'] ?? 'all';
$redirectUrl = "../backend/generate_inquiry_pdf.php?date_filter=" . urlencode($dateFilter);

header("Location: $redirectUrl");
exit();
?>