import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const AddForm = () => {
    const [distributorName, setDistributorName] = useState('')
    const [city, setCity] = useState('')
    const [stateRegion, setStateRegion] = useState('')
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };

    console.log(distributorName, city, stateRegion, country, phone, email)

    const handleAdd = () => {
        axios.post("http://localhost:3001/addDistributor", {
            distributorName: distributorName,
            city: city,
            stateRegion: stateRegion,
            country: country,
            phone: phone,
            email: email,
        });
    }

    return (
        <Box component="form" onSubmit={handleAdd} marginTop={"20px"} width={"380px"} sx={{
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
                    <TextField onChange={(e) => setDistributorName(e.target.value)} />
                </Box>
            </Box>
            <Box marginTop={"5px"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography marginRight={"auto"}>City</Typography>
                    <TextField onChange={(e) => setCity(e.target.value)} />
                </Box>
            </Box>
            <Box marginTop={"5px"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography marginRight={"auto"}>State/Region</Typography>
                    <TextField onChange={(e) => setStateRegion(e.target.value)} />
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
                        onChange={handleChangeCountry}
                        sx={{ width: "224px" }}
                    >
                        <MenuItem value={'Indonesia'}>Indonesia</MenuItem>
                        <MenuItem value={'Malaysia'}>Malaysia</MenuItem>
                        <MenuItem value={'Thailand'}>Thailand</MenuItem>
                    </Select>
                </Box>
            </Box>
            <Box marginTop={"5px"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography marginRight={"auto"}>Phone</Typography>
                    <TextField onChange={(e) => setPhone(e.target.value)} />
                </Box>
            </Box>
            <Box marginTop={"5px"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography marginRight={"auto"}>Email</Typography>
                    <TextField onChange={(e) => setEmail(e.target.value)} />
                </Box>
            </Box>
            <Button type="submit" sx={{ border: "1px solid black" }}> Add </Button>
        </Box>
    );
}

export default AddForm;