-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Nov-2023 às 02:50
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_freddys`
--
CREATE DATABASE IF NOT EXISTS `db_freddys` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db_freddys`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cadastros`
--

CREATE TABLE `tb_cadastros` (
  `id_cadastrado` int(11) NOT NULL,
  `nm_usuário` varchar(50) NOT NULL,
  `nm_email` varchar(50) NOT NULL,
  `cd_senha` varchar(12) NOT NULL,
  `priv_cadastrado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pizzas`
--

CREATE TABLE `tb_pizzas` (
  `id_pizza` int(11) NOT NULL,
  `nm_pizza` varchar(50) NOT NULL,
  `dc_pizza` varchar(100) NOT NULL,
  `img_pizza` varchar(200) NOT NULL,
  `vl_pizza` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_pizzas`
--

INSERT INTO `tb_pizzas` (`id_pizza`, `nm_pizza`, `dc_pizza`, `img_pizza`, `vl_pizza`) VALUES
(1, 'Frango e Requeijão', 'Pizza de Frango com Requeijão Trem Bao, praticidade e sabor para o seu dia!', 'src/assets/images/frango-e-requeijao-v1.jpg', '39.90'),
(2, 'Portuguesa', 'As cores do recheio lembravam as da bandeira de Portugal, por isso foi batizada de portuguesa', 'src/assets/images/brasileira.jpg', '35.00'),
(3, 'Pepperoni', 'A grande diferença do preparo da calabresa para a pepperoni, é que a calabresa tem em seu preparo um', 'src/assets/images/pepper.jpg', '45.00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_cadastros`
--
ALTER TABLE `tb_cadastros`
  ADD PRIMARY KEY (`id_cadastrado`);

--
-- Índices para tabela `tb_pizzas`
--
ALTER TABLE `tb_pizzas`
  ADD PRIMARY KEY (`id_pizza`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_cadastros`
--
ALTER TABLE `tb_cadastros`
  MODIFY `id_cadastrado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pizzas`
--
ALTER TABLE `tb_pizzas`
  MODIFY `id_pizza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
