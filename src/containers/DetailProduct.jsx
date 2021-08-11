import React, { useEffect, useState } from 'react'
import ButtonBack from '../components/ButtonBack'
import { ButtonBuy, CarruselProduct, ContainerCarrusel, ContainerDetail, ContentDetail, ContentInfoDetail, TextRight, TitleProductDetail } from '../components/detail-product-styled/DetailProductStyled'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ButtonGreen from '../components/ButtonGreen';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services';
import variables from '../styles/variables';




const DetailProduct = () => {

    let { idProduct } = useParams();

    const [dataProduct, setDataProduct] = useState({})

    const getData = async () => {
        const {data} = await getProductById(idProduct)
        setDataProduct(data.data)
    }
    const startupScreen = (
        <div style={{background: variables.gradiant}}>
          <img  alt='' />
        </div>
      );
    const slider = (
        <AwesomeSlider 
        // startupScreen={startupScreen}
        >
            <div data-src={dataProduct.photo?.data?.full_url} />
            <div data-src={dataProduct.photo2?.data?.full_url} />
            <div data-src={dataProduct.photo3?.data?.full_url} />
        </AwesomeSlider>
    );

    useEffect(() => {
        getData()
    }, [])

    console.log(dataProduct)

    return (
        <ContainerDetail>
            <ButtonBack />
                    <ContainerCarrusel>
                        {slider}
                    </ContainerCarrusel>
                <TitleProductDetail>{dataProduct.name}</TitleProductDetail>
            {
                dataProduct?.id &&
                <>
                    <ContentInfoDetail>
                    <p>Precio:</p><TextRight>$ {dataProduct.price?.toLocaleString('en-US')} el {dataProduct.unit}</TextRight>
                    <p>Cantidad disponible en {dataProduct.unit}:</p><TextRight>{dataProduct.quantity} {dataProduct?.unit}</TextRight>
                    <p>Vendedor:</p><TextRight><a href={`/profile/${dataProduct.owner?.id}`}>{dataProduct.owner?.first_name}</a></TextRight>
                </ContentInfoDetail>
                <ButtonGreen url={`/pay/${dataProduct.id}`} text='Comprar'/> 
                </>
            }
        </ContainerDetail>
    )
}

export default DetailProduct
