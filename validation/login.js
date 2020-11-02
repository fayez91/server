const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {

    str = JSON.stringify(data);
    console.log(str + "data validate"); // Logs output to dev tools console.

    let errors = {};
    //convert empty fields to an empty string so we can use validator functions
    //This library validates and sanitizes strings only. 

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    str1 = JSON.stringify(data.email);
    console.log(str + "data email validate"); // Logs output to dev tools console.

    str2 = JSON.stringify(data.password);
    console.log(str + "data password validate"); // Logs output to dev tools console.

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};