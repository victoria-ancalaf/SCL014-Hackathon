import React from 'react';
//import MisionPoints from '../Components/Categories/MisionPoint';
//import InfoPointDiscount from '../Components/Categories/infoPointDiscount';
//import NewMacher from '../Components/Categories/NewMacher';
import Levels from '../Components/Categories/Levels';
import Misiones from './Misiones';

const Categories = () => {
    return (
        <div>
           {/* <MisionPoints/> */}
           {/* <InfoPointDiscount/> */}
           {/*<NewMacher/> */}
           <Levels />
           <Misiones />
        </div>
    );
};

export default Categories;
