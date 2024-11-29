function sendMail(){
    var params ={

    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value,
};
const serviceID ="service_jq5jx0c"
const templateID ="template_43ortab"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message send successfully")

    }
)
.catch((err) => console.log(err));

}
