import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectItem } from '../redux/reducers/cardSlice';

function Cards() {
    const items = useSelector(state => state.cardReducer.items);
    const data = items.map((item) => item.id > 1 && item );
    const dispatch = useDispatch();
    const handleClick = (id, display, img, item) => {
        dispatch(selectItem({ id, display, img, item }))
    };
   /*  console.log(data) */

    return (
        <div className='parent'>
            <div className='main'>
                {
                    items.map((item, index) => {
                        return (
                            <div style={{ cursor: "pointer" }} key={index}>

                                <button style={{ border: "none", outline: "none" }}
                                    onClick={() => handleClick(item.id, !item.display, item.img, item)}>
                                    <div
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            display: item.display ? 'none' : 'block',
                                            background: "#f4f5f7",
                                            color: '#c7cbd2',
                                            fontSize: "30px",
                                            textAlign: "center"
                                        }}>
                                        ?
                                    </div>
                                    <img style={{ display: item.display ? 'block' : 'none' }}
                                        src={item.img} width={150} height={150} alt="cardimage" />
                                </button>
                                <div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards
