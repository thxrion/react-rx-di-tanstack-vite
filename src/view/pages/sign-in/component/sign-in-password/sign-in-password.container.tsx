import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignInPasswordComponent } from "./sign-in-password.component";

export function SignInPassword() {
    const { loading, values, touched, errors } = useObservableState(UC.signInForm.getState());

    return (
        <SignInPasswordComponent
            value={values.password}
            disabled={loading}
            error={touched.password ? errors.password : null}
            onChange={UC.signInForm.changePassword}
        />
    );
}
