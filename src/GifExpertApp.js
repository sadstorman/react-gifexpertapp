import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleAdd = () =>{
    //     //Utilizo la setCategories([]), especialmente los corchetes porque el nuevo estado que le devuelvo es un array....
    //     // En este caso le devuelvo una copia del array+ hunterXHunter........ ['one punch', 'Dragon Ball', 'Samurai X', 'HunerXHunter']
    //     setCategories([...categories, 'HunterXHunter']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <br />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                         category={category} />
                    )
                }
            </ol>

        </>
    )
}
