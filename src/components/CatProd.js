import { Container,  Grid,  Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios"
import { useParams } from "react-router-dom"


const CatProd = (props) => {
const [catProd, setCatProd] = useState([])
let {id} = useParams()
  useEffect(() => {
    const baseUrl = 'https://afab-african-market.onrender.com/api'
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/categoryBasedProducts/${id}`)
            setCatProd(res.data)

        } catch (error) {
            console.log(error)
        }
    }
    fetchProducts()
  }, [id])
  return (
    <Container>
      <br/>
      <br/>
        <Typography variant="h3" align="center" color={'tomato'} sx={{fontFamily:'cursive',textDecoration:'underline'}}> 
        Category Products
        </Typography>

        <Grid container columnSpacing={{xs:0, sm:1, md:1}}
        direction={'column'}>
      {catProd.map(product=>{ 
        return(
        <Grid item xs>
        
          <Product myDirection={'flex'} id ={product.id} key={product.id}
          name={product.name} content = {product.content} pHref={`/details/${product.slug}`}
          image={product.image_url} price = 'atural'/>
      
        </Grid> )}
        )}

        </Grid>
    </Container>
   
)
}
export default CatProd