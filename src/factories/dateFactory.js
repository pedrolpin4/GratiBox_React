import dayjs from "dayjs";

const verifyDay = (date) => {
    const verifiedDay = dayjs(date)['$W'];

    if(verifiedDay === 1) {
        const newDate = `${date.split('-')[0]}-${date.split('-')[1]}-${Number(date.split('-')[2]) === 1 ? '02' : Number(date.split('-')[2]) + 1}`
        return newDate;
    }
    if(verifiedDay === 7) {
        const newDate = `${date.split('-')[0]}-${date.split('-')[1]}-${Number(date.split('-')[2]) === 1 ? '03' : Number(date.split('-')[2]) + 2}`
        return newDate;
    }
    return date;
};

const calcNextMonthDeliveries = (day) => {
    const today = dayjs().format('YYYYY-MM-DD');
    const splittedToday = today.split("-")
    const thisDay = Number(splittedToday[3]);
    const thisMonth = Number(splittedToday[2]);
    const thisYear = Number(splittedToday[0]);

    const calcUniqueDate = (n) => {
        return `${thisMonth + n > 12 ? thisYear + 1 : thisYear}-${thisMonth + n > 12 ? 
            (thisMonth - (12-n)) < 10 ? '0' + (thisMonth - (12-n)) : (thisMonth - (12-n)) :
            (thisMonth + n) < 10 ? '0' + (thisMonth + n) : (thisMonth + n)}`
    }

    if(day === '1st'){
        return([
            verifyDay(`${calcUniqueDate(1)}-01`),
            verifyDay(`${calcUniqueDate(2)}-01`),
            verifyDay(`${calcUniqueDate(3)}-01`),
        ])
    }

    if(day === '10th'){
        if(thisDay > 10){
            return([
                verifyDay(`${calcUniqueDate(1)}-10`),
                verifyDay(`${calcUniqueDate(2)}-10`),
                verifyDay(`${calcUniqueDate(3)}-10`),
            ])  
        }

        return([
            verifyDay(`${thisYear}-${thisMonth}-10`),
            verifyDay(`${calcUniqueDate(1)}-10`),
            verifyDay(`${calcUniqueDate(2)}-10`),
        ]) 
    }

    if(day === '20th'){
        if(thisDay > 20){
            return([
                verifyDay(`${calcUniqueDate(1)}-20`),
                verifyDay(`${calcUniqueDate(2)}-20`),
                verifyDay(`${calcUniqueDate(3)}-20`),
            ])  
  
        }
        return([
            verifyDay(`${thisYear}-${thisMonth}-20`),
            verifyDay(`${calcUniqueDate(1)}-20`),
            verifyDay(`${calcUniqueDate(2)}-20`),
        ]) 
    }
}

const calcUniqueWeekDate = (plus, today) => {
    const oneWeek = 7 * 86400000; 
    const week1 = dayjs(today + plus).format('YYYY-MM-DD');
    const week2 = dayjs(today + plus + oneWeek).format('YYYY-MM-DD');
    const week3 = dayjs(today + plus + oneWeek * 2).format('YYYY-MM-DD');

    return [week1, week2, week3];
}

const calcNextWeeksDeliveries = (day) => {
    const today = Date.now();
    const verifiedDay = dayjs()['$W'];

    if(day === 'Monday'){
        const plus = (7 - (verifiedDay - 1)) * 86400000;
        return calcUniqueWeekDate(plus, today)
    }

    if(day === 'Wednesday'){
        const plus = (7 - (verifiedDay - 3)) * 86400000;
        return calcUniqueWeekDate(plus, today)
    }

    if(day === 'Friday'){
        const plus = (7 - (verifiedDay - 5)) * 86400000;
        return calcUniqueWeekDate(plus, today)
    }
}

export {
    calcNextMonthDeliveries,
    calcNextWeeksDeliveries,
} 