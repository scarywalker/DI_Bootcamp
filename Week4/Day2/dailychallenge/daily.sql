-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- 	(5,'Pawan'),
-- 	(6,'Sharlee'),
-- 	(7,'Krish'),
-- 	(NULL,'Avtaar');

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- 	)

-- INSERT INTO SecondTab VALUES
-- 	(5),
-- 	(NULL)

-- SELECT * FROM SecondTab

-- Q1:it will spit a column that will have a single value:3

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- wrong, it was 0, I don't know why

-- Q2:it will spit a column that will have a single value:3

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- wrong again, it was 2, I don't know why

-- Q3:it will spit a column that will have a single value:2

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- wrong it was 0, I don't know why

-- Q3:it will spit a column that will have a single value:3

--  SELECT COUNT(*) 
--  FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
 
 -- wrong it was 2, I don't know why