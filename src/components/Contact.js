import { Card, Typography } from "@mui/material"

const Contact = () => {
return (
    <div><Typography color={'tomato'} align='center' variant="h4" mr={1} sx={{fontFamily:'cursive',textDecoration:'underline'}}>
    <br/>
    <br/>
    <br/>

    <i>Contact Us</i>
    </Typography>
    <Card>
    <Typography variant="h5" align="center" sx={{fontFamily:'roboto', height:'500px'}}>
        <br />
        <br />
        <i> <strong> Adress:</strong> <span>Off Harmony estate Rd, ilorin Kwara State</span>
            <br/>
            <br/>
        <strong>Phone: </strong><span> 08168994168 ,
        07063093936</span>
        <br/>
        <br/>
        <strong>Email: </strong><span>afabventures@gmail.com</span>
        
        </i>
    
        </Typography>
    </Card>
    </div>
)
}
export default Contact