let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function () {
  let userName = document.getElementById("userName");
  let userNameVal = userName.value;

  let userEmail = document.getElementById("userEmail");
  let userEmailVal = userEmail.value;

  let userCapacityVal = document.getElementById("userCapacity").value;
  let userEventVal = document.getElementById("userEvent").value;
  let userLocationVal = document.getElementById("userLocation").value;
  let userRemarksVal = document.getElementById("userRemarks").value;

  BookNow(userNameVal, userEmailVal, userCapacityVal, userEventVal, userLocationVal, userRemarksVal);
});

function BookNow(userName, userEmail, userCapacity, userEvent, userLocationVal, userRemarks) {
  let url = 'https://api.sheety.co/9fdfbce33b92088e0069f7f4326f6ee2/projectApp/bookingrooms';
  let body = {
    bookingrooms: {
      name: userName,
      email: userEmail,
      capacity: userCapacity,
      event: userEvent,
      location: userLocationVal, 
      remarks: userRemarks
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then(json => {
      alert("ID:" + json.bookingitem.id + " , " + json.bookingitem.name + " successfully added! ");
    });
}

