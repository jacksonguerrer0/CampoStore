import React from 'react'
import { Table, Thead } from './tablet-history-styled/TabletHistoryStyled'



const TabletHistory = () => {
    return (
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
    )
}

export default TabletHistory
