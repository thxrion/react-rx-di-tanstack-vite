
import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignUpPasswordRepeatedComponent } from "./sign-up-password-repeated.component";

export function SignUpPasswordRepeated() {
    const { loading, values, touched, errors } = useObservableState(UC.signUpForm.getState());

    return (
        <SignUpPasswordRepeatedComponent
            value={values.passwordRepeated}
            disabled={loading}
            error={touched.passwordRepeated ? errors.password : null}
            onChange={UC.signUpForm.changePasswordRepeated}
        />
    );
}
