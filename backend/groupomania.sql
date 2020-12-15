-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 15 déc. 2020 à 13:16
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `groupomania_discussion`
--

DROP TABLE IF EXISTS `groupomania_discussion`;
CREATE TABLE IF NOT EXISTS `groupomania_discussion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `message` varchar(10000) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `groupomania_discussion`
--

INSERT INTO `groupomania_discussion` (`id`, `title`, `message`, `userId`, `createdAt`, `updatedAt`) VALUES
(2, 'Badminton le vendredi', 'Ajoutez les collègues qui sont intérssés', 1, '2020-12-09 11:54:16', '2020-12-09 11:54:16'),
(3, 'Repas du midi', 'Parce que le déjeuner c\'est important quand même', 1, '2020-12-09 11:56:17', '2020-12-09 11:56:17'),
(4, 'Co-voiturage', 'Utile pour se regrouper pour les trajets', 1, '2020-12-09 11:58:25', '2020-12-09 11:58:25');

-- --------------------------------------------------------

--
-- Structure de la table `groupomania_message`
--

DROP TABLE IF EXISTS `groupomania_message`;
CREATE TABLE IF NOT EXISTS `groupomania_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(10000) NOT NULL,
  `discussionId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `discussionId` (`discussionId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `groupomania_message`
--

INSERT INTO `groupomania_message` (`id`, `message`, `discussionId`, `createdAt`, `updatedAt`, `userId`) VALUES
(2, 'Qui serait dispo vendredi 11 décembre à 18h ?', 2, '2020-12-09 11:54:39', '2020-12-09 11:54:39', 1),
(3, 'Il y a une nouvelle pizzeria qui a ouverte à côté des bureaux. Ça dirait à qui ?', 3, '2020-12-09 11:57:13', '2020-12-09 11:57:13', 1),
(5, 'Je ne suis pas là cette semaine, sûrement la semaine prochaine pour moi !', 2, '2020-12-09 12:01:27', '2020-12-09 12:01:27', NULL),
(6, 'Carrément !', 3, '2020-12-09 12:01:56', '2020-12-09 12:01:56', NULL),
(7, 'J\'habite à côté de la fac, du monde par ici aussi ? ', 4, '2020-12-09 12:02:26', '2020-12-09 12:02:26', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `groupomania_role`
--

DROP TABLE IF EXISTS `groupomania_role`;
CREATE TABLE IF NOT EXISTS `groupomania_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(30) NOT NULL,
  `code` varchar(3) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `groupomania_role`
--

INSERT INTO `groupomania_role` (`id`, `role`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'member', 'mbr', '2020-12-08 00:00:00', '2020-12-08 00:00:00'),
(2, 'admin', 'adm', '2020-12-08 00:00:00', '2020-12-08 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `groupomania_users`
--

DROP TABLE IF EXISTS `groupomania_users`;
CREATE TABLE IF NOT EXISTS `groupomania_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `idRole` int(11) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `idRole` (`idRole`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `groupomania_users`
--

INSERT INTO `groupomania_users` (`id`, `username`, `email`, `password`, `idRole`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrateur', 'admin@groupomania.com', '$2b$10$LHDlfqX43n4PzKjE2hHrT.VTAkjTnWc9kjB5w3U2YOttqkKOuA2py', 2, '2020-12-09 11:48:51', '2020-12-09 11:48:51'),
(3, 'Clément', 'clement@groupomania.com', '$2b$10$S0CGQmUXvJw8WfMKAyunPe10HCyz4kw70txiPU0ygTD81FQH6K9C2', 1, '2020-12-10 18:17:03', '2020-12-10 18:17:03');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `groupomania_discussion`
--
ALTER TABLE `groupomania_discussion`
  ADD CONSTRAINT `groupomania_discussion_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `groupomania_users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `groupomania_message`
--
ALTER TABLE `groupomania_message`
  ADD CONSTRAINT `groupomania_message_ibfk_1` FOREIGN KEY (`discussionId`) REFERENCES `groupomania_discussion` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `groupomania_message_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `groupomania_users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `groupomania_users`
--
ALTER TABLE `groupomania_users`
  ADD CONSTRAINT `groupomania_users_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `groupomania_role` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
