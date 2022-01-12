
document.getElementById("formAkan").addEventListener('submit', akan);


function akan () {

   // array declaration
   let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   let  maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

   // declaring variables
    let day = parseInt(document.getElementById("Day").value );
    let month = parseInt(document.getElementById("Month").value);  
    let calendarYear = parseInt(document.getElementById("Year").value);
    let gender = document.getElementById("Gender").value;

    if(day<0 || day>31 || day == ''){
      alert ("Valid day is required")
      return;

    }

    else if (month<0 || month> 12 || month == ''){
      alert ("Valid month is required")
      return;

    }

    //splitting the full year
    let Halfyear = calendarYear.toString().slice(-2);
    let year = parseInt(Halfyear);
    let century = Math.ceil((calendarYear)/100)-1;

    // using calculation formula
    let dayOfTheWeek= (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day)%7;
    let weekday = Math.floor(dayOfTheWeek);

    if(gender =='Male'){
         for (i=0; i <= 6; i++){
         if (i==weekday){
          alert("Your Akan Name is " + maleNames[i]);
          
       }
      }
    }
    else{
        for (i=0; i <= 6; i++){
          if (i==weekday){
           alert("Your Akan Name is " + femaleNames[i]);
          
          }
        }
      }
  }
  
