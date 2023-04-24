import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import TableAxios from "./component/TableAxios";

function Main(){

    const navigator= useNavigate()

    return(

        <div className="App">
            {/*<MUIDataTable
              title={"Employee List"}
              data={data}
              columns={columns}
              options={options}
            />*/}

            {/*<TableAxios />*/}
            {/*<TableJson />*/}
            <TableAxios />
            <button onClick={()=> navigator('/update')}>UPDATE</button>

            {/*<p><Link>hfgh</Link></p>*/}


        </div>
    )
}

export default Main