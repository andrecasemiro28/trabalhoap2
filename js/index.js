function click(){
    let senha = document.getElementById('entrada-senha').value;

    if (hex_md5(senha) === "e10adc3949ba59abbe56e057f20f883e") {
      window.sessionStorage.setItem("token", "logado");
      window.location = "home.html";
    } else {
      alert("Senha incorreta!");
    }
};


document.getElementById("btnLogin").addEventListener("click", click);