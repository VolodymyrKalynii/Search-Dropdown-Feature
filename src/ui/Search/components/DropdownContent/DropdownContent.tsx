import { FC } from 'react';
import { getListByCategories } from '../../helpers';

import { List } from '../List';
import { DropdownContentProps } from './DropdownContent.types';

export const DropdownContent: FC<DropdownContentProps> = ({
    filteredResults,
    searchedValue,
    onItemClick,
    onMoreClick,
    onMoreResultsClick,
}) => {
    const data = getListByCategories(filteredResults);

    return data.length > 0 ? (
        <List
            searchedValue={searchedValue}
            list={data}
            onItemClick={onItemClick}
            onMoreClick={onMoreClick}
            onMoreResultsClick={onMoreResultsClick}
        />
    ) : (
        <p>No results found</p>
    );
};
