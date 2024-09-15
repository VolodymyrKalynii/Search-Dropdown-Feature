import React, { ChangeEvent, FC, useState } from 'react';

import { useDebouncedInput } from '../../hooks';
import { Button } from '../Button';
import styles from './Input.module.scss';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({
    onInput,
    onInputClick,
    onAdvancedClick,
}) => {
    const [searchStr, setSearchStr] = useState<string>('');

    useDebouncedInput({ searchStr, onInput });

    const handleCloseClick = () => {
        setSearchStr('');
        onInput('');
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchStr(e.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <input
                placeholder="Please input value"
                className={styles.input}
                type="text"
                value={searchStr}
                onInput={handleInput}
                onClick={onInputClick}
            />
            <div className={styles.controls}>
                {searchStr && (
                    <button
                        className={styles.close}
                        onClick={handleCloseClick}
                    />
                )}
                <Button onClick={onAdvancedClick}>Adanced</Button>
            </div>
        </div>
    );
};
