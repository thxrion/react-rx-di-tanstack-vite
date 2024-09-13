import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignInEmailComponent } from "./sign-in-email.component";

export function SignInEmail() {
    const { loading, values, touched, errors } = useObservableState(UC.signInForm.getState());

    return (
        <SignInEmailComponent
            value={values.email}
            disabled={loading}
            error={touched.email ? errors.email : null}
            onChange={UC.signInForm.changeEmail}
        />
    );
}
