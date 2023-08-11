import { Box, Button, Card, CardActions, Container, Link, Typography } from "@mui/material"
import { useEffect, useState } from "react";

const Cart = (props) => {
    const [storedCart, setStoredCart] = useState([])

    useEffect(()=>{
    const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
    setStoredCart(cartItems)
        },[storedCart]);

const cartState = props.sum? `Total : ${props.sum}`: "Your Cart is empty"

return (
<Container  sx={{marginTop:'50px',background:'lightgrey'}}>
    <Typography align='center' variant="h3" color={'tomato'} sx={{fontFamily:'cursive',
    marginBottom:'50px', textDecoration:'underline', paddingTop:'5vh'}}>Your Shopping Cart</Typography>
    <div>
    <Typography variant="h5" >
    <Card elevation={4} sx={{ height:'fitcontent', border:'1px solid darkcyan', paddingBottom:'15px'}}>
    {storedCart.map(product=>{
        return(
        <>
        <Card elevation={5} sx={{ height:'10vh', color:'darkcyan', fontSize:'30px', marginBottom:'10px',
        paddingTop:'5vh',paddingLeft:'15px',paddingRight:'15px', display:'block'}}><p> <Box component='span'>{product.name}</Box>
        <Box component='span' sx={{border:'solid 1px black', fontSize:'25px', marginLeft:'19px',paddingRight:'5px'}}> {product.qty}</Box>&nbsp; 
        <Button  sx={{color:'red', background:'lightblue',borderRadius:'10px', height:'3vh'}}
        onClick={()=>props.onRemove(product)}>&nbsp;Remove&nbsp;</Button> <Box component='span' sx={{ float:'right'}} >&nbsp;&nbsp;${product.price}</Box>&nbsp;
        </p></Card>
        </>
        
        )})}
    
        
        
    <Box align='center' mt={8} mb={2}>
    <Typography variant="h5" align='center' sx={{ width:'400px',fontSize:'40px', alignSelf:'center', color:'darkcyan'}} >
    <Box component='span' sx={{color:'tomato'}}> {cartState}  </Box> 
    </Typography>
    </Box>
    <CardActions sx={{display:'flex', justifyContent:'center'}}>
         <Link href='/payment' sx={{textDecoration:'none'}}>
          <Button position="sticky" sx={{color:'tomato', background:'lightblue', fontSize:'18px',}} size="large">
        <b> Check Out</b> 
            </Button>
         </Link>  
        </CardActions>
    </Card>
    <br/>
    <br/>
    </Typography>
    </div>
   
</Container>
)
}
export default Cart
