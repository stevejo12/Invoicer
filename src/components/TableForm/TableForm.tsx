import React from 'react';

import './TableForm.scss';

interface TableData {
  description: string,
  quantity: number,
  price: number,
  amount: number,
}

interface IProps {
  data: TableData[],
  callbackNumberFunction: Function,
  callbackDescriptionFunction: Function,
  handleAddItem: Function,
}

const TableForm = ({data,callbackDescriptionFunction, callbackNumberFunction, handleAddItem}: IProps) => {
  return (
    <div className='tableForm'>
      <table className='tableForm__tableWrapper'>
        <thead>
          <tr>
            <th className='tableForm__numbering'>No.</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td className='tableForm__numbering'>{index + 1}</td>
                <td style={{ textAlign: 'initial'}}>
                  <span
                    className="spantest" 
                    role="textbox" 
                    contentEditable={true}
                    onInput={(e) => callbackDescriptionFunction(index)(e)}
                  >   
                    {item.description}
                  </span>
                  {/* <textarea 
                    name="description" 
                    value={item.description} 
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => callbackDescriptionFunction(index, e)}
                  /> */}
                </td>
                <td>
                  <input 
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => callbackNumberFunction(index, e)}
                  />
                </td>
                <td>
                  <input 
                    type="number"
                    name="price"
                    value={item.price}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => callbackNumberFunction(index, e)}
                  />
                </td>
                <td>
                  <input
                    disabled
                    type="number"
                    name="amount"
                    value={item.amount}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={() => handleAddItem()} className='button--gray'>Add Item</button>
    </div>
  )
}

export default TableForm