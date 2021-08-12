import React from 'react'
import { Table, Thead } from './history-styled/HistoryStyled'

const History = () => {
    return (
        <div>
            Soy el historial de compras y ventas
            <Table>
                <Thead>
                    <tr>
                        <th>Invoice</th>
                        <th>Company</th>
                        <th>Due Date</th>
                        <th>Status</th>

                    </tr>
                </Thead>
 
                    <tr> 
                    <td>INV1001</td>
                        <td>Paragon</td>
                        <td>1/5/2021</td>
                        <td>
                        <p className="status status-unpaid">Unpaid</p>
                    </td>

                    </tr>

	    
                    <tr>
                        <td>INV1002</td>
                        <td>Sonic</td>
                        <td>1/4/2021</td>
                        <td>
                        <p className="status status-paid">Paid</p>
                        </td>

                    </tr>
                    <tr>
                        <td>INV1003</td>
                        <td>Innercircle</td>
                        <td>1/2/2021</td>
                        <td>
                        <p className="status status-pending">Pending</p>
                        </td>

                    </tr>
                    <tr>
                        <td>INV1004</td>
                        <td>Varsity Plus</td>
                        <td>12/30/2020</td>
                        <td>
                        <p className="status status-pending">Pending</p>
                        </td>

                    </tr>
                    <tr>
                        <td>ffffff</td>
                        <td>Highlander</td>
                        <td>12/18/2020</td>
                        <td>
                        <p className="status status-paid">Paid</p>
                        </td>

                    </tr>
            </Table>
        </div>
    )
}

export default History
