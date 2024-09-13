
import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignUpEmailComponent } from "./sign-up-email.component";

export function SignUpEmail() {
    const { loading, values, touched, errors } = useObservableState(UC.signUpForm.getState());

    return (
        <SignUpEmailComponent
            value={values.email}
            disabled={loading}
            error={touched.email ? errors.email : null}
            onChange={UC.signUpForm.changeEmail}
        />
    );
}
