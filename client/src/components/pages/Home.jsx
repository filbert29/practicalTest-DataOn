import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

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
            <Box sx={{
                display: "flex",
                gap: "20px",
                flexDirection: "column"
            }}>
                <Box>
                    <Typography sx={{ fontWeight: "bold" }}>Bean of the Day</Typography>
                    <Typography>{catalog[0]?.bean}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: "bold" }}>Sale Price</Typography>
                    <Typography>${catalog[0]?.priceUnit.toFixed(2)}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: "bold" }}>Bean of the Day</Typography>
                    <Typography>{catalog[0]?.description}</Typography>
                </Box>
            </Box>
        </>
    );
}

export default Home;