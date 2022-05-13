/*
let Userlist = [
  {
    userID:"",  //6digital to 7 digital
    fname:"",
    lname:"",
    moblePhone:"", //format check in the control system
    Email: "",
    location:"", //Golfplace Inn
    Venue:"", //Simulator One
    Player:"",// max 4
    date:"", //05-05-2022
    Duration:"",//60 mins
    StartTime:"",//8:30 AM
    EndTime:""//8:30 AM
  }
  ];
*/

// Model : contain all the code that saves and mananges data

let Userlist = [
  {
    userID:"123456",  //6digital to 7 digital
    fname:"Leane",
    lname:"Mcdonal",
    moblePhone:"0412345678",
    Email: "test123@gmail.com",
    location:"Golfplace Inn",
    Venue:"Simulator One",
    Player:"4",
    date:"2022-05-14",
    Duration:"60 mins",
    StartTime:"7:30 AM",
    EndTime:"8:30 AM"
  }
  ];

let existingUserListThatDate = 
[  {
  userID:"123456",  //6digital to 7 digital
  fname:"Leane",
  lname:"Mcdonal",
  moblePhone:"0412345678",
  Email: "test123@gmail.com",
  location:"Golfplace Inn",
  Venue:"Simulator One",
  Player:"4",
  date:"2022-05-13",
  Duration:"60 mins",
  StartTime:"7:30 AM",
  EndTime:"8:30 AM"
},
{
  userID:"123456",  //6digital to 7 digital
  fname:"Leane",
  lname:"Mcdonal",
  moblePhone:"0412345678",
  Email: "test123@gmail.com",
  location:"Golfplace Inn",
  Venue:"Simulator One",
  Player:"4",
  date:"2022-05-14",
  Duration:"60 mins",
  StartTime:"7:30 AM",
  EndTime:"8:30 AM"
},
{
  userID:"123456",  //6digital to 7 digital
  fname:"Leane",
  lname:"Mcdonal",
  moblePhone:"0412345678",
  Email: "test123@gmail.com",
  location:"Golfplace Inn",
  Venue:"Simulator One",
  Player:"4",
  date:"2022-05-14",
  Duration:"60 mins",
  StartTime:"7:30 AM",
  EndTime:"8:30 AM"
}

];

  // reference
let reference_userlist = [];

/// initial

  
let weekdaylist = ["SUNDAY","MONDAY"," TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
let intervals_Time = ["07:00 AM","07:30 AM","08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM"];
let AddclassList = ["col-1","col-2","col-3"];


///// calculating duration
let inputStartEndValue = [];
let compaireTwoValue = [];
let startEndCounter = 0;



function RetrieveDataLocalStorage()
{

  //reference_userlist = JSON.Parse(window.localStorage.getItem("sx$qwes42"));

}

function InitialPage()
{
  //reference the player location venue play date from previous page
  document.getElementById("referenceDate").value = Userlist[0].date;

  renderTheList();


}

function GetWeekDate()
{
  let currentdate = document.getElementById("referenceDate").value;
  let dt = new Date(currentdate);


  return dt.getDay();
}



//View contains all the code that manages Visuals
function renderTheList()
{
    
    let DayParameter=GetWeekDate();
    // render the list
    //get the date
    let currentDate = document.getElementById("referenceDate").value;
    let dt = new Date(currentDate);
    let day = dt.getDate();
    let month = dt.getMonth() + 1;
    let year = dt.getFullYear();
    let PreDate = 0;
    let PostDate = 0;

    if (month <10) month = "0" + month;
    if (day <10) day =  day;

    currentDate = year + "-" + month + "-"+day;
    PreDate = year + "-" + month + "-" +(day-1);      
    PostDate = year + "-" + month + "-" +(day+1);   


    let listweekday = [PreDate,currentDate,PostDate];



    for(let initor = 0; initor<3; initor++)
    {
      let headthree = document.createElement("h3");
      headthree.innerHTML = weekdaylist[DayParameter-1]+" "+ listweekday[initor];
      if(DayParameter==7) DayParameter=1;else DayParameter++;


      if(initor==1)
      {
        headthree.style.background="rgba(130,130,130,0.3)";
      }
      document.getElementById("dynmaicCalendar").appendChild(headthree);

    }
    sub_renderTheTime();



}

function sub_renderTheTime()
{
  for(let row_counter_two = 0; row_counter_two<intervals_Time.length;row_counter_two++)
  {
    for(let row_create = 0; row_create<3; row_create++)
    {
      let bodydiv= document.createElement("div");
      bodydiv.innerHTML = intervals_Time[row_counter_two];
      if(row_create==1)
      {
        bodydiv.style.background="rgba(130,130,130,0.3)";
        bodydiv.style.borderLeft ="1px ridge";
        bodydiv.style.borderRight ="1px ridge";
      }
      bodydiv.style.borderTop ="1px ridge";
      bodydiv.style.borderBottom ="1px ridge";
      bodydiv.style.cursor ="pointer";
      bodydiv.classList.add(AddclassList[row_create]);
      //bodydiv.onclick = function(){showUp()};
      document.getElementById("dynmaicCalendar").appendChild(bodydiv);

    }

  }


}

function closePopup()
{
    document.getElementById('dynmaicCalendar').innerHTML="";
    document.getElementById('StartTime').value="";
    document.getElementById('EndTime').value="";
    renderTheList();
    let theguiderToBox = document.getElementById('myModal');
    theguiderToBox.style.display='none';
}

function showPopup()
{
  let theguiderToBox = document.getElementById('myModal');
  theguiderToBox.style.display='block';
}

//Controller

/// click to change the start time and end time display 

const theTimeTable = document.querySelector(".dynamicCalender");

theTimeTable.addEventListener('click', e=> {

  if(e.target.matches('div'))
  {
      if(startEndCounter==0) // start time 
      { 
        document.getElementById("StartTime").value=e.target.innerHTML;
        // img 
        e.target.style.backgroundImage = "url('img/StartLog.png')";
        e.target.style.backgroundSize ="cover";
        e.target.style.backgroundRepeat = "no-repeat";
        e.target.style.backgroundColor="rgba(0,0,0,0.2)";
        //------------------
          
          inputStartEndValue[0] = e.target.innerHTML;
          startEndCounter++;
      }
      else if(startEndCounter==1)  // end time
      { 
            document.getElementById("EndTime").value=e.target.innerHTML;
            //img 
            e.target.style.backgroundImage = "url('img/EndLog.png')";
            e.target.style.backgroundSize ="cover";
            e.target.style.backgroundRepeat = "no-repeat";
            startEndCounter++;
            inputStartEndValue[1] = e.target.innerHTML;

            // get duration value;
            for(let durationInital = 0; durationInital<29; durationInital++)
            {
              if(compaireTwoValue.length<2)
              {
                if(inputStartEndValue[0]==intervals_Time[durationInital])
                {
                  compaireTwoValue[0] = durationInital;
                }
                else if (inputStartEndValue[1]==intervals_Time[durationInital])
                {
                  compaireTwoValue[1] = durationInital;
                }
              }
              else
              { 
                  let durationValue = (compaireTwoValue[1]-compaireTwoValue[0])*30;
                  let Stringvalue =  durationValue.toString() + " mins";
                  document.getElementById("duration").value = Stringvalue;
                  compaireTwoValue=[];
              }
            }
      }
      else
      {   // third time click
        showPopup();
        startEndCounter=0;
      }
  }


});




function adjustdate()
{

  document.getElementById('dynmaicCalendar').innerHTML="";
  renderTheList();

}




//run
RetrieveDataLocalStorage();
InitialPage();

