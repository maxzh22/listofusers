import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";


import DeleteIcon from "@mui/icons-material/Delete";


const CustomToolbar = () =>  {

    const navigator= useNavigate()

    const handleClick = () => {
        navigator('/create')
    }





        return (
            <React.Fragment>
                <Tooltip title={"custom icon"}>
                    <IconButton  onClick={()=> handleClick()}>
                        <AddIcon  />
                    </IconButton>
                </Tooltip>
            </React.Fragment>
        );


}

export default CustomToolbar;