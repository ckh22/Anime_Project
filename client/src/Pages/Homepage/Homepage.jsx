import React, {Fragment} from 'react'
import './Homepage.css'
import {Button} from '@material-ui/core'
import Leaderboard from '../../Components/Statistics/Leaderboard'

export default function Homepage() {
    return (
        <Fragment>
            <section className="one">
                <div className="flex-container">
                    <div className="leaderboard-container">
                        <div className="leaderboard">
                            <Leaderboard/>
                        </div>
                    </div>

                    <div className="vote-area">
                        <div className="grid-area">
                            <p>Lorem ipsum dolor sit amet, id sed assum maluisset. Ut ius omnesque electram. Natum quando et nam, moderatius vituperata mea ad, at sea labitur consequat.</p>
                            <Button color='primary' size='large'>Vote Now!</Button>
                        </div>
                    </div>


                </div>
            </section>
            <section className="two"></section>
            <section className="three"></section>
            <section className="four"></section>
            <section className="five"></section>

        </Fragment>

    )
}
