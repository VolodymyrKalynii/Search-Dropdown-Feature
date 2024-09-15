'use client';
import { useState, useEffect, useRef } from 'react';
import { Input, DropdownContent, Dropdown } from './components';
import { List, SearchProps } from './Search.types';
import { checkIsClickOnEmement } from './utils';
import { useDropdownPosition } from './hooks';

import styles from './Search.module.scss';
import { filterListByValue } from './helpers';

export const Search = ({ initilaList, onItemClick, onMoreClick, onMoreResultsClick, onAdvancedClick }: SearchProps) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    const [searchedValue, setSearchedValue] = useState<string>('');
    const [filteredResults, setFilteredResults] = useState<List>([]);
    const dropdownPosition = useDropdownPosition({ isDropdownVisible, containerRef });

    useEffect(() => {
        if (searchedValue.length > 0) {
            const list: List = filterListByValue({ list: initilaList, searchedValue });

            setFilteredResults(list);
            setIsDropdownVisible(true);
        } else {
            setIsDropdownVisible(false);
        }
    }, [searchedValue]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!checkIsClickOnEmement(dropdownRef, event) && !checkIsClickOnEmement(containerRef, event)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const onInput = (value: string) => {
        setSearchedValue(value);
    };

    const onInputClick = () => {
        searchedValue && setIsDropdownVisible(true);
    };

    const handleAdvancedClick = () => {
        onAdvancedClick?.(searchedValue);
    };

    return (
        <div className={styles.search} ref={containerRef}>
            <Input onInput={onInput} onInputClick={onInputClick} onAdvancedClick={handleAdvancedClick} />
            {isDropdownVisible && (
                <Dropdown
                    dropdownRef={dropdownRef}
                    dropdownPosition={dropdownPosition}>
                    <DropdownContent
                        filteredResults={filteredResults}
                        searchedValue={searchedValue}
                        onItemClick={onItemClick}
                        onMoreClick={onMoreClick}
                        onMoreResultsClick={onMoreResultsClick}
                    />
                </Dropdown>
            )}
        </div>
    );
};
