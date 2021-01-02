import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Login from '../Auth/Login'
import Register from '../Auth/Register'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#4e4ca8'
    },
    title: {
        flexGrow: 1
    }
}));

export default function Navbar() {
    const [login, setLogin] = React.useState(false);
    const [register, setRegister] = React.useState(false);
    
    function handleLogin() {
        setLogin(true);
    }

    function handleRegister() {
        setRegister(true);
    }
    const classes = useStyles();
    return (
        <div style={{boxShadowBottom: '0px 25px 50px 30px white', zIndex: '10'}}>
            <AppBar position="static" style={{background: '#000000', color: 'white'}}>
                <Toolbar>
                    <IconButton edge="start"
                        className={
                            classes.menuButton
                        }
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <IconButton edge="start"
                        className={
                            classes.menuButton
                        }
                        color="inherit"
                        aria-label="menu">
                        <EmojiEmotionsIcon/>
                    </IconButton>
                    <Typography variant="h6"
                        className={
                            classes.title
                    }>
                        Company Name
                    </Typography>
                    <Button color="inherit" onClick={handleLogin}>Login</Button>
                    <Button color="inherit" onClick={handleRegister}>Register</Button>
                </Toolbar>
            </AppBar>
            <Login open={login} setOpen={setLogin}/>
            <Register open={register} setOpen={setRegister}/>
        </div>
    )
}
