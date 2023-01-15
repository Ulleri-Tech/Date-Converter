(function () {
    'use strict';

    //https://github.com/codexen/nepali-datepicker/blob/master/js/nepdatepicker.js

    // 1943 April 14 to 2044 April 16(nearly)
    const numberOfDaysEachYearBS = {
        '2000': 365,
        '2001': 365,
        '2002': 365,
        '2003': 366,
        '2004': 365,
        '2005': 365,
        '2006': 365,
        '2007': 366,
        '2008': 365,
        '2009': 365,
        '2010': 365,
        '2011': 366,
        '2012': 365,
        '2013': 365,
        '2014': 365,
        '2015': 366,
        '2016': 365,
        '2017': 365,
        '2018': 365,
        '2019': 366,
        '2020': 365,
        '2021': 365,
        '2022': 365,
        '2023': 366,
        '2024': 365,
        '2025': 365,
        '2026': 366,
        '2027': 365,
        '2028': 365,
        '2029': 365,
        '2030': 366,
        '2031': 365,
        '2032': 365,
        '2033': 365,
        '2034': 366,
        '2035': 365,
        '2036': 365,
        '2037': 365,
        '2038': 366,
        '2039': 365,
        '2040': 365,
        '2041': 365,
        '2042': 366,
        '2043': 365,
        '2044': 365,
        '2045': 365,
        '2046': 366,
        '2047': 365,
        '2048': 365,
        '2049': 365,
        '2050': 366,
        '2051': 365,
        '2052': 365,
        '2053': 365,
        '2054': 366,
        '2055': 365,
        '2056': 365,
        '2057': 366,
        '2058': 365,
        '2059': 365,
        '2060': 365,
        '2061': 366,
        '2062': 365,
        '2063': 365,
        '2064': 365,
        '2065': 366,
        '2066': 365,
        '2067': 365,
        '2068': 365,
        '2069': 366,
        '2070': 365,
        '2071': 365,
        '2072': 365,
        '2073': 366,
        '2074': 365,
        '2075': 365,
        '2076': 365,
        '2077': 366,
        '2078': 365,
        '2079': 365,
        '2080': 365,
        '2081': 366,
        '2082': 366,
        '2083': 365,
        '2084': 365,
        '2085': 367,
        '2086': 366,
        '2087': 366,
        '2088': 365,
        '2089': 366,
        '2090': 366,
        '2091': 366,
        '2092': 366,
        '2093': 366,
        '2094': 365,
        '2095': 366,
        '2096': 364,
        '2097': 366,
        '2098': 366,
        '2099': 365,
        '2100': 365
    };
    const numberOfDaysEachMonthBS = {
        "2000": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2001": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2002": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2003": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2004": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2005": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2006": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2007": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2008": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        "2009": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2010": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2011": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2012": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        "2013": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2014": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2015": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2016": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        "2017": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2018": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2019": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2020": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        "2021": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2022": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        "2023": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2024": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        "2025": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2026": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2027": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2028": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2029": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
        "2030": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2031": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2032": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2033": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2034": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2035": [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        "2036": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2037": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2038": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2039": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        "2040": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2041": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2042": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2043": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        "2044": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2045": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2046": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2047": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        "2048": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2049": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        "2050": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2051": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        "2052": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2053": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        "2054": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2055": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2056": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
        "2057": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2058": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        "2059": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2060": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2061": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2062": [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
        "2063": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2064": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2065": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2066": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        "2067": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2068": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2069": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2070": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        "2071": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        "2072": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        "2073": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        "2074": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        "2075": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        '2076': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        '2077': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        '2078': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        '2079': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        '2080': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        '2081': [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        '2082': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        '2083': [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
        '2084': [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
        '2085': [31, 32, 31, 32, 31, 31, 30, 30, 29, 30, 30, 30],
        '2086': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        '2087': [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
        '2088': [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
        '2089': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        '2090': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        '2091': [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
        '2092': [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        '2093': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        '2094': [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
        '2095': [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
        '2096': [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        '2097': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        '2098': [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 30, 31],
        '2099': [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30],
        '2100': [31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30]
    };

    const monthNamesBS = [
        'वैशाख',
        'जेठ',
        'आषाढ',
        'श्रवण',
        'भद्र',
        'अश्विन',
        'कार्तिक',
        'मङ्सिर',
        'पौष',
        'माघ',
        'फाल्गुन',
        'चैत्र'
    ];
    const nepaliNum = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

    const weekDayBS = [
        'आइतबार',
        'सोमबार',
        'मङ्गलबार',
        'बुधवार',
        'बिहीबार',
        'शुक्रबार',
        'शनिबार'
    ];

    const START_YEAR = 1943; // 2000
    const START_MONTH = 3; // 0 (Baisakh)
    const START_DAY = 14; // 1 (first day)
    const MILL_TO_DAY = 86400000;

    // 1943 April 14 to 2044 April 16(nearly)
    // month is 0 to 11 number and day is 1 to 32
    function ADTOBS(year, month, day) {
        const START_DATE = new Date(START_YEAR, START_MONTH, START_DAY);
        if (!year) year = new Date().getUTCFullYear();
        if (!month) month = new Date().getUTCMonth();
        if (!day) day = new Date().getUTCDate();
        const dayDiff = Math.ceil((new Date(year, month, day).getTime() - START_DATE.getTime()) / MILL_TO_DAY);

        if (dayDiff < 0 || dayDiff > 36898) {
            return "Invalid Date out of range"
        }
        if (month < 0 || month > 11 || day < 0 || day > 32) {
            return "Invalid Date"
        }
        let year_bs = "2000";
        let totalCount = 0;
        let countUptoPreviousYear = 0;

        // find Year only first
        for (const [key, value] of Object.entries(numberOfDaysEachYearBS)) {
            countUptoPreviousYear = totalCount;
            totalCount += value;
            if (totalCount > dayDiff) {
                year_bs = key;
                break;
            }
        }
        let nthDayofYear = dayDiff - countUptoPreviousYear + 1;

        //find month 
        let total_count_month_wise = 0;
        let countUptoPreviousMonth = 0;
        let month_bs = 0;

        for (let i = 0; i < numberOfDaysEachMonthBS[year_bs].length && nthDayofYear > total_count_month_wise; i++) {
            countUptoPreviousMonth = total_count_month_wise;
            total_count_month_wise += numberOfDaysEachMonthBS[year_bs][i];
            if (countUptoPreviousMonth > 0) {
                month_bs++;
            }
        }

        let day_bs = nthDayofYear - countUptoPreviousMonth;
        return formatBSDate(year_bs, month_bs + 1, day_bs)
    }

    function BSTOAD(year, month, day) {
        let year_num = +year;
        let day_num = +day;

        if (year_num < 2000 || year_num > 2100) {
            return "Invalid Date out of range"
        }

        let dayCount = 0;

        for (const [key, value] of Object.entries(numberOfDaysEachYearBS)) {
            if (year_num == 2000) {
                break;
            }
            dayCount += value;
            if (key == year_num - 1) {
                break;
            }
        }
        for (let i = 0; i < month; i++) {
            dayCount += numberOfDaysEachMonthBS[year][i];
        }
        dayCount += day_num - 1;
        const final_time = Math.ceil((new Date(START_YEAR, START_MONTH, START_DAY).getTime())) + (dayCount * MILL_TO_DAY);

        return new Date(final_time).toLocaleDateString('en-ca');
    }

    function formatBSDate(year, month, day) {
        let monthStr;
        let dayStr;
        if (month < 10) monthStr = "0" + month;

        else monthStr = month + "";

        if (day < 10) dayStr = "0" + day;
        else dayStr = day + "";
        return `${year}-${monthStr}-${dayStr}`
    }

    function getTodayDateBS() {
        const weekday_BS = weekDayBS[new Date().getDay()];
        const [year_AD, month_AD, day_AD] = new Date().toLocaleDateString('en-ca').split("-");
        const date_BS = ADTOBS(year_AD, month_AD - 1, day_AD);
        const year_bs = convertToNepali(date_BS.split("-")[0]);
        const month_bs = date_BS.split("-")[1];
        const day_bs = convertToNepali(date_BS.split("-")[2]);
        return `${weekday_BS}, ${monthNamesBS[month_bs - 1]} ${day_bs}, ${year_bs} बि.सं`
    }

    // function makeNewArray() {
    //     let newObject = {}
    //     for (const [key, value] of Object.entries(numberOfDaysEachMonthBS)) {
    //         let total = value.reduce((init, total) => total += init, 0)
    //         newObject[key] = total
    //     }

    // }

    function getTodayDateAD() {
        return new Date().toLocaleString('en-ca', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            weekday: 'long'
        }) + " AD"
    }

    function formatedResponsAD(date_str_ad) {
        if ((date_str_ad + "").includes('Invalid')) return date_str_ad;
        return new Date(date_str_ad).toLocaleString('en-ca', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            weekday: 'short'
        })
    }

    function formatedResponsBS(date_str_bs) {
        if ((date_str_bs + "").includes('Invalid')) return date_str_bs;
        const weekday_BS = weekDayBS[new Date().getDay()];
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

    const tabs = document.querySelector(".wrapper");
    const tabButton = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content");
    const convertButtton = document.querySelector(".convert");
    const switchButton = document.querySelector(".switch");
    const clearButton = document.querySelector(".clear");
    const todayDateBS = document.getElementById("today-date-BS");
    const todayDateAD = document.getElementById("today-date-AD");
    const resultElement = document.getElementById('result-date');
    const labelHeader = document.getElementById('label-header');
    let dateBS2AD = false;

    labelHeader.innerHTML = "AD TO BS";
    todayDateBS.innerHTML = getTodayDateBS();
    todayDateAD.innerHTML = getTodayDateAD();
    tabs.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            contents.forEach(content => {
                content.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    };
    function hideLoading() {
        const loader = document.querySelectorAll(".loading");
        loader.forEach(l => {
            l.classList.remove("show");
        });
    }

    function showLoading() {
        const loader = document.querySelectorAll(".loading");
        loader.forEach(l => {
            l.classList.add("show");
        });
    }
    convertButtton.onclick = async () => {
        const date = document.getElementById('input-date').value;
        showLoading();
        const stringDate = date + "";
        const [year, month, day] = stringDate.split("-");
        if (date && !dateBS2AD) {
            const res = ADTOBS(year, month - 1, day);
            resultElement.innerHTML = formatedResponsBS(res);
        }
        else if (date && dateBS2AD) {
            if (day) {
                const res = BSTOAD(year, month - 1, day);
                resultElement.innerHTML = formatedResponsAD(res);
            }


        }
        hideLoading();

    };


    switchButton.onclick = () => {
        if (dateBS2AD) {
            labelHeader.innerHTML = "AD TO BS";
            dateBS2AD = false;
        }
        else {
            labelHeader.innerHTML = "BS TO AD";
            dateBS2AD = true;
        }
    };

    clearButton.onclick = () => {
        const inputElement = document.getElementById('input-date');
        inputElement.value = '';
    };

})();
