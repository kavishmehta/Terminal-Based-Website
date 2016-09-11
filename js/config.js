//Create a time variable
var today = new Date();
var hours = ((today.getHours() < 10) ? "0" : "") + today.getHours();
var minutes = ((today.getMinutes() < 10) ? "0" : "") + today.getMinutes();
var name = '< Kavish_Mehta >';
var time = hours + ':' + minutes +' '+ name;

// JS for page one
$(function(){
	$(".pageone").typed({
		strings: ["Page Loading...<br>Welcome to Website!"],
		contentType: 'html',
		typeSpeed: -3,
		loop: false,
		showCursor: true,
	});
},0);

//JS for page two
setTimeout(function(){
	$(".typed-cursor").css("display","none");
	$(".pageone").css("display","none");
	$(".pagetwo").typed({
		strings: ["Loading Windows 8.1 NVIDIA GTX-970..."],
		typeSpeed: -3,
		loop: false,
	});
},2000);

//JS for page three

setTimeout(function (){
	$(".typed-cursor").css("display","none");
	$(".pagetwo").css("display","none");
	$(".three-one").css("display","inherit");
	$(".useless").typed({
		strings: [""],
		showCursor: true
	})
},4000);

setTimeout(function (){
	$(".typed-cursor").css("display","none");
	$(".pagetwo").css("display","none");
	$(".three-two").css("display","inherit");
	$(".useless2").typed({
		strings: [""],
		showCursor: true
	})
},4500);

setTimeout(function (){
	$(".typed-cursor").css("display","none");
	$(".pagetwo").css("display","none");
	$(".three-three").css("display","inherit");
	$(".useless3").typed({
		strings: [""],
		showCursor: true
	})
},5000);

setTimeout(function (){
	$(".typed-cursor").css("display","none");
	$(".pagetwo").css("display","none");
	$(".three-four").css("display","inherit");
	$(".useless4").typed({
		strings: [""],
		showCursor: true
	})
},5800);

setTimeout(function (){
	$(".typed-cursor").css("display","none");
	$(".pagetwo").css("display","none");
	$(".three-five").css("display","inherit");
	$(".useless5").typed({
		strings: [""],
		showCursor: true
	})
},6300);

setTimeout(function (){
	$(".typed-cursor").css("display","none");
	$(".pagetwo").css("display","none");
	$(".three-six").css("display","inherit");
	$(".useless6").typed({
		strings: [""],
		showCursor: true
	})
},7000);

setTimeout(function (){
	$(".typed-cursor").css("display","none");
	$(".pagetwo").css("display","none");
	$(".three-seven").css("display","inherit");
	$(".useless7").typed({
		strings: [""],
		showCursor: true
	})
},7700);

//JS for page four
setTimeout(function (){
	$(".typed-cursor").css("display","none");
	$(".pagethree").css("display","none");
	$(".foue-one").css("display","inherit");
	$(".four-one").typed({
		strings: ["!- friend_ [friend_@172.22.29.66] has joined #COD online."],
		showCursor: true,
		typeSpeed: 20,
		loop: false,
	})
},8000);

setTimeout(function (){
	document.getElementById('time').innerHTML = time;
	$(".typed-cursor").css("display","none");
	//$(".pagethree").css("display","none");
	$("#time").css("display","inherit");
	$(".four-two").typed({
		strings: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ^500 Aenean commodo ligula eget dolor. ^500 Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ^500 Donec quam felis, ultricies nec, pellentesque eu, pretium. ^500 Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."],
		showCursor: true,
		typeSpeed: 15,
		loop: false,
	})
},12000);

setTimeout(function (){
	document.getElementById('time2').innerHTML = time;
	$(".typed-cursor").css("display","none");
	$(".pagethree").css("display","none");
	$("#time2").css("display","inherit");
	$(".four-three").typed({
		strings: ["Nullam dictum felis eu pede mollis pretium. ^500 Cras dapibus elementum semper nisi vulputate eleifend tellu."],
		showCursor: true,
		typeSpeed: 15,
		loop: false,
	})
},37000);

setTimeout(function (){
	document.getElementById('time3').innerHTML = time;
	$(".typed-cursor").css("display","none");
	$(".pagethree").css("display","none");
	$("#time3").css("display","inherit");
	$(".four-four").typed({
		strings: ["Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."],
		showCursor: true,
		typeSpeed: 15,
		loop: false,
	})
},46000);