// import React from 'react'
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "98%",
        marginBottom:"10px",        
        // margin: `${theme.spacing(0)} auto`
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        //margin: theme.spacing(1),
    },
  })
);



export const TextInput = (id,room) => {
    const classes = useStyles();
    console.log(id);
    console.log(room);
    const [inputValue, setInputValue] = React.useState("");
    const handleJoinNow = () => {
        // console.log(id.id);
        // console.log(id.room);
        // console.log(inputValue);
        var tk = localStorage.getItem("token_sec");
        axios
    .post(
      "http://localhost:5000/chat/2",
      {
        r: 205,
        m:inputValue
      },
      {
        headers: {
          Authorization: "Bearer " + tk,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
        setInputValue('');
        window.location.reload();
    //   xsd.setState({ chatState: response.data }, () => {
    //     // console.log("--->",xsd.state.chatState);
    //   });
    })
    .catch(function (error) {
      console.log(error);
    });
    }
      const onChangeHandler = event => {
        setInputValue(event.target.value);
        // console.log("inter:",event.target.value);
        // console.log(inputValue);
      };
    
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Escribe tu mensaje"
                variant='outlined'                           
                onChange={onChangeHandler}
                value={inputValue}               
                className={classes.wrapText}                         
                //margin="normal"
            />
            <Button  variant="contained" color="primary" className={classes.button} onClick={() => handleJoinNow()}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



