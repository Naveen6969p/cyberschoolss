(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // EmailJS public key
})();

function openForm(){
  document.getElementById("formPopup").style.display="flex";
}

document.getElementById("joinForm").addEventListener("submit",function(e){
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(()=>{
    document.getElementById("successMsg").innerText =
    "Thank you, our team will contact you shortly";
    this.reset();
  });
});
