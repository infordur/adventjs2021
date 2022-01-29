const letter = '(muñeca) consola bici';

function isValid(letter) {

    // ¡No dejes que el Grinch gane!
    const openBracket = letter.includes("(");
    const endBracket = letter.includes(")");

    const isOpenAndEndBracket = openBracket && endBracket;

    const splitBySign = letter.split(/[\(\)]/)[1];
    
    const isEmptyBracket = splitBySign === '';
    
    const isMatchOpenSigns = splitBySign.match(/(\[|\{)/) === null;

    const isEmptyBracketInsideAnother = letter.match(/\(/g).length === letter.match(/\)/g)?.length;
        
    return isOpenAndEndBracket && !isEmptyBracket && isMatchOpenSigns && isEmptyBracketInsideAnother;

}


console.log(isValid("bici coche (balón) bici coche peluche")) // True
console.log(isValid("(muñeca) consola bici")) // True

console.log(isValid("bici coche (balón bici coche")) // False
console.log(isValid("peluche (bici [coche) bici coche balón")) // False
console.log(isValid("(peluche {) bici")) // False
console.log(isValid("() bici")) // False