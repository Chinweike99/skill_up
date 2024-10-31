import toast from "react-hot-toast";

/** Verify Username */
const nameVerify = (error = {}, values) => {
    if (!values.name) {
        error.name = "Username is required.";
        toast.error(error.name);
    } else if (values.name.includes(" ")) {
        error.name = "Username should not contain spaces.";
        toast.error(error.name);
    }
    return error;
};

/** Verify Surname */
// const surnameVerify = (error = {}, values) => {
//     if (!values.surname) {
//         error.surname = "Surname is required.";
//         toast.error(error.surname);
//     }
//     return error;
// };

/** Verify Phone Number */
const numberVerify = (error = {}, values) => {
    const phonePattern = /^[0-9]{10,15}$/; // Adjust regex as per your needs
    if (!values.number) {
        error.number = "Phone number is required.";
        toast.error(error.number);
    } else if (!phonePattern.test(values.number)) {
        error.number = "Invalid phone number.";
        toast.error(error.number);
    }
    return error;
};

/** Verify Field of Expertise */
const fieldVerify = (error = {}, values) => {
    if (!values.field) {
        error.field = "Field of expertise is required.";
        toast.error(error.field);
    }
    return error;
};

/** Verify Email */
const verifyEmail = (error = {}, values) => {
    const emailChars = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.email) {
        error.email = "Email is required.";
        toast.error(error.email);
    } else if (!emailChars.test(values.email)) {
        error.email = "Invalid email address.";
        toast.error(error.email);
    }
    return error;
};

/** Verify Password */
const verifyPassword = (error = {}, values) => {
    const specialChars = /[`!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!values.password) {
        error.password = "Password is required.";
        toast.error(error.password);
    } else if (values.password.includes(" ")) {
        error.password = "Password should not contain spaces.";
        toast.error(error.password);
    } else if (values.password.length < 5) {
        error.password = "Password must be at least 5 characters.";
        toast.error(error.password);
    } else if (!specialChars.test(values.password)) {
        error.password = "Password must include a special character.";
        toast.error(error.password);
    }
    return error;
};

/** Verify Registration Form */
export const verifyRegistration = (values) => {
    const errors = nameVerify({}, values);
    // surnameVerify(errors, values);
    // numberVerify(errors, values);
    fieldVerify(errors, values);
    verifyEmail(errors, values);
    verifyPassword(errors, values);

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
        toast.error(errors.confirmPassword);
    }

    return errors;
};

export const studentRegistration = (values) => {
    const errors = nameVerify({}, values);
    verifyEmail(errors, values);
    verifyPassword(errors, values);

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
        toast.error(errors.confirmPassword);
    }

    return errors;
};
