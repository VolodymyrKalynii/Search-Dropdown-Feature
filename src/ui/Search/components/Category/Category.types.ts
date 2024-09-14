import { CategoryItem, DropdownEventHandlers } from '../../Search.types';

export type SectionProps = Readonly<{
    searchedValue: string;
    category: CategoryItem;
}> & Pick<DropdownEventHandlers, 'onItemClick' | 'onMoreClick'>;
