import React, {useEffect} from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Edit from "@mui/icons-material/Edit";
import {useNavigate} from "react-router-dom";

import Delete from "@mui/icons-material/Delete";


const CustomToolbarSelect = (selectItem) =>  {

    const navigator= useNavigate()

    /*const handleClick = () => {
        navigator('/update', {state:{
            name.props.value
        }})
    }*/


    useEffect(() => {
        console.log(selectItem);
    }, [])



    return (
        <React.Fragment>
            <Tooltip title={"custom icon"}>
                <IconButton>
                    <Edit  />
                </IconButton>
            </Tooltip>
            <Tooltip title={"custom icon"}>
                <IconButton>
                    <Delete  />
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );


}

export default CustomToolbarSelect;