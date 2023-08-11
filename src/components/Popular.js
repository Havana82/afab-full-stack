
import { Box, Container, Link, Stack, Typography, styled } from "@mui/material"
import cat from '../images/catfish.jpeg'
import cashew from '../images/cashew.jpeg'
import cassava from '../images/cassava.jpg'
import ram from '../images/ram.jpeg'
import plant from '../images/Plantains.jpeg'
import pea from '../images/peanuts.jpeg'
import corn from '../images/corn.jpeg'

const Popular = () => {
    const StyledCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        padding:5,
        borderRadius:'100%',
        overflow:'hidden',
        width:'100px',
        cursor:'pointer',
        [theme.breakpoints.up('md')]:{
            height:100,
        },
        [theme.breakpoints.down('md')]:{
            height:100,
        },
        "&:hover":{
            opacity:0.7,
            boxSizing:'borderBox',
            zIndex:1,
            transition:`all 0.45s ease`
        }
        }))
    const StyledTypography = styled(Typography)({
            textAlign:'center',
            color:'black',
            fontSize:20
        })
    const CardBox = styled(Box)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'

    })
return (
<Container>
    <br/>
    <br />
    <br />
    <br />
    <br />
    <Box sx={{display:'flex', justifyContent:'center', flexDirection:{xs:'column', md:'row'}}}>
    <Typography color={'tomato'} align='center' variant="h4" mr={1} sx={{fontFamily:'cursive', textDecoration:'underline'}}>
    <i>Popular Products</i>
    </Typography></Box>
    <Stack Container direction={'row'} mt={4} spacing={5} ml={3}
    sx={{overflow:'auto'}}>
   <Link href={'/details/cat-fish'} sx={{textDecoration:'none'}}><CardBox>
    <StyledCard sx={{backgroundImage:`url(${cat})`}}/>
    <StyledTypography>Fresh CatFish</StyledTypography>
    </CardBox></Link> 
    <Link href={'/details/cashews'} sx={{textDecoration:'none'}}>
    <CardBox>
    <StyledCard sx={{backgroundImage:`url(${cashew})`}}/>
    <StyledTypography>Cashews</StyledTypography>
    </CardBox>
    </Link> 
    <Link href={'/details/cassava'} sx={{textDecoration:'none'}}>
    <CardBox>
    <StyledCard sx={{backgroundImage:`url(${cassava})`}}/>
    <StyledTypography>Cassava</StyledTypography>
    </CardBox>
    </Link> 
    <Link href={'/details/ram'} sx={{textDecoration:'none'}}>
    <CardBox>
    <StyledCard sx={{backgroundImage:`url(${ram})`}}/>
    <StyledTypography>Ram Meat</StyledTypography>
    </CardBox>
    </Link> 
    <Link href={'/details/plantain'} sx={{textDecoration:'none'}}>
    <CardBox>
    <StyledCard sx={{backgroundImage:`url(${plant})`}}/>
    <StyledTypography>Plantains</StyledTypography>
    </CardBox>
    </Link> 
    <Link href={'/details/peanut'} sx={{textDecoration:'none'}}>
    <CardBox>
    <StyledCard sx={{backgroundImage:`url(${pea})`}}/>
    <StyledTypography>Peanuts</StyledTypography>
    </CardBox>
    </Link> 
    <Link href={'/details/corn'} sx={{textDecoration:'none'}}>
    <CardBox>
    <StyledCard sx={{backgroundImage:`url(${corn})`}}/>
    <StyledTypography>Corn</StyledTypography>
    </CardBox>
    </Link> 
    </Stack>
</Container>
)
}
export default Popular