class Switcher {
    
 password(psswrd,proprety,defaultstyle,newStyle){
    if (psswrd== defaultstyle) {
   psswrd = newStyle;
    console.log("text")
  } else {
    psswrd.type = defaultstyle;
    console.log("password")
  }
}





 changeImg(eye){
 if (eye.className=="fa-solid fa-eye")
 {
     
  eye.className="fa-solid fa-eye-slash";
  console.log("eye slash")
   } 
   else
  {
    eye.className="fa-solid fa-eye";
    console.log("eye")
  }
}
    
}

export default Switcher;