import { singleton } from "tsyringe";

import { ProtoService } from "repository/service/service.proto";
import { InvalidEmailError, InvalidPasswordError, PasswordsMismatchError } from "model/error";

import { SignUpFormState } from "./sign-up-form.types";

const defaultState: SignUpFormState = {
    loading: false,
    values: {
        email: "",
        password: "",
        passwordRepeated: "",
    },
    touched: {
        email: false,
        password: false,
        passwordRepeated: false,
    },
    errors: {
        email: null,
        password: null,
    },
};

@singleton()
export class SignUpFormService extends ProtoService<SignUpFormState> {
    constructor() {
        super(defaultState);
    }

    setLoading(value: boolean) {
        this.push({
            loading: value,
        });
    }

    setEmail(value: string) {
        this.push({
            values: {
                ...this.state.values,
                email: value 
            }
        });
    }

    validateEmail() {
        this.push({
            errors: {
                ...this.state.errors,
                email: InvalidEmailError.validate(this.state.values.email)
            }
        });
    }

    touchEmail() {
        this.push({
            touched: {
                ...this.state.touched,
                email: true 
            }
        });
    }

    setPassword(value: string) {
        this.push({
            values: {
                ...this.state.values,
                password: value 
            }
        });
    }

    setPasswordRepeated(value: string) {
        this.push({
            values: {
                ...this.state.values,
                passwordRepeated: value 
            }
        });
    }

    validatePassword() {
        this.push({
            errors: {
                ...this.state.errors,
                password: (
                    PasswordsMismatchError.validate(this.state.values.password, this.state.values.passwordRepeated)
                    || InvalidPasswordError.validate(this.state.values.password)
                )
            }
        });
    }

    touchPassword() {
        this.push({
            touched: {
                ...this.state.touched,
                password: true 
            }
        });
    }

    touchPasswordRepeated() {
        this.push({
            touched: {
                ...this.state.touched,
                passwordRepeated: true 
            }
        });
    }

    reset() {
        this.setDefaultState();
    }
}
