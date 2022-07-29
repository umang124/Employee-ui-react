import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  async function handleUpdate(e) {
    e.preventDefault();
    
    const datas = {
      name: name,
      address: address
    }
    await axios.put(`https://localhost:7248/api/Employee?id=${id}`, datas)
      .then(() => {
        navigate("/")
      })
  }

  useEffect(() => {
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setAddress(localStorage.getItem("address"))
  }, [])

  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded mx-auto' style={{width: '40rem', marginTop: '40px'}}>
     <h1 className='text-center mb-3'>Update</h1>
        <form>
            <div className='form-floating mb-3'>
                <input type='text' className='form-control' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor='floatingInput'>Name</label>
            </div>
            <div className='form-floating mb-3'>
                <input type='text' className='form-control'  placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label htmlFor='floatingInput'>Address</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpdate} >Update</button>
        </form>
    </div>
  )
}

export default Update