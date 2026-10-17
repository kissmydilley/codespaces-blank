// Function to handle the custom Availability Request submission
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
    alert("Please enter a valid Email Address.");
    return;
  }

  if (appointmentdata.contactmethod === "--Select--" || appointmentdata.instructor === "-- Select an Instructor --") {
    alert("Please select a Preferred Contact Method and Instructor.");
    return;
  }

  if (!appointmentdata.bookingdate || appointmentdata.bookingtime === "Select a time...") {
    alert("Please choose a Date and Time.");
    return;
  }

  if (isNaN(appointmentdata.age) || appointmentdata.age < 18 || appointmentdata.age > 100) {
    alert("Age must be between 18 and 100.");
    return;
  }




  console.log("Availability Request Submited", JSON.stringify(appointmentdata, null, 2));

  return appointmentdata;
}