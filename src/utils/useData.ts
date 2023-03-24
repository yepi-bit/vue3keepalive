export default function () {
    const getYear = () => {
        let year = new Date().getFullYear()
        return year
    }
    const getMonthLastDay = ()=>{
        let y = new Date().getFullYear();
        let m: string | number = new Date().getMonth() + 1;
        let d: string | number = new Date(y,m,0).getDate();
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        return [y,m,d].join("-")
    }
    const getMonthFirstDay = ()=>{
        let y = new Date().getFullYear();
        let m: string | number = new Date().getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        return [y,m,'01'].join("-")
    }
    const getYearLastDay = ()=>{
        let y = new Date().getFullYear();
        let d: string | number = new Date(y,12,0).getDate();
        d = d < 10 ? '0' + d : d;
        return [y,'12',d].join("-")
    }
    const getYearFirstDay = ()=>{
        let y = new Date().getFullYear();
        return [y,'01','01'].join("-")
    }
    const getNowDay = () => {
        let y = new Date().getFullYear();
        let m: string | number = new Date().getMonth() + 1;
        let d: string | number = new Date().getDate()
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        return [y,m,d].join("-")
    }
    return {
        getYear,
        getMonthLastDay,
        getMonthFirstDay,
        getYearLastDay,
        getYearFirstDay,
        getNowDay
    }
}

export function getMonth(){
    return new Date().getMonth() + 1
}

export function getDataDay(){
    let day = new Date().getDate()
    return day
}