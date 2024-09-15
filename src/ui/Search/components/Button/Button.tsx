import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => (
    <button className={clsx(styles.button, className)} onClick={onClick}>
        {children}
    </button>
);
