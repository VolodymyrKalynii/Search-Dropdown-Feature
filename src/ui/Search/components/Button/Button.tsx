import { FC } from 'react';
import clsx from 'clsx';

import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => (
    <button className={clsx(styles.button, className)} onClick={onClick}>
        {children}
    </button>
);
