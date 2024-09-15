import { MutableRefObject, useEffect, useState } from 'react';

export type DropdownPosition = {
    top: number;
    left: number;
    width: number;
};

type UseDropdownPositionProps = {
    isDropdownVisible: boolean;
    containerRef: MutableRefObject<HTMLDivElement | null>;
};

type UseDropdownPosition = (
    props: UseDropdownPositionProps,
) => DropdownPosition;

export const useDropdownPosition: UseDropdownPosition = ({
    isDropdownVisible,
    containerRef,
}) => {
    const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition>({
        top: 0,
        left: 0,
        width: 0,
    });

    const calculateDropdownPosition = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom,
                left: rect.left,
                width: rect.width,
            });
        }
    };

    useEffect(() => {
        if (isDropdownVisible) {
            calculateDropdownPosition();
            window.addEventListener('resize', calculateDropdownPosition);
            window.addEventListener('scroll', calculateDropdownPosition);
        } else {
            window.removeEventListener('resize', calculateDropdownPosition);
            window.removeEventListener('scroll', calculateDropdownPosition);
        }

        return () => {
            window.removeEventListener('resize', calculateDropdownPosition);
            window.removeEventListener('scroll', calculateDropdownPosition);
        };
    }, [isDropdownVisible]);

    return dropdownPosition;
};
