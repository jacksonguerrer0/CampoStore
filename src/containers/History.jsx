import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack'
import TabletHistory from '../components/TabletHistory'
import { getBuyBuyer, getSalesInfo, getSalesSeller } from '../services'
import './history-styled/HistoryStyled.css'


const History = () => {
    const [infoSales, setInfoSales] = useState({})
    const [sectionSales, setSectionSales] = useState([])
    const [sectionBuy, setSectionBuy] = useState([])
    const {modeProfile} = useParams();
    const {idProfile} = useParams();
    console.log(idProfile, modeProfile)

    // const getInfoSales = async () => {
    //     const {data} = await getSalesInfo(idProfile)
    //     setInfoSales(data.data)
    //     console.log('Detalle de la venta',data.data)
    // }
    const getSales = async () => {
        const {data} = await getSalesSeller(idProfile)
        setSectionSales(data.data)
        console.log('ventas we',data.data)
    }
    const getBuy = async () => {
        const {data} = await getBuyBuyer(idProfile)
        setSectionBuy(data.data)
        console.log('Comrpas we',data.data)
    }
    useEffect(() => {
        // getInfoSales()
        getSales()
        getBuy()
    }, [])
    const mode = () => {
        if (modeProfile === 'me') {
            const headerTablet = ['Fecha', 'Nombre', 'Cantidad', 'Total', 'Estado', 'Acción']
            const headerTabletSales = ['Fecha', 'Nombre', 'Cantidad', 'Total', 'Estado', 'Cliente']
            return (
            <div className="warpper">
            <input className="radio" id="one" name="group" type="radio" defaultChecked />
            <input className="radio" id="two" name="group" type="radio" />
            <div className="tabs">
                <label className="tab" id="one-tab" htmlFor="one">Compras</label>
                <label className="tab" id="two-tab" htmlFor="two">Ventas</label>
            </div>

            <div className="panels">
                <div className="panel" id="one-panel">
                    <div className="panel-title">Puedes calificar las compras</div>
                    <TabletHistory headerTablet={headerTablet} modeTablet={'rating'} data={sectionBuy}/>
                    {
                    sectionBuy.length === 0 && <p style={{textAlign: 'center'}}>Que esperas para apoyar a los Campesinos :)</p>
                    }
                </div>
                <div className="panel" id="two-panel">
                    <div className="panel-title">Puedes ver el perfil de tu cliente</div>
                    <TabletHistory headerTablet={headerTabletSales} modeTablet={'state'} data={sectionSales}/>
                </div>
            </div>
            </div>
            )
        }else{
            const headerTablet = ['Fecha', 'Nombre', 'Cantidad', 'Total']
            return (
                <>
                <div className="warpper">
                <input className="radio" id="two" name="group" type="radio" defaultChecked/>
                <div className="tabs">
                    <label className="tab" id="two-tab" htmlFor="two">Ventas</label>
                </div>
    
                <div className="panels">
                    <div className="panel" id="two-panel">
                        <TabletHistory headerTablet={headerTablet} modeTablet={'sales'} data={sectionSales}/>
                    </div>
                </div>
                </div>
                </>
            )
        }
    }
    return (
        <div className='container-history'>
            <ButtonBack />
            <div className="header-history"><h2>Historial</h2></div>
            {mode()}

        </div>
    )
}

export default History
