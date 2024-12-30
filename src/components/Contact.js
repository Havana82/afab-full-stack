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
        <span> USA Address: 4008 Louetta Rd, Spring, Texas, USA. </span> <br />
        <i> <strong> Address:</strong> <span> AFAB STORE: Harmony Estate Rd, Sango, ilorin Kwara State, Nigeria.</span> <br />
        <span> AFAB FACTORY: Km 23, Badi Rd, Oke-oyi, ilorin Kwara State, Nigeria. </span>

            <br/>
            <br/>
        <strong>Phone: </strong><span> (+234)8168994168 ,
        (+234)7035574103</span>
        <br/>
        <br/>
        <strong>Email: </strong><span>afabfarms@gmail.com</span>
        
        </i>
    
        </Typography>
    </Card>
    </div>
)
}
export default Contact