import React from "react";
import { styled } from '@mui/material/styles';
import { Button, Typography, Container } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid2';
import Delete from "@mui/icons-material/Delete";
import { useState } from "react";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const FileUploadComponent = () => {
    // single file upload
    const [fileName, setFileName] = useState('');
    const handleChange = (event) => {
        console.log(event.target.files);
        const files = event.target.files;  
        const fileName = files[0].name;
        setFileName(fileName);
    }

    // multiple file upload
    const [multiFile, setMultiFile] = useState([]);    
    const handleFilChange = (event) => {        
        const files = event.target.files;
        const newFiles = [];
        for (let index = 0; index < files.length; index++) {
            const element = files[index];     
            newFiles.push(element.name);
        }        
        setMultiFile(prevFiles => [...prevFiles, ...newFiles]);                
    }
    const removeFile = (index) => {        
        console.log(index);
        const oldArray = [...multiFile];
        oldArray.splice(index, 1);
        setMultiFile(updatedFiles => [...updatedFiles, ...oldArray]);
    }
    // const removeFile = (index) => setMultiFile(multiFile.filter((_, i) => i !== index));

    return(
        <Container sx={{backgroundColor: "#fff", padding: '40px !important'}}>            
            <Typography variant="h2" sx={{fontSize: "20px", marginBottom: '20px'}}>File Upload Component</Typography>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Typography variant="h3" sx={{fontSize: "16px", marginBottom: '16px'}}>Single File Upload</Typography>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        >
                        Upload files
                        <VisuallyHiddenInput
                            type="file"
                            onChange={handleChange}
                        />
                    </Button>
                    { fileName ? 
                        <p sx={{marginTop: '20px'}}>{fileName}</p> :
                        <p>No file selected</p>
                    }
                </Grid>
                <Grid size={6}>
                    <Typography variant="h3" sx={{fontSize: "16px", marginBottom: '16px'}}>Multi Files Upload</Typography>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        >
                        Upload files
                        <VisuallyHiddenInput
                            type="file"                            
                            onChange={(event) => handleFilChange(event)}
                            multiple
                        />
                    </Button>
                    { multiFile.length ?                         
                            <ul>{multiFile.map((entry, index) =>
                                <li key={entry}>
                                    <span>{entry}</span>
                                    <Button onClick={() => removeFile(index)}>
                                        <Delete sx={{color:"#000"}}/>
                                    </Button>
                                </li>
                            )}
                            </ul> :
                        <p>No file selected</p>
                    }
                </Grid>
            </Grid>                   
        </Container>
    )
}
export default FileUploadComponent;