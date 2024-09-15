import React from 'react';

import styles from './MainWrapper.module.scss';
import { MainWrapperProps } from './MainWrapper.types';

export const MainWrapper = ({ children, refObject }: MainWrapperProps) => (
    <div ref={refObject} className={styles.mainWrapper}>
        {children}
    </div>
);
