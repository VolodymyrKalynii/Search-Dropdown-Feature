import { useRef } from "react";
import { AccordionProps } from "./Accordion.types";

import styles from './Accordion.module.scss';

export const Accordion = ({ isOpened, children }: AccordionProps) => {
    const contentHeight = useRef<HTMLDivElement | null>(null);

    const style = { height: isOpened ? contentHeight?.current?.scrollHeight : '0'};
    
    return (
        <div ref={contentHeight} className={styles.wrapper} style={style}>
            {children}
        </div>
    )
};
