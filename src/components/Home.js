import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Home =  () => {

    const [datas, setDatas] = useState([]);

    async function getDatas() {
      await axios.get("https://localhost:7248/api/Employee")
        .then((res) => {
          setDatas(res.data)
        } )
    }

    const DeleteEmployee = async (id) => { 
      await axios.delete(`https://localhost:7248/api/Employee?id=${id}`)
      .then(() => {
        getDatas()
      })
    } 

    useEffect(() => {
      getDatas();
    }, []);


  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded mx-auto' style={{width: '40rem', marginTop: '40px'}}>
      <h3 className='text-center'>Employee List</h3>
      <Link to='/create' target='_blank'>
        <button type="button" className="btn btn-primary mb-4">Create</button>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>
                    <Link to='/update' target="_blank">
                      <button type="button"
                      onClick={() => {
                        localStorage.setItem("id", data.id)
                        localStorage.setItem("name", data.name)
                        localStorage.setItem("address", data.address)
                        }}
                      className="btn btn-primary">Update</button>
                    </Link>
                    
                    <button type="button" onClick={() => DeleteEmployee(data.id)} className="btn btn-danger ms-3">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home