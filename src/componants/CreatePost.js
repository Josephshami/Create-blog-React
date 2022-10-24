import React from 'react';
import {useNavigate}from 'react-router-dom'

import { useState} from "react"
export default function CreatePost(props) {
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    function submitHandler (e)  {
        e.preventDefault()
        props.setAdd(old=> [...old , post] )
        navigate("/show")
        }

    return (
        <form onSubmit={submitHandler}>
            <div class="mb-3">
                <label  class="form-label">User Name</label>
                <input onChange={(e) => setPost(old => {
                    return { ...old, UserName: e.target.value }
                })} type="text" class="form-control" id="text" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input onChange={(e) => setPost(old => {
                    return { ...old, Title: e.target.value }
                })} type="text" class="form-control" id="text" />
            </div>
            <div class="mb-3 form-check">
                <label>Content</label>
                <textarea onChange={(e) => setPost(old => {
                    return { ...old, Content: e.target.value }
                })} type="text" class="form-control" id="text" />
            </div>
            <button type="submit" class="btn btn-primary">Create Post</button>
        </form>
    )
}