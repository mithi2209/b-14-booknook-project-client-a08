

import type { Metadata } from "next";
import RegisterForm from "../_Components/registerForm/RegisterForm";


export const metadata: Metadata = {
  title: "BookNook | Register",
  description: "Create a new BookNook account.",
};


const RegisterPage = () => {
    return (
        <div>
            <RegisterForm></RegisterForm>
        </div>
    );
};

export default RegisterPage;