import { FC } from 'react';
import { SectionProps } from './Category.types';
import { Button } from '../Button';
import { Items } from '../Items';

import { DEFAULT_LIST_ITEMS_TO_SHOW_QTY } from '../../constants';
import { CATEGORY_NAMES_RESOLVER } from '../../contracts';

import styles from './Category.module.scss';

export const Category: FC<SectionProps> = ({ searchedValue, category, onItemClick, onMoreClick }) => {
    const [catName, catData] = category;

    const itemsQty = catData.length;
    const isShowMoreButton = itemsQty > DEFAULT_LIST_ITEMS_TO_SHOW_QTY;
    const shownItems = [...catData.slice(0, DEFAULT_LIST_ITEMS_TO_SHOW_QTY)];

    return (
        <div className={styles.category}>
            <div className={styles.titleWrapper}>
                <h4 className={styles.title}>{CATEGORY_NAMES_RESOLVER[catName]}</h4>
                {isShowMoreButton && <Button text="more" onClick={() => onMoreClick?.(catName)} />}
            </div>
            <Items searchedValue={searchedValue} items={shownItems} onItemClick={onItemClick} />
        </div>
    );
};
