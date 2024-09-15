import { useEffect } from 'react';

import { DEBOUNCE_INPUT_DELAY } from '../constants';

type UseDebouncedInputProps = {
    searchStr: string;
    onInput: (value: string) => void;
};

type UseDebouncedInput = (props: UseDebouncedInputProps) => void;

export const useDebouncedInput: UseDebouncedInput = ({
    searchStr,
    onInput,
}) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const searchedValue = searchStr.toLowerCase().trim();

            onInput(searchedValue);
        }, DEBOUNCE_INPUT_DELAY);
        return () => clearTimeout(timeoutId);
    }, [searchStr]);
};
