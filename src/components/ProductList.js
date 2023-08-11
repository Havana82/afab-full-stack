import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Product";

const ProductList = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const baseUrl = 'https://afab-african-market.onrender.com/api'
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/products/`)
            setProducts(res.data)

        } catch (error) {
            console.log(error)
        }
    }
    fetchProducts()
  }, [])
  return (
    <Box>
      <br/>
      <br/>
        <Typography variant="h3" align="center" color={'tomato'} sx={{fontFamily:'cursive',textDecoration:'underline'}}> 
        Products
        </Typography>

        <Grid container columnSpacing={{xs:0, sm:1, md:1}}
        direction={'column'}>
      {products.map(product=>{ 
        return(
        <Grid item xs>
        
          <Product myDirection={'flex'} id ={product.id} key={product.id}
          name={product.name} content = {product.content} pHref={`/details/${product.slug}`}
          image={product.image_url} qty={product.quantity} price={product.price} onAdd={props.onAdd} />
      
        </Grid> )}
        )}

        </Grid>
    </Box>
  )
}
export default ProductList