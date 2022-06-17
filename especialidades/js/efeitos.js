function abrefecha(desce_click)/*<--agora recebe o id do elemento a mostrar/esconder*/ {
  let ex = document.getElementById(centralizador_nav); //buscar elemento ao html com base no id

  if (ex.style.display == "none") {
    ex.style.display = "block";
  } else {
    ex.style.display = "none"; //agora no else volta a aplicar none
  }
}