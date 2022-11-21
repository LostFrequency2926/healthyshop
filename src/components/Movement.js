import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import accounting from "accounting"
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import ShareIcon from '@mui/icons-material/Share';
// import { ClassNames } from '@emotion/react';
// import accounting from "accounting"
// import DeleteIcon from '@mui/icons-material/Delete';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';


const useStyles = makeStyles((theme) => ({
    cardActions: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
    },
    buttonsSebastian:{
      backgroundColor: "red"
    }
}))

export default function Movement({movement: {id, date, idItem, amountMovement, amount}}) {

  const classes = useStyles();

  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardHeader
    //     avatar={
    //       <Avatar sx={{ bgcolor: "#b73030" }} aria-label="recipe">
    //         HS
    //       </Avatar>
    //     }
    //     action={
    //         <Typography
    //             ClassName={ClassNames.action}
    //             variant='h5'
    //             color='textSecondary'>
                                       
    //         </Typography>
    //     }
    //     title={date}
    //     subheader= {accounting.formatMoney(amountMovement, "$")}
    //   />
    //   <CardMedia/>

    //   <CardActions disableSpacing className={classes.cardActions}>
    //     <IconButton aria-label="share">
    //       <ShareIcon />
    //     </IconButton>

    //     <IconButton aria-label="share">
    //       <DeleteIcon/>
    //     </IconButton>

    //   </CardActions>
    // </Card>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
        {accounting.formatMoney(amountMovement, "$")}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {"Cantidad de Items: "}
          {amount}
        </Typography>
        <Typography variant="body2">
          {"Id de item vendido :"}
          {idItem}
        </Typography>
      </CardContent>
    </Card>

  );
}


  

