import { MutableRefObject, ReactNode } from 'react';

import { DropdownPosition } from '../../hooks';

export type DropdownProps = Readonly<{
    dropdownRef: MutableRefObject<HTMLDivElement | null>;
    dropdownPosition: DropdownPosition;
    children?: ReactNode;
}>;
