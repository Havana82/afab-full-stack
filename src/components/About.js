import { Card, Typography } from "@mui/material"

const About = () => {
  return (
    <div><Typography color={'tomato'} align='center' variant="h4" mr={1} sx={{fontFamily:'cursive',textDecoration:'underline'}}>
    <br/>
    <br/>
    <br/>
   
    <i>About Us</i>
    </Typography>
    <Card>
    <Typography variant="body1" align="center" fontSize={'20px'} sx={{fontFamily:'roboto',alignSelf:'center',textAlign:'justify',width:{ xs:500, md:'800px'},height:'500px', margin:'auto'}}>
            <br/>
        <p><i> Afab was founded in 2020 with one goal in mind: To provide high quality, healthy and affordable
            African meals to our customers. Afab has over 500 acres of land where we cultivate our crop produce 
            and rear meat and Fish. Consumer health is top priority at Afab, hence we use only the safest and best resources
            to grow our farm produce and rear our animals. For more information, please dont hesitate to contact us via 
            our contact page.</i></p>
    
        </Typography>
    </Card>
    </div>
  )
}
export default About