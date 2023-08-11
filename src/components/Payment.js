
import { Button, Card, Container, Typography } from '@mui/material';
import {Elements, CardElement,ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
const Payment = (props) => {
const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()
        if(!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement);
        const {error} = await stripe.createPaymentMethod({type:'card', card:cardElement});
        if(error){
            console.log(error);
        } else{
        
        props.refresh()
        props.nextStep()
        }

    }

return (

    
<Container>
    <Typography variant='h4' gutterBottom sx={{ color:'tomato',fontFamily:'cursive',margin:'20px',
    textDecoration:'underline'}}>Shipping</Typography>
    <p>Please enter your shipping details.</p>
    <br />
 
    <Card sx={{ display:'grid', gridGap:'1rem'}}>
    
    <div style={{margin:'10px'}}>
    <label >
    <span for="firstname" style={{margin:'1px'}} >First name</span>
    <input  type="text" id="firstname"  />
    </label>
    <label>
    <span for="lastname" style={{margin:'10px'}}>Last name</span>
    <input  type="text" id="lastname"  />
    </label>
    </div>
    <label >
        <span  for="address" style={{margin:'10px'}}>Address</span>
        <input type="text" id="address" />
    </label>
    <label >
    <span  for="country" style={{margin:'10px'}}>Country</span>
    <select  id="country">
        <option value=""></option>
        <option value="unitedstates">United States</option>
    </select>
    </label>
    <div style={{margin:'10px', paddingBottom:'20px'}}>
        <label >
        <span for="zipcode" style={{margin:'1px'}}>Zip code</span>
        <input  type="text" id="zipcode" />
        </label>
        <label >
        <span for="city" style={{margin:'10px'}}>City</span>
        <input  type="text" id="city" />
        </label>
        <label >
        <span  for="state" style={{margin:'10px'}}>State</span>
    <select  id="state">
        <option value="AL">AL</option>
        <option value="AK">AK</option>
        <option value="AZ">AZ</option>
        <option value="CA">CA</option>
        <option value="CO">CO</option>
        <option value="DE">DE</option>
        <option value="TX">TX</option>
    </select>
    </label>
</div>
</Card>

    <Card elevation={3} sx={{height:'40vh', padding:'20px'}} >

    <Typography variant='h4' gutterBottom sx={{margin:'auto',
    color:'tomato',fontFamily:'cursive',textDecoration:'underline', marginBottom:'10vh' }}>
        Payment Information
    </Typography>
    
    <Elements stripe={stripePromise}>
        <ElementsConsumer>
            {({elements, stripe})=>(
                <form onSubmit={(e)=> handleSubmit(e, elements, stripe) } >
                    <CardElement/>
                    <br/>
                    <br/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button type='submit' variant='contained' disabled={!stripe} 
                    sx={{background:'blue', color:'white',fontSize:'18px', margin:'auto',height:'5vh',
                    textAlign:'center', marginTop:'10vh'}}>Pay ${props.sum} </Button>
                    </div>
                </form>
            )}
        </ElementsConsumer>
    </Elements>
    </Card>
    </Container>

)
}
export default Payment