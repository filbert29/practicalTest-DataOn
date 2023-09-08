import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

const FormAdd = () => {

    const [country, setCountry] = useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <>
            <Box marginTop={"20px"} width={"380px"} sx={{
                boxShadow: "10px 10px 22px 1px rgba(0,0,0,0.49);",
                padding: "20px 40px",
                borderRadius: "10px"
            }}>
                <Box marginTop={"5px"}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography marginRight={"auto"}>Distributor Name</Typography>
                        <TextField></TextField>
                    </Box>
                </Box>
                <Box marginTop={"5px"}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography marginRight={"auto"}>City</Typography>
                        <TextField></TextField>
                    </Box>
                </Box>
                <Box marginTop={"5px"}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography marginRight={"auto"}>State/Region</Typography>
                        <TextField></TextField>
                    </Box>
                </Box>
                <Box marginTop={"5px"}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography marginRight={"auto"}>Country</Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            label="Country"
                            onChange={handleChange}
                            sx={{width: "224px"}}
                        >
                            <MenuItem value={10}>Indonesia</MenuItem>
                            <MenuItem value={20}>Malaysia</MenuItem>
                            <MenuItem value={30}>Thailand</MenuItem>
                        </Select>
                    </Box>
                </Box>
                <Box marginTop={"5px"}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography marginRight={"auto"}>Phone</Typography>
                        <TextField></TextField>
                    </Box>
                </Box>
                <Box marginTop={"5px"}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography marginRight={"auto"}>Email</Typography>
                        <TextField></TextField>
                    </Box>
                </Box>
                <Button sx={{ border: "1px solid black" }}> Add </Button>
            </Box>
        </>
    );
}

export default FormAdd;