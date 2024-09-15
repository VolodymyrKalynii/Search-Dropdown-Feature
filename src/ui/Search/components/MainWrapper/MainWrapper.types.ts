import { MutableRefObject, ReactNode } from 'react';

export type MainWrapperProps = Readonly<{
    ref: MutableRefObject<HTMLDivElement | null>;
    children?: ReactNode;
}>;
