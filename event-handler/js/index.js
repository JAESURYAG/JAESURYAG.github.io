function transformUppercase(_val){
return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("namaPengguna"); // 1) select element
elNamaPengguna.addEventListener("keyup", function(){
   elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});