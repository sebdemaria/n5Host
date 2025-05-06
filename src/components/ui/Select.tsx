import React from "react";
import styled from "styled-components";

interface SelectProps {
    options: string[];
    value: string;
    onChange: (value: any) => void;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
    return (
        <StyledSelect
            className='select'
            aria-label='select'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {options.map((option) => (
                <option className='select__option' key={option} value={option}>
                    {option.toUpperCase()}
                </option>
            ))}
        </StyledSelect>
    );
};

const StyledSelect = styled.select.attrs({ className: "select" })`
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: white;
    color: #333;
    font-size: 1rem;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #666;
    }

    &__option {
        font-size: 1rem;
        color: #333;
    }
`;
