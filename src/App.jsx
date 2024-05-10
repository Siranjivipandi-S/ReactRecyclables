import React from "react";
import Randomcolor from "./assets/components/Colorgenerator";
import StarRating from "./assets/components/StarRating";
import Imageslider from "./assets/components/slider";
import Productlimit from "./assets/components/productLimit";
import Accordion from "./assets/components/accordian";
import NestedMenu from "./assets/components/nestedMenu";
import data from "./assets/components/accordian/data";
import { sidebar } from "./assets/components/nestedMenu/data";
import QrcodeGen from "./assets/components/Qrcode";
import ThemeusingHook from "./assets/components/themepro/scndway";
import Scrollbar from "./assets/components/scrollbar";
import ParentTab from "./assets/components/tabroute";
import PopupModel from "./assets/components/PopupModel";
import GithubParent from "./assets/components/GitHubAccont";
import GitHubAcc from "./assets/components/GitHubAccont";
import SearchForm from "./assets/components/Searchfilter";
import PopupModelHook from "./assets/components/CustomHooks/popup";
const App = () => {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <StarRating /> */}
      {/* <Randomcolor /> */}
      {/* <Productlimit /> */}
      {/* <Imageslider url={"https://picsum.photos/v2/list?page=2"} /> */}
      {/* <NestedMenu data={sidebar} /> */}
      {/* <QrcodeGen /> */}
      {/* <Themepro /> */}
      {/* <ThemeusingHook /> */}
      {/* <Scrollbar url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <ParentTab /> */}
      {/* <PopupModel /> */}
      {/* <GitHubAcc /> */}
      {/* <SearchForm /> */}
      <PopupModelHook />
    </div>
  );
};

export default App;
