-- 1
-- select * from customer
-- 2
-- SELECT first_name || ' ' || last_name AS full_name FROM customer;
-- 3
-- select distinct create_date from customer
-- 4
-- select * from customer order by first_name asc
-- 5
-- select film_id, title , description , release_year, rental_rate from film order by rental_rate asc
-- 6
-- select address , phone from address where district = 'Texas'
-- 7
-- select * from film where film_id in (15,150)
-- 8
-- SELECT film_id , title , description , length , rental_rate FROM film WHERE title = 'Alien Center';
-- 9
-- SELECT film_id , title , description , length , rental_rate FROM film WHERE title ilike '%wo%'
-- 10
-- select * from film order by rental_rate limit 10
-- 11
-- select * from film order by rental_rate offset 10 limit 10
-- 12
-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date FROM customer INNER JOIN payment ON customer.customer_id = payment.customer_id;
-- 13
-- select distinct * FROM film AS f WHERE f.film_id NOT IN ( SELECT film_id FROM inventory)
-- 14
select city.city_id,city.city,country.country_id ,country.country from city join country on city.country_id = country.country_id
