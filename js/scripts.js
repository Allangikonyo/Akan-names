document.getElementById("formAkan").addEventListener('submit', akan);

// create a function that calculates the akan names
function akan (){
  // add names into an array 
  var femaleNames = [Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama];
  var maleNames = [Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame];
  
// declare the variables as a constant 
// return an element object whose id property matches the specified string
// get the value from the input
// change the value into an integer
 const calendarYear = parseInt(document.getElementById('Year').value);
 const month = parseInt(document.getElementById('Month').value);
 const day = parseInt(document.getElementById('Day').value );
 var gender = document.getElementById('Gender').value;


// Splitting the year into the century
  const year = parseInt(calendarYear.toString().slice(-2));
  const century = Math.ceil ((calendarYear)/100)-1; 

// using calculation formula 
const dayOfTheWeek= (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day)%7; 

// gender 
 if (document.getElementById("gender").checked){
   var gender = 'male';
  
 }
else {
    var gender = 'female';
} 

// performs calculation on data and assigns akan name
if (month <= 0 || month > 12 || month == ''){
  //show error
  message.push('Valid month is required');
}
else if ((day <= 0 || day > 32 || day == '')){
  //show error
  message.push(day, 'Valid day is required');
} 
else if (Math.round(dayOfTheWeek)==0 && gender === 'female') {
  alert ("Your akan name is "+ femaleNames[0]);
}

else if (Math.round(dayOfTheWeek)==1 && gender === 'female') {
  alert ("Your akan name is "+ femaleNames[1]);
}

else if (Math.round(dayOfTheWeek)==2 && gender === 'female') {
  alert ("Your akan name is "+ femaleNames[2]);
}

else if (Math.round(dayOfTheWeek)==3 && gender === 'female') {
  alert ("Your akan name is "+ femaleNames[3]);
}

else if (Math.round(dayOfTheWeek)==4 && gender === 'female') {
  alert ("Your akan name is "+ femaleNames[4]);
}

else if (Math.round(dayOfTheWeek)==5 && gender === 'female') {
  alert ("Your akan name is "+femaleNames[5]);
}

else if (Math.round(dayOfTheWeek)==6 && gender === 'female') {
  alert ("Your akan name is "+femaleNames[6]);
}

else if (Math.round(dayOfTheWeek)==7 && gender === 'female') {
  alert ("Your akan name is "+femaleNames[7]);
}

else if (Math.round(dayOfTheWeek)==0 && gender === 'male') {
  alert ("Your akan name is "+ maleNames[0]);
}

else if (Math.round(dayOfTheWeek)==1 && gender === 'male') {
  alert ("Your akan name is "+ maleNames[1]);
}

else if (Math.round(dayOfTheWeek)==2  && gender === 'male') {
  alert ("Your akan name is "+maleNames[2]);
}

else if (Math.round(dayOfTheWeek)==3  && gender === 'male') {
  alert ("Your akan name is "+maleNames[3]);
}

else if (Math.round(dayOfTheWeek)==4 && gender === 'male') {
  alert ("Your akan name is "+maleNames[4]);
}

else if (Math.round(dayOfTheWeek)==5 && gender === 'male') {
  alert ("Your akan name is "+maleNames[5]);
}

else if (Math.round(dayOfTheWeek)==6 && gender === 'male') {
  alert ("Your akan name is "+maleNames[6]);
}

else if (Math.round(dayOfTheWeek)==7 && gender === 'male') {
  alert ("Your akan name is "+maleNames[7]);
}
  
else if (Math.round(dayOfTheWeek)==0 && gender === 'male') {
  alert ("Your akan name is "+maleNames[0]);
}

} 
