class Pagination:
    def __init__(self,items=None,pagesize=10):
        self.items = items
        self.pagesize = pagesize
        self.currentpage = 1
        self.totalpages = len(self.items)//self.pagesize +1
        
    def getVisibleItems(self): 
        if self.currentpage < 1: self.currentpage = 1
        if self.currentpage > self.totalpages: self.currentpage = self.totalpages        
        print(self.items[(self.currentpage-1)*self.pagesize:self.currentpage*self.pagesize])
    def firstpage(self): self.currentpage = 1
    def lastpage(self): self.currentpage = len(self.items)//self.pagesize +1
    def nextpage(self):  self.currentpage += 1
    def prevpage(self): self.currentpage -= 1
    def gotopage(self,pagenum): self.currentpage = int(pagenum)

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

p.getVisibleItems()

p.nextpage()

p.getVisibleItems()

p.gotopage(5)

p.getVisibleItems()

p.lastpage()

p.getVisibleItems()

p.prevpage

p.getVisibleItems()

p.firstpage()

p.getVisibleItems()

p.gotopage(55)

p.getVisibleItems()

p.gotopage(-5)

p.getVisibleItems()

p.gotopage(2.4)

p.getVisibleItems()