function formatTimeShow(h_24) {
   var h = h_24 % 12;
   if (h === 0) h = 12;
   let str="";
   if(h_24 >10){
      str="0"
   }
   return  h  ;
}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    if(hh > 12){
        session = "PM";
     }
     hrs = (hh < 10) ? "0" + hh : hh;
     mins = (mm < 10) ? "0" + mm : mm;
     secs = (ss < 10) ? "0" + ss : ss;
     document.getElementById("hrs").innerHTML=formatTimeShow(hrs);
     document.getElementById("mins").innerHTML=mins;
     document.getElementById("secs").innerHTML=secs;
     document.getElementById("session").innerHTML=session; 
     var t = setTimeout(function(){ currentTime() }, 1000);
     var change=document.getElementById("changeText");
    
     if((5  <=  hh )&& (hh <= 11)){
         change.innerHTML="Good Morning"
     }else if((12 <=  hh) && (hh  <= 16))  {
         change.innerHTML="Let's have some lunch!"
     }
     else if((17  <=  hh) &&  (hh <=  20)){
         change.innerHTML="Stop yawning, get some tea.. its just Evening!"
     }
     else if((21  <=  hh) &&  (hh <= 24)){
        change.innerHTML="Close your eyes and got to sleep"
     }
  }
  console.log(currentTime())



  function setAlarm(event){
      var x = document.getElementById("changeWakupTime").value;
     document.getElementById("wakeup").innerText= x;
      var y=document.getElementById("changeLunchTime").value;
      document.getElementById("lunchtime").innerText= y;
      var z=document.getElementById("changeNapTime").value;
      document.getElementById("naptime").innerText= z;
      var w=document.getElementById("ChangeNightTime").value;
      document.getElementById("nightTime").innerText= w;
      let date = new Date(); 
      let hh = date.getHours();
    let hrs= formatTimeShow(hh)
    let session="AM"
    if(hh > 12){
      session = "PM";
   }
      var image = document.getElementById("girl");
      var setAlrmtext=document.getElementById("ChangealarmText")
      if(x.includes(hrs) && x.includes(session) ){
         image.src = "./girl img.svg";
         setAlrmtext.innerHTML="GOOD MORNING!! WAKE UP!!"
     }else if((y.includes(hrs) && y.includes(session)))  {
      image.src = "./lunch.svg";
      setAlrmtext.innerHTML="Good afternoon !! take some sleep"
     }
     else if((z.includes(hrs)&& z.includes(session))){
      image.src = "./good-evng.png";
      setAlrmtext.innerHTML="Good evening !!"
     }
     else if(w.includes(hrs)&& w.includes(session)){
      image.src ="./night.png";
      setAlrmtext.innerHTML="Good Night !!"
     }

  }

  const onHoverCard=()=>{
 let TextChange=  document.querySelector(".card2");
TextChange.innerHTML="Party Time";
  }

  const ChangetoNormalText =()=>{
   let TextChange=  document.querySelector(".card2");
TextChange.innerHTML="Set Alarm";
  }





  