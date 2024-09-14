import clsx from 'clsx';
import { FC } from 'react';

import styles from './Text.module.scss';
import { TextProps } from './Text.types';

export const Text: FC<TextProps> = ({ value, searchedValue = '', className }) => {
    if (!searchedValue || !value.toLowerCase().includes(searchedValue.toLowerCase())) {
        return <span className={clsx(styles.text, className)}>{value}</span>;
    }

    const startIndex = value.toLowerCase().indexOf(searchedValue.toLowerCase());
    const endIndex = startIndex + searchedValue.length;

    const beforeMatch = value.slice(0, startIndex);
    const match = value.slice(startIndex, endIndex);
    const afterMatch = value.slice(endIndex);

    return (
        <span className={clsx(styles.text, className)}>
            {beforeMatch}
            <span className={styles.searchedValue}>{match}</span>
            {afterMatch}
        </span>
    );
};
