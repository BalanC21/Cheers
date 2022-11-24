import React from 'react';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const CopyRight = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" target="_blank" href="https://mui.com/">
                Material UI
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
};

export default CopyRight;