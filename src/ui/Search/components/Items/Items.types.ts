import { ListItem, DropdownEventHandlers } from '../../Search.types';

export type ItemsProps = Readonly<{
    searchedValue: string;
    items: ListItem[];
}> & Pick<DropdownEventHandlers, 'onItemClick'>;
