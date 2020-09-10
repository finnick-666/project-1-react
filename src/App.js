import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import AboutMePage from './AboutPage';
import SkillsPage from './SkillsPage';
import ResumePage from './ResumePage';

const App = () => (
    <div>
        <Header></Header>
        <HomePage></HomePage>
        <AboutMePage></AboutMePage>
        <SkillsPage></SkillsPage>
        <ResumePage></ResumePage>
    </div>
);

export default App;