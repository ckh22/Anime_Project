import React from 'react'
import animes from '../../Data/animes'
import {Card, CardContent, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Animes = () => {
    return (
        <div> {
            animes.map((anime) => (
                <div key={
                    anime.id
                }>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                <br/> {
                                anime.title
                            }
                                <br/> {
                                anime.description
                            } </Typography>
                            <Link to={
                                `/animes/${
                                    anime.id
                                }`
                            }>
                                <img src={
                                        anime.images[0].url
                                    }
                                    alt=""/>
                            </Link>

                        </CardContent>
                    </Card>
                </div>
            ))
        } </div>
    )
}

export default Animes
