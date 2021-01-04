import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import {Link} from 'react-router-dom'
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white',
        background: '#4e4ca8'
    },
    iconButton: {
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [isShown, setIsShown] = React.useState(false);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function handleLogin() {
        setLogin(true);
    }

    function handleRegister() {
        setRegister(true);
    }
    const classes = useStyles();
    return (
        <div style={
            {
                boxShadowBottom: '0px 25px 50px 30px white',
                zIndex: '10',
                overflow: 'visible'
            }
        }>
            <AppBar position="static"
                style={
                    {
                        background: '#000000',
                        color: 'white'
                    }
            }>
                <Toolbar>
                    <IconButton edge="start"
                        className={
                            classes.iconButton
                        }
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <EmojiEmotionsIcon/>
                    <Typography variant="h6"
                        className={
                            classes.title
                        }
                        style={
                            {paddingLeft: '15px'}
                    }>
                        Company Name
                    </Typography>
                    <ul style={
                        {
                            listStyleType: 'none',
                            marginRight: '30px',
                            padding: '0',
                            overflow: 'hidden'
                        }
                    }>
                        <li className='nav-links'>
                            <Link to={`/`}
                                id='links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-links'>
                            <Link to={`/animes`}
                                id='links'>
                                Animes
                            </Link>
                        </li>
                        <li className='nav-links'>
                            <Link to={`/studios`}
                                id='links'>
                                Studios
                            </Link>
                        </li>
                        <li className='nav-links'>
                            <Link to={`/voiceActors`}
                                id='links'>
                                Voice Actors
                            </Link>
                        </li>
                        
                        <li className='nav-links'>
                            <Link to={`/donate`}
                                id='links'>
                                Want to help?
                            </Link>
                        </li>
                    </ul>
                    <Button color="inherit"
                        onClick={handleLogin}
                        className={
                            classes.menuButton
                    }>Login</Button>
                    <Button color="inherit"
                        onClick={handleRegister}
                        className={
                            classes.menuButton
                    }>Register</Button>
                </Toolbar>
            </AppBar>
            <Login open={login}
                setOpen={setLogin}/>
            <Register open={register}
                setOpen={setRegister}/>
        </div>
    )
}
