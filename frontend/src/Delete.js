import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Delete(){



    const [status, setStatus] = useState('typing');
    const [data, setData] = useState([])

    /*const [inputData, setInputData] = useState({name: '', email: ''})




        event.preventDefault()

        axios.post('/users', inputData)
            .then(res => {
                alert("Пользователь добавлен");

            }).catch(err => console.log(err));*/


    const deleteClick = async () => {
        await axios.delete("http://localhost:3050/users/559").then((response) => {
            const data = response.data
            //console.log(data)
            setData(data)
        }).catch(function (error) {
            if (error.response) {
                alert("Пользователь не был удалён. Код ошибки " + error.response.status);
            }
        });
    }



    return(
        <div>
            <h2>Страница удаления</h2>
        </div>
    )
}

export default Delete