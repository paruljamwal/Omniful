import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const Error = () => {
    const navigate = useNavigate();

    const goBack=()=>{
        navigate(`/`);
    }
  return (
    <Container>
        <img src='https://i.pinimg.com/originals/cf/37/f3/cf37f3f0cf9dd8b13443fa86ea136c45.gif' alt='show Error' />
        <Button onClick={goBack} >Go Back</Button>
    </Container>
  )
}

export default Error