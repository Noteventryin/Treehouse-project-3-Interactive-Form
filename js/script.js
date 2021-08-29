//When the page first loads, the first text field should have the focus state by default
document.getElementById('name').focus();
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
Design.addEventListener('change', (e) =>{
   Color.style.display = 'block';
   const Designselected = e.target;
   for(let i = 0; i < Designoptions.length; i++){ 
       Designoptions[i].hidden = true;
   }
  //The hidden attribute can prevent option elements from being displayed in the drop down menu.  
        if(Designselected.value ==='js puns'){
            Designoptions = Color.querySelectorAll('[data-theme="js puns"]')
            Designoptions[0].selected = true
            for(let i = 0; i < Designoptions.length; i++){ 
                Designoptions[i].hidden = false;
            }

            
            
        }else if(Designselected.value ==='heart js') {
            Designoptions = Color.querySelectorAll('[data-theme="heart js"]')
            Designoptions[0].selected = true 
            for(let i = 0; i < Designoptions.length; i++){ 
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
const form = document.querySelector('form');
const email = document.getElementById('email');
const nameinput = document.getElementById('name');
const cardnumber = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
//using functions to test inputs validation.
function namevalid(){
    const NameRegex = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameinput.value);
    const Namehit = document.getElementById('name-hint');
    if(NameRegex == false ){
        nameinput.parentElement.className = 'not-valid'
        Namehit.style.display = 'block'
    }else if(NameRegex == true){
        nameinput.parentElement.removeAttribute('class','not-valid')
        Namehit.style.display = 'none'
        nameinput.parentElement.className = 'valid'
    }
    return NameRegex
}
function emailvalid(){
   const EmailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
   const Emailhit = document.getElementById('email-hint');
   if(EmailRegex == false){
        email.parentElement.className = 'not-valid'
        Emailhit.style.display = 'block'
   }else if (EmailRegex == true){
        email.parentElement.removeAttribute('class', 'not-valid')
        Emailhit.style.display = 'none';
        email.parentElement.className = 'valid'
   }
   return EmailRegex
}
//use totalcost as condition to detect if user select any item from activities field.

function activitiesvalid(){
    activities.classList.add('not-valid')
    const activitiehit = document.getElementById('activities-hint')
    activitiehit.style.display = 'block'
    if(cost !== 0){
        activities.classList.add('valid');
        activitiehit.style.display = 'none' 
        activities.classList.remove('not-valid')
        return true
    }
        
}//activities validation function return true inside of the if statement.
//If not return true ,console will print message('Incorrect inputs , please check the form validation. ')
//and form can not be submitted.
function cardnumbervalid(){
   const CardnumberRegex = /^\d{13,16}$/.test(cardnumber.value);
   const Cchit = document.getElementById('cc-hint');
   if(CardnumberRegex == false){
        cardnumber.parentElement.className = 'not-valid'
        Cchit.style.display = 'block'
   }else if(CardnumberRegex == true){
        cardnumber.parentElement.removeAttribute('class', 'not-valid')
        Cchit.style.display = 'none'
        cardnumber.parentElement.className = 'valid'

   }
   return CardnumberRegex
}
function zipcodevalid(){
   const ZipcodeRegex = /^\d{5}$/.test(zipcode.value);
   const Ziphit = document.getElementById('zip-hint');
   if(ZipcodeRegex == false){
        zipcode.parentElement.className = 'not-valid'
        Ziphit.style.display = 'block'
   }else if(ZipcodeRegex == true){
        zipcode.parentElement.removeAttribute('class', 'not-valid')
        Ziphit.style.display = 'none'
        zipcode.parentElement.className = 'valid'
   }
   return ZipcodeRegex
}
function cvvvalid(){
   const CvvRegex = /^\d{3}$/.test(cvv.value);
   const Cvvhit = document.getElementById('cvv-hint');
   if(CvvRegex == false){
        cvv.parentElement.className = 'not-valid'
        Cvvhit.style.display = 'block'
   }else if(CvvRegex == true){
        cvv.parentElement.removeAttribute('class', 'not-valid')
        Cvvhit.style.display = 'none'
        cvv.parentElement.className = 'valid'
   }
   return CvvRegex
}
function paymentvalid(){
    
    if(Payment.value === 'credit-card'){
       Payment.parentElement.classList.remove('not-valid')
       if(cardnumbervalid() && zipcodevalid() && cvvvalid()){
           return true
       }else{
           cardnumbervalid()
           zipcodevalid()
           cvvvalid()
           return false
       }
    }
    if (Payment.value === 'select method') { 
    Payment.parentElement.classList.add('not-valid');
    } else {
    Payment.parentElement.classList.remove('not-valid');
    return true
    }

}
//Add the ‘.not-valid’ and '.valid' className to the parent element of the form .
//Hide the .hint element, if valid.

//listen for submit event.
//console message will show up once user submit their application.
form.addEventListener('submit', (e) =>{
    if ( namevalid() && emailvalid() && activitiesvalid() && paymentvalid()) {
        console.log('form submited')
    } else {

        e.preventDefault()
        namevalid()
        emailvalid()
        activitiesvalid()
        paymentvalid()
        console.log('Incorrect inputs , please check the form validation. ')
    }
})
//Accessibility setup.
//Make the form validation errors obvious to all users. 

let activitiescheckcox = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < activitiescheckcox.length; i++) {
    activitiescheckcox[i].addEventListener('focus', (e) => {
     e.target.parentElement.className = 'focus';
    });

    activitiescheckcox[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    });
};   










 

