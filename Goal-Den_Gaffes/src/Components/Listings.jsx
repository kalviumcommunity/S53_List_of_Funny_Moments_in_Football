import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@chakra-ui/react';
import CustomCard  from './Card.jsx';

function Listings() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://goal-den-gaffes.onrender.com/posts/")
            .then((res) => {
                setData(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", alignItems: "center",justifyContent: "center" ,width: "100%",height: "100%",marginTop: "10vh",justifyItems: "center"}}>
            {data.map((item, index) => (
                <CustomCard key={index} title={item.title} video={item.video} year={item.year} league={item.league} />
            ))}
        </div>
    );
}

export default Listings;
