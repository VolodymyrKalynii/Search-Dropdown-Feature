import React, { useRef } from 'react';

import styles from './Accordion.module.scss';
import { AccordionProps } from './Accordion.types';

export const Accordion = ({ isOpened, children }: AccordionProps) => {
    const contentHeight = useRef<HTMLDivElement | null>(null);

    const style = {
        height: isOpened ? contentHeight?.current?.scrollHeight : '0',
    };

    return (
        <div ref={contentHeight} className={styles.wrapper} style={style}>
            {children}
        </div>
    );
};
