import { SessionController } from "./session";
import { SignInFormController } from "./sign-in-form";
import { SignUpFormController } from "./sign-up-form";

export const UC = {
    session: new SessionController(),
    signInForm: new SignInFormController(),
    signUpForm: new SignUpFormController(),
};
