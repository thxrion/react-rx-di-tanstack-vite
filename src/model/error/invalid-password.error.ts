export class InvalidPasswordError extends Error {
    constructor() {
        super("Password must be longer than 6 symbols");
    }

    public static validate(value: string): InvalidPasswordError | null {
        const isLongEnough = value.length > 6;

        if (!isLongEnough) {
            return new InvalidPasswordError();
        }

        return null;
    }
}
