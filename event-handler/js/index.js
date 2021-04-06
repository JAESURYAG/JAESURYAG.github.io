function transformUppercase(_val){
return _val.toUpperCase();
}

var elNamaPengguna = document.getElementById("namaPengguna"); // 1) select element
elNamaPengguna.addEventListener("keyup", function(){
   elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});

function checkPassword(){
  let elKataLaluan = document.getElementById("kataLaluan");
  let checkPassword_val = elKataLaluan.value;  
  if (checkPassword_val.length > 5){
     alert("Pawword Check .... OK!");
  } else {
     alert("Password too short!");
  }
}

let elKataLaluan = document.getElementById("kataLaluan");
elKataLaluan.onblur = checkPassword;