import { Link } from "@tanstack/react-router";

interface IHeaderComponentProps {
    authorized: boolean;
    signOut(): void;
}

export function HeaderComponent({ authorized, signOut }: IHeaderComponentProps) {
    return (
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
                About
            </Link>
            {!!authorized && (
                <>
                    <Link to="/private" className="[&.active]:font-bold">
                        Private
                    </Link>
                    <button
                        className="px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                        onClick={signOut}
                    >
                        Sign Out
                    </button>
                </>
            )}
            {!authorized && (
                <Link to="/sign-in" className="[&.active]:font-bold">
                    Sign in
                </Link>
            )}
        </div>
    );
}
