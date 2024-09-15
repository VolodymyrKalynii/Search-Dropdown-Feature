import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { getContent } from './helpers';
import { TextProps } from './Text.types';

import styles from './Text.module.scss';

export const Text: FC<TextProps> = ({ value, searchedValue = '', className }) => {
    const getMatchedValueCompoent = (content: ReactNode) => <span className={styles.searchedValue}>{content}</span>;

    return (
        <span className={clsx(styles.text, className)}>
            {getContent(value, searchedValue, getMatchedValueCompoent)}
        </span>
    )
};
