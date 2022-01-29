const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]


function contarOvejas(ovejas) {
    ovejas = ovejas.filter((oveja) => oveja.color === 'rojo' && oveja.name.toLowerCase().includes('na'));
    return ovejas
}


console.log(contarOvejas(ovejas));