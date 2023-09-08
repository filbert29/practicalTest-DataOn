import { Box, Button, Typography } from "@mui/material";
import { Cookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const handleSignout = () => {
        cookies.remove("token", { path: `/` });
        navigate("/signin");
    };

    return (
        <>
            <Box sx={{
                display: "flex",
                backgroundColor: "#5E0103",
                padding: "10px 0px",
                color: "white",
                marginBottom: "20px"
            }}>
                <Box sx={{ width: "100%", textAlign: "center" }}> <Link to={'/'}><Button sx={{color: "white", textTransform: "capitalize"}}>Home</Button></Link> </Box>
                <Box sx={{ width: "100%", textAlign: "center" }}> <Link to={'/catalog'}><Button sx={{color: "white", textTransform: "capitalize"}}>Catalog</Button></Link> </Box>
                <Box sx={{ width: "100%", textAlign: "center" }}> <Button sx={{color: "white", textTransform: "capitalize"}}>Order Status</Button> </Box>
                <Box sx={{ width: "100%", textAlign: "center" }}> <Link to={'/distributor'}><Button sx={{color: "white", textTransform: "capitalize"}}>Distributors</Button></Link> </Box>
                <Box sx={{ width: "100%", textAlign: "center" }}> <Link to={'/upload'}><Button sx={{color: "white", textTransform: "capitalize"}}>Upload</Button></Link> </Box>
                <Box sx={{ width: "100%", textAlign: "center" }}> <Button onClick={handleSignout} sx={{color: "white", textTransform: "capitalize"}}>Logout</Button> </Box>
            </Box>
        </>
    );
}

export default Navbar;