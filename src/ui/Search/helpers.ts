import { List, CategoryItem } from './Search.types';
import { checkIsStringContainsValue } from './utils';

export const getListByCategories = (list: List): CategoryItem[] => {
    const filteredListCategories = list.reduce<{ [key: string]: List }>((acc, item) => {
        const { type } = item;

        if (!acc[type]) {
            acc[type] = [];
        }

        acc[type].push(item);

        return acc;
    }, {});

    return Object.entries(filteredListCategories);
};

type FilterListByValueProps = {
    list: List;
    searchedValue: string;
};

type FilterListByValue = (props: FilterListByValueProps) => List;

export const filterListByValue: FilterListByValue = ({ list, searchedValue }) =>
    list.filter(
        (item) =>
            checkIsStringContainsValue(item.name, searchedValue) ||
            checkIsStringContainsValue(item?.description, searchedValue),
    );
