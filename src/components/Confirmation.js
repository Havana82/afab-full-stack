import { Box, Container, Typography, styled } from "@mui/material"
import thanks from '../images/thank-you.gif'
const Confirmation = () => {
    const StyledCard = styled(Box)(({theme})=>({
        height:'54vh',
        width:'30vw',
        justifyContent:'center',
        overflow:'hidden',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        padding:5,}))
return (
    <Container>
       <StyledCard sx={{backgroundImage:`url(${thanks})`, margin:'auto'}}/>
       <Typography align='center' variant="h3" color={'tomato'} sx={{fontFamily:' cursive', margin:'20px'}}>
   Order Received!
    </Typography>
    </Container>
)
}
export default Confirmation