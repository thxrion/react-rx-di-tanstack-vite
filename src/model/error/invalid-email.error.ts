export class InvalidEmailError extends Error {
    constructor() {
        super("Invalid email");
    }

    public static validate(value: string): InvalidEmailError | null {
        const doesValueMatchRegex = (
            value
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        );

        if (!doesValueMatchRegex) {
            return new InvalidEmailError();
        }

        return null;
    }
}
