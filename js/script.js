function Display(result){
  if (result ==true){
    document.getElementById("Result").innerHTML="Your temperature is hot";
  } else{
    document.getElementById("Result").innerHTML="Your temperature is cold";
  }
}

function Submit(){
  let UserTemp = document.getElementById("num").value;
  if (UserTemp>15){
    Display(true);
  } else{
    Display(false);
  }
}