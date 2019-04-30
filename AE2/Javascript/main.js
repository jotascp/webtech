var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000);
}

function dateTime() {
    var today = new Date();

    var curr_hours = today.getHours();
    var curr_min = ('0' + today.getMinutes()).slice(-2);
    var curr_sec = ('0' + today.getSeconds()).slice(-2);

    var time = curr_hours + ":" + curr_min + ":" + curr_sec;

    document.getElementById("clock").innerHTML = today.toDateString() + " | " + time;

    setTimeout(dateTime, 500);
}

function contactValidate() {

    valid = true;

    if (document.contactForm.firstname.value == "") {
        alert("Please enter your first name!");
        document.contactForm.firstname.focus();
        valid = false;
    }

    if (document.contactForm.lastname.value == "") {
        alert("Please enter your last name!");
        document.contactForm.lastname.focus();
        valid = false;
    }

    if (document.contactForm.email.value == "") {
        alert("Please enter your email!");
        document.contactForm.email.focus();
        valid = false;
    }

    if (document.contactForm.message.value == "") {
        alert("Please enter your message!");
        document.contactForm.message.focus();
        valid = false;
    }

    return valid;
}


// JavaScript File
