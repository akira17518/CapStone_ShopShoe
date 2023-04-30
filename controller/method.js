
//Function check validation from user 
//  Check white space
export let  check_white_space = (value, name) => {
    if (value.trim() === "") {
        document.querySelector(`.check__${name}`).innerHTML = `Không được bỏ trống phần này (*)`
        return false
    } else {
        document.querySelector(`.check__${name}`).innerHTML = ``
        return true
    }
}

// Check phone number 
export let telephoneCheck = (str) => {
    let isphoneNumber = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(str);
    if (isphoneNumber === false) {
        document.querySelector('.check__phone').innerHTML = 'Vui lòng nhập lại số điện thoại'
        return false
    } else {
        return true
    }
}

//Check confirm password and password from the form 
export let validate = () => {
    let x = document.querySelector("#password").value
    let y = document.querySelector("#confirm_Password").value

    if (x === y) {
        
        return true
    } else {
        document.querySelector('.check__confirmPassword').innerHTML = 'Mật khẩu không khớp !!!'
        return false
    }
}

// export let checkEmptyString = () => {
//     //Check empty name
//     if (customer.name !== "" || customer.name === '') {
//         //document.querySelector('.check__name').innerHTML = 'Vui lòng nhập lại họ và tên !!!'
//         return false
//     } else {
//         return true
//     }
// }






