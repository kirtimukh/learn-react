import React from 'react'

const Table = ({ captionText, columnOrder, tableKeys, data }) => {
    if (!data.length) {
        return
    }

    return (
        <div>
            <table>
                <caption>
                    {captionText}
                </caption>
                <thead>
                    <tr>
                        {columnOrder.map((header, index) => (
                            <th scope="col" key={index}>{tableKeys[header]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columnOrder.map((cell, index) => {
                                const dataPoint = row[cell]
                                if (Object.prototype.toString.call(dataPoint) === '[object Date]') {
                                    return < td key={index} > {dataPoint.toDateString()}</td>
                                } else if (Object.prototype.toString.call(dataPoint) === '[object File]' && dataPoint.type.includes('image')) {
                                    return < td key={index} >
                                        <img src={URL.createObjectURL(dataPoint)} alt='profile' className='w-40 h-40' />
                                    </td>
                                }
                                return (
                                    < td key={index} > {dataPoint}</td>
                                )
                            })}
                        </tr>
                    ))}
                    {/* <tr>
                        <th scope="row">Chris</th>
                        <td>HTML tables</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <th scope="row">Dennis</th>
                        <td>Web accessibility</td>
                        <td>45</td>
                    </tr>
                    <tr>
                        <th scope="row">Sarah</th>
                        <td>JavaScript frameworks</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <th scope="row">Karen</th>
                        <td>Web performance</td>
                        <td>36</td>
                    </tr> */}
                </tbody>
                {/* <tfoot>
                    <tr>
                        <th scope="row" colspan="2">Average age</th>
                        <td>33</td>
                    </tr>
                </tfoot> */}
            </table>
        </div >
    )
}

export default Table