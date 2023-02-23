import { weekDayBS, nepaliNum, monthNamesBS } from "./constant";


export function formatedBSDate(date_str_bs, date_ad) {
    if ((date_str_bs + "").includes('Invalid')) return date_str_bs;
    const weekday_BS = weekDayBS[date_ad.getDay()];
    const year_bs = convertToNepali(date_str_bs.split("-")[0]);
    const month_bs = date_str_bs.split("-")[1];
    const day_bs = convertToNepali(date_str_bs.split("-")[2]);
    return `${weekday_BS}, ${monthNamesBS[month_bs - 1]} ${day_bs}, ${year_bs}`
}

function convertToNepali(num) {
    let nepali = '';
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        nepali += nepaliNum[parseInt(num[i])];
    }
    return nepali;
}

export function formatedResponsAD(date_str_ad) {
    if ((date_str_ad + "").includes('Invalid')) return date_str_ad;
    return new Date(date_str_ad).toLocaleString('en-ca', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        weekday: 'long'
    })
}
