import { useState } from "react";

export function Product(){
    const products =[
        {name: "nike",price:"80", stock:"45", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ffc3809a-2851-4d96-b8f3-ecde6ac63eef/chaussure-air-max-1-pour-FqGhHQ.png" },
        {name: "Timberland",price:"150", stock:"15", img: "https://cdn.deporvillage.com/cdn-cgi/image/f=auto,q=75,fit=contain,background=white/product/tim-tb0a2jjbf131_001.jpg" },
        {name: "Adidas",price:"100", stock:"11", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0wJP65yDKChORw-cRuqKbz1xMBnzVTNQuXMwtg_v9b5hyqjqz8XFlYwN793FnfmBY8M&usqp=CAU" },
        {name: "Doc Martens",price:"200", stock:"3", img: "https://vitrines-colmar.com/wp-content/uploads/2023/04/8313506-1-mini-6.png" },
    ]
    const [maxPrice,setMaxPrice]=useState(200);

    const filteredProducts = products.filter((product)=>{
        return product.price < maxPrice;
    } )

    function updateMaxPrice(ev){
        const value = ev.target.value;
        setMaxPrice(value);
       
    }

    const productsBalises = filteredProducts.map((product,i) => {
        return (
            <div key={i} style={{border:"solid black 1px"}}>
                <p> {product.name} </p>
                <p> {product.price} €</p>
                <p> stock:{product.stock} </p>
                <img style={{width:"30%"}}src={product.img} alt={product.name} />
            </div>
        )
    } );
    return (
        <div>
            {maxPrice+"€"}
             <label><input type="range" max="200" defaultValue={0} onInput={updateMaxPrice}/></label>
            {productsBalises}
        </div>
    )
}