import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Catalog = () => {

    const [catalog, setCatalog] = useState([])

    const fetchCatalog = async () => {
        try {
            const response = await axios.get("http://localhost:3001/fetchCatalog");
            setCatalog(response.data);
        } catch (err) {
            console.log('Data Not Found!')
        }
    }

    useEffect(() => {
        fetchCatalog();
    }, [])

    return (
        <>
            <Box marginBottom={"30px"}>
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
                            {catalog.map((c) => (
                                <TableRow
                                    key={c.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{c.bean}</TableCell>
                                    <TableCell>{c.description}</TableCell>
                                    <TableCell>${c.priceUnit.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}

export default Catalog;