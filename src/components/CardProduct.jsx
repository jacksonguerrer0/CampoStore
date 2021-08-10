import React from 'react'
import { useState } from 'react'
import ButtonGreen from './ButtonGreen'
import { ButtonDelete, ButtonEdit, ContainerCrudCardProduct, ContentDetailInfo, ContentPDetail, ContentProduct, Pr } from './card-product-styled/CardProductStyled'
import EditProduct from './EditProduct'
import Swal from 'sweetalert2'
import { deleteFile, deleteProduct } from '../services'


const CardProduct = ({ modeMyProfile, product }) => {
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({}) 

    const handleModalX = () => {
        setShowModal(false)
    }
    console.log(product)

    const handleDeleteProduct = (e, data) => {
        Swal.fire({
            title: `Estás seguro de eliminar el producto?`,
            text: "Esta acción no es reversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFile(data.photo?.id)
                if (data.photo2?.id !== 162) {
                    deleteFile(data.photo2?.id)
                }
                if(data.photo3?.id !== 162){
                    deleteFile(data.photo3?.id)
                }
                deleteProduct(data.id).then((response) => {
                if (response) {
                    Swal.fire(
                        'Eliminado!',
                        'Tu archivo ha sido eliminado.',
                        'success'
                      )
                }else{
                    Swal.fire(
                        'Oops!',
                        'Ha ocurrido un error al eliminar.',
                        'error'
                    )
                }
            })
            }
        })
    }
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
                            <ContainerCrudCardProduct>
                            <ButtonEdit onClick={() => setShowModal(true)}><i className="fas fa-edit"></i>Editar</ButtonEdit>
                            <ButtonDelete onClick={(e) => {handleDeleteProduct(e, product)}}>Eliminar</ButtonDelete>
                            </ContainerCrudCardProduct>
                            {
                                showModal &&
                                <EditProduct setShowModal={setShowModal} product={product}/>
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
