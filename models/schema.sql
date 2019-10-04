
DROP DATABASE IF EXISTS bucket_besties_db;

CREATE DATABASE bucket_besties_db;


USE bucket_besties_db;

CREATE TABLE Users (
id int NOT NULL AUTO_INCREMENT,
firstName VARCHAR (100) NOT NULL,
lastName VARCHAR (100) NOT NULL,
username VARCHAR (200) NOT NULL,
email VARCHAR (200) NOT NULL,
lat VARCHAR (100) NOT NULL,
lon VARCHAR (100) NOT NULL,
surveyQ1 INTEGER (200) NOT NULL,
surveyQ2 INTEGER (200) NOT NULL,
surveyQ3 INTEGER (200) NOT NULL,
surveyQ4 INTEGER (200) NOT NULL,
surveyQ5 INTEGER (200) NOT NULL,
PRIMARY KEY (id)
);

use bucket_besties_db;

create database bucket_besties_db;

use bucket_besties_db;

create table users(
id int auto_increment,
firstName varchar(100) not null,
lastName varchar(100) not null,
userName varchar(100) not null,
email varchar(50) not null,
lat decimal(5,3) not null,
lon decimal(5,3) not null,
surveyQ1 int not null,
surveyQ2 int not null,
surveyQ3 int not null,
surveyQ4 int not null,
surveyQ5 int not null,
primary key(id)
);

create table activities(
id int auto_increment,
activityDescription varchar(100) not null,
category varchar(50) not null,
primary key(id)
);

create table bridge(
userID int not null,
activityID int not null,
completeByDate date,
completed boolean default false,
foreign key (userID) references users(id),
foreign key (activityID) references activities(id)
);


