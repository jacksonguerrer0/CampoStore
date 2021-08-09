import React, { useEffect, useState } from 'react'
import ButtonBack from '../components/ButtonBack'
import { ButtonBuy, CarruselProduct, ContainerCarrusel, ContainerDetail, ContentDetail, ContentInfoDetail, TextRight, TitleProductDetail } from '../components/detail-product-styled/DetailProductStyled'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ButtonGreen from '../components/ButtonGreen';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services';

const slider = (
  <AwesomeSlider>
    <div data-src="https://foodserviceyequipo.com/wp-content/uploads/2017/11/206406A5-C1F0-409C-A9B9E84D05A48AB7_source-1030x687.jpg" />
    <div data-src="https://api.mimorelia.com/uploads/2017/03/noticias/03/sedrua.jpg" />
    <div data-src="http://superchannel12.com/wp-content/uploads/2018/02/productos-del-campo.jpg" />
  </AwesomeSlider>
);


const DetailProduct = () => {

    let { idProduct } = useParams();

    const [dataProduct, setDataProduct] = useState({})

    const getData = async () => {
        const {data} = await getProductById(idProduct)
        setDataProduct(data.data)
    }

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
