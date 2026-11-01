
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookNook | Login",
  description: "Log in to your BookNook account.",
};

import LoginForm from "../_Components/loginForm/LoginForm";

const LoginPage = () => {
    return (
        <div>
            <LoginForm></LoginForm>
        </div>
    );
};

export default LoginPage;