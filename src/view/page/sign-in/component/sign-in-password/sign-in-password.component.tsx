import React from "react";

interface ISignInPasswordComponentProps {
    value: string;
    disabled: boolean;
    error: Error | null;
    onChange(value: string): void;
}

export function SignInPasswordComponent({ value, disabled, error, onChange }: ISignInPasswordComponentProps): JSX.Element {
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e.target.value);
    }

    return (
        <React.Fragment>
            <input
                className={`mt-1 px-2 py-1 block w-full h-8 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                type="password" name="password"
                placeholder="Your password"
                value={value} disabled={disabled}
                onChange={changeHandler}
            />
            {error && <p className="mt-1 text-red-500 text-sm">{error.message}</p>}
        </React.Fragment>
    );
}

