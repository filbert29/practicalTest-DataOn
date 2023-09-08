import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    console.log(selectedFile, title, author)

    return (
        <>
            <Box sx={{
                width: "500px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography marginRight={"auto"}>Title</Typography>
                        <TextField onChange={(e) => setTitle(e.target.value)} sx={{ width: "337px" }} />
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px"
                }}>
                    <Typography marginRight={"auto"}>Document File</Typography>
                    <Box>
                        <TextField
                            type="file"
                            inputProps={{ accept: 'application/pdf, .doc, .docx' }}
                            onChange={handleFileChange}
                            sx={{ width: "337px" }}
                        />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography marginRight={"auto"}>Author</Typography>
                        <TextField onChange={(e) => setAuthor(e.target.value)} sx={{ width: "337px" }} />
                    </Box>
                </Box>
                <Button sx={{
                    marginLeft: "auto",
                    border: "1px solid black"
                }}>Upload</Button>
            </Box>
        </>
    );
}

export default Upload;