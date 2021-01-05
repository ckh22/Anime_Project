import React from 'react';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 240
    }
});

const Anime = ({anime}) => {
    const classes = useStyles();
    return (
        <div className="item-b">
            <Card className={
                classes.root
            }>

                <CardActionArea>
                    <CardMedia className={
                            classes.media
                        }
                        image={
                            anime.image
                        }
                        title={
                            anime.title
                        }/>
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {
                        anime.title
                    } </Typography>
                </CardContent>
            </Card>
        </div>

    );
};

export default Anime;
