let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => groceries.fruits.forEach((fruit) => console.log(fruit));
displayGroceries();

const cloneGroceries = () => {
    let user = client;
    user = "Betty"; //client doesnt change because its passed by value
    let shopping = groceries;
    shopping.totalPrice = "35$" //groceries does change because its passed by reference
    shopping.paid = false //groceries does change because its passed by reference
}

cloneGroceries();