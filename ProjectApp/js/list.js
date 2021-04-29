let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function () {
    GetBooking();
});

function GetBooking() {
    let url = 'https://api.sheety.co/9fdfbce33b92088e0069f7f4326f6ee2/projectApp/bookingrooms';
    fetch(url)
        .then((response) => response.json())
        .then(json => {

            let bookingNameList = document.getElementById("bookingNameList");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k);
            }

            for (let i = 0; i < json.bookingrooms.length; i++) {
                let gName = json.bookingrooms[i].name;
                let gEmail = json.bookingrooms[i].email;
                let gCapacity = json.bookingrooms[i].capacity;
                let gEvent = json.bookingrooms[i].event;
                let gLocation = json.bookingrooms[i].location;
                let gRemarks = json.bookingrooms[i].remarks;
                let gId = json.bookingrooms[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gCapacity;
                row.insertCell(4).innerHTML = gEvent;
                row.insertCell(5).innerHTML = gLocation;
                row.insertCell(6).innerHTML = gRemarks;
                row.insertCell(7).innerHTML = "<button id='" + btnId + "' class='btn btn-info'>Delete</button>";

                bookingIds.push(btnId);
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    DeleteBooking(theId);

                });
            }

        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/9fdfbce33b92088e0069f7f4326f6ee2/projectApp/bookingrooms/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!");
            GetBooking();
        });
}