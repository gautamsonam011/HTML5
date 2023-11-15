// alert("connect now---")

function sumChanged(){
document.getElementById('txtno2').value=document.getElementById('txtno1').value
}
function sumClick(){
    var txtno1=document.getElementById('txtno1');
    var no1=parseInt(txtno1.value);
    var txtno2=document.getElementById('txtno2');
    var no2=parseInt(txtno2.value);
    var txtresult=document.getElementById('txtresult');
    txtresult.value=no1+no2;
    // alert(no1);
    // alert(no2);
}
function subClick(){
    // alert("Sum Connected Now--")
    var txtno1=document.getElementById('txtno1');
    var no1=parseInt(txtno1.value);
    var txtno2=document.getElementById('txtno2');
    var no2=parseInt(txtno2.value);
    var txtresult=document.getElementById('txtresult');
    txtresult.value=no1-no2;
}
function multiClick(){
    // alert("Sum Connected Now--")
    var txtno1=document.getElementById('txtno1');
    var no1=parseInt(txtno1.value);
    var txtno2=document.getElementById('txtno2');
    var no2=parseInt(txtno2.value);
    var txtresult=document.getElementById('txtresult');
    txtresult.value=no1*no2;
}
function divideClick(){
    // alert("Sum Connected Now--")
    var txtno1=document.getElementById('txtno1');
    var no1=parseInt(txtno1.value);
    var txtno2=document.getElementById('txtno2');
    var no2=parseInt(txtno2.value);
    var txtresult=document.getElementById('txtresult');
    txtresult.value=no1/no2;
    txtresult.style.backgroundColor='blue';
}


function su(n1,n2){
    console.log(arguments)
    return n1+n2;
}
x=su(2,3,4,5,6,6,23,45);
console.log(x);



const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// init call
getColor();