/**
 * 根据传入的format，返回对应格式时间
 */
export function formatTime(fmt, date) {
    let ret;
    const opt = {
        "y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }

    if (fmt.includes('NaN')) {
        return ''
    } else {
        return fmt
    }
}

/**
 * 获取某年某月有多少天
 */
 export const getOneMonthDays = (year,month)=>{
	month = Number(month);
	const baseMonthsDays = [31,28,31,30,31,30,31,31,30,31,30,31];
	if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
		if(month === 1){
			baseMonthsDays[month] = 29;
		}
	}
	if(month==12){
		month=11;
	}
	return baseMonthsDays[month];
}

/**
 * 获取日期的年月日时分秒
 */
export const getTimeArray = (date)=>{
	const year = date.getFullYear();
	const month = date.getMonth()+1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	return [year,month,day,hour,minute,second];
}
/**
 * 小于10的数字前面补0
 */
export const addZero = (num)=>{
	return num < 10 ? '0' + num : num;
}
