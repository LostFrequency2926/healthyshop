import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
import accounting from "accounting"

//Poder hacer el dispatch de los elementos
import { actionTypes } from '../reducer';
//comunicacion con el state value general para agregar items al carrito
import { useStateValue } from '../StateProvider';
import { Delete } from '@mui/icons-material';

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

export default function ProductAdmin({product: {id, name, productType, price, amount, img, description}}) {
  
  // const [{basket}, dispatch] = useStateValue();
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  //Solo imprimo por que molestar ver la advertencia en la terminal acerca de que basket no se usa
  console.log(basket);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const DeleteProduct = () => dispatch({
    type: actionTypes.DELETE_ITEM,
    itemtoDelete: {
      id: id,}
    /*Como el key y el valor son iguales puedo ignorar la ey */
  })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#FF9900" }} aria-label="recipe">
            {id}
          </Avatar>
        }
        action={
            <Typography
                ClassName={ClassNames.action}
                variant='h5'
                color='textSecondary'>
                cant.
                {amount}                       
            </Typography>
        }
        title={name}
        subheader= {accounting.formatMoney(price, "$")}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="Elimianr producto del sistema" onClick={DeleteProduct}>
          <Delete fontSize='large' />
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
