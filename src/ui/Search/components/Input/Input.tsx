import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { DEBOUNCE_INPUT_DELAY } from '../../constants';
import { Button } from '../Button';
import styles from './Input.module.scss';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({
    onInput,
    onInputClick,
    onAdvancedClick,
}) => {
    const [searchStr, setSearchStr] = useState<string>('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const searchedValue = searchStr.toLowerCase().trim();

            onInput(searchedValue);
        }, DEBOUNCE_INPUT_DELAY);
        return () => clearTimeout(timeoutId);
    }, [searchStr]);

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
