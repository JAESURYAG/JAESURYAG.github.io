let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

function BookNow(userName, userEmail, userPax, userRemarks){
    let url = 'https://api.sheety.co/9fdfbce33b92088e0069f7f4326f6ee2/tableapp/bookingitems';
    let body = {
      bookingitem: {
        name: userName,
        email: userEmail,
        pax: userPax,
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