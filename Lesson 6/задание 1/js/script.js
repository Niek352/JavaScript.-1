var doc = document;
var myPict1 = doc.getElementById('pic1');
var myPict2 = doc.getElementById('pic2');
var myPict3 = doc.getElementById('pic3');
var myPict4 = doc.getElementById('pic4');
var mainPic = doc.getElementById('main_pic');
var left = doc.getElementById('left');
var right = doc.getElementById('right');	

right.addEventListener('click' , right_pic)
left.addEventListener('click' , left_pic)
myPict1.addEventListener('click' , Refresh1)
myPict2.addEventListener('click' , Refresh2)	
myPict3.addEventListener('click' , Refresh3)
myPict4.addEventListener('click' , Refresh4)



function Refresh1() {
	mainPic.src = 'img/1.jpg'
}

function Refresh2() {
	mainPic.src = 'img/2.jpg'
}

function Refresh3() {
	mainPic.src = 'img/3.jpg'
}

function Refresh4() {
	mainPic.src = 'img/4.jpg'
}

function left_pic() {
	let i = [mainPic.src]
	let arr = i.toString().split(/(\d)/);
	while (arr.length > 2) {
		arr.splice(0, 1);
	}
	arr[0] = parseInt(arr[0])

	mainPic.src = 'img/' + --arr[0] + '.jpg'
	if ((arr[0]) == 0) {
		mainPic.src = 'img/4.jpg'
	}
}
	
	function right_pic() {
	let i = [mainPic.src]
	let arr = i.toString().split(/(\d)/);
	while (arr.length > 2) {
	arr.splice(0, 1);
	}
	arr[0] = parseInt(arr[0])
	mainPic.src = 'img/' + ++arr[0] + '.jpg'
		
	if ((arr[0]) == 5) {
	mainPic.src = 'img/1.jpg'
	}
 }