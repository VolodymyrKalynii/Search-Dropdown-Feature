import React from 'react';

import styles from './MainWrapper.module.scss';
import { MainWrapperProps } from './MainWrapper.types';

export const MainWrapper = ({ children, ref }: MainWrapperProps) => (
    <div ref={ref} className={styles.mainWrapper}>
        {children}
    </div>
);
