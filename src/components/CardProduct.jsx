import React from 'react'
import { useState } from 'react'
import ButtonGreen from './ButtonGreen'
import { ButtonEdit, ContentDetailInfo, ContentPDetail, ContentProduct, Pr } from './card-product-styled/CardProductStyled'
import EditProduct from './EditProduct'

const CardProduct = ({ modeMyProfile }) => {
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({}) 

    const handleModalX = () => {
        setShowModal(false)
    }
    return (
        <>
            <ContentProduct>
                <img src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg" alt="" />
                <ContentDetailInfo>
                    <h3>Producto</h3>
                    <ContentPDetail>
                        <p>Precio:</p><Pr>Soy precio</Pr>
                        <p>Cantidad:</p><Pr>Soy cantidad</Pr>
                    </ContentPDetail>
                    {
                        modeMyProfile ? 
                        <>
                        <ButtonEdit onClick={() => setShowModal(true)}><i className="fas fa-edit"></i>Editar</ButtonEdit>
                            {
                                showModal &&
                                <EditProduct setShowModal={setShowModal} />
                            }
                        </>
                        :<ButtonGreen url='/detail' text='Ver el producto' />
                    }
                </ContentDetailInfo>
            </ContentProduct>
        </>
    )
}

export default CardProduct
