
import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignUpPasswordComponent } from "./sign-up-password.component";

export function SignUpPassword() {
    const { loading, values, touched, errors } = useObservableState(UC.signUpForm.getState());

    return (
        <SignUpPasswordComponent
            value={values.password}
            error={touched.password ? errors.password : null}
            disabled={loading}
            onChange={UC.signUpForm.changePassword}
        />
    );
}
