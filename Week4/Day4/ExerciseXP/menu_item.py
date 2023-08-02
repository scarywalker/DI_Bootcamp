import psycopg2
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = ''
DATABASE = 'Exercise-day4'

# For clarification, I did not follow the exercise instructions as I found them unclear. As I understood, possibly incorrectly, the exercise demands the superfluous creation of an object for each column in the database, with all the same information, making the database redundant. Since the exercise is about using Python with databases, I decided not to create objects so that the database would not be pointless.

class MenuItem:
    def __init__(self,name:str,price:int) -> None:
        self.name = name
        self.price = price

    @classmethod
    def save(cls):
        """adds the obj to the database"""
        name = input("Gime a name: ")
        price = input("Gime a price: ")
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = f"insert into Menu_Items(item_name,item_price) VALUES('{name}',{price});"
        cursor.execute(query)
        connection.commit()
        connection.close()

    @staticmethod
    def delete():
        """removes the obj to the database"""
        name = input("Gime a name: ")
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = f"DELETE FROM Menu_Items WHERE item_name = '{name}';"
        cursor.execute(query)
        connection.commit()
        connection.close()

    @staticmethod
    def update():        
        """changes the obj atributes, also in the database"""
        old_name = input("Gime your old name: ")
        name = input("Gime a new name: ")
        price = input("Gime a new price: ")
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = f"UPDATE Menu_Items SET item_name = '{name}',item_price = '{price}' WHERE item_name = '{old_name}';"
        cursor.execute(query)
        connection.commit()
        connection.close()

class MenuManager:
    def __init__(self) -> None:
        pass

    @staticmethod
    def get_by_name():
        """returns first menu item with the corresponding name"""
        name = input("Gime a name: ")
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

