'use client';
import { FC, Fragment } from 'react';
import { Category, Button } from '../index';

import { ListProps } from './List.types';

import styles from './List.module.scss';

export const List: FC<ListProps> = ({ searchedValue, list, onItemClick, onMoreClick, onMoreResultsClick }) => (
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
            text={`See more results for “${searchedValue}”`}
            onClick={() => onMoreResultsClick?.(searchedValue)}
        />
    </div>
);
