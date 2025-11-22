// create database social_media_db;

// use social_media_db;

// create table Person(
// person_username varchar(50),
// person_fname varchar(20),
// person_lname varchar(20),
// person_email varchar(50),
// person_dob date,
// person_gender varchar(10),
// person_password varchar(100),
// primary key(person_username)
// );

// create table Post(
// post_id int,
// person_username varchar(50),
// post_content varchar(1000),
// createdAt date,
// primary key(post_id),
// foreign key(person_username)references Person(person_username)
// );

// create table Liked(
// person_username varchar(30),
// post_id int,
// primary key (post_id,person_username),
// foreign key(person_username)references Person(person_username),
// foreign key(post_id)references Post(post_id)
// );

// drop table Person;

// drop table Liked;

// drop table Post;




