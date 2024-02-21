import { useState } from "react";

export function App(){
    // J'ai mes données
    const products = [
        {name : "Pop Pikachu", price:15, stock:20,img : src=""},
        {name : "Pop Hedweedge", price:35, stock :30, img : "http://unsplash.it/100/100" },
        {name : "Pop Sangoku", price:35, stock :15, img : "http://unsplash.it/100/100"},
        {name : "Pop Pichu", price:20, stock:20, img : "http://unsplash.it/100/100"}
    ];

    const [maxPrice,setMaxPrice]=useState(35);

    const filteredProducts = products.filter((product)=>{
        return product.price < maxPrice;
    } )

    function updateMaxPrice(ev){
        const value = ev.target.value;
        setMaxPrice(value);
       
    }

    const productsBalises = filteredProducts.map( (product,i) => {
        return (
            <div key={i} style={{border:"solid black 1px"}}>
                <p> {product.name} </p>
                <p> {product.price} €</p>
                <p> stock:{product.stock} </p>
                <img src={product.img} alt="" />
            </div>
        )
    } );
    return (
        <div>
            {maxPrice+"€"}
             <label><input type="range" max="1000" defaultValue={1000} onInput={updateMaxPrice}/></label>
            {productsBalises}
        </div>
    )
}






