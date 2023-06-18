const formElement = document.querySelector('form.login-form');
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: {email, password},
    } = event.currentTarget;
    if (email.value ==="" || password.value === ""){
        alert("Всі поля повинні бути заповнені");

    }else {
        const person = {};
        person.email = email.value;
        person.password = password.value;
        console.log(person);
        event.currentTarget.reset();
    };
});