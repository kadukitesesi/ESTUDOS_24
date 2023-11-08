function resultado(){
  let  numeroq = document.getElementById("numero").value
    
        if (numeroq % 2 != 0) {
        document.getElementById("result").innerHTML  = "impar"
         }
         else{
            document.getElementById("result").innerHTML = "par"
         }
}