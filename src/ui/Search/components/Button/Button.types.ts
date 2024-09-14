import { MouseEventHandler } from 'react';

export type ButtonProps = Readonly<{
    className?: string;
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}>;
