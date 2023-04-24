import React, {useState, useRef} from 'react'
import {useLocation} from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
//import './App.scss'
import {useNavigate} from 'react-router-dom'


function Update() {

    let location = useLocation();
    const {state} = location

    const navigat = useNavigate();

    const [loading, setLoading] = useState("");

    const put_id = useRef(null);
    const put_name = useRef(null);
    const put_email = useRef(null);

    const [putResult, setPutResult] = useState(null);



    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }

    async function putData() {
        const id = put_id.current.value;
        const name = put_name.current.value;
        const email = put_email.current.value;



        if (id) {
            if (name) {
                if (email) {
                    const putData = {
                        name: put_name.current.value,
                        email: put_email.current.value,
                    };

                    try {

                        setLoading(true)

                        const res = await fetch("/users/" + id, {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "x-access-token": "token-value",
                            },
                            body: JSON.stringify(putData),
                        })

                        if (!res.ok) {
                            const message = `Пользователь не был обновлён. Код ошибки ${res.status}`;
                            //throw new Error(message);
                            alert(message)
                        } else {
                            alert("Пользователь обновлён");
                            navigat('/');
                        }

                        const data = await res.json();

                        const result = {
                            status: res.status + "-" + res.statusText,
                            headers: {"Content-Type": res.headers.get("Content-Type")},
                            data: data,
                        };
                        setLoading(false)

                        setPutResult(fortmatResponse(result));
                    } catch (err) {

                        setLoading(false)
                        setPutResult(err.message);
                    }
                }else{
                    alert("Вы не ввели email");
                }
            }else{
                alert("Вы не ввели имя");
            }
        }else{
            alert("Пользователь не найден");
        }
    }



    /*const clearPutOutput = () => {
        setPutResult(null);
    }*/

    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой'),
        email: yup.string().email('Введите верный email')
    })

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <center><h3>Edit</h3></center>
                <Formik
                    initialValues={{
                        name: '',
                        email: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => { console.log(values) }}
                    validationSchema={validationsSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className={`from`}>



                            <p>
                                <label htmlFor={`id`}>Id:</label><br />
                                <input
                                    className={'input form-control'}
                                    type={`text`}
                                    name={`id`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    /*value={values.id}*/

                                    defaultValue={state.item.id}
                                    ref={put_id}
                                    placeholder="id"
                                />
                            </p>



                            <p>
                                <label htmlFor={`name`}>Name:</label><br />
                                <input
                                    className={'input form-control'}
                                    type={`text`}
                                    name={`name`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    /*value={values.name}*/

                                    defaultValue={state.item.name}
                                    ref={put_name}
                                    placeholder="name"
                                />
                            </p>
                            {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
                            <p>
                                <label htmlFor={`email`}>Email:</label><br />
                                <input
                                    className={'input form-control'}
                                    type={`email`}
                                    name={`email`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    /*value={values.email}*/

                                    defaultValue={state.item.email}
                                    ref={put_email}
                                    placeholder="email"
                                />
                            </p>
                            {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}

                            <button
                                disabled={!isValid}
                                onClick={putData}
                                type={`submit`}
                                className={'btn btn-info'}
                            >Submit</button>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Update;