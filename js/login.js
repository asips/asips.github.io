var el = document.getElementById('login');
el.onclick = passWord;

function passWord() {
  var testV = 1;
  var pass1 = prompt('Please Enter Your Password',' ');
  while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == "admin") {
      alert('You Got it Right!');
      window.open('data.html');
      break;
    }
    testV+=1;
    var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
  }
  if (pass1.toLowerCase()!="password" & testV ==3)
  window.close();
  history.go(-1);
  return " ";
}
