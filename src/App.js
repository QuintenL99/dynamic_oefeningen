import logo from './logo.svg';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NUMBER_DATA, PRODUCTS_DATA, CAR_DATA} from "./data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {NumberPage} from "./pages/NumberPage";
import {CarsPage} from "./pages/CarsPage";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>Menu</Tab>
                <Tab>pics</Tab>
                <Tab>Numbers</Tab>
                <Tab>Cars</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
            <TabPanel>
                <NumberPage numbers={NUMBER_DATA}/>
            </TabPanel>
            <TabPanel>
                <CarsPage cars ={CAR_DATA}/>
            </TabPanel>
        </Tabs>
    )
        ;
}

export default App;
