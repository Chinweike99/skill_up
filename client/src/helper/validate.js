import toast from "react-hot-toast";


/** Verify Username */
const nameVerify = (error ={}, values) => {
    if(!values.name){
        error.name = toast("Username is required ..")
    }else if(values.name.includes(" ")){
        error.name = toast.error("Enter a valid username")
    }

    return error;
}


/** Verify Password */
const verifyPassword = (error={}, values)=>{
    const specialChars = /[`!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        error.password = toast.error("Password is required")
    }else if(values.password.includes(" ")){
        error.password = toast.error("Password should not have blank");
    }else if(values.password.length < 5){
        error.password = toast.error("Password must be greater than 5 characters")
    }else if(!specialChars.test(values.password)){
        error.password = toast.error("Add a special character (e.g @#$ etc)");
    }

    return error;
}



/**Verify Email */
const verifyEmail = (error={}, values)=>{
    const emailChars = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!values.email){
        error.email = toast.error("Email is required");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong email inputs ..")
    }else if(!emailChars.test(values.email)){
        error.email = toast.error("Invalid email address")
    }
    return error;
}


export const verifyRegistration = (values)=>{
    const errors = nameVerify({}, values);
    verifyEmail(errors, values);
    verifyPassword(errors, values);

    if(values.password !== values.confirmPassword){
        errors.exist = toast.error("Passwords do not match")
    }

    return errors;
}