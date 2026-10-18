let form, firstnameinput, lastnameinput, emailinput, phonenumberinput, messageinput;

window.addEventListener("DOMContentLoaded", () => {

    form = document.getElementById("request");
    firstnameinput = document.getElementById("first-name");
    lastnameinput = document.getElementById("last-name");
    emailinput = document.getElementById("email-address");
    phonenumberinput = document.getElementById("phone-number");
    messageinput = document.getElementById("text-area");

    
    if (form) {
       
      form.addEventListener("submit", handleAppointmentSubmit);

        const saveddata = sessionStorage.getItem("form-draft");
        if (saveddata) {
            const data = JSON.parse(saveddata);
            if (firstnameinput) firstnameinput.value = data.fname || '';
            if (lastnameinput) lastnameinput.value = data.lname || '';
            if (emailinput) emailinput.value = data.emailaddress || '';
            if (phonenumberinput) phonenumberinput.value = data.phonenumber || '';
            if (messageinput) messageinput.value = data.message || '';
            showStatus("Draft Recovered!");
        }

        
        form.addEventListener("input", () => {
            const formdata = {
                fname: firstnameinput ? firstnameinput.value : '',
                lname: lastnameinput ? lastnameinput.value : '',
                emailaddress: emailinput ? emailinput.value : '',
                phonenumber: phonenumberinput ? phonenumberinput.value : '',
                message: messageinput ? messageinput.value : ''
            };

            sessionStorage.setItem('form-draft', JSON.stringify(formdata));
            showStatus('Saving progress...');
        });
    }
});

let timer;
function showStatus(text) {
    console.log(text);
}


function handleAppointmentSubmit(event) {
  event.preventDefault();

  const appointmentdata = {
    firstname: document.getElementById("first-name").value,
    lastname: document.getElementById("last-name").value,
    emailaddress: document.getElementById("email-address").value,
    phonenumber: document.getElementById("phone-number").value,
    contactmethod: document.getElementById("contact-method").value,
    instructor: document.getElementById("instructor").value,
    bookingdate: document.getElementById("booking-date").value,
    bookingtime: document.getElementById("booking-time").value,
    age: parseInt(document.getElementById("age").value, 10),
    aspirations: document.getElementById("text-area").value
  };

  if (!appointmentdata.firstname || !appointmentdata.lastname) {
    alert("Please enter both your First and Last Name.");
    return;
  }

  if (!appointmentdata.emailaddress.includes("@")) {
    alert("Please enter a valid email addrress");
    return;
  }

  if (!appointmentdata.phonenumber) {
    alert("Please enter a phone number");
    return;
  }

  if (!appointmentdata.contactmethod || !appointmentdata.instructor) {
    alert("Please select a Preferred Contact Method and Instructor.");
    return;
  }

  if (!appointmentdata.bookingdate || !appointmentdata.bookingtime) {
    alert("Please choose a Date and Time.");
    return;
  }

  if (isNaN(appointmentdata.age) || appointmentdata.age < 18 || appointmentdata.age > 100) {
    alert("Age must be between 18 and 100.");
    return;
  }

  console.log("Availability Request Submited", JSON.stringify(appointmentdata, null, 2));
  alert("Success! Your availability request has been submitted.");
 
  sessionStorage.removeItem("form-draft");

  return appointmentdata;
}