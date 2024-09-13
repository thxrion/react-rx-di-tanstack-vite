import { ISignUpForm } from "model/dtm";
import { InvalidEmailError, InvalidPasswordError, PasswordsMismatchError } from "model/error";

export interface SignUpFormState {
    loading: boolean;
    values: ISignUpForm;
    touched: Record<keyof ISignUpForm, boolean>;
    errors: {
        email: InvalidEmailError | null;
        password: PasswordsMismatchError | InvalidPasswordError | null;
    },
}
