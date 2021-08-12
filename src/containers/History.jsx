import React from 'react'
import ButtonBack from '../components/ButtonBack'
import { Table, Thead } from './history-styled/HistoryStyled'

const History = () => {
    return (
        <div>
            <ButtonBack />
            Soy el historial de compras y ventas
            <Table>
                <Thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Total$</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </Thead>
 
                <tbody>
                <tr> 
                    <td>22/09/2021</td>
                    <td>Tomates 100% organcios</td>
                    <td>3</td>
                    <td>$15.000</td>
                    <td>
                    <p className="status status-unpaid">Unpaid</p>
                    </td>
                    <td><button>Calificar</button></td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default History
