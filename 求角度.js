(function (){
	let A = {X:0,Y:0}
	let B = {X:4,Y:0}
	let C = {X:4,Y:4}
	var AB = Math.sqrt(Math.pow(A.X - B.X, 2) + Math.pow(A.Y - B.Y, 2));
	var AC = Math.sqrt(Math.pow(A.X - C.X, 2) + Math.pow(A.Y - C.Y, 2));
	var BC = Math.sqrt(Math.pow(B.X - C.X, 2) + Math.pow(B.Y - C.Y, 2));
	var cosA = (
				Math.pow(AB, 2) + Math.pow(AC, 2) - Math.pow(BC, 2)
			  ) / (
				2 * AB * AC
			  );
	var angleA = Math.round( Math.acos(cosA) * 180 / Math.PI );
	console.log(angleA)
	// 得到angleA角度：45°
	
	/*
		AB      = 开根( (A.X-B.X)² + (A.Y-B.Y)² ）
		AC      =       A.X-C.X      A.Y-C.Y
		BC      =       B.X-C.X      B.Y-C.Y
		consA   = (AB²+AC²-BC²) / (2*AB*AC)
		angleA  = Math.acos(cosA)*180/Math.PI
	*/
})()

// 作者：大Q本Q
// 链接：https://www.jianshu.com/p/0050096e0d85
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。