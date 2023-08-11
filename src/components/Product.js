import { Box, Button, Card, CardActions, CardContent, CardMedia,Link, Typography} from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const Product = (props) => {

  return (
    <Box mt={3}>
    
        <Card sx={{marginLeft:'40px'}}>
            <Box sx={{display:'block'}}
            flexDirection='row'>
        <CardMedia component={'img'}
        height='250px'
        image={props.image}
        sx={{width:'250px',
        cursor:'pointer',
        "&:hover":{
            opacity:0.6,
            boxSizing:'border-box',
            zIndex:1,
            transition:'all 0.50s ease',
        }}}/>
        <CardContent>
            <Typography gutterBottom variant="h4" align="center" color={"tomato"}>
                {props.name} <br/>
                ${props.price}
            </Typography>
            
            <Typography  variant="h6" color='text.secondary'>
            {props.content} <br/>
            </Typography>
            
        
            </CardContent>
        <CardActions sx={{display:'flex', justifyContent:'center'}}>
        <Button sx={{ background:'lightblue'}} size="large">
        <Link href={props.pHref} sx={{textDecoration:'none', color:'tomato'}}>
                            Learn More ....
        </Link>
        </Button> &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={()=>props.onAdd({id:props.id, name:props.name, price:props.price, qty:1})} 
        sx={{color:'tomato', background:'lightblue'}} size="large">
        Add to Cart &nbsp; <ShoppingCartIcon/>
            </Button>
        </CardActions>
            </Box>

        </Card>
</Box>
)
}
export default Product;