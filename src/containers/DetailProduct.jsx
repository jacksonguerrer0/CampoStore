import React, { useEffect, useState } from 'react'
import ButtonBack from '../components/ButtonBack'
import { ButtonBuy, CarruselProduct, ContainerCarrusel, ContainerDetail, ContentDetail, ContentInfoDetail, TextRight, TitleProductDetail } from '../components/detail-product-styled/DetailProductStyled'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ButtonGreen from '../components/ButtonGreen';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services';




const DetailProduct = () => {

    let { idProduct } = useParams();

    const [dataProduct, setDataProduct] = useState({})

    const getData = async () => {
        const {data} = await getProductById(idProduct)
        setDataProduct(data.data)
    }

    const slider = (
        <AwesomeSlider>
            {
                dataProduct.photo?.data?.full_url ?
                <div data-src={dataProduct.photo?.data?.full_url} /> : <div data-src={'https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/10/skeleton-react-01.jpg?ssl=1'} />
            }
            {
                dataProduct.photo2?.data?.full_url ?
                <div data-src={dataProduct.photo2?.data?.full_url} /> : <div data-src={'https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/10/skeleton-react-01.jpg?ssl=1'} />
            }
            {
                dataProduct.photo3?.data?.full_url ?
                <div data-src={dataProduct.photo3?.data?.full_url} /> : <div data-src={'https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/10/skeleton-react-01.jpg?ssl=1'} />
            }
        </AwesomeSlider>
    );

    useEffect(() => {
        getData()
    }, [])

    console.log(dataProduct)

    return (
        <ContainerDetail>
            <ButtonBack />
                { dataProduct?.photo &&
                    <ContainerCarrusel>
                        {slider}
                    </ContainerCarrusel>
                }
                
                <TitleProductDetail>{dataProduct.name}</TitleProductDetail>
                <ContentInfoDetail>
                    <p>Precio:</p><TextRight>$ {dataProduct.price}</TextRight>
                    <p>Cantidad:</p><TextRight>{dataProduct.quantity}</TextRight>
                    <p>Vendedor:</p><TextRight><a href={`/profile/${dataProduct.owner?.id}`}>{dataProduct.owner?.first_name}</a></TextRight>
                </ContentInfoDetail>
                <ButtonGreen url='/pay' text='Comprar'/> 
        </ContainerDetail>
    )
}

export default DetailProduct
