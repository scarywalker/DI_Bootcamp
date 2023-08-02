import psycopg2
import requests
import random
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'rererer1R'
DATABASE = 'countries'


def fetch_10_random_countries():
    api_url = "https://restcountries.com/v3.1/all"
    response = requests.get(api_url)
    if response.status_code == 200:
        country_data = response.json()
    else:
        print("Failed to fetch data from the API.")
        return None
    for x in range(10):
        num = random.randint(0,249)
        name = country_data[num]['name']['official']
        capital = country_data[num]['capital']
        flag = country_data[num]['flag']
        subregion = country_data[num]['subregion']
        population = country_data[num]['population']
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = f"insert into countries(name,capital,flag,subregion,population) VALUES('{name}','{capital[0]}','{flag}','{subregion}',{population});"
        cursor.execute(query)
        connection.commit()
        connection.close()
