import React, { ReactNode } from "react";
import Button from '@mui/material/Button'

export interface ButtonProps {
    testId?: string;
    label: string;
    variant:
        | "primary"
        | "secondary";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: ReactNode;
    ariaLabel?: string;
}

export const CustomButton: React.FC<ButtonProps> = ({
    testId,
    variant = "primary",
    label = "I'm a button",
    disabled,
    onClick,
    ariaLabel,
    children,
}) => {
    return (
        <Button color={variant} variant="contained">
            {label}
        </Button>
    );
};