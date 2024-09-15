import { FC, useState } from 'react';

import { DEFAULT_LIST_ITEMS_TO_SHOW_QTY } from '../../constants';
import { CATEGORY_NAMES_RESOLVER } from '../../contracts';

import { Button } from '../Button';
import { Items, Accordion, CollapceButton } from './components';

import { SectionProps } from './Category.types';

import styles from './Category.module.scss';

export const Category: FC<SectionProps> = ({ searchedValue, category, onItemClick, onMoreClick }) => {
    const [isOpened, setIsOpened] = useState<boolean>(true);
    const [categoryName, list] = category;

    const isMoreItemsAvailable = list.length > DEFAULT_LIST_ITEMS_TO_SHOW_QTY;
    const shownItems = isMoreItemsAvailable ? list.slice(0, DEFAULT_LIST_ITEMS_TO_SHOW_QTY) : list;

    const hanldeCollapceButton = () => {
        setIsOpened((isOpened) => !isOpened);
    };

    return (
        <div className={styles.category}>
            <div className={styles.titleWrapper}>
                <h4 className={styles.title}>{CATEGORY_NAMES_RESOLVER[categoryName]}</h4>
                {isMoreItemsAvailable && <Button className={styles.moreButton} onClick={() => onMoreClick?.(categoryName)}>more</Button>}
                <CollapceButton isOpened={isOpened} onClick={hanldeCollapceButton}/>
            </div>
            <Accordion isOpened={isOpened}>
                <Items searchedValue={searchedValue} items={shownItems} onItemClick={onItemClick} />
            </Accordion>
        </div>
    );
};
