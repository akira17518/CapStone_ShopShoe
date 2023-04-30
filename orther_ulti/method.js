//-------Validation--------

function checkEmpty(value, name) {
    if (value.trim() == '') {
        document.querySelector(`#error-required-${name}`).innerHTML = `Please provide your ${name}!`;
        return false;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = '';
    return true;
}


function checkEmail(value, name) {

    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
        document.querySelector(`#error-required-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = `Please enter correct ${name} !`;
    return false;


}

function checkNumber(value, name) {

    let regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {

        document.querySelector(`#error-required-${name}`).innerHTML = '';
        return true;
    }
    else {
        document.querySelector(`#error-required-${name}`).innerHTML = `Please enter correct ${name} number !`;
        return false;
    }

}

function checkText(value, name) {
    let regexLetter = /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i;;
    if (regexLetter.test(value)) {
        document.querySelector(`#error-required-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = `Please enter correct ${name} !`;
    return false;
}

function checkPassword(value, name) {
    let regexPass = /^[A-Za-z]\w{6,10}$/;
    if (regexPass.test(value)) {
        document.querySelector(`#error-required-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = `
    ${name} need 6 to 10 characters,one uppercase and one lowercase letter!`;
    return false;
}
function duplicatePass(value, name) {
    let password = document.querySelector("#passConfirm");
    console.log(password.value);
    if (value !== password.value || password.value === "") {
        document.querySelector(`.${name}`).classList.add("text-danger")
        document.querySelector(`.${name}`).innerHTML = `Password doesn't match !`;
        return false;
    }
    else if (value === password.value) {
        document.querySelector(`.${name}`).innerHTML = "";
        return true
    }
}



function checkGender(value, name) {
    if (value == undefined) {
        let err = document.querySelector(`.${name}`);
        err.classList.add("text-danger");
        err.innerHTML = ("Please select your gender !");
        return false
    } else {
        document.querySelector(`.${name}`).innerHTML = "";
        return true;
    }
}





function checkValid(obj) {
    let valid = true;

    valid = checkEmpty(obj.email, 'Email') &
        checkEmpty(obj.password, 'Password') &
        checkEmpty(obj.name, 'Name') &
        checkEmpty(obj.phone, 'Phone');

    valid = valid & checkEmail(obj.email, 'Email');
    valid = valid & checkNumber(parseInt(obj.phone), 'Phone')
    valid = valid & checkText(obj.name, 'Name');
    valid = valid & checkGender(obj.gender, "gender-error")
    valid = valid & duplicatePass(obj.password, "error-duplicate-password") & checkPassword(obj.password, 'Password');
    return valid;
}