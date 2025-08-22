const form = document.getElementById("myForm");
const messageInput = document.getElementById('message');
const emailInput = document.getElementById('email');
const charCount = document.getElementById('charCount');
const responseBox = document.getElementById('formResponse');

function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}  

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = emailInput.value.trim();
    const messageText = messageInput.value.trim();
    const genderInput = document.querySelector('input[name="gender"]:checked');

    if(!name || !email){
        alert('Please fill in both name and email');
        return;
    }

    if(!validateEmail(email)){
        alert("Please enter a valid email address");
        return;
    }

    if(!genderInput){
        alert('Please select a gender');
        return;
    }

    const gender = genderInput.value;

    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${messageText}\nGender: ${gender}`);

    charCount.textContent = '0 / 100';
    emailInput.style.borderColor = ''

    responseBox.style.display = 'block';
    setTimeout(() => {
        responseBox.style.display = 'none';
    }, 3000);

    form.reset();
})

emailInput.addEventListener('input', function(){
    if(!validateEmail(this.value)){
        this.style.borderColor = 'red';
    }
    
    else{
        this.style.borderColor = 'green';
    }
})

messageInput.addEventListener('input', function() {
    const noSpaceLength = this.value.replace(/\s/g, '').length;

    if (noSpaceLength > 100){
        this.value = this.value.slice(0, 100);
    }
    
    charCount.textContent = `${noSpaceLength} / 100`;
})