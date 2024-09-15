import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = Readonly<{
    className?: string;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}>;
