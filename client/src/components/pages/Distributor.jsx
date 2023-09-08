import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Distributor = () => {

    const [distributor, setDistributor] = useState([]);

    const fetchDistributor = async () => {
        try {
            const response = await axios.get("http://localhost:3001/fetchDistributor");
            setDistributor(response.data);
        } catch (err) {
            console.log('Data Not Found!')
        }
    }

    useEffect(() => {
        fetchDistributor();
    }, [])

    return (
        <>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Bean</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Price/Unit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {distributor.map((d) => (
                                <TableRow
                                    key={d._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{d.distributorName}</TableCell>
                                    <TableCell>{d.city}</TableCell>
                                    <TableCell align="center"> <Link to={`/editForm/${d._id}`}><Button>Edit</Button></Link> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box marginTop={"20px"}>
                    <Link to={`/addForm`}><Button sx={{border: "1px solid black"}}>Add</Button></Link>
                </Box>
            </Box>
        </>
    );
}

export default Distributor;