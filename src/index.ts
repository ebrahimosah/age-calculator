let char = 'boy';
console.log(char);

const form = document.querySelector('form')!;
const dayInput = document.querySelector("#day") as HTMLInputElement;
const monthInput = document.querySelector("#month") as HTMLInputElement;
const yearInput = document.querySelector("#year") as HTMLInputElement;
const dayMsg = document.querySelector(".day-error") as HTMLSpanElement;
const monthMsg = document.querySelector(".month-error") as HTMLSpanElement;
const yearMsg = document.querySelector(".year-error") as HTMLSpanElement;
const labelDay = document.querySelector(`label[for="day"]`) as HTMLLabelElement;
const labelMonth = document.querySelector(`label[for="month"]`) as HTMLLabelElement;
const labelYear = document.querySelector(`label[for="year"]`) as HTMLLabelElement;

let emptyFields: string[] = [];
let invalidFields: string[] = [];


form?.addEventListener('submit',(e:Event)=>{

    e.preventDefault();

   
    const dayValue = parseInt(dayInput.value);
    const monthValue = parseInt(monthInput.value);
    const yearValue = parseInt(yearInput.value);

    function addError(label:HTMLLabelElement, day:HTMLInputElement, msgDiv:HTMLSpanElement, msg:string ){
        label.classList.add('error-text');
        day.classList.add('error');
        msgDiv.textContent = msg;
    }
    function removeError(label:HTMLLabelElement, day:HTMLInputElement, msgDiv:HTMLSpanElement){
        label.classList.remove('error-text');
        day.classList.remove('error');
        msgDiv.textContent="";
    }
    function isValidDate(day:number,month:number,year:number){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        
        console.log(emptyFields);
    
        

       const isDayValid = day >=1 && day <= 31;
       const isMonthValid = month >=1 && month <=12;
       const isYearValid = year >=1 && year <= currentYear;
        

        if(!isDayValid){
            addError(labelDay,dayInput,dayMsg,'invalid day');
        }
        
        if(!isMonthValid){
            addError(labelMonth,monthInput,monthMsg,'invalid month');
        }

    
        if(!isYearValid || !(typeof year === 'number')){
            addError(labelYear,yearInput,yearMsg,'must be in the past');
        }
        console.log('i ran');
        
    }

//CHECKS IF EMPTY
    if(!dayValue){
        emptyFields.push('day');
    }
    if(!monthValue){
        emptyFields.push('month');
    }
    if(!yearValue){
        emptyFields.push('year');
    }

    // HANDLES ERROR FOR EMPTY
    if(emptyFields.includes('day')){
        addError(labelDay,dayInput,dayMsg,"this field is required");
      
    }
    if(emptyFields.includes('month')){
        addError(labelMonth,monthInput,monthMsg,"this field is required");
        
    }
    if(emptyFields.includes('year')){
        addError(labelYear,yearInput,yearMsg,"this field is required");
        
    }

    
    
 

    if(emptyFields.length===0){
        console.log('i got here');
        isValidDate(dayValue,monthValue,yearValue);
    }
    
    

    //CLEARS EMPTY ARRAY
    dayInput.addEventListener("input", ()=>{
        removeError(labelDay,dayInput,dayMsg);
        if(emptyFields.length>0) emptyFields = [];
        console.log(emptyFields);
        
    })
    monthInput.addEventListener("input", ()=>{
        removeError(labelMonth,monthInput,monthMsg);
        if(emptyFields.length>0) emptyFields = [];
    })
    yearInput.addEventListener("input", ()=>{
        removeError(labelYear,yearInput,yearMsg);
        if(emptyFields.length>0) emptyFields = [];
    })
    
   
    console.log(emptyFields.length);

})

