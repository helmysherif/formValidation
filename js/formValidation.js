import { inputFilteration } from "./inputFilter";
import { Helper } from './helper';
export const formValidation = (inputs) => {
    inputs.forEach((input) => {
        inputFilteration(input)
    });
    return Helper.buildSchema()
}