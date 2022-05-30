// Add the coffee to local storage with key "coffee"
var counter = 0

let cardArray = JSON.parse(localStorage.getItem("coffee")) || []
console.log(cardArray)

data1()
async function data1(){

    try{
        let res = await fetch(" https://masai-mock-api.herokuapp.com/coffee/menu")

        let data = await res.json();

        let fin = data.menu.data

        appendData(fin)
    }
    catch(error){
        console.log(error)
    }
}


var container = document.getElementById("menu")

function appendData(fin){
    fin.map(function(elem){
        let div1 = document.createElement("div")

        let nam  = document.createElement("p")
        nam.innerText=elem.title;

        let pri = document.createElement("p")
        pri.innerText= elem.price;

        let img = document.createElement("img")
        img.src= elem.image
        img.style.heigth = "200px"
        img.style.width = "200px"

        var but  = document.createElement("button")
        but.innerText="Add To Bucket"
        but.setAttribute("id","add_to_bucket")
        but.addEventListener("click",function(){
            addToCart()
       })
       div1.append(img,nam,pri,but)

       document.getElementById("menu").append(div1)

       localStorage.setItem("coffee",JSON.stringify(cardArray))
    })
        
}