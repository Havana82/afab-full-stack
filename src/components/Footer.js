import { Box } from "@mui/material"

const Footer = () => {
const currentYear = new Date().getFullYear();
return (
    <Box sx={{display:'flex', justifyContent:'center',color:'white',
    backgroundColor:'tomato', height:'35px', paddingTop:'10px'}}>Copyright &copy; {currentYear} Afab inc All Rights Reserved</Box>
)
}
export default Footer
