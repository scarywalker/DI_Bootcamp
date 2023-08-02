-- Database: Exercise-day4

-- DROP DATABASE IF EXISTS "Exercise-day4";

-- CREATE DATABASE "Exercise-day4"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- create table Menu_Items(
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR(30) NOT NULL,
-- 	item_price SMALLINT DEFAULT 0
-- );