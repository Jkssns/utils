function timeFormat(value) {
	var theTime = parseInt(value);// 秒
	var middle= 0;// 分
	var hour= 0;// 小时
	let addZero = (num) => {
		if (!num) return '00'
		return num < 10 ? '0' + num : num
	}

	if(theTime > 60) {
		middle= parseInt(theTime/60);
		theTime = parseInt(theTime%60);
		if(middle> 60) {
			hour= parseInt(middle/60);
			middle= parseInt(middle%60);
		}
	}
	return `${addZero(parseInt(hour))}:${addZero(parseInt(middle))}:${addZero(parseInt(theTime))}`
}