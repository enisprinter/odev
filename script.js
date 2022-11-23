var zaman = 300
function gerisayim(){
if (zaman!=0){
zaman-=1
document.getElementById('sayac').innerHTML=zaman
}
else{
window.location.href = "index8.html"; 
return
}
setTimeout("gerisayim()",1000)
}
gerisayim()

