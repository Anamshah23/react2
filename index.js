const userName = document.getElementById('userName')
const email = document.getElementById('email')
const mobileNo = document.getElementById('mobileNo')
const favColor = document.getElementById('favColor')
const Female = document.getElementById('Female')
const Male = document.getElementById('Male')
const Other = document.getElementById('Other')
const submitBtn = document.getElementById('submitBtn')
const data = document.getElementById('data')
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let Gender = Female.value ? 'Female' : (Male.value ? 'Male' : 'Other');
    data.innerHTML = `Name: ${userName.value} <br/> Email: ${email.value}<br />
Mobile Number: ${mobileNo.value}<br/>
 favColor: ${favColor.value};<br/> Gender: ${Gender}`
});
