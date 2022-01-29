function contains(store, product) {
    if (typeof store === 'object') {
        const stockArr = Object.values(store);
        const isProductInStock = stockArr.some((stock) => contains(stock, product));

        return isProductInStock;
    } else {
        return store === product;
    }
        
}


const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta'
        }
    }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

console.log(contains(almacen, 'camiseta')) // true
console.log(contains(otroAlmacen, 'gameboy'));