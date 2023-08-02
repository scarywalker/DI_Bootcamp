import psycopg2
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'rererer1R'
DATABASE = 'Exercise-day4'

# connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
# cursor = connection.cursor()
# query = "DELETE FROM Menu_Items WHERE item_id in (1,2,3,4,5,6,7,8,9,10,11,12,13,14);"
# cursor.execute(query)
# connection.commit()
# connection.close()

# connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
# cursor = connection.cursor()
# query = "SELECT * FROM Menu_Items LIMIT 20;"
# cursor.execute(query)
# results = cursor.fetchall()
# connection.close()
# for item in results: print(item)

class MenuItem:
    def __init__(self,name:str,price:int) -> None:
        self.name = name
        self.price = price

    def save(self):
        """adds the obj to the database"""
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = f"insert into Menu_Items(item_name,item_price) VALUES('{self.name}',{self.price});"
        cursor.execute(query)
        connection.commit()
        connection.close()

    def delete(self):
        """removes the obj to the database"""
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = f"DELETE FROM Menu_Items WHERE item_name = '{self.name}';"
        cursor.execute(query)
        connection.commit()
        connection.close()

    def update(self,new_item_name:str,new_item_price:int):
        """changes the obj atributes, also in the database"""
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = f"UPDATE Menu_Items SET item_name = '{new_item_name}',item_price = '{new_item_price}' WHERE item_name = '{self.name}';"
        cursor.execute(query)
        connection.commit()
        connection.close()

class MenuManager:
    def __init__(self) -> None:
        pass

    @staticmethod
    def get_by_name(name:str):
        """returns first menu item with the corresponding name"""
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = f"SELECT * FROM Menu_Items WHERE item_name = '{name}';"
        cursor.execute(query)
        results = cursor.fetchall()
        connection.close()
        if len(results) > 0: return(results[0])
        else: return(None)        

    @staticmethod
    def all_items():
        """returns all menu items"""
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items;"
        cursor.execute(query)
        results = cursor.fetchall()
        connection.close()
        return results

a = MenuItem('a',1)
b = MenuItem('b',2)
c = MenuItem('c',3)
d = MenuItem('d',4)
e = MenuItem('e',5)
f = MenuItem('f',6)
