import React from 'react';
import RadioButton from '../RadioButton';

const MatrixTable = ({ columns, data, propertyAsKey }) => 
    <table className='table'>
        <thead>
            <tr><th></th>{columns.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(item =>
                <tr key={`${item[propertyAsKey]}-row`}>
                    <td key={`${item[propertyAsKey]}`}>{item[propertyAsKey]}</td>
                    {columns.map(col => 
                        <td key={`${item[propertyAsKey]}-${col.property}`}><RadioButton 
                                                                                id={`${item[propertyAsKey]}-${col.property}`}
                                                                                label="" 
                                                                                value="" 
                                                                            />
                        </td>
                    )}
                </tr>
            )}
        </tbody>
    </table>

export default MatrixTable;