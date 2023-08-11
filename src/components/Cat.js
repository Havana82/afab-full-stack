
import { Container, Grid, styled, Box, Typography, Link} from "@mui/material"
import catfish from '../images/smokedcf.jpeg'
import chicken from '../images/Frozen-chicken-vs-fresh-chicken.jpg'
import garri from '../images/garri.jpg'
import meat from '../images/beef.jpeg'
import Popular from "./Popular"
import Info from "./Info"


function Cat() {
    const StyledCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        padding:5,
        cursor:'pointer',
        [theme.breakpoints.up('md')]:{
            height:400,
        },
        [theme.breakpoints.down('md')]:{
            height:200,
        },
        "&:hover":{
            opacity:0.7,
            boxSizing:'borderBox',
            zIndex:1,
            transition:`all 0.45s ease`
        }
        }))

    const catItems = [{id:1, name:'Poultry',image:chicken},
    {id:4, name:'Fish',image:catfish},{id:3, name:'Crop Produce', image:garri},
    {id:2, name:'Meat', image:meat},]

    const StyledTypography = styled(Typography)({
        textAlign:'center',
        color:'white',
        background:'tomato',
        fontSize:20
    })
    const StyledWrapper = styled(Box)(({theme})=>({
        [theme.breakpoints.up('md')]:{
            paddingTop:"145%",
        },
        [theme.breakpoints.down('md')]:{
            paddingTop:"50%",
        },
        width: '80%'
    }))
    return (
    <>
    <Box sx={{justifyContent:'center'}}>
    <Typography variant="body1"  fontSize={'18px'} sx={{fontFamily:'roboto', marginLeft:'10vw', marginRight:'10vw'}}>
        <br/>
       <i> Afab produces and supplies a variety of African food to meet your daily needs.
        We provide you with a wide range of food products to choose from. Meat, smoked and fresh fish, soya beans, 
        corn, cassava and much more! We continually strive to provide you with the best quality products. Dont hesistate to contact us for more information.</i>
    </Typography>
    </Box>
    <Container> 
        <br/>
        <br/>
        <br />
        <Box sx={{display:'flex', justifyContent:'center', flexDirection:{xs:'column', md:'row'}}}>
        <Typography color={'tomato'} align='center' variant="h4" mr={1} sx={{fontFamily:'cursive',textDecoration:'underline'}}>
        <i>Categories</i>
        
        </Typography></Box>
        <br/>
        <br/>
        <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
        
        {catItems.map((item)=>(
        
            <Grid item md={3} xs={6}>
        <Link href={`category/${item.id}`} sx={{textDecoration:'none'}}>
                <StyledCard sx={{backgroundImage:`url(${item.image})`}}>
                    <StyledWrapper>
                    <StyledTypography>{item.name}</StyledTypography>
                    </StyledWrapper>
                </StyledCard>
        </Link>   
            </Grid>
     
            ))}
            
        </Grid>
    </Container>
    <Popular/>
    <Info/>
    </>
        )
}
export default Cat