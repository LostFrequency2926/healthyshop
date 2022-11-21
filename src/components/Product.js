import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from "accounting"

//Poder hacer el dispatch de los elementos
import { actionTypes } from '../reducer';
//comunicacion con el state value general para agregar items al carrito
import { useStateValue } from '../StateProvider';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({product: {id, name, productType, price, amount, img, description}}) {
  
  // const [{basket}, dispatch] = useStateValue();
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  //Solo imprimo por que molestar ver la advertencia en la terminal acerca de que basket no se usa
  console.log(basket);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBaskket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name: name,
        productType: productType,
        price: price,
        amount: amount,
        img: img,
        description: description
      }
      /* Podemos ignorar las llaves del json por que la llave y su valor son iguales */
    })
  }

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
                {amount}                       
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="Agregar al carrito" onClick={addToBaskket}>
          <AddShoppingCart fontSize='large' />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>        
        </CardContent>
      </Collapse>
    </Card>
  );
}
