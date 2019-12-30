function isLeapYear(date) {
    let year = new Date(date);
    year = year.getFullYear();
    let leap = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    if (Number.isNaN(year)) {
        return 'Invalid Date';
    } else if (leap) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

isLeapYear('2020-01-01 00:00:00'); // =>  ‘2020 is a leap year’
