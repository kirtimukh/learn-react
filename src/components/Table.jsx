import React from 'react'

const Table = ({ captionText, columnOrder, tableKeys, data, setTableData, setDataToEdit }) => {
    if (!data.length) {
        return
    }

    const editData = (dataIndex) => {
        setDataToEdit({ editIndex: dataIndex, ...data[dataIndex] })
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
                    {data.map((row, dataIndex) => (
                        <tr key={dataIndex}>
                            {columnOrder.map((cell, index) => {
                                if (index === columnOrder.length - 1) {
                                    return (
                                        <td key={index}>
                                            <button onClick={() => {
                                                editData(dataIndex)
                                            }}>Edit</button>

                                            <button onClick={() => {
                                                let newData = [...data]
                                                newData = newData.slice(
                                                    0, dataIndex
                                                ).concat(
                                                    newData.slice(dataIndex + 1)
                                                )
                                                setTableData(newData)
                                            }}>Delete</button>
                                        </td>
                                    )
                                }

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
                </tbody>
            </table>
        </div >
    )
}

export default Table