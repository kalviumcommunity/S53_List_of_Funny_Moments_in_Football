import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';

const Update = ({title, video, year, league,user,id}) => {
    const [updatedTitle, setTitle] = useState(title);
    const [updatedYear, setYear] = useState(year);
    const [updatedLeague, setLeague] = useState(league);
    const [updatedVideo, setVideo] = useState(video);

    // Update the state variables when the props change
    useEffect(() => {
        setTitle(title);
        setYear(year);
        setLeague(league);
        setVideo(video);
    }, [title, year, league, video]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedPost = { title: updatedTitle, year: updatedYear, league: updatedLeague, video: updatedVideo,created_by: user };
        console.log(updatedPost);

        axios.put(`http://localhost:3002/posts/${id}`, updatedPost)
            .then(() => {
                toast.success('Post Updated Successfully!!. Reload to get the new updated data.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            })
            .catch(error => {
                console.error('Error:', error.message);
                toast.error('Error updating data.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            });
    };

    return (
        <div>
            <form className="max-w-md mx-auto" style={{  backgroundColor: "white",height: "70vh",borderRadius: "10px",padding: "20px",display: "flex",flexDirection: "column",justifyContent: "space-evenly"}} onSubmit={handleUpdate}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer" value={updatedTitle} required onChange={(event) => setTitle(event.target.value)} />
                    <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="video" id="video" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer" value={updatedVideo} required onChange={(event) => setVideo(event.target.value)} />
                    <label htmlFor="video" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Video Link</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="league" id="league" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer" value={updatedLeague} required onChange={(event) => setLeague(event.target.value)} />
                        <label htmlFor="league" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">League</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="year" id="year" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer" value={updatedYear} required onChange={(event) => setYear(event.target.value)} />
                        <label htmlFor="year" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year with Month</label>
                    </div>
                </div>

                <button type="submit" style={{ backgroundColor: "blue", color: "white", width: "7vw", height: "5vh", marginTop: "7vh", borderRadius: "10px" }}>Submit</button>
            </form>
            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{width: "40vw"}}
      />
        </div>
    );
};

export default Update;
