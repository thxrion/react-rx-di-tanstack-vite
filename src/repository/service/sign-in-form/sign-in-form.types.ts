import { ISignInForm } from "model/dtm";
import { InvalidEmailError, InvalidPasswordError } from "model/error";

export interface SignInFormState {
    loading: boolean;
    values: ISignInForm;
    remember: boolean;
    touched: Record<keyof ISignInForm, boolean>;
    errors: {
        email: InvalidEmailError | null;
        password: InvalidPasswordError | null;
    };
}
