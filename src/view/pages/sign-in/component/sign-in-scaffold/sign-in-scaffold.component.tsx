import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

interface ISignInScaffoldProps {
    email: JSX.Element;
    password: JSX.Element;
    submit: JSX.Element;
    remember: JSX.Element;
    onInit(): void;
    onDestroy(): void;
}

export function SignInScaffold({ email, password, remember, submit, onInit, onDestroy, }: ISignInScaffoldProps): JSX.Element {
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    useEffect(() => {
        onInit();

        return onDestroy;
    }, []);

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
                {remember}
                <div>
                    {submit}
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Don't have an account?</p>
                    <Link to="/sign-up" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</Link>
                </div>
            </form>
        </div>
    );
}
