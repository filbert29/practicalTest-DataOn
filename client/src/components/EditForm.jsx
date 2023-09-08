import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {

    const [distributorName, setDistributorName] = useState('')
    const [city, setCity] = useState('')
    const [stateRegion, setStateRegion] = useState('')
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    let { idDistributor } = useParams();

    const [distributors, setDistributors] = useState([]);

    const navigate = useNavigate();

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };

    const getSingleDistributor = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3001/singleDistributor",
                {
                    idDistributor,
                }
            );
            setDistributors(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getSingleDistributor();
    }, []);

    useEffect(() => {
        setDistributorName(distributors.distributorName);
        setCity(distributors.city);
        setStateRegion(distributors.stateRegion);
        setCountry(distributors.country);
        setPhone(distributors.phone);
        setEmail(distributors.email);
    }, [distributors]);

    console.log(distributors, idDistributor)

    const handleEdit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put("http://localhost:3001/changeDistributor", {
                idDistributor,
                distributorName,
                city,
                stateRegion,
                country,
                phone,
                email,
            });
            if (response.data.status == 'success') {
                navigate("/distributor");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box component="form" onSubmit={handleEdit} marginTop={"20px"} width={"380px"} sx={{
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
                    <TextField value={distributorName} onChange={(e) => setDistributorName(e.target.value)} />
                </Box>
            </Box>
            <Box marginTop={"5px"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography marginRight={"auto"}>City</Typography>
                    <TextField value={city} onChange={(e) => setCity(e.target.value)} />
                </Box>
            </Box>
            <Box marginTop={"5px"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography marginRight={"auto"}>State/Region</Typography>
                    <TextField value={stateRegion} onChange={(e) => setStateRegion(e.target.value)} />
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
                    <TextField value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Box>
            </Box>
            <Box marginTop={"5px"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography marginRight={"auto"}>Email</Typography>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} />
                </Box>
            </Box>
            <Button type="submit" sx={{ border: "1px solid black" }}> Edit </Button>
        </Box>
    );
}

export default EditForm;