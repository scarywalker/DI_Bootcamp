select first_name, last_name from students where SUBSTRING(first_name, LENGTH(first_name) - 1, 1) ILIKE '%a';