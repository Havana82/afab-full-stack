
import { Container, Step, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';
import Confirmation from './Confirmation';
import Payment from './Payment';


const PaymentForm =(props)=>{
    const steps = ['Adress/Payment','Confirmation'];
    const [activeStep, setActiveStep] = useState(0);
    const nextStep = () => setActiveStep((prevStep)=> prevStep+1);
    const Form = activeStep === 0 ? <Payment sum = {props.sum} nextStep={nextStep} refresh={props.refresh} />:
    <Confirmation/>;
  
return (

    
    <Container>
    <Stepper activeStep={activeStep} sx={{marginTop:'20px'}}>
        {steps.map((step)=>(
            <Step key={step}>
                <StepLabel sx={{padding:'20px', display:'flex',
                justifyContent:'space-between'}} >
                    {step}</StepLabel>
            </Step>
        ))}
    
    </Stepper>
    {Form}
    
    </Container>

)
}
export default PaymentForm