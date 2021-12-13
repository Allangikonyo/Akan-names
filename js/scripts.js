// create a function that calculates the akan names
function akan (){
  // add names into an array 
  var maleNames = [Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame];
  var femaleNames = [Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama]; 

// declare the variables as a constant 
// return an element object whose id property matches the specified string
// change the value into an integer
 const calendarYear = parseInt(document.getElementById('Year'));
 const month = parseInt(document.getElementById('Month'));
 const day = parseInt(document.getElementById('Day'));
 const gender = document.getElementById('Gender');


// get the value from the input
  const yearValue = calendarYear.value;
  const monthValue = month.value;
  const dayValue = day.value;
  const genderValue = gender.value;

// Splitting the year into the century
  const year = parseInt(yearValue.toString().slice(-2));
  const century = Math.ceil ((yearValue )/100)-1; 

// using calculation formula 
const dayOfTheWeek= (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day)%7; 


// sets up functions to be called when the form is submitted
form.addEventListener('submit' , (e) => {
   e.preventDefault(); // stop form from submitting

   checkInput();

})

function checkInput() {
  // get the value from the input
  const yearValue = year.value 
  const monthValue = month.value 
  const dayValue = day.value
  const genderValue = gender.value

  if (Month.value <= 0 || Month.value > 12 || month.value == ''){
    //show error
    message.push('Valid month is required');
  } 
  else {
      //add success class 
    setSuccessFor(month);
  }
  if (day.value <= 0 || day.value > 32 || day.value == ''){
    //show error
    message.push(day, 'Valid day is required');
  } 
  else {
      //add success class 
    setSuccessFor(day);
  }
  
}

function setErrorFor(input, message) {
  const scriptFormat = input.parentElement; 
  const small = scriptFormat.querySelector ('small');

  // add error message inside small 

  small.innerText = message;

  // add error class
  scriptFormat.className = 'script-format error';


}

function assignNames (){
  
}
