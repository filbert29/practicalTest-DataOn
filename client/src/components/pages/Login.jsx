import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('')

    const [cookies, setCookies] = useCookies(["token"]);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = { userId, password };
            const response = await axios.post("http://localhost:3001/SignIn", data)
            console.log(response.data)
            if (response.data.status == 'success') {
                setCookies("token", response.data.token)
                navigate('/')
            }
        } catch (err) {
            console.log('gak bisa')
        }
    }

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            padding: "30px 0px"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                boxShadow: "10px 10px 22px 1px rgba(0,0,0,0.49);",
                alignItems: "center",
                padding: "40px 0px",
                width: "300px",
                borderRadius: "10px"
            }}>
                <Typography>Login</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }} component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="User ID"
                        value={userId}
                        onChange={(e) => { setUserId(e.target.value) }}
                    />
                    {/* <TextField
                        label="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    /> */}
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </FormControl>
                    <Button type="submit" sx={{ border: "1px solid black" }}>Login</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;