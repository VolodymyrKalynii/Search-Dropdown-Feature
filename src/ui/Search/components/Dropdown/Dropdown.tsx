import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<DropdownProps> = ({
    dropdownPosition,
    dropdownRef,
    children,
}) =>
    createPortal(
        <div
            className="dropdown"
            style={{
                position: 'absolute',
                top: dropdownPosition.top + 'px',
                left: dropdownPosition.left + 'px',
                width: dropdownPosition.width + 'px',
            }}
            ref={dropdownRef}
        >
            {children}
        </div>,
        document.body,
    );
