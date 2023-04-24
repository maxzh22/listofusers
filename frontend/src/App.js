// noinspection ES6CheckImport

import React, {useEffect} from "react"
//import MUIDataTable from "mui-datatables";
import TableAxios from "./component/TableAxios"
//import {TableJson} from "./component/TableJson"
import {Route, Routes} from "react-router-dom"
//import axios from 'axios'
import { useNavigate } from "react-router-dom";

import './App.css';
import Add from "./Add";
import Main from "./Main";
import Update from "./Update";
import Delete from "./Delete"


function App(){

//const navigate = useNavigate();



    return(

        <Routes>
            <Route exact path='/' element={<Main/>} />
            <Route path='/add' element={<Add />} />
            <Route path='/create' element={<Add />} />
            <Route path='/update' element={<Update />} />
            <Route path='/delete' element={<Delete />} />
        </Routes>


    );
}


export default App;