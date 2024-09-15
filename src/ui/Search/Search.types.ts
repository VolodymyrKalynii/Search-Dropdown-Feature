export type ListItem = {
    type: string;
    name: string;
    description?: string;
};

export type List = ListItem[];
export type CategoryItem = [string, List];

export type DropdownEventHandlers = Readonly<{
    onItemClick?: (item: ListItem) => void;
    onMoreClick?: (categoryName: string) => void;
    onMoreResultsClick?: (searchedValue: string) => void;
}>;

export type SearchProps = Readonly<{
    initilaList: List;
    onAdvancedClick?: (searchedValue: string) => void;
}> &
    DropdownEventHandlers;
