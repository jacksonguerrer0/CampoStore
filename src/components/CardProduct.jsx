import React from 'react'
import { useState } from 'react'
import ButtonGreen from './ButtonGreen'
import { ButtonEdit, ContentDetailInfo, ContentPDetail, ContentProduct, Pr } from './card-product-styled/CardProductStyled'
import EditProduct from './EditProduct'

const CardProduct = ({ modeMyProfile, product }) => {
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({}) 

    const handleModalX = () => {
        setShowModal(false)
    }

    console.log(product)
    return (
        <>
            <ContentProduct>
                <img src={product.photo?.data.full_url} alt="Producto" />
                <ContentDetailInfo>
                    <h3>{product.name}</h3>
                    <ContentPDetail>
                        <p>Precio:</p><Pr>{product.price}</Pr>
                        <p>Cantidad:</p><Pr>{product.quantity}</Pr>
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
                        :<ButtonGreen url={`detail/${product.id}`} text='Ver el producto' />
                    }
                </ContentDetailInfo>
            </ContentProduct>
        </>
    )
}

export default CardProduct
