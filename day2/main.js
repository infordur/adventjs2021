const carta = '   bici  coche  balón  _playstation   bici coche peluche';

function listGifts(letter) {
    let giftList = {};
    letter = letter.trim().replace(/\s+/g, ' ').split(' ');
    letter.map((gift) => {
        if (!gift.startsWith('_')) {
            if (giftList.hasOwnProperty(gift)) {
                giftList[gift] += 1;
            } else {
                giftList[gift] = 1;
            }
        } 
    });
    return giftList;
}

console.log(listGifts(carta));