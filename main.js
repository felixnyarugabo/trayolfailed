



// • Save a list of favourite products in localStorage.
// • Load the saved list when the page opens.
// • Handle the case where no saved data exists.
// • Build a simple user profile card from fetched JSON data.


const products = [
    {
        id: 1,
        name: "Laptop",
        price: 80000,
        stock: 5,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        stock: 10,
        category: "Phones"
    },
    {
        id: 3,
        name: "Headphones",
        price: 3500,
        stock: 15,
        category: "Accessories"
    },
    {
        id: 4,
        name: "Keyboard",
        price: 2500,
        stock: 8,
        category: "Accessories"
    },
    {
        id: 5,
        name: "Mouse",
        price: 1200,
        stock: 20,
        category: "Accessories"
    },
    {
        id: 6,
        name: "Monitor",
        price: 18000,
        stock: 4,
        category: "Electronics"
    },
    {
        id: 7,
        name: "Tablet",
        price: 30000,
        stock: 7,
        category: "Electronics"
    },
    {
        id: 8,
        name: "Phone Charger",
        price: 1500,
        stock: 0,
        category: "Accessories"
    },
    {
        id: 9,
        name: "Laptop Bag",
        price: 2800,
        stock: 12,
        category: "Accessories"
    },
    {
        id: 10,
        name: "Smart Watch",
        price: 6500,
        stock: 6,
        category: "Wearables"
    },
    {
        id: 11,
        name: "Power Bank",
        price: 4000,
        stock: 9,
        category: "Accessories"
    },
    {
        id: 12,
        name: "Bluetooth Speaker",
        price: 5500,
        stock: 3,
        category: "Electronics"
    },
    {
        id: 13,
        name: "Webcam",
        price: 3200,
        stock: 0,
        category: "Electronics"
    },
    {
        id: 14,
        name: "Flash Drive",
        price: 1000,
        stock: 25,
        category: "Storage"
    },
    {
        id: 15,
        name: "External Hard Drive",
        price: 12000,
        stock: 5,
        category: "Storage"
    }
];

const main = document.getElementById('main')
const containner= document.getElementById('containner')
const storage =JSON.parse(localStorage.getItem('users')) || []

const favourite = []

function listproduct(){

    localStorage.setItem("users",JSON.stringify(favourite))

    if(products.length < 0){
        console.log("empty storage")
        return
    }
    else{
        console.log(products)
    }


    storage.forEach(function(user){
     let p = document.createElement('p')
     let button = document.createElement('button')
     containner.appendChild(button)
     button.innerText= "check"
     
     button.addEventListener('click',function(user){

        p.innerHTML=` <h1>product ${user.name} </h1> <br><h1> price : ${user.price} </h1> <br> <h1>stock ${user.stock}</h1>`

       favourite.push(p)

       containner.appendChild(storage)
     })
})


}
listproduct()