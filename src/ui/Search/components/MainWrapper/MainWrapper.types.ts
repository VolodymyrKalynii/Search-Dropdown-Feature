import { MutableRefObject, ReactNode } from 'react';

export type MainWrapperProps = Readonly<{
    refObject: MutableRefObject<HTMLDivElement | null>;
    children?: ReactNode;
}>;
