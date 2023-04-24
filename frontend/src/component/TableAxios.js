import React, {useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import {IconButton, Tooltip} from "@mui/material";
import CustomToolBar from "./CustomToolBar";
import CustomToolbarSelect from "./CustomToolbarSelect";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';


export const TableAxios = () => {
    const [data, setData] = useState([])



    //this.props.data.data.slice()
    const endpoint = 'http://localhost:3050/users'

    const navigator = useNavigate()

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data
            //console.log(data)
            setData(data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const columns = [
        {
            name: "id",
            label: "ID"
        },
        {
            name: "name",
            label: "NAME"
        },
        {
            name: "email",
            label: "EMAIL"
        },
    ]


    const editClick = (item) => {
        console.log(item)
        navigator('/update', {
            state: {
                item
            }
        })
    }

    const deleteClick = (item) => {
        console.log(item.id);
        axios.delete(`/users/${item.id}`).then((response) => {

            //console.log(data)
            setData(data);
            getData();
            alert("Пользователь удалён")

        }).catch(function (error) {
            if (error.response) {
                alert("Пользователь не был удалён. Код ошибки " + error.response.status);
            }
        });

    }

    const CustomToolbarSelect = (selectedRows) => {

        console.log(selectedRows);

        /*const deleteClick = async () => {
            await axios.delete("http://localhost:3050/users/532").then((response) => {
                const data = response.data
                //console.log(data)
                setData(data)
            })
        }*/

        return (

            <React.Fragment>
                <Tooltip title={"custom icon"}>
                    <IconButton onClick={() => editClick(data[selectedRows.data[0].dataIndex])}>
                        <Edit/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={"custom icon"}>
                    <IconButton onClick={() => deleteClick(data[selectedRows.data[0].dataIndex])}>
                        <Delete/>
                    </IconButton>
                </Tooltip>
            </React.Fragment>

        )

    }

    const options = {
        filter: true,
        selectableRows: 'single',
        filterType: 'dropdown',
        responsive: 'vertical',
        rowsPerPage: 10,
        customToolbar: () => {
            return (
                <CustomToolBar/>
            );
        },
        customToolbarSelect: CustomToolbarSelect
    };

    return (
        <MUIDataTable
            title={"Show data with Axios"}
            data={data}
            columns={columns}
            options={options}

        />
    )
}

/*import MUIDataTable from "mui-datatables";

const columns = ["Number", "String", "Boolean", "Float"]
const data = [
    ["React", "Vue", "Angular", "ReactNative"],
    ["HTML", "CSS", "JS", "PHP"],
    ["Python", "C#", "Pascal", "Ruby"],
    ["html", "css", "js", "json"]
]
const options = {filterType: 'checkbox',}

export const TableAxios = () => {
    return(
        <MUIDataTable
        title={"Lista de empleados"}
        data={data}
        columns={columns}
        options={options}
        />
    )
}*/

export default TableAxios;