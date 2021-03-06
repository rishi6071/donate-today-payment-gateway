const contactUs = (event) => {

    const userName = document.querySelector('#contactName');
    const userEmail = document.querySelector('#contactEmail');
    const userSubject = document.querySelector('#contactSubject');
    const userMessage = document.querySelector('#contactMessage');

    swal({
        text: `Name- ${userName.value} \nEmail- ${userEmail.value} \nSubject- ${userSubject.value} \nMessage- ${userMessage.value}`,
        icon: 'success'
    });
    [userName.value, userEmail.value, userSubject.value, userMessage.value] = ['', '', '', ''];
}