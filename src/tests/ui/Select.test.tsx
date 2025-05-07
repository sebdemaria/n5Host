import { Select } from "@/components/ui/Select";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("Select component", () => {
    const options = ["en", "es"];

    it("should render", () => {
        render(<Select options={options} value='en' onChange={() => {}} />);

        const select = screen.getByRole("combobox", { name: "select" });

        expect(select).toBeInTheDocument();
    });

    it("should render all options", () => {
        render(<Select options={options} value='en' onChange={() => {}} />);

        const renderedOptions = screen.getAllByRole("option");

        expect(renderedOptions).toHaveLength(options.length);

        options.forEach((opt) => {
            expect(
                screen.getByRole("option", { name: opt.toUpperCase() })
            ).toBeInTheDocument();
        });
    });

    it("should call onChange when value changes", () => {
        const handleChange = vi.fn();

        render(<Select options={options} value='en' onChange={handleChange} />);

        const select = screen.getByRole("combobox", { name: "select" });

        fireEvent.change(select, { target: { value: "es" } });

        expect(handleChange).toHaveBeenCalledWith("es");
    });
});
