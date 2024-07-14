import React, { useState } from 'react';
import './Write.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Write() {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [linkone, setLinksOne] = useState('');
    const [linktwo, setLinksTwo] = useState('');
    const [linkthree, setLinksThree] = useState('');
    const [linkfour, setLinksFour] = useState('');
    const [linkfive, setLinksFive] = useState('');
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await axios.post('https://www.server.com/api/upload', formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const uploadedFile = await upload();

        try {
            await axios.post(`/post`, {
                title,
                description,
                linkone,
                linktwo,
                linkthree,
                linkfour,
                linkfive,
                uploadedFile, // Include the uploaded file information in the request
            });
            navigate('/');
            toast.success('Post has been created');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error('You are not authorized to publish. Please login and try again.');
            } else {
                toast.error('An error occurred. Please login and try again.');
            }
        }
    };

    return (
        <div className="write">
            
            <div className="form">
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label className="d-flex" htmlFor="fileInput">
                            <i className="icon fa-solid fa-folder-plus"> </i>
                        </label>
                        <div className="fileTitle">
                            <input
                                className="file"
                                type="file"
                                id="fileInput"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <input
                                className="writeInput"
                                type="text"
                                id="title"
                                autoFocus={true}
                                placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="writeInputGroup b-1">
                        <textarea
                            className="writeInputDesc writeText"
                            placeholder="Write description..."
                            type="text"
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>

                        {[1, 2, 3, 4, 5].map((index) => (
                            <input
                                key={index}
                                className="writeInput my-2"
                                type="text"
                                id={`link${index}`}
                                placeholder={`If you have more paste the link here...`}
                                onChange={(e) => {
                                    switch (index) {
                                        case 1:
                                            setLinksOne(e.target.value);
                                            break;
                                        case 2:
                                            setLinksTwo(e.target.value);
                                            break;
                                        case 3:
                                            setLinksThree(e.target.value);
                                            break;
                                        case 4:
                                            setLinksFour(e.target.value);
                                            break;
                                        case 5:
                                            setLinksFive(e.target.value);
                                            break;
                                        default:
                                            break;
                                    }
                                }}
                            />
                        ))}

                        <button className="writeSubmit" type="submit" onClick={handleClick}>
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Write;
