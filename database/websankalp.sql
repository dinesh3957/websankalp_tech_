-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Oct 04, 2025 at 06:19 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websankalp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL DEFAULT 'Admin User',
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `password`, `created_at`) VALUES
(1, 'Admin User', 'admin', 'admin123', '2025-09-30 16:37:05'),
(2, 'dinesh rathod', 'mr_dinesh3957', 'Dinesh@3957', '2025-09-30 16:55:07'),
(3, 'abhi', '123', '123', '2025-10-01 12:21:38');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `email`, `created_at`) VALUES
(1, 'admin', '$2y$10$gf/6O/nqm5CtUFxXYvEbSOxlPQj7hF4UN3wYsAhbkAsW5rSbLVbC2', 'admin@websankalp.com', '2025-10-01 11:50:29');

-- --------------------------------------------------------

--
-- Table structure for table `official_contacts`
--

CREATE TABLE `official_contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text DEFAULT NULL,
  `product_info` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `official_contacts`
--

INSERT INTO `official_contacts` (`id`, `name`, `phone`, `email`, `message`, `product_info`, `created_at`) VALUES
(1, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'yghhghgv', 'Bosch FLEXIDOME IP - FLEXIDOME Series', '2025-09-30 18:08:29'),
(2, 'Dinesh Rathoda', '07666543696', 'rd1641627@gmail.com', 'sfsdfdgdfg', 'Bosch FLEXIDOME IP - FLEXIDOME Series', '2025-09-30 18:16:10'),
(3, 'abhishesk about page', '07666543696', 'abhi7@gmail.com', 'nothing', 'Hikvision DS-KV6113-WPE1 - Door Station', '2025-09-30 18:25:50'),
(4, 'uhksd', '07666543696', 'rd1641627@gmail.com', 'efdfd', 'Bosch FLEXIDOME IP - FLEXIDOME Series', '2025-09-30 18:33:14'),
(5, 'abhishesk', '827364762378', 'rd1641627@gmail.com', 'i want tv', 'Bosch FLEXIDOME IP - FLEXIDOME Series', '2025-10-01 07:45:21'),
(6, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'gsjdhb', '3M', '2025-10-01 08:25:32'),
(7, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'fekjhgfds', 'Epson', '2025-10-01 08:26:41'),
(8, 'Rathod Dinesh', '07666543696', 'ygdjsajdhjs@gmail.com', 'dinesh', '3M', '2025-10-01 11:32:07'),
(9, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'ftdyghd', 'All in One POS System', '2025-10-01 12:54:54'),
(10, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'jatfdysd', 'POS Barcode Scanners', '2025-10-01 12:57:14'),
(11, 'dinesh', '8446643563', 'dineshrathod2024.comp@mmcoe.edu.in', 'ytfsdygsa', 'All in One POS System', '2025-10-01 12:58:33'),
(12, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'sdfghjkl', '3M', '2025-10-01 15:53:02'),
(13, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'asdfghm', 'Brady', '2025-10-01 18:10:40'),
(14, 'abc', '7367666', 'abc@gmail.com', 'dgadhasghaj', 'Newland', '2025-10-01 18:53:15'),
(15, 'sjdhjsabd', '07666543696', 'rd1641627@gmail.com', 'asdsd', 'Kiosk Information Systems', '2025-10-02 08:46:00'),
(16, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'tytytytyyt', 'Brady', '2025-10-02 12:14:18'),
(17, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'hsjdhjasbdh', 'Product: Zebra ZD421 Thermal Printer | Brand: Zebra', '2025-10-02 13:12:54'),
(18, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'jygasjdbhja', 'Product: Zebra ZD421 Thermal Printer | Brand: Zebra', '2025-10-02 13:14:26'),
(19, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'agysdj', 'Product: Zebra ZD421 Thermal Printer | Brand: Zebra', '2025-10-02 13:15:00'),
(20, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'hey hi', 'Product: Zebra ZD421 Thermal Printer | Brand: Zebra', '2025-10-02 13:17:02'),
(21, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'hey by', 'RUG', '2025-10-02 13:17:37'),
(22, 'Dinesh', '07666543696', 'rd1641627@gmail.com', 'hgfhg', 'Contact Page Inquiry', '2025-10-02 13:47:06'),
(23, 'Dinesh', '07666543696', 'rd1641627@gmail.com', 'hey hi i want help', 'Contact Page Inquiry', '2025-10-02 13:56:11'),
(24, 'Dinesh', '07666543696', 'rd1641627@gmail.com', 'dx', 'Contact Page Inquiry', '2025-10-02 13:56:52'),
(25, 'Dinesh', '07666543696', 'rd1641627@gmail.com', 'sjhgjf', 'Contact Page Inquiry', '2025-10-02 13:58:41'),
(26, 'Dinesh', '07666543696', 'rd1641627@gmail.com', 'sjhgjf', 'Contact Page Inquiry', '2025-10-02 13:58:41'),
(27, 'Dinesh', '07666543696', 'rd1641627@gmail.com', 'df', 'Contact Page Inquiry', '2025-10-02 13:59:18'),
(28, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'iuhdjskjf', 'Bosch Security Systems', '2025-10-02 16:42:09'),
(29, 'Dinesh', '07666543696', 'rd1641627@gmail.com', 'hasdhasd', 'Contact Page Inquiry', '2025-10-03 11:17:18'),
(30, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'hlow', 'Novexx Solutions', '2025-10-03 15:52:35'),
(31, 'sj', '07666543696', 'rd1641627@gmail.com', 'sa', 'Brady', '2025-10-03 17:27:08'),
(32, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'as', 'Avery Dennison', '2025-10-03 17:36:24'),
(33, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'I\'m interested in Zebra ZD421 Thermal Printer. Please provide more information about pricing and availability.', 'Zebra ZD421 Thermal Printer', '2025-10-03 20:32:33'),
(34, 'Dinesh Rathod', '07666543696', 'rd1641627@gmail.com', 'I\'m interested in Zebra ZD421 Thermal Printer. Please provide more information about pricing and availability.', 'Zebra ZD421 Thermal Printer', '2025-10-03 20:35:35');

-- --------------------------------------------------------

--
-- Table structure for table `product_inquiries`
--

CREATE TABLE `product_inquiries` (
  `id` int(11) NOT NULL,
  `product_type` varchar(255) DEFAULT NULL,
  `application_area` varchar(255) DEFAULT NULL,
  `environment` varchar(255) DEFAULT NULL,
  `scanning_distance` varchar(255) DEFAULT NULL,
  `scanning_frequency` varchar(255) DEFAULT NULL,
  `data_format` varchar(255) DEFAULT NULL,
  `connectivity` varchar(255) DEFAULT NULL,
  `accuracy_requirement` varchar(255) DEFAULT NULL,
  `operating_temperature` varchar(255) DEFAULT NULL,
  `budget_range` varchar(255) DEFAULT NULL,
  `implementation_timeline` varchar(255) DEFAULT NULL,
  `specific_requirements` text DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `additional_notes` text DEFAULT NULL,
  `customer_name` varchar(100) GENERATED ALWAYS AS (coalesce(`contact_person`,'Customer')) VIRTUAL,
  `customer_phone` varchar(20) GENERATED ALWAYS AS (`phone`) VIRTUAL,
  `customer_email` varchar(100) GENERATED ALWAYS AS (`email`) VIRTUAL,
  `products_interested` text GENERATED ALWAYS AS (concat_ws(' | ',`product_type`,`application_area`)) VIRTUAL,
  `use_case` varchar(100) GENERATED ALWAYS AS (`environment`) VIRTUAL,
  `timeline` varchar(50) GENERATED ALWAYS AS (`implementation_timeline`) VIRTUAL,
  `additional_requirements` text GENERATED ALWAYS AS (concat_ws(' | ',`specific_requirements`,`additional_notes`)) VIRTUAL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_inquiries`
--

INSERT INTO `product_inquiries` (`id`, `product_type`, `application_area`, `environment`, `scanning_distance`, `scanning_frequency`, `data_format`, `connectivity`, `accuracy_requirement`, `operating_temperature`, `budget_range`, `implementation_timeline`, `specific_requirements`, `company_name`, `contact_person`, `email`, `phone`, `additional_notes`, `created_at`, `updated_at`) VALUES
(1, 'POS System', 'Retail Store', 'Indoor Office', NULL, NULL, NULL, NULL, NULL, NULL, 'Medium Range', NULL, NULL, NULL, 'Test Customer', 'test@example.com', '9876543210', NULL, '2025-10-01 13:07:55', '2025-10-01 13:07:55'),
(2, 'All-in-One POS System', 'Electronics Store', 'Retail Environment', 'gfhasd', '50-200', 'POS Transaction Data', 'No Integration Needed', 'High', 'Standard Office Environment', NULL, NULL, 'asfdsadf', NULL, NULL, 'rd1641627@gmail.com', '7666543696', 'asdasd', '2025-10-01 13:12:07', '2025-10-01 13:12:07'),
(3, 'Industrial Panel PC', 'Chemical Processing', 'Outdoor/Harsh Environment', 'Industrial Range', 'High Volume (GB/day)', 'Industrial IoT Data', 'dinesh', 'Industrial Grade', 'Industrial Temperature Range', NULL, NULL, 'hxgcjhdscj', NULL, NULL, 'rd1641627@gmail.com', '7666543696', 'hghgcvzxcb', '2025-10-01 13:23:11', '2025-10-01 13:23:11');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_responses`
--

CREATE TABLE `quiz_responses` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `quiz_type` varchar(100) NOT NULL,
  `quiz_title` varchar(255) NOT NULL,
  `question_1` text DEFAULT NULL,
  `answer_1` text DEFAULT NULL,
  `question_2` text DEFAULT NULL,
  `answer_2` text DEFAULT NULL,
  `question_3` text DEFAULT NULL,
  `answer_3` text DEFAULT NULL,
  `question_4` text DEFAULT NULL,
  `answer_4` text DEFAULT NULL,
  `question_5` text DEFAULT NULL,
  `answer_5` text DEFAULT NULL,
  `question_6` text DEFAULT NULL,
  `answer_6` text DEFAULT NULL,
  `question_7` text DEFAULT NULL,
  `answer_7` text DEFAULT NULL,
  `question_8` text DEFAULT NULL,
  `answer_8` text DEFAULT NULL,
  `question_9` text DEFAULT NULL,
  `answer_9` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_responses`
--

INSERT INTO `quiz_responses` (`id`, `name`, `mobile`, `quiz_type`, `quiz_title`, `question_1`, `answer_1`, `question_2`, `answer_2`, `question_3`, `answer_3`, `question_4`, `answer_4`, `question_5`, `answer_5`, `question_6`, `answer_6`, `question_7`, `answer_7`, `question_8`, `answer_8`, `question_9`, `answer_9`, `created_at`) VALUES
(1, 'dineh', '7666543696', 'Barcode & RFID', 'Find Your Barcode & RFID Solution', 'What type of barcode system do you need for your business?', 'Simple inventory tracking', 'What range do you need for scanning/reading?', 'Short range (1-10cm)', 'What environment will you use the system in?', 'Outdoor/harsh conditions', 'How many items do you need to track daily?', '100-1000', 'What type of data do you want to store?', 'Serial numbers & dates', 'Do you need real-time tracking?', 'No, batch scanning is fine', 'What\'s your budget range for the system?', 'Basic (Under ₹50K)', 'Which integration do you need?', 'Mobile app integration', 'What\'s your primary goal?', 'Improve inventory accuracy', '2025-10-02 20:11:58'),
(2, 'Dinesh Mahadev Rathod', '7666543696', 'Industrial Touch PC', 'Find Your Industrial Touch PC Solution', 'What industrial application do you need?', 'Machine control', 'What environmental conditions will it face?', 'Dusty workshop', 'What screen size do you require?', 'Medium (12-15 inch)', 'What processing power do you need?', 'Basic data entry', 'What connectivity do you require?', 'Industrial protocols', 'Do you need special certifications?', 'IP65 rating', 'What operating system preference?', 'Android system', 'How will it be mounted?', 'Wall mounted', 'What\'s your budget range?', 'Basic (₹50K-₹1L)', '2025-10-02 20:38:30'),
(3, 'rd1641627@gmail.com', '7666543696', 'Barcode & RFID', 'Find Your Barcode & RFID Solution', 'What is your name ?', 'rathod', 'What range do you need for scanning/reading?', 'Contact scanning (0-5cm)', 'What environment will you use the system in?', 'Warehouse/industrial', 'How many items do you need to track daily?', '100-1000', 'What type of data do you want to store?', 'Basic product info', 'Do you need real-time tracking?', 'Yes, for asset location', 'What\'s your budget range for the system?', 'Standard (₹50K-₹2L)', 'Which integration do you need?', 'Cloud-based solution', 'What\'s your primary goal?', 'Improve inventory accuracy', '2025-10-02 20:41:11'),
(4, 'Dinesh Mahadev Rathod', '7666543696', 'Barcode & RFID', 'Find Your Barcode & RFID Solution', 'What type of barcode system do you need for your business?', 'Asset management with detailed data', 'What range do you need for scanning/reading?', 'Contact scanning (0-5cm)', 'What environment will you use the system in?', 'Warehouse/industrial', 'How many items do you need to track daily?', '100-1000', 'What type of data do you want to store?', 'Serial numbers & dates', 'Do you need real-time tracking?', 'No, batch scanning is fine', 'What\'s your budget range for the system?', 'Basic (Under ₹50K)', 'Which integration do you need?', 'Standalone system', 'What\'s your primary goal?', 'Improve inventory accuracy', '2025-10-03 16:06:08');

-- --------------------------------------------------------

--
-- Table structure for table `user_sessions`
--

CREATE TABLE `user_sessions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `session_token` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `expires_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `official_contacts`
--
ALTER TABLE `official_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_inquiries`
--
ALTER TABLE `product_inquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_responses`
--
ALTER TABLE `quiz_responses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_sessions`
--
ALTER TABLE `user_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `official_contacts`
--
ALTER TABLE `official_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `product_inquiries`
--
ALTER TABLE `product_inquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quiz_responses`
--
ALTER TABLE `quiz_responses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_sessions`
--
ALTER TABLE `user_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_sessions`
--
ALTER TABLE `user_sessions`
  ADD CONSTRAINT `user_sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `admin` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
