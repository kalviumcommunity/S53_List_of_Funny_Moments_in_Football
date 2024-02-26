import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Skeleton } from '@chakra-ui/react';
import RingLoader from "react-spinners/RingLoader";
import CustomCard from './Card.jsx';

function Listings() {
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const dropdownRef = useRef(null); // Ref for dropdown menu

    useEffect(() => {
        axios.get("https://goal-den-gaffes.onrender.com/posts/")
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
        axios.get("https://goal-den-gaffes.onrender.com/auth/")
            .then((res) => {
                setUsers(res.data);
                
            })
            .catch(err => {
                console.log("Error fetching users: ", err);
            });
    }, []);
    
    useEffect(() => {
        // Add event listener to close dropdown when clicking outside
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleUserClick = (username) => {
        setSelectedUser(username === selectedUser ? null : username);
    };

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" style={{ marginTop: "7vh", fontSize: "25px", textAlign: "center",marginBottom: loading ? "20vh" : null}}>
                Filter By User
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {dropdownVisible && (
                <div ref={dropdownRef} id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" style={{ marginTop: "2vh" }}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        {users && users.map((user, i) => (
                            <li key={i}>
                                <a href="#" className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${selectedUser === user.username ? 'font-bold' : ''}`} onClick={() => handleUserClick(user.username)}>
                                    {user.username}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {loading && <RingLoader color="white" size={100}/>}
            {!loading && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", paddingTop: "10vh", justifyItems: "center",marginBottom: "15vh" }}>
                     {
                        data
                            .filter(item => !selectedUser || item.created_by === selectedUser) 
                            .map((item, index) => (
                                <CustomCard key={index} title={item.title} video={item.video} year={item.year} league={item.league} user={item.created_by} id={item.postId}/>
                            ))
                    }
                </div>
            )}
        </div>
    );
}

export default Listings;
