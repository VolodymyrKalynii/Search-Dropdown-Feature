import clsx from 'clsx';
import React from 'react';

import { Button } from '../../../../../Button';
import styles from './CollapceButton.module.scss';
import { CollapceButtonProps } from './CollapceButton.types';

export const CollapceButton = ({ isOpened, onClick }: CollapceButtonProps) => {
    const collapceButtonClassName = clsx(
        styles.button,
        isOpened && styles.active,
    );

    return (
        <Button className={collapceButtonClassName} onClick={() => onClick()}>
            &#x25BC;
        </Button>
    );
};
