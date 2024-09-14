import { DropdownEventHandlers } from '../../Search.types';

export type DropdownContentProps = Readonly<{
    filteredResults: any;
    searchedValue: string;
}> & DropdownEventHandlers;
