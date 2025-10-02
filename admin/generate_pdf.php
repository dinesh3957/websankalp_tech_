<?php
// Redirect file for PDF generation
// This file redirects to the correct backend location

$dateFilter = $_GET['date_filter'] ?? 'all';
$redirectUrl = "../backend/generate_pdf.php?date_filter=" . urlencode($dateFilter);

header("Location: $redirectUrl");
exit();
?>