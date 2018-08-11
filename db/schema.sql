-- schema.sql 

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
ID int NOT NULL AUTO_INCREMENT,
BURGER VARCHAR(100) NOT NULL,
EATEN Boolean NOT NULL,
createdAt TIMESTAMP NOT NULL,
primary key (ID)
);