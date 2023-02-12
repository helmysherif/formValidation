import { Helper } from "./helper";
import { validationStrategy } from "./validationStrategy"
export const inputFilteration = (input) => {
    let element = document.querySelector(`input[name=${input.name}]`)
    input.rules.forEach((rule) => {
        let validationError = validationStrategy[rule.name](element.value , rule);
        if(validationError)
        {
            Helper.errorHandler({
                name : input.name,
                rules : [
                    {name : rule.name , errMsg : validationError}
                ]
            })
        }
    })
}