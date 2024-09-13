import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { HeaderComponent } from "./header.component";

function Link({ to, children }: { to: string; children: React.ReactNode }) {
    return <a href={to}>{children}</a>;
}

vi.mock("@tanstack/react-router", () => ({
    Link,
}));

describe("HeaderComponent", () => {
    it("should render Home and About links", () => {
        render(<HeaderComponent authorized={false} signOut={vi.fn()} />);

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("should render 'Sign in' link when not authorized", () => {
        render(<HeaderComponent authorized={false} signOut={vi.fn()} />);

        expect(screen.getByText("Sign in")).toBeInTheDocument();
    });

    it("should render 'Private' link and 'Sign Out' button when authorized", () => {
        render(<HeaderComponent authorized={true} signOut={vi.fn()} />);

        expect(screen.getByText("Private")).toBeInTheDocument();
        expect(screen.getByText("Sign Out")).toBeInTheDocument();
    });

    it("should call signOut when 'Sign Out' button is clicked", () => {
        const signOutMock = vi.fn();
        render(<HeaderComponent authorized={true} signOut={signOutMock} />);

        const signOutButton = screen.getByText("Sign Out");
        fireEvent.click(signOutButton);

        expect(signOutMock).toHaveBeenCalledTimes(1);
    });
});
