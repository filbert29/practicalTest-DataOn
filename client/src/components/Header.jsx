import { Box, Typography } from "@mui/material";
import Logo from "../assets/images/coffee_shop_logo.png"

const Header = () => {
    return (
        <>
            <Box sx={{
                display: "flex"
            }}>
                <img src={Logo} style={{ width: "100px" }} alt="" />
                <Box>
                    <Typography>Coffee Valley</Typography>
                    <Typography>Taste the love in every cup!</Typography>
                    <Typography>One Alewife Center 3rd Floor</Typography>
                    <Typography>Cambridge, MA 02140</Typography>
                </Box>
            </Box>
        </>
    );
}

export default Header;