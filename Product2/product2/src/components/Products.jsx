export function Products({products}){
    
    // Je transforme mes données en balises
    const productsBalises = products.map( (product,i) => {
        return (
            <div key={i}>
                <p> {product.name} </p>
                <p> {product.price} €</p>
                <p> stock:{product.stock} </p>
                <img src={product.img} alt="" />
            </div>
        )
    } );

    // J'affiche mes balises
    return (
        <div>
            { productsBalises }
        </div>
    )
}