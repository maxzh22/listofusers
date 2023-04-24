import MUIDataTable from "mui-datatables";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";

export class TableAxios extends React.Component {
    render(){

        const columns = ["Number", "String", "Boolean", "Float"]
        const data = [
            ["React", "Vue", "Angular", "ReactNative"],
            ["HTML", "CSS", "JS", "PHP"],
            ["Python", "C#", "Pascal", "Ruby"],
            ["html", "css", "js", "json"]
        ]
        const options = {filterType: 'checkbox',}

        return(
            <MUIDataTable
                title={"Lista de empleados"}
                data={data}
                columns={columns}
                options={options}
            />
        )
    }
}

/*import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'

const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'Title', width: 300},
    {field: 'body', headerName: 'Body', width: 600}
]

const DataTable = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3050/users")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    })

    return(
        /*<div style={{height: 700, width: 100%}}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={10}
                checkboxSelection
            />
        </div>
    )

}

export default DataTable*/