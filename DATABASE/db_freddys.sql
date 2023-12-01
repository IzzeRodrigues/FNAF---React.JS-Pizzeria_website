-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Dez-2023 às 01:13
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
-- Estrutura da tabela `tb_bebidas`
--

CREATE TABLE `tb_bebidas` (
  `id_bebidas` int(11) NOT NULL,
  `nm_bebida` varchar(20) NOT NULL,
  `vl_bebida` varchar(5) NOT NULL,
  `dc_desc` varchar(52) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_bebidas`
--

INSERT INTO `tb_bebidas` (`id_bebidas`, `nm_bebida`, `vl_bebida`, `dc_desc`) VALUES
(1, '2Litros de Ibituruna', '', 'A melhor bebida da terra'),
(2, '2Litros de Ibituruna', '', 'A melhor bebida da terra'),
(3, '2Litros de Ibituruna', '', 'aaaaaaaaaa'),
(4, 'asdasdasd', 'R$4.6', 'dasasdasd'),
(5, 'Varias cocas colas', 'R$0.0', 'muitas unidades de cocacola'),
(6, 'dasdasd', 'R$2.2', 'sadasda'),
(7, 'asdasda', 'R$2.4', 'sdasdasd'),
(8, 'dasda', '', 'dsadas'),
(9, 'Varias cocas colas', '234', 'rwerwer'),
(10, 'terterteterte', '122', 'rtedrtete'),
(11, 'fsdfsdfsdf', '5555', 'sdfsdfsdf'),
(12, 'asdasda', '1212', 'dsasda'),
(13, 'asdasda', '3000', 'asdasdads');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_clientes`
--

CREATE TABLE `tb_clientes` (
  `id_cadastrado` int(11) NOT NULL,
  `nm_usuario` varchar(50) NOT NULL,
  `nm_email_usuario` varchar(20) NOT NULL,
  `cd_senha_usuario` varchar(20) NOT NULL,
  `priv_usuario` varchar(20) NOT NULL,
  `cd_cep` varchar(10) NOT NULL,
  `nm_rua` varchar(60) NOT NULL,
  `cd_numero_endereco` varchar(3) NOT NULL,
  `nm_bairro` varchar(50) NOT NULL,
  `nm_cidade` varchar(30) NOT NULL,
  `nm_estado` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_clientes`
--

INSERT INTO `tb_clientes` (`id_cadastrado`, `nm_usuario`, `nm_email_usuario`, `cd_senha_usuario`, `priv_usuario`, `cd_cep`, `nm_rua`, `cd_numero_endereco`, `nm_bairro`, `nm_cidade`, `nm_estado`) VALUES
(8, 'isabelle', 'isabelle@email.com', '123', '', '', '', '', '', '', ''),
(10, 'lucas', 'lucas@email.com', '123', 'funcionario', '', '', '', '', '', ''),
(12, 'takashi', 'takashi@email.com', '123', 'cliente', '', '', '', '', '', ''),
(14, 'Ahamad', 'amaji@email.com', '123', 'cliente', '11340000', 'Rua Frei Gaspar', '541', 'Parque São Vicente', 'São Vicente', 'SP');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pedidos`
--

CREATE TABLE `tb_pedidos` (
  `id_pedido` int(11) NOT NULL,
  `nm_pedido` varchar(30) NOT NULL,
  `vl_pedido` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_pedidos`
--

INSERT INTO `tb_pedidos` (`id_pedido`, `nm_pedido`, `vl_pedido`) VALUES
(6, 'Frango e Requeijão', '39.90'),
(7, 'Frango e Requeijão', '39.90'),
(8, 'Frango e Requeijão', '39.90'),
(9, 'Portuguesa', '35.00'),
(10, 'Pepperoni', '45.00'),
(11, 'Parmesao', '99.90');

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
(3, 'Pepperoni', 'A grande diferença do preparo da calabresa para a pepperoni, é que a calabresa tem em seu preparo um', 'src/assets/images/pepper.jpg', '45.00'),
(4, 'Parmesao', 'É uma pizza, e não tem parmesão.', '', '99.90'),
(5, 'ddasdsada', 'dsadas', '', '32.14');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_bebidas`
--
ALTER TABLE `tb_bebidas`
  ADD PRIMARY KEY (`id_bebidas`);

--
-- Índices para tabela `tb_clientes`
--
ALTER TABLE `tb_clientes`
  ADD PRIMARY KEY (`id_cadastrado`);

--
-- Índices para tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Índices para tabela `tb_pizzas`
--
ALTER TABLE `tb_pizzas`
  ADD PRIMARY KEY (`id_pizza`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_bebidas`
--
ALTER TABLE `tb_bebidas`
  MODIFY `id_bebidas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `tb_clientes`
--
ALTER TABLE `tb_clientes`
  MODIFY `id_cadastrado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `tb_pizzas`
--
ALTER TABLE `tb_pizzas`
  MODIFY `id_pizza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
