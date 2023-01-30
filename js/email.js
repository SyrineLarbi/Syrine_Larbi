function sendEmail(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message =document.getElementById("message").value;
    let body = "Name:" + name +"<br> Email:" + email + "<br> Message:" + message;

    //     Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "syrinelarbi9@gmail.com",
    //     Password : "7B68D4AF555E2B106D3AF280221EDF0164B3",
    //     To : "syrinelarbi9@gmail.com",
    //     From : email,
    //     Subject : "Portfolio",
    //     Body : body
    // }).then(
    // message => alert(message)
    // );
    // console.log(body);



    Email.send({
        SecureToken : "f74d029d-8df3-4eec-b26c-f918b40935b0",
        To : 'syrinelarbi9@gmail.com',
        From : "syrinelarbi9@gmail.com",
        Subject : "Portfolio",
        Body : body
    }).then(
      message => alert(message)
    );
// Clear the form. 
name.value=" "


}


