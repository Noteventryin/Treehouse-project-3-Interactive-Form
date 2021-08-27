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

const activities = document.getElementById('activities');
const totalcost = document.getElementById("activities-cost");
let cost = 0;

activities.addEventListener('change', (e) =>{
    const datacost = +e.target.getAttribute('data-cost');
    if(e.target.checked){
      cost += datacost
    }else if(e.target.checked === false){
      cost -= datacost
    }

  totalcost.textContent = `Total:$${cost}`;

});
//"Register for Activities" fieldset element to listen for user changes.
//The credit card payment option should be selected for the user by default.
const Payment = document.getElementById('payment');
const  Creditcardinfo = document.getElementById('credit-card');
const Creditcardselected = Payment.querySelector('option[value="credit-card"]');
Creditcardselected.selected = 'true';
//Payment.children[1].setAttribute('selected','selected')
//Hide paypal and bitcoin payment options default.
const Paypal = document.querySelector('#paypal');
const Bitcoin = document.querySelector('#bitcoin');
Paypal.hidden = true;
Bitcoin.hidden = true;
//when the user selects one of the payment options from  drop down menu,only the chosen payment method section will display.
Payment.addEventListener('change',(e) =>{
    const Selectedpayment = e.target.value
    if(Selectedpayment === 'bitcoin'){
        Bitcoin.style.display = 'block';
        Paypal.style.display = 'none';
        Creditcardinfo.style.display = 'none';
   }else if(Selectedpayment === 'paypal'){
        Bitcoin.style.display = 'none';
        Paypal.style.display = 'block';
        Creditcardinfo.style.display = 'none';
   }else if(Selectedpayment === 'credit-card'){
        Bitcoin.style.display = 'none';
        Paypal.style.display = 'none';
        Creditcardinfo.style.display = 'block';
   }
});
//form validation







 

