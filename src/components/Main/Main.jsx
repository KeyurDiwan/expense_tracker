import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid,Divider } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles';
import usesStyles from './styles'
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = usesStyles();
    return (
        <Card className = { classes.root }>
            <CardHeader title = "Expense Tracker" subheader = "powered by InBorn Comms {Keyur_Diwan}" />
            <CardContent>
                <Typography align = "center" variant = "h5">
                    Balance $100
                </Typography>

                <Typography variant = "subtitle1" style = {{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* info Card */}
                    Try say : Add income for$100 in cat salary for monaday
                </Typography>

                <Divider />
            <Form/>
            </CardContent>

            <CardContent className = {classes.cartContent }>
                <Grid container spacing = {2}>
                    <Grid item xs = {12}>
                      <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
