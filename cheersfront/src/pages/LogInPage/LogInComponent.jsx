import React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CopyRight from "../../Components/Shared/CopyRight";

const theme = createTheme();

export default function SignIn() {
    const url = "https://localhost:7021/account/login";

    function handle(e) {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				Email: data.Email,
				Password: data.Password,
			},)
			.then((res) => {
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("user", res.data.email);
				localStorage.setItem("isAdmin", res.data.isAdmin);
				window.dispatchEvent(new Event("storage"))
				navigate("/");
			});
	}
	const navigate = useNavigate();

    const [data, setData] = useState({
        Email: "",
        Password: "",
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, backgroundColor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Log In
                        </Typography>
                        <Box component="form" onSubmit={(e) => submit(e)} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Email"
                                label="Email Address"
                                name="Email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => handle(e)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Password"
                                label="Password"
                                type="password"
                                id="Password"
                                autoComplete="current-password"
                                onChange={(e) => handle(e)}
                            />
                            {/*Il Pastram?*/}
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="src/Pages/LogInPage/LogInComponent#" variant="body2" to={"/"}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to={'/register'} type={Link}
                                        as={'button'} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <CopyRight sx={{mt: 8, mb: 4}}/>
        </>
    );
}