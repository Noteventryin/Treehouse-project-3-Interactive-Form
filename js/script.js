//When the page first loads, the first text field should have the focus state by default
const nameinput = document.getElementById('name');
nameinput.focus();
//"Other job role" text field should be hidden by default and only displayed once users select "Other", and be hidden if the user selects any other option.
const JobRole = document.getElementById('title');
const otherjob = document.getElementById('other-job-role');
otherjob.style.display = 'none';
//'none' means will not be displayed.
//'inline-block' Element is rendered as a block box inside an inline box.
//When 'other' is detected the text field will show up. 
JobRole.addEventListener('change', () =>{
    if(JobRole.value === 'other'){
    otherjob.style.display = 'inline-block'
    }else{
    otherjob.style.display = 'none'
    }
});

const Color = document.getElementById('color');
Color.style.display = 'none';
//Disable the "Color" <select> element.
const Design = document.getElementById('design');
let Designoptions = Color.querySelectorAll('option');
Design.addEventListener('change', () =>{
   Color.style.display = 'inline-block'
  for(let i = 0; i < Designoptions.length; i++){ 
    Designoptions[i].hidden = true;
  }        
  //The hidden attribute can prevent option elements from being displayed in the drop down menu.  
  if(Design.value === 'js puns'){
    Designoptions = Color.querySelectorAll('[data-theme="js puns"]')
    Designoptions.ariaSelected = true
    //The ariaSelected property of the Element interface reflects the value of the aria-selected attribute

    for (let i = 0; i < Designoptions.length; i++){
        Designoptions[i].hidden = false;
    }
  }else if(Design.value === 'heart js'){
    Designoptions = Color.querySelectorAll('[data-theme="heart js"]')
    Designoptions.ariaSelected = true 
    
    for (let i = 0; i < Designoptions.length; i++){
        Designoptions[i].hidden = false;
    }
  }
  
});
// "Color" dropdown menu should display only the color options associated with the selected design.



