import { formValidation } from "./formValidation"
const submitBtn = document.querySelector("#submitForm")
submitBtn.addEventListener("click" , (e) => {
    e.preventDefault()
    const myForm = formValidation([
        {
            name : "username",
            rules : [
                {name : "required" , value : true , errMsg : "this input is required"},
                {name : "maxLength" , value : 10 , errMsg : "maxLength error"},
            ]
        },
        {
            name : "password",
            rules : [
                {name : "required" , value : true , errMsg : "this input is required"},
                {name : "minLength" , value : 3 , errMsg : "minLength error"},
            ]
        },
    ])
})