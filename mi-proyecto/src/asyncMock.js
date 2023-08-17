const products = [
    {
        id: '1',
        name: 'Nintendo Switch',
        price: 350,
        categoria: 'consolas',
        img:'https://dcmallio.vtexassets.com/arquivos/ids/326829678-800-800?v=638273028245270000&width=800&height=800&aspect=true',
        stock: 30,
        description:'Sumérgete en el mundo de los videojuegos con la Nintendo Switch de 32GB, una consola híbrida que te permite disfrutar de tus juegos favoritos tanto en casa como en cualquier lugar. Con su diseño en rojo neón, azul neón y negro, esta consola es perfecta para aquellos que buscan estilo y funcionalidad.'
    },
    {
        id: '2',
        name: 'Zelda:Breath Of The Wild',
        price: 50,
        categoria: 'videojuegos',
        img:'https://static.fnac-static.com/multimedia/Images/FR/NR/fe/49/82/8538622/1540-1/tsp20230707092755/The-Legend-of-Zelda-Breath-of-the-Wild-Edition-Limitee-Nintendo-Switch.jpg',
        stock: 40,
        description:'The Legend of Zelda: Breath of the Wild es un videojuego exclusivo de Nintendo, desarrollado, producido y distribuido por la misma compañía, para las videoconsolas Wii U y Nintendo Switch.'
    },
    {
        id: '3',
        name: 'Peluche Korok',
        price: 20,
        categoria: 'merchandising',
        img:'https://zelda-shop.com/cdn/shop/products/korok_plush_1200x1200.jpg?v=1662813604',
        stock: 22,
        description:'Peluche de los Espiritus Del Bosque. Los Kologs o Korok, también conocidos como los espíritus del Bosque, son una raza vegetal que en el juego The Legend of Zelda: The Wind Waker habita en la Isla del Bosque. Medida: 18 cm de largo'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById =(productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(
          (prod) => prod.categoria === categoryId
        );
        resolve(filteredProducts);
      }, 500);
    });
  };




