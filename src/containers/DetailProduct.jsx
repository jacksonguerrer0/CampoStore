import React from 'react'
import ButtonBack from '../components/ButtonBack'
import { ButtonBuy, CarruselProduct, ContainerCarrusel, ContainerDetail, ContentDetail, ContentInfoDetail, TextRight, TitleProductDetail } from '../components/detail-product-styled/DetailProductStyled'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slider = (
  <AwesomeSlider>
    <div data-src="https://foodserviceyequipo.com/wp-content/uploads/2017/11/206406A5-C1F0-409C-A9B9E84D05A48AB7_source-1030x687.jpg" />
    <div data-src="https://api.mimorelia.com/uploads/2017/03/noticias/03/sedrua.jpg" />
    <div data-src="http://superchannel12.com/wp-content/uploads/2018/02/productos-del-campo.jpg" />
  </AwesomeSlider>
);


const DetailProduct = () => {
    return (
        <ContainerDetail>
            <ButtonBack />
                <ContainerCarrusel>
                    {slider}
                </ContainerCarrusel>
                <TitleProductDetail>Producto #</TitleProductDetail>
                <ContentInfoDetail>
                    <p>Precio:</p><TextRight>soy el precio</TextRight>
                    <p>Cantidad:</p><TextRight>Soy la cantidad</TextRight>
                    <p>Vendedor:</p><TextRight><a href="/profile">Mailer Maritnez</a></TextRight>
                </ContentInfoDetail>
                <ButtonBuy>Comprar</ButtonBuy>
        </ContainerDetail>
    )
}

export default DetailProduct
