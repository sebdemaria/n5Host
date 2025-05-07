import { Button } from "@/components/ui/Button";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("Button component", () => {
    it("should render with text", () => {
        render(<Button>Click Me</Button>);

        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("should call onClick when clicked", () => {
        const handleClick = vi.fn();

        render(<Button onClick={handleClick}>Click</Button>);

        fireEvent.click(screen.getByText("Click"));

        expect(handleClick).toHaveBeenCalled();
    });

    it("should be disabled when passed the disabled prop", () => {
        render(<Button disabled>Disabled</Button>);

        const button = screen.getByText("Disabled");

        expect(button).toBeDisabled();
    });
});
