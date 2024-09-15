import clsx from 'clsx';
import React, { FC } from 'react';

import { Text } from '../../../Text';
import styles from './Items.module.scss';
import { ItemsProps } from './Items.types';

export const Items: FC<ItemsProps> = ({
    searchedValue,
    items,
    onItemClick,
}) => (
    <div className={styles.items}>
        {items.map((item, idx) => (
            <button
                key={idx}
                className={styles.item}
                onClick={() => onItemClick?.(item)}
            >
                <span className={styles.itemContent}>
                    <Text
                        searchedValue={searchedValue}
                        value={item.name}
                        className={clsx(
                            styles.name,
                            item.description && styles.withDescription,
                        )}
                    />
                    {item.description && (
                        <Text
                            searchedValue={searchedValue}
                            value={item.description}
                            className={styles.description}
                        />
                    )}
                </span>
            </button>
        ))}
    </div>
);
