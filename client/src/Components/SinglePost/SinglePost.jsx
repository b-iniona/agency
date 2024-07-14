import React, { useContext, useEffect, useState } from 'react';
import './SinglePost.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Context/authContext.js";

function SinglePost() {
  
  const { currentUser } = useContext(AuthContext);
  const location = useLocation({});
  const navigate = useNavigate();
  const path = location.pathname.split('/')[2];
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [linkone, setlinksOne] = useState("");
  const [linktwo, setlinksTwo] = useState("");
  const [linkthree, setlinksThree] = useState("");
  const [linkfour, setlinksFour] = useState("");
  const [linkfive, setlinksFive] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [createdAt, setCreatedAt] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`https://www.server.com/api/post/${path}`);
        setTitle(res.data.title);
        setDesc(res.data.description);
        setlinksOne(res.data.linkone);
        setlinksTwo(res.data.linktwo);
        setlinksThree(res.data.linkthree);
        setlinksFour(res.data.linkfour);
        setlinksFive(res.data.linkfive);
        setUploadedFile(res.data.uploadedFile);
        setCreatedAt(res.data.created_at);
      } catch (error) {
        console.error(error);
      }
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this post?');
    if (confirmation) {
      try {
        await axios.delete(`https://www.server.com/api/post/${path}`);
        toast.success('Deleted successfully');
      } catch (err) {
        toast.error(
          'You are not authenticated to delete. Please login and try again.'
        );
      }
    }else{
      toast.success('Canceled')
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const confirmation=window.confirm('Are you sure you want to update this post?')
    if (confirmation) {
      try {
        await axios.put(`https://www.server.com/api/post/${path}/`, {
          title,
          description,
          linkone,
          linktwo,
          linkthree,
          linkfour,
          linkfive,
        });
        setUpdateMode(false);
        navigate('/');
        toast.success('Updated successfully');
      } catch (err) {
        toast.error('You are not authenticated to update. Please login and try again.');
        

                  
  
      }
    } else {
      toast.success('Canceled');
      
    }
   
  };
  
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://www.server.com/api/download/${uploadedFile}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', uploadedFile);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error('Error downloading file:', err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {updateMode ? (
          <input
            className="border-bottom text-center border writeInput"
            value={title}
            type="text"
            autoFocus={true}
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {currentUser &&  
              <div className="singlePostEdit text-center d-flex my-3">
                <i className="mb-2 text-success singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i><span className='edit'>edit</span>
                <Link to="/">
                  <i className="mb-2 text-red singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                </Link><span className='delete'>delete</span>
              </div>
            }
          </h1>
        )}

        <div className="my-2 singlePostInfo col-lg-12 col-md-12 col-sm-12">
          Posted at { new Date(createdAt).toDateString()}
        </div>

        {updateMode ? (
          <textarea
            className="writeInputDesc writeText"
            value={description}
            placeholder="Update description..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePostDescInput">{description}</p>
        )}
        
        {updateMode ? (
          <div>
            <input className='writeInput my-2' type='text' id='link' placeholder={linkone} onChange={(e) => setlinksOne(e.target.value)} />
            <input className='writeInput' type='text' id='link' placeholder={linktwo} onChange={(e) => setlinksTwo(e.target.value)} />
            <input className='writeInput' type='text' id='link' placeholder={linkthree} onChange={(e) => setlinksThree(e.target.value)} />
            <input className='writeInput' type='text' id='link' placeholder={linkfour} onChange={(e) => setlinksFour(e.target.value)} />
            <input className='writeInput' type='text' id='link' placeholder={linkfive} onChange={(e) => setlinksFive(e.target.value)} />
          </div>
        ) : (
          <div className='text-decoration-none linksContainer'> 
            <a className='my-2 mx-3 singleLink ' href={linkone} target="_blank" rel="noopener noreferrer">{linkone}</a>
            <a className='my-2 mx-3 singleLink ' href={linktwo} target="_blank" rel="noopener noreferrer">{linktwo}</a>
            <a className='my-2 mx-3 singleLink ' href={linkthree} target="_blank" rel="noopener noreferrer">{linkthree}</a>
            <a className='my-2 mx-3 singleLink ' href={linkfour} target="_blank" rel="noopener noreferrer">{linkfour}</a>
            <a className='my-2 mx-3 singleLink ' href={linkfive} target="_blank" rel="noopener noreferrer">{linkfive}</a>
          </div>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            <Link className="text-decoration-none text-light" to="/">Update</Link>
          </button>
        )}
        
        {uploadedFile && (
          <div className="text-center fileContainer my-3">
            <h4>File you need to download</h4>
            <div className='document'>
              <a className='my-2 text-center text-decoration-none fw-bold' href={`/uploads/${uploadedFile}`} target="_blank" rel="noopener noreferrer">{uploadedFile}</a>
            </div>
          </div>
        )}
        
        {uploadedFile && (
          <div className='text-center'>
            <button className="btn download" onClick={handleDownload}>Download</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
