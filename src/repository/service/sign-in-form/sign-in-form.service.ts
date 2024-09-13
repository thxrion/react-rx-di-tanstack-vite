import { singleton } from "tsyringe";

import { ProtoService } from "repository/service/service.proto";
import { InvalidEmailError, InvalidPasswordError } from "model/error";

import { SignInFormState } from "./sign-in-form.types";

const defaultState: SignInFormState = {
    loading: false,
    values: {
        email: "",
        password: "",
    },
    touched: {
        email: false,
        password: false,
    },
    errors: {
        email: null,
        password: null,
    },
    remember: false,
};

@singleton()
export class SignInFormService extends ProtoService<SignInFormState> {
    constructor() {
        super(defaultState);
    }

    setLoading(value: boolean) {
        this.push({
            loading: value,
        });
    }

    setRemember(value: boolean) {
        this.push({ remember: value });
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

    validatePassword() {
        this.push({
            errors: {
                ...this.state.errors,
                password: InvalidPasswordError.validate(this.state.values.password)
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

    reset() {
        this.setDefaultState();
    }
}
