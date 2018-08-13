import React from 'react';
import SelectBox from './SelectBox/SelectBox';
import SearchBox from './SearchBox/SearchBox';
import './Main.css';

const menu = ["Search",]

const Main = () => (
  <div className="main-cntainer">
    <SearchBox />
    {/* <SelectBox text="search" /> */}
  </div>
)
export default Main;
