import math as m
class Circle:
    def __init__(self,r_or_2r:str,r_or_2r_value:int):

        if r_or_2r == 'r':  
            self.r = r_or_2r_value
        elif r_or_2r == '2r':  
            self.r = r_or_2r_value/2
        else:  
            raise TypeError("wrong input, it's either 'r' or '2r'")
        
        self.area = self.r**2*m.pi/2

    def __str__(self):  
        return f"{self.r} is the radius and {self.area} is the area"
    
    def __repr__(self):
        return f"Circle:{self.r}"
    
    def __add__(self,other):
        if isinstance(other,Circle):  
            return self.r + other.r
        else:  
            raise TypeError("Not a circle")
        
    def __max__(self,other):
        if isinstance(other,Circle):  
            if self.r >= other.r:
                return self
            else:
                return other
        else:  
            raise TypeError("Not a circle")
        
    def __min__(self,other):
        if isinstance(other,Circle):  
            if self.r <= other.r:
                return self
            else:
                return other
        else:  
            raise TypeError("Not a circle")
        
    def __eq__(self,other):
        if isinstance(other,Circle):  
            return self.r == other.r
        
    def __lt__(self,other):
        if isinstance(other,Circle):  
            return self.r < other.r

    def __gt__(self,other):
        if isinstance(other,Circle):  
            return self.r > other.r
        
    def __ge__(self,other):
            if isinstance(other,Circle):  
                return self.r >= other.r
            
    def __le__(self,other):
                return self.r <= other.r
        

c1 = Circle('r',4)
c2 = Circle('2r',3)
c3 = Circle('2r',1)
c4 = Circle('r',1)
c5 = Circle('2r',7)

circle_list = [c1,c2,c3,c4,c5]

print(sorted(circle_list))

print(c1<c2)