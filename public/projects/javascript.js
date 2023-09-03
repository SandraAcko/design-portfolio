const validate = document.getElementById('validate');
const name = document.getElementById('name');
const submit = document.getElementById('submit');
const email = document.getElementById('email');
const card = document.getElementById('card');

//Name validation
name.addEventListener('keyup', function (event) {
  isValidName = name.checkValidity();

if ( isValidName ) {
    document.getElementById("name").style.backgroundColor="#00ff0080";
    submit.disabled = false;
  } else {
    document.getElementById("name").style.backgroundColor="Pink";
    submit.disabled = true;
  } 
});
  
//Email Validation
email.addEventListener('keyup', function (event) {
  isValidEmail = email.checkValidity();

if ( isValidEmail ) {
    document.getElementById("email").style.backgroundColor="#00ff0080";
    submit.disabled = false;
  } else {
    document.getElementById("email").style.backgroundColor="Pink";
    submit.disabled = true;
  } 
});

//Card Validation

card.addEventListener('keyup', function (event) {
  isValidCard = card.checkValidity();
  isValidLuhn = valid_credit_card();

if ( isValidCard && (isValidLuhn)) {
    document.getElementById("card").style.backgroundColor="#00ff0080";
    submit.disabled = false;
  } else {
    document.getElementById("card").style.backgroundColor="Pink";
    submit.disabled = true;
  } 
});

// takes the form field value and returns true on valid number
function valid_credit_card() {
  let cardNo = document.getElementById('card').value;

// accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(cardNo)) return false;

// The Luhn Algorithm. It's so pretty.
    var nCheck = 0, nDigit = 0, bEven = false;
    cardNo = cardNo.replace(/\D/g, "");

    for (var n = cardNo.length - 1; n >= 0; n--) {
        var cDigit = cardNo.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9; 
        }

        nCheck += nDigit;
        bEven = !bEven;

    }

    return (nCheck % 10) == 0;
}