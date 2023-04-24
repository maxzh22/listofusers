import MUIDataTable from "mui-datatables";
import users from './users.json'

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
    }
]

export const TableJson = () => {
    return (
        <MUIDataTable
            title={"Lista de usuarios"}
            data={users}
            columns={columns}
        />
    )
}