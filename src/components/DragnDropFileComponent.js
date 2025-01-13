import React from "react";
import {useDropzone} from 'react-dropzone';
import { Box, Typography, Container } from "@mui/material";

// Basic styles for dropzone area
const styles = {
    dropzone: {
      width: '100%',
      height: '100px',
      border: '2px dashed #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    sampleBg: {
        backgroundColor: '#fff',
    },
    text: {
        color: '#ff0000'
    }
};

const DragnDropFileComponent = () => {            
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
    return(
        <Container sx={{backgroundColor: "#fff", padding: '40px !important'}}>   
            <Typography variant="h2" sx={{fontSize: "20px", marginBottom: '20px'}}>File Upload Component</Typography>
            <Box>
                <Typography variant="h3" sx={{fontSize: "16px", marginBottom: '16px'}}>Drag and drop files using 3rd party library</Typography>                
                <div {...getRootProps({className: 'dropzone'})} style={{...styles.dropzone, ...styles.sampleBg}}>
                    <input {...getInputProps()} />
                    <p style={styles.text}>Drag 'n' drop some files here, or click to select files</p>
                </div>
                <aside>
                <Typography variant="h3" sx={{fontSize: "14px", marginBottom: '10px', marginTop: '10px'}}>Selected Files are:</Typography>                
                    <ul>
                        {acceptedFiles ? 
                            acceptedFiles.map(file => (
                                <li key={file.name}>
                                  {file.name}
                                </li>
                              ))
                        : <></>
                        }
                        </ul>
                </aside>
            </Box>
        </Container>
    );
}
export default DragnDropFileComponent;