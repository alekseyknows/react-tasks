import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import AboutUs from '../AboutUs';
import ParentContainer from '../../containers/ParentContainer';
import LoginContainer from '../../containers/LoginContainer';

const Home = (props) => {
    const { match, history } = props;
    const page = match.path;

    const tabNameToIndex = {
        0: 'about-us',
        1: 'counters',
        2: 'login',
    };

    const indexToTabName = {
        ['/about-us']: 0,
        ['/counters']: 1,
        ['/login']: 2,
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
                    <Tab label="Login" />
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <AboutUs />}
            {selectedTab === 1 && <ParentContainer />}
            {selectedTab === 2 && <LoginContainer />}
        </nav>
    );
};

export default Home;
