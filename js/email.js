function sendEmail(){
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_obkuw0x", "template_3mhny5g",params).then(function(res){
   alert("Success!" + res.status); 
  })
}
