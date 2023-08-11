
import { Box, Card, CardMedia, Container, Typography } from "@mui/material"
import Popular from "./Popular"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Details = () => {
    const [details, setDetails] = useState([])
    let {slug} = useParams()
    useEffect(() => {
    const baseUrl = 'https://afab-african-market.onrender.com/api'
    const fetchProduct = async () => {
        try {
            const res = await axios.get(`${baseUrl}/products/${slug}`)
            setDetails(res.data)

        } catch (error) {
            console.log(error)
        }
    }
    fetchProduct()
    }, [slug])
return (
<Container>

<Popular/>
<Typography color={'tomato'} align='center' variant="h4" mr={1} sx={{fontFamily:'cursive',textDecoration:'underline'}}>
<br/>
<br/>
<br/>
<i>{details.name}</i>
</Typography>
<Typography variant="body1"  fontSize={'18px'} sx={{fontFamily:'roboto', marginLeft:'10vw', marginRight:'10vw'}}>
        <br/>
    <p><i>{details.content}</i></p>
<i> Afab produces and supplies a variety of African food to meet your daily needs.
    All our products are made with the highest hygiene standards.</i>
    </Typography>
    <br/>
    <br/>
    <br/>
    <Box sx={{display:'flex', justifyContent:'center'}}>
    <Card sx={{width:'400px'}}>
        <CardMedia 
        sx={{height:'400px', width:'400px'}} component='img'
        image={details.image_url}
        alt='product'/>

    </Card>
    </Box>
</Container>
)
}
export default Details