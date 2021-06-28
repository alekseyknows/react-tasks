import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import AboutUs from '../AboutUs';
import ParentContainer from '../../containers/ParentContainer';

const Home = (props) => {
    const { match, history } = props;
    const page = match.path;

    const tabNameToIndex = {
        0: 'about-us',
        1: 'counters',
    };

    const indexToTabName = {
        ['/about-us']: 0,
        ['/counters']: 1,
    };

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };

    return (
        <nav>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="About Us" />
                    <Tab label="Counters" />
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <AboutUs />}
            {selectedTab === 1 && <ParentContainer />}
        </nav>
    );
};

export default Home;
