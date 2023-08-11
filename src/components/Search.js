import { Box, Grid, Modal, TextField} from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Search = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [search, setSearch] = useState([])
    const[find, setFind] = useState("")
    useEffect(() => {
        const baseUrl = 'https://afab-african-market.onrender.com/api'
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`${baseUrl}/products/`)
                setSearch(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
}, [])
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxHeight:600,
        minHeight:600,
        overflow:'auto',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const helper = () =>{
        handleClose()
        setFind('')
        
    }
return (
    <div><TextField sx={{display:{xs:'none', md:'flex'}, height:'10vh', width:'20vw', marginTop:'20px'}}
    color="warning" label="Search" variant="outlined" onClick={handleOpen} onChange={handleOpen} />
    <Modal
    open={open}
    onClose={helper}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
    
    <TextField sx={{display:{xs:'none', md:'flex'}, height:'10vh', width:'20vw', marginTop:'20px'}}
    color="warning" label="Search" variant="outlined" onChange={(e)=>setFind(e.target.value.toLowerCase())}/>

        {search.filter((input)=>input.name.toLowerCase().includes(find)).map((input)=>(
            find.length>0?
            <Grid item xs>
        
            <Product myDirection={'flex'} id ={input.id} key={input.id}
            name={input.name} content = {input.content} pHref={`/details/${input.slug}`}
            image={input.image_url}/>
        
            </Grid> : ''
        ))}
    </Box>
    </Modal></div>
  )
}
export default Search