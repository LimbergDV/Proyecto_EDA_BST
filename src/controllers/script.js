import { bst } from "./dependencies.js";
import Producto from "../modells/bst/Producto.js";

let btn = document.getElementById("btn-add")
btn.addEventListener("click", ()=> {
    let name = document.getElementById("name").value
    let category = document.getElementById("category").value
    let supplier = document.getElementById("supplier").value
    let price = document.getElementById("price").value
    let producto = new Producto(name, category, supplier, price)
    console.log(bst)
    if(bst.add(producto))
        alert("Registro exitoso")
    else
        alert("Ocuarrio un problema")
});

let btnSearch = document.getElementById("btnSearch")
btnSearch.addEventListener("click", ()=>{
    let name = document.getElementById("nameSearch").value;
    let category = document.getElementById("categorySearch").value;
    let supplier = document.getElementById("supplierSearch").value;
    let price = document.getElementById("priceSearch").value;

    if(bst.search(name, category, supplier, price) == null){
        alert("No se encontró");
    } else {
        alert(`Encontré al producto: ${bst.search(name, category, supplier, price).value.name}`);
    }
});
