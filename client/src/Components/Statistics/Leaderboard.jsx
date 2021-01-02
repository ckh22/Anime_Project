import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper
} from '@material-ui/core'

function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein
    };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Leaderboard = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
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
    )
}

export default Leaderboard
