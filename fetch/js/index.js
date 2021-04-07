let elLoadUser = document.getElementById("getRandomUserBtn");
elLoadUser.addEventListener("click",function(){
    LoadUser();
});

function LoadUser(){
    let url = "https://randomuser.me/api/";
    fetch(url)
    .then((response) => response.json())
    .then(data=> {
        let fn = document.getElementById("firstName");
        let ln = document.getElementById("lastName");
        let phone = document.getElementById("phone");
        let img = document.getElementById("userImg");

        fn.innerHTML = data.results[0].name.first;
        ln.innerHTML = data.results[0].name.last;
        phone.innerHTML = data.results[0].phone;
        img.src = data.results[0].picture.large;
    });
}