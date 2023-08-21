alert("Please 'On' Desktop mode in your mobile browser ");
function myfunction(){
	let first=document.getElementById('user').value;
	let last=document.getElementById('last').value;
	document.getElementById('box').innerHTML='hai,'+'&nbsp;'+first+last;
	
	let name=first+last;
	document.getElementById('id').innerHTML=name+'&nbsp;'+'.hacker.in' +'&nbsp;'+'&#10004;';
document.getElementById('go').style="display: block;background-color: black; width:50%; color:red; border: green solid; border-radius:5px; font-size:50px;";
	alert("Check your id and click 'START' button.(scroll down or zoom out)");
	






	}
	function hack (){
alert('Welcome to hackers Area.. , For Starting this Please press "Hack" button')
document.getElementById('calculator').style="display: block; "
document.getElementById('close').style="display: none;"
let first=document.getElementById('user').value;
	let last=document.getElementById('last').value;
	let name=first+last;
	document.getElementById('name').innerHTML=name+'&nbsp;'+'.hacker.in';
	
	}
	
	
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}


// This function evaluates the expression and returns result
function calculate() {
    let a = document.getElementById("result").value ;
    let b = eval (a);
    document.getElementById("result").value =b;
}
function danger (){
	document.getElementById("fan").src="G.gif";
	document.getElementById("fanA").src="G.gif";
	document.getElementById("fanB").src="G.gif";
	
	document.getElementById("risky").style="display:none;";
	document.getElementById('re').innerHTML='Locked'
	document.getElementById('re').style="color:red;";
	document.getElementById("show").style="display:block;color:lightgreen;";
	document.getElementById('password').style="display: block;background-color: darkgrey;color: darkgreen; width:50%; height:30px;";
	document.getElementById('check').style="display: block;background-color: black; color: red; font-size:30px;"
	document.getElementById("safety").style="display:none";
	alert ('Alert mode is activated  ')
document.getElementById("cool").src="G.gif";
document.getElementById("coola").src="G.gif";
document.getElementById("coolb").src="G.gif";
document.getElementById("coolc").src="G.gif";
document.getElementById("mode").src="loading.gif";
document.getElementById("redar").src="alert.gif";
document.getElementById("processing").src="C.gif";
document.getElementById('indicator').innerHTML='Alert';
document.getElementById('indicator').style="color:red; border: solid green 1px;"
}

function safe (){
	document.getElementById("fan").src="R.gif";
	document.getElementById("fanA").src="R.gif";
	document.getElementById("fanB").src="R.gif";
	
document.getElementById("risky").style="display: block;background-color: black; color:red;font-size:30px;";

document.getElementById("safety").style="display:none;";
	document.getElementById("show").style="display:none;";
	document.getElementById('password').style="display:none;";
	document.getElementById('check').style="display:none;";
	alert (' Safe mode is activated.')
	document.getElementById('indicator').innerHTML='Safe';
	document.getElementById('indicator').style="color:lightgreen;border: solid green 1px;"
document.getElementById("cool").src="cpu.gif";
document.getElementById("coola").src="cpu.gif";
document.getElementById("coolb").src="cpu.gif";
document.getElementById("coolc").src="cpu.gif";
document.getElementById("mode").src="safe.gif";
document.getElementById("redar").src="redar.gif";
document.getElementById("processing").src="A.gif";}
function run (){
	document.getElementById("risky").style="display:none;";
	
	let pass= document.getElementById("inpassword").value ;
	let password=document.getElementById('password').value;
	if(password==pass){document.getElementById('re').innerHTML='Unlocked';
	document.getElementById('re').style="color:red;";
document.getElementById("safety").style="display: block ; background-color: black; color : red; font-size:30px;"
alert ('"Password is Cracked" Safe mode is activated, Click "Safe-Zone" button .');
document.getElementById('indicator').innerHTML='PASSWORD Hacked Successfully...';
document.getElementById('indicator').style="color:red;";
}
else{document.getElementById('re').innerHTML='error';
document.getElementById("safety").style="display:none;"; }

}
function play(value) {
    document.getElementById("screen").value += value;
}

function publc (){document.getElementById("lockin").style="display:block;width:100%;  ";
}