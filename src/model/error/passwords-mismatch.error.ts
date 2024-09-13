export class PasswordsMismatchError extends Error {
    constructor() {
        super("Password mismatch");
    }

    public static validate(pass1: string, pass2: string): PasswordsMismatchError | null {
        if (pass1 !== pass2) {
            return new PasswordsMismatchError();
        }

        return null;
    }
}
