//Import utilities from others file
import { CustomerInfo } from '../models/register_OOP.js'
import { check_white_space } from '../controller/method.js'
import { validate } from './method.js'
import { telephoneCheck } from './method.js'
let array_Info = []

document.querySelector('.frm_register').onsubmit = (event) => {
    event.preventDefault()  //prevent reloading page again

    //Create new class from class OOP 'CustomerInformation()' from file 'register_OOP.js'
    let customer = new CustomerInfo()
    customer.name = document.querySelector('#name').value
    customer.email = document.querySelector('#email').value
    customer.password = document.querySelector('#password').value
    customer.phone = document.querySelector('#phone').value
    customer.passwordConfirm = document.querySelector('#confirm_Password').value
    customer.gender = document.querySelector('.gender_male').checked

    //Check white spacing
    let valid = true
    valid = check_white_space(customer.name, 'name') & check_white_space(customer.password, 'password') & check_white_space(customer.passwordConfirm, 'confirmPassword') & check_white_space(customer.email, 'email') & check_white_space(customer.phone, 'phone') & validate()  

    if (!valid) {
        return
    }

    //Check phone number format
    if (!telephoneCheck(customer.phone)) {
        return
    }

    //Request API
    let promise = axios.post("https://shop.cyberlearn.vn/api/Users/signup", {
        "email": customer.email,
        "password": customer.password,
        "name": customer.name,
        "gender": customer.gender,
        "phone": customer.phone
    })
    promise.catch(function (err) {
        console.log(err)
        alert('TTài khoản này đã có người sử dụng, vui lòng tạo với tài khoản khác !!!')
    })
    promise.then(function (result) {
        console.log('result', result.data.content)
        alert('Chúc mừng bạn đã đăng kí thành công')
        document.querySelector('.frm_register').reset()
    })
}



