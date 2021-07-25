import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerProducts, ContentProduct } from './profile-products/ProfileProducts'

const ProfileProducts = () => {
    return (
        <ContainerProducts>
            <ContentProduct>
                <img src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg" alt="" />
                <div>
                    <h3>Producto</h3>
                    <p>Precio <br />Cantidad disponible</p>
                    <Link to='/detalleProducto'>
                        Ver el Producto
                    </Link>
                </div>
            </ContentProduct>
            <ContentProduct>
                <img src="https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-AB.webp" alt="" />
                <div>
                    <h3>Producto</h3>
                    <p>Precio <br />Cantidad disponible</p>
                    <Link to='/detalleProducto'>
                        Ver el Producto
                    </Link>
                </div>
            </ContentProduct>
            <ContentProduct>
                <img src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg" alt="" />
                <div>
                    <h3>Producto</h3>
                    <p>Precio <br />Cantidad disponible</p>
                    <Link to='/detalleProducto'>
                        Ver el Producto
                    </Link>
                </div>
            </ContentProduct>
            <ContentProduct>
                <img src="https://i.pinimg.com/originals/94/e9/dd/94e9dd53e6bb0670e2594c4299876afb.jpg" alt="" />
                <div>
                    <h3>Producto</h3>
                    <p>Precio <br />Cantidad disponible</p>
                    <Link to='/detalleProducto'>
                        Ver el Producto
                    </Link>
                </div>
            </ContentProduct>
        </ContainerProducts>
    )
}

export default ProfileProducts
