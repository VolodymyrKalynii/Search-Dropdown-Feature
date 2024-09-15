import React, { useEffect, useRef, useState } from 'react';

import { List, SearchProps } from './Search.types';
import { Dropdown, DropdownContent, Input, MainWrapper } from './components';
import { filterListByValue } from './helpers';
import { useClickOutside, useDropdownPosition } from './hooks';

export const Search = ({
    initiaList,
    onItemClick,
    onMoreClick,
    onMoreResultsClick,
    onAdvancedClick,
}: SearchProps) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    const [searchedValue, setSearchedValue] = useState<string>('');
    const [filteredResults, setFilteredResults] = useState<List>([]);
    const dropdownPosition = useDropdownPosition({
        isDropdownVisible,
        containerRef,
    });

    useEffect(() => {
        if (searchedValue.length > 0) {
            const list: List = filterListByValue({
                list: initiaList,
                searchedValue,
            });

            setFilteredResults(list);
            setIsDropdownVisible(true);
        } else {
            setIsDropdownVisible(false);
        }
    }, [searchedValue]);

    useClickOutside({
        dropdownRef,
        containerRef,
        onClickOutside: () => setIsDropdownVisible(false),
    });

    const onInput = (value: string) => {
        setSearchedValue(value);
    };

    const onInputClick = () => {
        if (searchedValue) {
            setIsDropdownVisible(true);
        }
    };

    const handleAdvancedClick = () => {
        onAdvancedClick?.(searchedValue);
    };

    return (
        <MainWrapper refObject={containerRef}>
            <Input
                onInput={onInput}
                onInputClick={onInputClick}
                onAdvancedClick={handleAdvancedClick}
            />
            {isDropdownVisible && (
                <Dropdown
                    dropdownRef={dropdownRef}
                    dropdownPosition={dropdownPosition}
                >
                    <DropdownContent
                        filteredResults={filteredResults}
                        searchedValue={searchedValue}
                        onItemClick={onItemClick}
                        onMoreClick={onMoreClick}
                        onMoreResultsClick={onMoreResultsClick}
                    />
                </Dropdown>
            )}
        </MainWrapper>
    );
};
