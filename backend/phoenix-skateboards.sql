-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-11-2023 a las 22:40:19
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `phoenix-skateboards`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Descripcion` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `Precio` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `Nombre`, `Descripcion`, `img_id`, `Precio`) VALUES
(1, 'skate', 'Skate completo Pro Hard Maple', 'nkfwncggdel1ljduphas', '27.587'),
(2, 'longboard', 'Longboard Genesis Hard Maple', 'ljx0jwa2lrbo5hfw4y4g', '32.000'),
(3, 'remera', 'Remera R3105', 'ocju67vzixbr6ldlmgqw', '8.999'),
(4, 'skate', 'Skate completo Pro Hard Maple', 'bitlrrm8tx1vzlxs95o6', '27.587'),
(5, 'longboard', 'Longboard Genesis Hard Maple', 'gsujrf1k7yy5fpdwx1ix', '32.000'),
(6, 'remera', 'Remera R3110', 'q6yhjvrehp6ekpdx4zu5', '8.999'),
(7, 'skate', 'Skate completo Pro Hard Maple', 'f2mpzcbbvquy42nnpovv', '27.587'),
(8, 'skate', 'Skate completo Pro Hard Maple', 'gp7chda9rkcbqadbwbcn', '27.587'),
(9, 'remera', 'Remera R3105', 'asltscdgskr4rgc110k2', '8.999'),
(10, 'remera', 'Remera R3105', 'nxdnawefrg5iiqthapb1', '8.999'),
(11, 'longboard', 'Longboard Genesis Hard Maple', 'pvebpxyiixk95qwsi5cc', '32.000'),
(12, 'longboard', 'Longboard Genesis Hard Maple', 'v8nmr7x52fcgu9ksc5w8', '32.000'),
(13, 'skate', 'Skate completo Pro Hard Maple', 'c4o2a9bzxubbecodx1cx', '27.587'),
(14, 'skate', 'Skate completo Pro Hard Maple', 'u9plxsdw8hnqsg0xyxzn', '27.587'),
(15, 'skate', 'Skate completo Pro Hard Maple', 'plcea9nuogtvkfvoxofr', '27.587'),
(16, 'skate', 'Skate completo Pro Hard Maple', 'xploov3vztm5drui02il', '27.587'),
(17, 'skate', 'Skate completo Pro Hard Maple', 'ut8yxei1gazcfphgqcjh', '27.587'),
(18, 'skate', 'Skate completo Pro Hard Maple', 'lhqvya7osz9sjtdvvabd', '27.587'),
(19, 'skate', 'Skate completo Pro Hard Maple', 'vjbb3dijlt6gy6bpwfmg', '27.587'),
(20, 'skate', 'Skate completo Pro Hard Maple', 'tenpn0whjv0jsfqrmzc5', '27.587'),
(21, 'longboard', 'Longboard Genesis Hard Maple', 'h13souyjtow4pj07y5pe', '32.000'),
(22, 'longboard', 'Longboard Genesis Hard Maple', 'ntdzqnjgnmm1wnxfbnmn', '32.000'),
(23, 'longboard', 'Longboard Genesis Hard Maple', 'qjim811jj7xe4qjv4zfo', '32.000'),
(24, 'longboard', 'Longboard Genesis Hard Maple', 'lfzlyq2zm65gez0o5r7j', '32.000'),
(25, 'longboard', 'Longboard Genesis Hard Maple', 'lex6ge6uuptsb7s7nreq', '32.000'),
(26, 'longboard', 'Longboard Genesis Hard Maple', 'ynqkvzvdaxaiefuir1zi', '32.000'),
(27, 'longboard', 'Longboard Genesis Hard Maple', 'grilrio8bplbhkoi6ok9', '32.000'),
(28, 'longboard', 'Longboard Genesis Hard Maple', 'hr74nnkmjx3bfepxgrc8', '32.000'),
(29, 'remera', 'Remera R3105', 'ahvethxu8ol8le4nuuoc', '8.999'),
(30, 'remera', 'Remera R3105', 'vsi2egoktxdznst5quqt', '8.999'),
(31, 'remera', 'Remera R3105', 'cddbdeoypbisnaqzgwug', '8.999'),
(32, 'remera', 'Remera R3105', 'qy0ux4emokvzk6dpx2do', '8.999'),
(33, 'remera', 'Remera R3105', 'xi30mbjlbfwndxvodgqk', '8.999'),
(34, 'remera', 'Remera R3105', 'jm2npoiadxdvwbdpzz71', '8.999'),
(35, 'remera', 'Remera R3105', 'boqiny9hb7v0dyd9pdgj', '8.999'),
(36, 'remera', 'Remera R3108', 'pmyflq9mzkhsjyakwfem', '8.999');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'ignacio', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'pablo', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
