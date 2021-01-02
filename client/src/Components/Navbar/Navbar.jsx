import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" style={{background: '#f2e9e4', color: '#22223b'}}>
                <Toolbar>
                    <IconButton edge="start"
                        className={
                            classes.menuButton
                        }
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6"
                        className={
                            classes.title
                    }>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
