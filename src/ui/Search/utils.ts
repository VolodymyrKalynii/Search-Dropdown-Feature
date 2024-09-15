import { MutableRefObject } from 'react';

export const checkIsClickOnEmement = (
    divRef: MutableRefObject<HTMLDivElement | null>,
    event: MouseEvent,
) => divRef.current && divRef.current.contains(event.target as Node);

export const checkIsStringContainsValue = (
    string?: string,
    value: string = '',
) => string?.toLowerCase().includes(value);
