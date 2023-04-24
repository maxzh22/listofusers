import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Add(){
    const [inputData, setInputData] = React.useState(null);
    const navigat = useNavigate();

    function handleSubmit(event){

        event.preventDefault()

        axios.post('/users', inputData)
        .then(res => {
            alert("Пользователь добавлен");
            navigat('/');
        }).catch(function (error) {
            if (error.response) {
                alert("Пользователь не добавлен. Код ошибки " + error.response.status);
            }
        });

    }

    //if (!inputData) alert("No post!")

    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" onChange={e=>setInputData({...inputData, name: e.target.value})} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" onChange={e=>setInputData({...inputData, email: e.target.value})} required />
                    </div><br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add