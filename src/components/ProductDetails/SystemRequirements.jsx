import React from 'react';

const SystemRequirements = () => {
  return (
    <div className='mb30'>
        <div>
            <h4 className='mb20'>System Requirements</h4>
        </div>
       <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Minimum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Operating System</td>
          <td>Windows 10</td>
        </tr>
        <tr>
          <td>Processor</td>
          <td>Intel Core i5</td>
        </tr>
        <tr>
          <td>Memory</td>
          <td>8GB</td>
        </tr>
        <tr>
          <td>Graphics Card</td>
          <td>NVIDIA GeForce GTX 1050</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>256GB SSD</td>
        </tr>
      </tbody>
    </table>
    </div>
    
  );
}

export default SystemRequirements;
