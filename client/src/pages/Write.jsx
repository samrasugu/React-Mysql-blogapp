import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {

  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || '');
  const [title, setTitle] = useState(state?.descr || '');
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file",img);
      const res = await axios.post("/upload", formData);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state ? await axios.put(`/posts/${state.id}`, {
        title,descr:value,cat
      })
      : await axios.post(`/posts/`, {
        title,
        descr:value,
        cat,
        img: img ? imgUrl : "", 
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: "none"}} type="file" value="" id='file' onChange={(e)=>setImg(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload File</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "art"} name='cat' value='art' id='art' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "science"} name='cat' value='science' id='science' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "technology"} name='cat' value='tecnology' id='tecnology' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="tecnology">Tecnology</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' checked={cat === "cinema"} value='cinema' id='cinema' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' checked={cat === "design"} value='design' id='design' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' checked={cat === "food"} value='food' id='food' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write