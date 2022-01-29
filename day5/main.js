function daysToXmas(date) {
    const thisYear = new Date().getFullYear();

    const xmasDate = new Date(`Dec 25, ${thisYear}`);
    const diferenceTime = xmasDate.getTime() - date.getTime()

    const diferenceDays = Math.ceil(diferenceTime / (1000 * 3600 * 24));
    
    return diferenceDays
}

console.log(daysToXmas(new Date('Dec 1, 2021')));
console.log(daysToXmas(new Date('Dec 24, 2021 00:00:01')));
console.log(daysToXmas(new Date('Dec 24, 2021 23:59:59')));
console.log(daysToXmas(new Date("December 20, 2021 03:24:00")));

console.log(daysToXmas(new Date('Dec 25, 2021')));
console.log(daysToXmas(new Date('Dec 26, 2021')));
console.log(daysToXmas(new Date('Dec 31, 2021')));
console.log(daysToXmas(new Date('Jan 1, 2022 00:00:01')));
console.log(daysToXmas(new Date('Jan 1, 2022 23:59:59')));

