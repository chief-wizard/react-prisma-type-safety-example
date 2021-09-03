/** CustomCard.js **/
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardImage from '../static/images/header.jpg'
 
export default function CustomCard(props) {
 return (
   <Card className="Card">
     <CardActionArea>
       <CardMedia
         className="CardMedia"
         image={CardImage}
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
         <Typography
           variant="body2"
           color="textSecondary"
           component="p">
             {props.description}
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button
         size="medium"
         color="primary">
           Add to cart
       </Button>
     </CardActions>
   </Card>
 );
}
