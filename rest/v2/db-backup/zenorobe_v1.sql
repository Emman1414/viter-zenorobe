-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2024 at 02:11 AM
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
-- Database: `zenorobe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `zenorobe_category`
--

CREATE TABLE `zenorobe_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zenorobe_category`
--

INSERT INTO `zenorobe_category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(3, 1, 'Pants', '2024-12-13 09:19:52', 2024),
(4, 1, 'T-Shirt', '2024-12-13 09:43:21', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `zenorobe_clothes`
--

CREATE TABLE `zenorobe_clothes` (
  `clothes_aid` int(11) NOT NULL,
  `clothes_is_active` tinyint(1) NOT NULL,
  `clothes_title` varchar(50) NOT NULL,
  `clothes_image1` varchar(20) NOT NULL,
  `clothes_image2` varchar(30) NOT NULL,
  `clothes_price` int(30) NOT NULL,
  `clothes_category_id` int(11) NOT NULL,
  `clothes_datetime` varchar(20) NOT NULL,
  `clothes_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zenorobe_clothes`
--

INSERT INTO `zenorobe_clothes` (`clothes_aid`, `clothes_is_active`, `clothes_title`, `clothes_image1`, `clothes_image2`, `clothes_price`, `clothes_category_id`, `clothes_datetime`, `clothes_created`) VALUES
(24, 1, 'T-shirt 1', 'na-card-a1.jpg', 'na-card-a2.jpg', 20, 3, '2024-12-13 15:01:15', '2024-12-13 15:01:15'),
(25, 1, 'testing', 'na-card-a1.jpg', 'na-card-a2.jpg', 123, 3, '2024-12-13 15:46:56', '2024-12-13 15:44:47'),
(26, 0, 'testing', 'clothing-9.jpg', 'clothing-10.jpg', 123, 4, '', '2024-12-13 15:47:22');

-- --------------------------------------------------------

--
-- Table structure for table `zenorobe_slider`
--

CREATE TABLE `zenorobe_slider` (
  `banner_aid` int(11) NOT NULL,
  `banner_is_active` tinyint(1) NOT NULL,
  `banner_image` varchar(30) NOT NULL,
  `banner_title` varchar(30) NOT NULL,
  `banner_excerpt` varchar(30) NOT NULL,
  `banner_datetime` varchar(20) NOT NULL,
  `banner_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zenorobe_slider`
--

INSERT INTO `zenorobe_slider` (`banner_aid`, `banner_is_active`, `banner_image`, `banner_title`, `banner_excerpt`, `banner_datetime`, `banner_created`) VALUES
(4, 1, 'slider-1.jpg', 'Sample', 'Sample 1', '2024-12-13 13:15:47', 2024),
(5, 1, 'slider-2.jpg', 'Sample Two', 'Sample Lang', '2024-12-13 13:16:13', 2024),
(6, 1, 'slider-3.jpg', 'Sample Three', 'Sample 3', '2024-12-13 13:16:27', 2024),
(7, 1, 'fullpage.jpg', 'Sample Four', 'Sample Lang din', '2024-12-13 14:12:15', 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zenorobe_category`
--
ALTER TABLE `zenorobe_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `zenorobe_clothes`
--
ALTER TABLE `zenorobe_clothes`
  ADD PRIMARY KEY (`clothes_aid`);

--
-- Indexes for table `zenorobe_slider`
--
ALTER TABLE `zenorobe_slider`
  ADD PRIMARY KEY (`banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zenorobe_category`
--
ALTER TABLE `zenorobe_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `zenorobe_clothes`
--
ALTER TABLE `zenorobe_clothes`
  MODIFY `clothes_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `zenorobe_slider`
--
ALTER TABLE `zenorobe_slider`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
