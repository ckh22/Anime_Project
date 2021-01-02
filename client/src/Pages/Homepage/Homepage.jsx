import React, {Fragment} from 'react'
import './Homepage.css'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
    Typography
} from '@material-ui/core'


  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function Homepage() {
    return (
        <Fragment>
            <div className='main'>
                <section className="one">
                    <div className="leaderboard">
                        <TableContainer component={Paper}>
                            <Table 
                                aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Anime</TableCell>
                                        <TableCell align="right">Popularity</TableCell>
                                        <TableCell align="right">Rating</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody> {
                                    rows.map((row) => (
                                        <TableRow key={
                                            row.name
                                        }>
                                            <TableCell component="th" scope="row">
                                                {
                                                row.name
                                            } </TableCell>
                                            <TableCell align="right">
                                                {
                                                row.calories
                                            }</TableCell>
                                            <TableCell align="right">
                                                {
                                                row.fat
                                            }</TableCell>
                                        </TableRow>
                                    ))
                                } </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <Typography
                        align='right'
                        style={{color: 'white', padding: '100px 50px'}}
                        variant='h5'
                    >
                        Vote Now!
                    </Typography>
                </section>
                <section className="two"></section>
                <section className="three"></section>
                <section className="four"></section>
                <section className="five"></section>
            </div>

        </Fragment>

    )
}
