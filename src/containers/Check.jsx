import React from 'react'
import ButtonGreen from '../components/ButtonGreen'
import { ContainerCheck, ContentCheck } from './check-styled/CheckStyled'

const checkState = {
    success: false,
    pending: false,
    error: true
}
const {success, pending, error} = checkState
const Check = () => {


    const checkStateFunction = () => {
        if(success ){  
        return <h3>¡Tu pago fue exitoso!</h3>
    }
        if(pending){
        return <h3 style={{color: 'yellow'}}>¡Tu pago esta pendiente!</h3>
    }
        if(error){
        return <h3 style={{color: 'red'}}>¡Error de pago!</h3>
    }
    }
    console.log(checkStateFunction())
    return (
        <ContainerCheck>
            <ContentCheck>
            {
                error ?  
                <>   
                {checkStateFunction()}
                <p>Porfavor vuelve a intentar el pago</p>
                </>
                :
                <>  
                <img src="https://i.pinimg.com/originals/5f/4f/c7/5f4fc77eeccfae9501d9c2c9f4c80dda.jpg" alt="CampoStore" />
                {
                    checkStateFunction()
                }
                <p>Ahora hay una nueva familia feliz. Gracias por apoyar el campo Colombiano.</p>
                <span>Pulsa el boton para ver y calificar tus compras</span>
                <ButtonGreen url='/history' text='Calificar' />
                </>
                
            }
            </ContentCheck>
        </ContainerCheck>
    )
}

export default Check