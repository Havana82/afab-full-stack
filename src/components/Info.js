import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import pack from '../images/combo.jpeg'
const Info = () => {
return (
<div>
<Container>  

    <br/>
    <br/>
    <br/>
    <br/>

<Box flex={1} sx={{xs:'none'}}>
<Typography variant="h4" color={'tomato'} align="center" mt={3} sx={{fontFamily:'cursive',
textDecoration:'underline'}}>Product Highlight</Typography>
<Grid item xs>
<Card  elevation={1}>
<Box mt={7} sx={{display:'flex', flexDirection: 'row'}}>
    <CardMedia component={'img'} image={pack} alt="fish-pack" 
    sx={{width:'400px', height:{xs:200, md:'300'}, paddingBottom:'20px'}}/>

    <CardContent>
        <Typography gutterBottom variant="h4"  color={'tomato'} mr={1} sx={{fontFamily:'cursive'}}>  Smoked Fish Pack</Typography>
        <Typography  fontSize={'18px'} sx={{fontFamily:'roboto'}} > This is our famous and delicious smoked fish pack. 
        weights from 250g - 1kg . Our smoked fish is well cleaned, seasoned, and  customer satisfaction guaranteed. </Typography>
        <CardActions>
            <Button sx={{color:'tomato', background:'lightgrey'}} size="large">
                Share
            </Button>
        </CardActions>
    </CardContent>
</Box>
</Card>
</Grid>
</Box>
</Container>
</div>
)
}
export default Info