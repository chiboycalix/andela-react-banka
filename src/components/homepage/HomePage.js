import React from 'react';
import './HomePage.css';
import Illustrator from './Illustrator';
import LeftSideBar from './LeftSideBar';

const HomePage = () => (
        <div className="container row">
             <div className="col s12 m5">
                 <LeftSideBar />
            </div>
             <div className="col s12 m6">
                 <Illustrator />
            </div>
        </div>
);

export default HomePage;
