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
    Duration:"60",
    StartTime:"07:30 AM",
    EndTime:"08:30 AM"
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
  Duration:"90",
  StartTime:"07:00 AM",
  EndTime:"08:30 AM"
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
  date:"2022-05-13",
  Duration:"90",
  StartTime:"07:00 PM",
  EndTime:"08:30 PM"
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
  date:"2022-05-15",
  Duration:"60",
  StartTime:"07:30 AM",
  EndTime:"08:30 AM"
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
  Duration:"120",
  StartTime:"07:30 PM",
  EndTime:"09:30 PM"
}

];


// array filter to sort out which reservation belongs to which date
let existingUser_yesterday = [];
let existingUser_today =[];
let existingUser_tomorrow =[];

// reference
let reference_userlist = [];

/// initial

  
let weekdaylist = ["SUNDAY","MONDAY"," TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
let intervals_Time = ["07:00 AM","07:30 AM","08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM"];
let reserved_intervals_Time_rowOne=["07:00 AM","07:30 AM","08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM"];
let reserved_intervals_Time_rowTwo=["07:00 AM","07:30 AM","08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM"];
let reserved_intervals_Time_rowThree=["07:00 AM","07:30 AM","08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM"];

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

  putSelectValue()
  renderTheList();
  


}

function putSelectValue()
{
  //start time list
  for(let a = 0; a < intervals_Time.length; a++)
  {
      let selectOption = document.createElement("option");
      selectOption.innerHTML= intervals_Time[a];
      selectOption.value=intervals_Time[a];
      document.getElementById("startTimeSelect").appendChild(selectOption);
  }

  // end time list
  for(let a = 0; a < intervals_Time.length; a++)
  {
      let selectOption = document.createElement("option");
      selectOption.innerHTML= intervals_Time[a];
      selectOption.value=intervals_Time[a];
      document.getElementById("EndTimeSelect").appendChild(selectOption);
  }

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
    // date inital
    let PreDate = 0;
    let PostDate = 0;

    //get the date
    let currentDate = document.getElementById("referenceDate").value;
    let dt = new Date(currentDate);
    let day = dt.getDate();
    let month = dt.getMonth() + 1;
    let year = dt.getFullYear();
    if (month <10) month = "0" + month;
    if (day <10) day = "0" + day;
    currentDate = year + "-" + month + "-"+day;

    //yesterday 

    let PreDate_dt = new Date(currentDate);
    PreDate_dt.setDate(PreDate_dt.getDate()-1);
    PreDate_day = PreDate_dt.getDate();
    PreDate_month = PreDate_dt.getMonth() + 1;
    PreDate_year = PreDate_dt.getFullYear();
    if (PreDate_month <10) PreDate_month = "0" + PreDate_month;
    if (PreDate_day <10) PreDate_day = "0" +PreDate_day;
    PreDate = PreDate_year + "-" + PreDate_month + "-"+PreDate_day;

    //tomorrow
    let PostDate_dt = new Date(currentDate);
    PostDate_dt.setDate(PostDate_dt.getDate()+1);
    day = PostDate_dt.getDate();
    month = PostDate_dt.getMonth() + 1;
    year = PostDate_dt.getFullYear();
    if (month <10) month = "0" + month;
    if (day <10) day = "0" + day;
    PostDate = year + "-" + month + "-"+day;

    let listweekday = [PreDate,currentDate,PostDate];
    ////////////////////////////////////////////////////////////get the date 


    /// filter the date, the date I set up a filter, only yster, tmr and today
    // of the current date will be displayed, so the function below will sort out
    // which day is colum one or two or three in ascending order


    existingUserListThatDate.forEach(item => {if(item.date==PreDate) existingUser_yesterday.push(item)});
    existingUserListThatDate.forEach(item => {if(item.date==currentDate) existingUser_today.push(item)});
    existingUserListThatDate.forEach(item => {if(item.date==PostDate) existingUser_tomorrow.push(item)});
  

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

    renderReservedbook();
    sub_renderTheTime();
    ////test

    
}

function sub_renderTheTime()
{
  

  for(let row_counter_two = 0; row_counter_two<intervals_Time.length;row_counter_two++)
  {
    for(let row_create = 0; row_create<3; row_create++)
    {
      let bodydiv= document.createElement("div");


      if(row_create==0)
      {
        if(reserved_intervals_Time_rowOne[row_counter_two]=="ChangeImg")
        {
          bodydiv.style.backgroundImage = "url('img/Booked.png')";
          bodydiv.style.backgroundSize ="cover";
          bodydiv.style.backgroundRepeat = "no-repeat";
          bodydiv.style.backgroundColor="rgba(0,0,0,0.2)";

          document.getElementById("dynmaicCalendar").appendChild(bodydiv);
        }
        else
        {
          bodydiv.innerHTML = reserved_intervals_Time_rowOne[row_counter_two];
          
          bodydiv.style.borderTop ="1px ridge";
          bodydiv.style.borderBottom ="1px ridge";
          bodydiv.style.cursor ="pointer";
          bodydiv.classList.add("ColCal");
          bodydiv.style.pointerEvents='auto';
          //bodydiv.onclick = function(){showUp()};
    
          document.getElementById("dynmaicCalendar").appendChild(bodydiv);
        }
      }
      else if(row_create==1)
      {
        if(reserved_intervals_Time_rowTwo[row_counter_two]=="ChangeImg")
        {
                    //for row one only
          bodydiv.style.background="rgba(130,130,130,0.3)";
          bodydiv.style.borderLeft ="1px ridge";
          bodydiv.style.borderRight ="1px ridge";
          /// general
          bodydiv.style.borderTop ="1px ridge";
          bodydiv.style.borderBottom ="1px ridge";

          bodydiv.style.backgroundImage = "url('img/Booked.png')";
          bodydiv.style.backgroundSize ="cover";
          bodydiv.style.backgroundColor="rgba(0,0,0,0.2)";
          document.getElementById("dynmaicCalendar").appendChild(bodydiv);
        }
        else
        {
          bodydiv.innerHTML = reserved_intervals_Time_rowTwo[row_counter_two];
          //for row one only
          bodydiv.style.background="rgba(130,130,130,0.3)";
          bodydiv.style.borderLeft ="1px ridge";
          bodydiv.style.borderRight ="1px ridge";
          /// general
          bodydiv.style.borderTop ="1px ridge";
          bodydiv.style.borderBottom ="1px ridge";
          bodydiv.style.cursor ="pointer";
          bodydiv.classList.add("ColCal");
          bodydiv.style.pointerEvents='auto';
          //bodydiv.onclick = function(){showUp()};
    
          document.getElementById("dynmaicCalendar").appendChild(bodydiv);
        }
      }
      else if(row_create==2)
      {
        if(reserved_intervals_Time_rowThree[row_counter_two]=="ChangeImg")
        {
          bodydiv.style.backgroundImage = "url('img/Booked.png')";
          bodydiv.style.backgroundSize ="cover";
          bodydiv.style.backgroundRepeat = "no-repeat";
          bodydiv.style.backgroundColor="rgba(0,0,0,0.2)";
          document.getElementById("dynmaicCalendar").appendChild(bodydiv);
        }
        else
        {
          bodydiv.innerHTML = reserved_intervals_Time_rowThree[row_counter_two];
          
          bodydiv.style.borderTop ="1px ridge";
          bodydiv.style.borderBottom ="1px ridge";
          bodydiv.style.cursor ="pointer";
          bodydiv.classList.add("ColCal");
          bodydiv.style.pointerEvents='auto';
          //bodydiv.onclick = function(){showUp()};
    
          document.getElementById("dynmaicCalendar").appendChild(bodydiv);
        }
      }
      
      /*
      // create div and its style
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
      */

    }

  }
}

function  renderReservedbook()
{
  //yesterday
    for(let a = 0;  a<existingUser_yesterday.length; a++)
    {
      let ChangeContinuer = false;
      for(let row_number = 0; row_number< intervals_Time.length; row_number++)
      {
        if(existingUser_yesterday[a].StartTime ==reserved_intervals_Time_rowOne[row_number])
        {
          ChangeContinuer=true;
        }
        else if (ChangeContinuer)
        { 
          if(reserved_intervals_Time_rowOne[row_number]==existingUser_yesterday[a].EndTime)
          { 
            ChangeContinuer=false;
            break;
          }
          reserved_intervals_Time_rowOne[row_number] = "ChangeImg";
        }

      }
    }

    for(let a = 0;  a<existingUser_today.length; a++)
    {
      let ChangeContinuer_two = false;
      for(let row_number = 0; row_number< intervals_Time.length; row_number++)
      {
        if(existingUser_today[a].StartTime ==reserved_intervals_Time_rowTwo[row_number])
        {
          ChangeContinuer_two=true;
        }
        else if (ChangeContinuer_two)
        { 
          if(reserved_intervals_Time_rowTwo[row_number]==existingUser_today[a].EndTime)
          { 
            ChangeContinuer_two=false;
            break;
          }
          reserved_intervals_Time_rowTwo[row_number] = "ChangeImg";
        }
 
      }
    }

    for(let a = 0;  a<existingUser_tomorrow.length; a++)
    {
      let ChangeContinuer_two = false;
      for(let row_number = 0; row_number< intervals_Time.length; row_number++)
      {
        if(existingUser_tomorrow[a].StartTime ==reserved_intervals_Time_rowThree[row_number])
        {
          ChangeContinuer_two=true;
        }
        else if (ChangeContinuer_two)
        { 
          if(reserved_intervals_Time_rowThree[row_number]==existingUser_tomorrow[a].EndTime)
          { 
            ChangeContinuer_two=false;
            break;
          }
          reserved_intervals_Time_rowThree[row_number] = "ChangeImg";
        }
 
      }
    }
    

    
}

function closePopup()
{
    document.getElementById('dynmaicCalendar').innerHTML="";
    document.getElementById('startTimeSelect').value="";
    document.getElementById('EndTimeSelect').value="";
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

//const  theTimeTable = document.getElementById(".dynamicCalender").querySelectorAll(".ColCal");
theTimeTable.addEventListener('click', e=> {

  if(e.target.matches('.ColCal'))
  {
      if(startEndCounter==0) // start time 
      { 
        document.getElementById("startTimeSelect").value=e.target.innerHTML;
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
           document.getElementById("EndTimeSelect").value=e.target.innerHTML;
           let selId = document.getElementById("startTimeSelect");
           let items = selId.options;//Javascript get select all option
    

           //////////
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

function respondfromSelectToTable()
{

}





//run
RetrieveDataLocalStorage();
InitialPage();

