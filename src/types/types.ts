export type SignInFormType = {
    email : string;
    password : string;
}

export type SignUpFormType = {
    email : string;
    password : string;
    validatePassword ?: string;
}

export type UpdateFormType = {
    image ?: File | undefined , 
    firstname : string,
    lastname : string,
    email ?: string,
}

