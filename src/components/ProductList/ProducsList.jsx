import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProducsList = ({cars, getInfo}) => {
    // console.log(cars);
    return (
        <div style={{display:"flex", flexDirection: 'column', alignItems: "center"}}>
            {
                cars.map((car)=> (<ProductCard  getInfo={getInfo} car={car}  key={car.id}/>))
            }
        </div>
    );
};

export default ProducsList;