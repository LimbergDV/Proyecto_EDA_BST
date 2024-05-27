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

let btnValueMin = document.getElementById("valueMin")
btnValueMin.addEventListener("click", ()=>{
    let result = bst.min();
    
    if(result == null){
        alert("No se encontró");
    } else{
        alert(`Encontré el producto: ${result.value.name} que es el menor`);
    }
});

let btnValueMax = document.getElementById("valueMax")
btnValueMax.addEventListener("click", ()=>{
    let result = bst.max();

    if(result == null){
        alert("No se encontró");
    } else {
        alert(`Encontré el producto: ${result.value.name} que es el mayor`);
    }
});

let btnRecorrerArbol = document.getElementById("printData");
btnRecorrerArbol.addEventListener("click", ()=>{
    const imprimir =(node)=>{
        let apartado = document.getElementById("productos");

        let etiqueta = document.createElement("p");
        etiqueta.innerText = `Nombre: ${node.value.name}, Categoría: ${node.value.category}, Proveedor: ${node.value.supplier}, Precio: $${node.value.price}`;
        apartado.appendChild(etiqueta);
    }

    bst.recorridoInorden(bst.getRoot(), imprimir);
});

