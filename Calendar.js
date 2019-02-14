let date=new Date();
let events =[{name:"valentin",date:new Date()}];
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
console.log(date);

function daysInMonth(iMonth, iYear) 
{ 
    return 32-new Date(iYear, iMonth, 32).getDate();
}
let parent=domLib.getElement('id','root');
let header = document.createElement('div');
domLib.changeAttribute(header,'class','border border-primary ');
domLib.changeStyleonElement(header,'background-color','lightblue');
domLib.editHTMLContent(parent,header);

let monthAndYear = document.createElement('h3');
domLib.editHTMLContent(header,monthAndYear);
domLib.changeAttribute(parent,'class','w-50 m-auto')
let table = document.createElement('table');
domLib.changeAttribute(table,'class','table')
domLib.editHTMLContent(parent,table);
let tHead = document.createElement('thead');
domLib.editHTMLContent(table,tHead);
for (let index = 0; index < days.length; index++) {
    let th = document.createElement('th');
    domLib.changeAttribute(th,'class','border border-primary m-2 text-center')
    domLib.changeStyleonElement(th,{'background-color':'blue',
                                     'color':'white'});
    th.setAttribute('scope','col');
    domLib.editTcxtContent(th,days[index],true);
    domLib.editHTMLContent(tHead,th);
    
}

   let tBody = document.createElement('tbody');
   domLib.editHTMLContent(table,tBody);
   for (let i = 0; i < 6; i++) { 
       let row=document.createElement('tr');
       for (let index = 0; index < 7; index++) {
            let element=document.createElement('td');
            domLib.changeAttribute(element,'class','border border-primary m-2 text-center');
            domLib.addEvent(element,'mouseover',hoverIn);
            domLib.addEvent(element,'mouseout',hoverOut);
            domLib.editHTMLContent(row,element); 
        }
        domLib.changeAttribute(row,'id','row-'+i);
        domLib.editHTMLContent(tBody,row);
   }    


function showCalendar(month, year) {
    let today=new Date();
    let firstDay = (new Date(year, month)).getDay();
    domLib.editTcxtContent(monthAndYear,months[currentMonth]+" "+currentYear,true);

        console.log(daysInMonth(month, year));
    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let chailds = domLib.getChildElements('id','row-'+i);

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            //let index =((j-1)===-1)?6:j-1;
            
            if (i === 0 && j < firstDay) {
                console.log('sdf'+j);
                domLib.editTcxtContent(chailds[j],"",true);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }
            else {
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    domLib.changeStyleonElement(chailds[j],'background-color','lightblue');
                } else{
                    domLib.changeStyleonElement(chailds[j],'background-color','white');
                }
                domLib.editTcxtContent(chailds[j],date.toString(),true);
                date++;
            }


        }

    }

}

function clearCalendar(){
    for (let i = 0; i < 6; i++) { 
        let chaild = domLib.getChildElements('id','row-'+i);
        for (let index = 0; index < 7; index++) {
                domLib.editTcxtContent(chaild[index],"",true); 
                
            
            
        }
    } 

}

let buttonsDiv = document.createElement('div');
domLib.changeAttribute(buttonsDiv,'class','row m-2');

let previousButton = document.createElement('button');
domLib.editTcxtContent(previousButton,'< Previous',true);
domLib.editHTMLContent(buttonsDiv,previousButton);
domLib.addEvent(previousButton,'click',previousButtonFunction);


let nextButton = document.createElement('button');
domLib.editTcxtContent(nextButton,'Next >',true);
domLib.editHTMLContent(buttonsDiv,nextButton);
domLib.addEvent(nextButton,'click',nextButtonFunction);
let selectMonth = document.createElement('select');
for (let i = 0; i < months.length; i++) {
    let option = document.createElement('option');
    domLib.editTcxtContent(option,months[i],true);
    option.setAttribute('value',i);
    domLib.editHTMLContent(selectMonth,option);
}
domLib.addEvent(selectMonth,'change',jump);
domLib.editHTMLContent(buttonsDiv,selectMonth);
let selectYear = document.createElement('input');
domLib.addEvent(selectYear,'input',jump);
domLib.editHTMLContent(buttonsDiv,selectYear);






domLib.editHTMLContent(parent,buttonsDiv);

function previousButtonFunction(e){
    e.preventDefault();
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    clearCalendar();
    showCalendar(currentMonth, currentYear);
}
function nextButtonFunction(e){
    e.preventDefault();
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    clearCalendar();
    showCalendar(currentMonth, currentYear);
}
function jump() {
    if(selectYear.value){
    currentYear = parseInt(selectYear.value);
    }
    currentMonth = parseInt(selectMonth.value);
    clearCalendar();
    showCalendar(currentMonth, currentYear);
}
function hoverIn(){
    domLib.changeStyleonElement(fd,'display','block');
}
function hoverOut(){
    domLib.changeStyleonElement(fd,'display','none');
}
console.log(date);
let divStyle={'position':'absolute',
              'width':'250px',
              'height':'365px',
              'border':'1px solid red',
              'top':'55px',
              'left':'80px',
              'display':'none'
                                    }
showCalendar(currentMonth, currentYear)
let fd = document.createElement('div');
domLib.changeStyleonElement(fd,divStyle);
domLib.editHTMLContent(parent,fd);

