-- CREATING DATABASE
CREATE DATABASE IF NOT EXISTS `blogging`;

USE `blogging`;

/* CREATING TABLES */
-- USER TABLE
CREATE TABLE
  IF NOT EXISTS `user` (
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `role_id` INT NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `avatar` VARCHAR(255),
    `country_id` INT NOT NULL,
    `phone` VARCHAR(100),
    `bio` TEXT,
    `is_active` BOOLEAN NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`user_id`),
    UNIQUE KEY (`email`)
  );

-- POST TABLE
CREATE table
  IF NOT EXISTS `post` (
    `posts_id` INT NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `content` text NOT NULL,
    `user_id` INT NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT 1,
    `date_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `date_modified` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`posts_id`)
  );

-- COMMENT TABLE
CREATE TABLE
  IF NOT EXISTS `comment` (
    `comment_id` INT NOT NULL AUTO_INCREMENT,
    `content` text NOT NULL,
    `post_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT 1,
    `date_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `date_modified` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`comment_id`)
  );

-- USER ROLES
CREATE TABLE
  IF NOT EXISTS `role` (
    `role_id` INT NOT NULL AUTO_INCREMENT,
    `role_name` varchar(255) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (`role_id`)
  );

-- COUNTRY TABLE
CREATE TABLE
  IF NOT EXISTS `country` (
    `country_id` INT NOT NULL AUTO_INCREMENT,
    `country_name` varchar(255) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (`country_id`)
  );

-- FOREIGN KEYS
ALTER TABLE `user` ADD CONSTRAINT `fk_user_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `use`r ADD CONSTRAINT `fk_user_country_id` FOREIGN KEY (`country_id`) REFERENCES `country` (`country_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_post_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`posts_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `post` ADD CONSTRAINT `fk_post_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- CREATING DATA
-- ROLE DATA
INSERT INTO
  role (`role_id`, `role_name`)
VALUES
  (1, 'admin'),
  (2, 'user');

-- USER DATA
INSERT INTO
  `user` (
    `role_id`,
    `username`,
    `email`,
    `password`,
    `first_name`,
    `last_name`,
    `avatar`,
    `country_id`,
    `phone`,
    `bio`
  )
VALUES
  (
    1,
    'admin',
    'agferrin@gmail.com',
    '1234',
    'Gabriel',
    'Ferrin',
    'admin.jpg',
    1,
    '123456789',
    'Admin user bio'
  );

INSERT INTO
  `user` (
    `role_id`,
    `username`,
    `email`,
    `password`,
    `first_name`,
    `last_name`,
    `avatar`,
    `country_id`,
    `phone`,
    `bio`
  )
VALUES
  (
    2,
    'john_doe',
    'john.doe@example.com',
    'password123',
    'John',
    'Doe',
    'avatar1.jpg',
    1,
    '123-456-7890',
    'Bio for John Doe'
  ),
  (
    2,
    'jane_doe',
    'jane.doe@example.com',
    'password123',
    'Jane',
    'Doe',
    'avatar2.jpg',
    2,
    '234-567-8901',
    'Bio for Jane Doe'
  ),
  (
    2,
    'alice_smith',
    'alice.smith@example.com',
    'password123',
    'Alice',
    'Smith',
    'avatar3.jpg',
    3,
    '345-678-9012',
    'Bio for Alice Smith'
  ),
  (
    2,
    'bob_jones',
    'bob.jones@example.com',
    'password123',
    'Bob',
    'Jones',
    'avatar4.jpg',
    4,
    '456-789-0123',
    'Bio for Bob Jones'
  ),
  (
    2,
    'charlie_brown',
    'charlie.brown@example.com',
    'password123',
    'Charlie',
    'Brown',
    'avatar5.jpg',
    5,
    '567-890-1234',
    'Bio for Charlie Brown'
  ),
  (
    2,
    'david_clark',
    'david.clark@example.com',
    'password123',
    'David',
    'Clark',
    'avatar6.jpg',
    6,
    '678-901-2345',
    'Bio for David Clark'
  ),
  (
    2,
    'eve_adams',
    'eve.adams@example.com',
    'password123',
    'Eve',
    'Adams',
    'avatar7.jpg',
    7,
    '789-012-3456',
    'Bio for Eve Adams'
  ),
  (
    2,
    'frank_wright',
    'frank.wright@example.com',
    'password123',
    'Frank',
    'Wright',
    'avatar8.jpg',
    8,
    '890-123-4567',
    'Bio for Frank Wright'
  ),
  (
    2,
    'grace_hall',
    'grace.hall@example.com',
    'password123',
    'Grace',
    'Hall',
    'avatar9.jpg',
    9,
    '901-234-5678',
    'Bio for Grace Hall'
  ),
  (
    2,
    'henry_lee',
    'henry.lee@example.com',
    'password123',
    'Henry',
    'Lee',
    'avatar10.jpg',
    10,
    '012-345-6789',
    'Bio for Henry Lee'
  );

-- COUNTRY DATA
INSERT INTO
  `country` (`country_id`, `country_name`)
VALUES
  (1, 'Afghanistan'),
  (2, 'Albania'),
  (3, 'Algeria'),
  (4, 'Andorra'),
  (5, 'Angola'),
  (6, 'Antigua and Barbuda'),
  (7, 'Argentina'),
  (8, 'Armenia'),
  (9, 'Australia'),
  (10, 'Austria'),
  (11, 'Azerbaijan'),
  (12, 'The Bahamas'),
  (13, 'Bahrain'),
  (14, 'Bangladesh'),
  (15, 'Barbados'),
  (16, 'Belarus'),
  (17, 'Belgium'),
  (18, 'Belize'),
  (19, 'Benin'),
  (20, 'Bhutan'),
  (21, 'Bolivia'),
  (22, 'Bosnia and Herzegovina'),
  (23, 'Botswana'),
  (24, 'Brazil'),
  (25, 'Brunei'),
  (26, 'Bulgaria'),
  (27, 'Burkina Faso'),
  (28, 'Burundi'),
  (29, 'Cabo Verde'),
  (30, 'Cambodia'),
  (31, 'Cameroon'),
  (32, 'Canada'),
  (33, 'Central African Republic'),
  (34, 'Chad'),
  (35, 'Chile'),
  (36, 'China'),
  (37, 'Colombia'),
  (38, 'Comoros'),
  (39, 'Congo, Democratic Republic of the'),
  (40, 'Congo, Republic of the'),
  (41, 'Costa Rica'),
  (42, 'Côte d’Ivoire'),
  (43, 'Croatia'),
  (44, 'Cuba'),
  (45, 'Cyprus'),
  (46, 'Czech Republic'),
  (47, 'Denmark'),
  (48, 'Djibouti'),
  (49, 'Dominica'),
  (50, 'Dominican Republic'),
  (51, 'East Timor (Timor-Leste)'),
  (52, 'Ecuador'),
  (53, 'Egypt'),
  (54, 'El Salvador'),
  (55, 'Equatorial Guinea'),
  (56, 'Eritrea'),
  (57, 'Estonia'),
  (58, 'Eswatini'),
  (59, 'Ethiopia'),
  (60, 'Fiji'),
  (61, 'Finland'),
  (62, 'France'),
  (63, 'Gabon'),
  (64, 'The Gambia'),
  (65, 'Georgia'),
  (66, 'Germany'),
  (67, 'Ghana'),
  (68, 'Greece'),
  (69, 'Grenada'),
  (70, 'Guatemala'),
  (71, 'Guinea'),
  (72, 'Guinea-Bissau'),
  (73, 'Guyana'),
  (74, 'Haiti'),
  (75, 'Honduras'),
  (76, 'Hungary'),
  (77, 'Iceland'),
  (78, 'India'),
  (79, 'Indonesia'),
  (80, 'Iran'),
  (81, 'Iraq'),
  (82, 'Ireland'),
  (83, 'Israel'),
  (84, 'Italy'),
  (85, 'Jamaica'),
  (86, 'Japan'),
  (87, 'Jordan'),
  (88, 'Kazakhstan'),
  (89, 'Kenya'),
  (90, 'Kiribati'),
  (91, 'Korea, North'),
  (92, 'Korea, South'),
  (93, 'Kosovo'),
  (94, 'Kuwait'),
  (95, 'Kyrgyzstan'),
  (96, 'Laos'),
  (97, 'Latvia'),
  (98, 'Lebanon'),
  (99, 'Lesotho'),
  (100, 'Liberia'),
  (101, 'Libya'),
  (102, 'Liechtenstein'),
  (103, 'Lithuania'),
  (104, 'Luxembourg'),
  (105, 'Madagascar'),
  (106, 'Malawi'),
  (107, 'Malaysia'),
  (108, 'Maldives'),
  (109, 'Mali'),
  (110, 'Malta'),
  (111, 'Marshall Islands'),
  (112, 'Mauritania'),
  (113, 'Mauritius'),
  (114, 'Mexico'),
  (115, 'Micronesia, Federated States of'),
  (116, 'Moldova'),
  (117, 'Monaco'),
  (118, 'Mongolia'),
  (119, 'Montenegro'),
  (120, 'Morocco'),
  (121, 'Mozambique'),
  (122, 'Myanmar (Burma)'),
  (123, 'Namibia'),
  (124, 'Nauru'),
  (125, 'Nepal'),
  (126, 'Netherlands'),
  (127, 'New Zealand'),
  (128, 'Nicaragua'),
  (129, 'Niger'),
  (130, 'Nigeria'),
  (131, 'North Macedonia'),
  (132, 'Norway'),
  (133, 'Oman'),
  (134, 'Pakistan'),
  (135, 'Palau'),
  (136, 'Panama'),
  (137, 'Papua New Guinea'),
  (138, 'Paraguay'),
  (139, 'Peru'),
  (140, 'Philippines'),
  (141, 'Poland'),
  (142, 'Portugal'),
  (143, 'Qatar'),
  (144, 'Romania'),
  (145, 'Russia'),
  (146, 'Rwanda'),
  (147, 'Saint Kitts and Nevis'),
  (148, 'Saint Lucia'),
  (149, 'Saint Vincent and the Grenadines'),
  (150, 'Samoa'),
  (151, 'San Marino'),
  (152, 'Sao Tome and Principe'),
  (153, 'Saudi Arabia'),
  (154, 'Senegal'),
  (155, 'Serbia'),
  (156, 'Seychelles'),
  (157, 'Sierra Leone'),
  (158, 'Singapore'),
  (159, 'Slovakia'),
  (160, 'Slovenia'),
  (161, 'Solomon Islands'),
  (162, 'Somalia'),
  (163, 'South Africa'),
  (164, 'Spain'),
  (165, 'Sri Lanka'),
  (166, 'Sudan'),
  (167, 'Sudan, South'),
  (168, 'Suriname'),
  (169, 'Sweden'),
  (170, 'Switzerland'),
  (171, 'Syria'),
  (172, 'Taiwan'),
  (173, 'Tajikistan'),
  (174, 'Tanzania'),
  (175, 'Thailand'),
  (176, 'Togo'),
  (177, 'Tonga'),
  (178, 'Trinidad and Tobago'),
  (179, 'Tunisia'),
  (180, 'Turkey'),
  (181, 'Turkmenistan'),
  (182, 'Tuvalu'),
  (183, 'Uganda'),
  (184, 'Ukraine'),
  (185, 'United Arab Emirates'),
  (186, 'United Kingdom'),
  (187, 'United States'),
  (188, 'Uruguay'),
  (189, 'Uzbekistan'),
  (190, 'Vanuatu'),
  (191, 'Vatican City'),
  (192, 'Venezuela'),
  (193, 'Vietnam'),
  (194, 'Yemen'),
  (195, 'Zambia'),
  (196, 'Zimbabwe');