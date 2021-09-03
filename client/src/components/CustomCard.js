/** CustomCard.js **/
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
 
export default function CustomCard(props) {
return (
  <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={props.title}
        height="140"
        image={props.image}
        title={props.title}
        />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2">
            {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p">
            ${props.price}
        </Typography>
        {props.stock < 5 &&
          <Typography
            variant="body2"
            color="textPrimary"
            component="p">
              Only {props.stock} left
          </Typography>
        }
        <Typography
          variant="body2"
          color="textSecondary"
          component="p">
            {props.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions >
      <Button
        size="medium"
        color="primary">
          Add to cart
      </Button>
    </CardActions>
   </Card>
 );
}
