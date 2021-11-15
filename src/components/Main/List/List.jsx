import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide, ListItemText} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const transaction = [
        { id: 1, type: "Income", category: "Salay", amount: 50, date: "12th Nov 2021"},
        { id: 2, type: "Expense", category: "Salay", amount: 200, date: "12th Dec 2021"},
        { id: 3, type: "Income", category: "Salay", amount: 500, date: "15th Nov 2021"},
        { id: 4, type: "Expense", category: "Salay", amount: 550, date: "22th Nov 2021"},
        { id: 5, type: "Income", category: "Salay", amount: 80, date: "10th Nov 2021"},
    ];
    return (
       <MUIList dense = { false } className = { classes.list }>
           {transaction.map((transaction) => (
               <Slide direction = "down" in mountOnEnter unmountOnExit key = {transaction.id}>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar className = {transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary = { transaction.category } secondary = { `$${transaction.amount} - ${transaction.date}` }/>
                       <ListItemSecondaryAction>
                           <IconButton edge = "end" aria-label = "delete" onClick ="">
                               <Delete />
                           </IconButton>
                       </ListItemSecondaryAction>
                   </ListItem>
               </Slide>
           ))}
       </MUIList>
    )
}

export default List
