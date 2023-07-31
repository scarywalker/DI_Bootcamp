create table students(
	id SERIAL PRIMARY KEY,
	last_name VARCHAR (100) NOT NULL,
	first_name VARCHAR (50) NOT NULL,
 	birth_date DATE NOT NULL)