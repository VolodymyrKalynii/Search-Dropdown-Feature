import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

import styles from './Text.module.scss';
import { TextProps } from './Text.types';
import { getContent } from './helpers';

export const Text: FC<TextProps> = ({
    value,
    searchedValue = '',
    className,
}) => {
    const getMatchedValueCompoent = (content: ReactNode) => (
        <span className={styles.searchedValue}>{content}</span>
    );

    return (
        <span className={clsx(styles.text, className)}>
            {getContent(value, searchedValue, getMatchedValueCompoent)}
        </span>
    );
};
