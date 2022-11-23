// var zaman = 300
// function gerisayim(){
// if (zaman!=0){
// zaman-=1
// document.getElementById('sayac').innerHTML=zaman
// }
// else{
// window.location.href = "index8.html"; 
// return
// }
// setTimeout("gerisayim()",1000)
// }
// gerisayim()

function gerisayim(dakika, saniye) {
    if(dakika === 0 && saniye === 0) {
      window.location.href = "index8.html"; 
      return false;
    }
    if(saniye === 0) {
      saniye = 59;
      dakika = dakika - 1;
    } else {
      saniye = saniye - 1;
    }
    
    let zaman = dakika.toString() + ":" + saniye.toString();
  
    document.getElementById("zaman").innerText = zaman; 
    let t = setTimeout(function(){ gerisayim(dakika, saniye) }, 1000);
  }
  
  gerisayim(0, 10);