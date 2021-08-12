import React from 'react'
import { useParams } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack'
import TabletHistory from '../components/TabletHistory'
import './history-styled/HistoryStyled.css'

const History = () => {
    const {modeProfile} = useParams()
    const {idProfile} = useParams()
    console.log(idProfile, modeProfile)

    const mode = () => {
        if (modeProfile === 'me') {
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
                    <TabletHistory />
                </div>
                <div className="panel" id="two-panel">
                    <TabletHistory />
                </div>
            </div>
            </div>
            )
        }else{
            return (
                <>
                <div className="warpper">
                <input className="radio" id="two" name="group" type="radio" defaultChecked/>
                <div className="tabs">
                    <label className="tab" id="two-tab" htmlFor="two">Ventas</label>
                </div>
    
                <div className="panels">
                    <div className="panel" id="two-panel">
                        <TabletHistory />
                    </div>
                </div>
                </div>
                </>
            )
        }
    }
    return (
        <>
            <ButtonBack />
            <div className="header-history"><h2>Historial</h2></div>
            {mode()}

        </>
    )
}

export default History
