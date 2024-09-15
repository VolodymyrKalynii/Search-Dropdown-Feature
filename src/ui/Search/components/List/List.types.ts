import { CategoryItem, DropdownEventHandlers } from '../../Search.types';

export type ListProps = Readonly<{
    searchedValue: string;
    list: CategoryItem[];
}> &
    DropdownEventHandlers;
