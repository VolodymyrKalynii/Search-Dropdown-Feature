import { DropdownEventHandlers, List } from '../../Search.types';

export type DropdownContentProps = Readonly<{
    filteredResults: List;
    searchedValue: string;
}> &
    DropdownEventHandlers;
