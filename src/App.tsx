import React from 'react';

import styles from './App.module.scss';
import { ListItem, Search } from './ui';

function App() {

  const initilaList: ListItem[] = [
    { type: 'symbol', name: 'EA', description: 'Electronic Arts Inc.' },
    { type: 'symbol', name: 'RA-USD', description: 'EagleCoin USD' },
    { type: 'symbol', name: 'EADSF', description: 'Airbus Se' },
    { type: 'symbol', name: 'EA', description: 'Electronic Arts Inc.' },
    { type: 'symbol', name: 'RA-USD', description: 'EagleCoin USD' },
    { type: 'symbol', name: 'EADSF', description: 'Airbus Se' },
    { type: 'page', name: 'EA Quant Rating' },
    { type: 'page', name: 'EA Income Statement' },
    { type: 'person', name: 'Early Retiree' },
    { type: 'headline', name: 'Electronic Arts, Inc. (EA) Q4 2023 Earnings Call Transcript ' },
    { type: 'headline', name: 'Electronic Arts: Uncertainty Around EA Sports FC Demand' },
  ];

  const onItemClick = (item: ListItem) => {
    console.log(item.name);
  };

  const onAdvancedClick = (searchedValue?: string) => {
    console.log(`Advanced ${searchedValue}`);
  };

  const onMoreClick = (categoryName: string) => {
    console.log(`More for ${categoryName}`);
  };

  const onMoreResultsClick = (searchedValue: string) => {
    console.log(`See more results for ${searchedValue}`);
  };

  return (
    <div className={styles.app}>

      <Search
        initilaList={initilaList}
        onItemClick={onItemClick}
        onMoreClick={onMoreClick}
        onMoreResultsClick={onMoreResultsClick}
        onAdvancedClick={onAdvancedClick} />
    </div>
  );
}

export default App;
