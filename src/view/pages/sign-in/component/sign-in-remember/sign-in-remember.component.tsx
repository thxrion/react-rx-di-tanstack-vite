interface ISignInRememberComponentProps {
    value: boolean;
    disabled:boolean;
    onChange(v: boolean): void;
}

export function SignInRememberComponent({ value, disabled, onChange }: ISignInRememberComponentProps): JSX.Element {
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e.target.checked);
    }

    return (
        <div className="flex items-center">
            <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border border-gray-300 rounded"
                name="remember-me" type="checkbox"
                checked={value} disabled={disabled}
                onChange={changeHandler}
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
            </label>
        </div>
    )
}
