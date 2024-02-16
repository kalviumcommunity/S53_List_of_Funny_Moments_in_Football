import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@chakra-ui/react';
import CustomCard from './Card.jsx';

function Listings() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get("https://goal-den-gaffes.onrender.com/posts/")
            .then((res) => {
                setData(res.data);
                setLoading(false);
                console.log(res.data); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Handle loading state in case of error
            });
    }, []);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", marginTop: "10vh", justifyItems: "center" }}>
            {loading ? ( // Display Skeleton while loading
                <>
                    <Skeleton style={{ margin: "20px" }} />
                    <Skeleton style={{ margin: "20px" }} />
                    <Skeleton style={{ margin: "20px" }} />
                </>
            ) : (
                data.map((item, index) => (
                    <CustomCard key={index} title={item.title} video={item.video} year={item.year} league={item.league} />
                ))
            )}
        </div>
    );
}

export default Listings;
