import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Create = () => {

    const history = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const datas = {
            name: name,
            address: address,
            description: description
        }
        await axios.post("https://localhost:7248/api/Employee", datas)
            .then(() => {
                history("/")
            })

    }

  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded mx-auto' style={{width: '40rem', marginTop: '40px'}}>
        <h1 className='text-center mb-3'>Create</h1>
        <form>
            <div className='form-floating mb-3'>
                <input type='text' className='form-control' placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <label htmlFor='floatingInput'>Name</label>
            </div>
            <div className='form-floating mb-3'>
                <input type='text' className='form-control' placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                <label htmlFor='floatingInput'>Address</label>
            </div>
            <div className='form-floating mb-3'>
                <input type='text' className='form-control' placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor='floatingInput'>Description</label>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Create</button>
            <Link to="/">
                <button type="button" className="btn btn-primary ms-3">View Data</button>
            </Link>
        </form>
    </div>
  )
}

export default Create