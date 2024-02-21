import { useState } from "react";

export function FormAdProduct() {
    
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      
      return console.log("error");
    }
    function generate() {
        
          return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        
    }

    // Créer un nouvel objet produit
    const newProduct = {
      name,
      description,
      price,
      id: {generate},
      
    };
    
    // Mettre à jour l'état des produits
    setProducts([...products, newProduct]);

    // Vider les champs du formulaire
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de la chaussure"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          name="description"
          placeholder="Description de la Chaussure"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button name="submit" type="submit">Ajouter</button>
      </form>
      {products.map((product) => (
        <div key={product.id}>
            <h2>Nom:{product.name}</h2>
            <h3>Details:{product.description}</h3>
            <h4>Prix:{product.price}€</h4>
        </div>
      ))}
    
    </>
  );
}
