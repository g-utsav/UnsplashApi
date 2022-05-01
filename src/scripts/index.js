// https://api.unsplash.com/search/photos/?query=${}&per_page=20&client_id=n7i6077rTSnrMn14pAca2RQlD7aY6f8ZwO2kQrdavCg
const API = "n7i6077rTSnrMn14pAca2RQlD7aY6f8ZwO2kQrdavCg"
import {navbar} from "../components/navbar.js"
import "../styles/index.css"
import "../styles/navbar.css"

let n = document.getElementById("navbar")
n.innerHTML = navbar();

import {searchImages, append, masterSearch} from "./fetch.js"


let search = (e) => {
    if(e.key === "Enter"){
        let value = document.getElementById("query").value;
        masterSearch(API,value)
    }
}

let deId;
let sdata = 0;
let debounce = () => {
    sdata = 0;
    let value = document.getElementById("query").value;
    if(deId){
        clearTimeout(deId)
    }
    deId = setTimeout(() => {
        masterSearch(API, value);
    },500)
}

let sort = (qvalue = document.getElementById("query").value) =>{
    let value = document.getElementById("OrderBy").value;
    let value1 = document.getElementById("orientation").value;
    let val = `&orientation=${value1}`;
    // let qvalue = document.getElementById("query").value;
    if(value1 == ""){
        val = ""
    }
    console.log(qvalue)
    masterSearch(API, qvalue,`&order_by=${value}`,val)
}

document.getElementById("OrderBy").addEventListener("change", function(){
    if(sdata == 0){
        sort()
    }else{
        cSearch()
    }
})
document.getElementById("orientation").addEventListener("change", function(){   
    if(sdata == 0){
        sort()
    }else{
        cSearch()
    }
})
document.getElementById("query").addEventListener("keydown", search)
document.getElementById("query").addEventListener("input", debounce)



let cataegories = document.getElementById("categories").children
console.log(cataegories,typeof cataegories)

let catVal = "";
function cSearch(e){
    console.log(e)
    if(e){
        catVal = e.target.id
        console.log(catVal)
    }
    sdata = 1;
    
    sort(catVal)
}
for(let x of cataegories){
    x.addEventListener("click", cSearch)
}