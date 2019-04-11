
// On déclare les varialbles et on utilise l'event 'click' pour la fonction color sur le button 'check'
var passWord = document.getElementById('password');
var confirmPassWord = document.getElementById('confirmPassword');
var check =  document.getElementById('butt');
check.addEventListener('click', color);
/* On créer la fonction qui permet de changer la couleur des borders en fonction
des valeurs passWord et confirmPassWord */
function color() {
  if (passWord.value != confirmPassWord.value) {
    passWord.style.borderColor = 'red';
    confirmPassWord.style.borderColor = 'red';
  }
  else {
    passWord.style.borderColor = 'green';
    confirmPassWord.style.borderColor = 'green';
  }
}
