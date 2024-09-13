import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

interface ISignUpScaffoldProps {
    email: JSX.Element;
    password: JSX.Element;
    passwordRepeated: JSX.Element;
    submit: JSX.Element;
    onInit(): void;
    onDestroy(): void;
}

export function SignUpScaffold({ email, password, passwordRepeated, submit, onInit, onDestroy }: ISignUpScaffoldProps): JSX.Element {
    useEffect(() => {
        onInit();
        return onDestroy;
    }, []);

    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <form className="max-w-md mx-auto grid grid-cols-1 gap-3" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    {email}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    {password}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Repeat password</label>
                    {passwordRepeated}
                </div>
                <div>
                    {submit}
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Have an account?</p>
                    <Link to="/sign-in" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign in</Link>
                </div>
            </form>
        </div>
    )
}
