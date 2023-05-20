const dayBox = document.querySelector("#day");
const monthBox = document.querySelector("#month");
const yearBox = document.querySelector("#year");
const button = document.querySelector(".main-btn");

// span-warnings
dayWarn = document.querySelector('.day-warn');
monthWarn = document.querySelector('.month-warn');
yearWarn = document.querySelector('.year-warn');

// spans
const daySpan = document.querySelector('#day-span');

const monthSpan = document.querySelector('#month-span');

const yearSpan = document.querySelector('#year-span');

var currentDate = new Date();

function CalculateAge(birthDate) {
  var years = currentDate.getFullYear() - birthDate.getFullYear();
  var months = currentDate.getMonth() - birthDate.getMonth();
  var days = currentDate.getDate() - birthDate.getDate();
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
    if (days < 0) {
      var lastMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        birthDate.getDate()
      );
      days = Math.floor((currentDate - lastMonthDate) / (1000 * 60 * 60 * 24));
    }
  }
  return {
    years: years,
    months: months,
    days: days,
  };
}

button.addEventListener("click", () => {
  var birthYear = yearBox.value;
  var birthMonth = monthBox.value;
  var birthday = dayBox.value;
  var dOB = `${birthYear},${birthMonth},${birthday}`;
  var birthDate = new Date(dOB);

  if(!(birthday>=1 && birthday<=31)){
    if(birthday==""){
      dayWarn.innerText = "This field is required";
      dayWarn.classList.add("day-warn-active");
    }
    else{
      dayWarn.classList.add("day-warn-active");
    }
    
  }
  if(!(birthMonth>=1 && birthMonth<=12)){
    if(birthMonth==""){
      monthWarn.innerText = "This field is required";
      monthWarn.classList.add("month-warn-active");
      
    }
    else{
      monthWarn.classList.add("month-warn-active");
    }
    
  }
  if(birthYear>currentDate.getFullYear || birthYear=="") {
    if(birthYear==""){
      yearWarn.innerText = "This field is required";
      yearWarn.classList.add("year-warn-active");
    }
    else{
      yearWarn.classList.add("year-warn-active");
    }
    
  }
  else{
    var age = CalculateAge(birthDate);
    //   updating the UI
    daySpan.innerText = age.days;
    monthSpan.innerText = age.months;
    yearSpan.innerText = age.years;
  }
  
});
