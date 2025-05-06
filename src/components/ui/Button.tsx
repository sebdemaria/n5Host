import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <StyledButton className='button' {...props}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    background-color: #fff;
    color: #333;
    border: 1px solid #999;
    border-radius: 8px;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease;

    &:hover:not(:disabled) {
        background-color: #f5f5f5;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;
