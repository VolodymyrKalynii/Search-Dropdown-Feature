import React, { FC, Fragment } from 'react';

import { Button, Category } from '../index';
import styles from './List.module.scss';
import { ListProps } from './List.types';

export const List: FC<ListProps> = ({
    searchedValue,
    list,
    onItemClick,
    onMoreClick,
    onMoreResultsClick,
}) => (
    <div className={styles.list}>
        {list.map((category) => (
            <Fragment key={category[0]}>
                <Category
                    searchedValue={searchedValue}
                    category={category}
                    onItemClick={onItemClick}
                    onMoreClick={() => onMoreClick?.(category[0])}
                />
            </Fragment>
        ))}
        <Button
            className={styles.showMore}
            onClick={() => onMoreResultsClick?.(searchedValue)}
        >
            See more results for “{searchedValue}”
        </Button>
    </div>
);
