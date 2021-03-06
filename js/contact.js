const contactUs = (event) => {

    const userName = document.querySelector('#contactName');
    const userEmail = document.querySelector('#contactEmail');
    const userSubject = document.querySelector('#contactSubject');
    const userMessage = document.querySelector('#contactMessage');

    alert(`Name- ${userName.value} \nEmail- ${userEmail.value} \nSubject- ${userSubject.value} \nMessage- ${userMessage.value}`);
    [userName.value, userEmail.value, userSubject.value, userMessage.value] = ['', '', '', ''];
}