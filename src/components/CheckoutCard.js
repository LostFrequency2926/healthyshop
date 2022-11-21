import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { ClassNames } from '@emotion/react';
import accounting from "accounting"
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@material-ui/core/styles";

//Consumir el state value general y poder eliminar del carrito el elemento
import { useStateValue } from '../StateProvider';

//Poder hacer el dispatch de los elementos
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) => ({
    cardActions: {
        display: "flez",
        justifyContent: "space-between",
        textAlign: "center",
    }
}))

export default function CheckoutCard({product: {id, name, productType, price, amount, img, description}}) {

    const [{basket}, dispatch] = useStateValue();
    const classes = useStyles();

    console.log(basket)

    const RemoveItem = () => dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
      /*Como el key y el valor son iguales puedo ignorar la ey */
    })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#FF9900" }} aria-label="recipe">
            HS
          </Avatar>
        }
        action={
            <Typography
                ClassName={ClassNames.action}
                variant='h5'
                color='textSecondary'>
                                       
            </Typography>
        }
        title={name}
        subheader= {accounting.formatMoney(price, "$")}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt={img}
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="share">
          <DeleteIcon onClick={RemoveItem} />
        </IconButton>

      </CardActions>
    </Card>
  );
}
