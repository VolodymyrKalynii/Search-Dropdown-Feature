import { MutableRefObject, useEffect } from "react";
import { checkIsClickOnEmement } from "../utils";

type UseClickOutsideProps = {
   dropdownRef: MutableRefObject<HTMLDivElement | null>;
   containerRef: MutableRefObject<HTMLDivElement | null>;
   onClickOutside: () => void;
};

type UseClickOutside = (props: UseClickOutsideProps) => void;

export const useClickOutside: UseClickOutside = ({dropdownRef, containerRef, onClickOutside}) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !checkIsClickOnEmement(dropdownRef, event) &&
                !checkIsClickOnEmement(containerRef, event)
            ) {
                onClickOutside();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);
};
