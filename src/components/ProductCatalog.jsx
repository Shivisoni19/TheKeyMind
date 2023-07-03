import React from 'react'
import { Link } from 'react-router-dom'

const ProductCatalog = () => {
  return (
    <>
      <p>
              <strong>Windows Operating Systems: </strong>
              <Link className="text-orange">Windows 11</Link>-
              <Link className="text-orange">Windows 10 </Link> -
              <Link className="text-orange">Windows 8 </Link> -
              <Link className="text-orange">Windows 7</Link>
            </p>
            <p>
              <strong>Microsoft Office Suites: </strong>
              <Link className="text-orange">Office 2021</Link>-
              <Link className="text-orange">Office 2019 </Link> -
              <Link className="text-orange">Office 2016 </Link> -
              <Link className="text-orange">Office 2013</Link> -
              <Link className="text-orange">Office 2010</Link> -
              <Link className="text-orange">Office for Mac</Link>
            </p>
            <p>
              <strong>Antivirus Software: </strong>
              <Link className="text-orange">Kaspersky</Link>-
              <Link className="text-orange">ESET </Link> -
              <Link className="text-orange">McAfee </Link> -
              <Link className="text-orange">Avast </Link> -
              <Link className="text-orange">Bitdefender </Link> -
              <Link className="text-orange">Norton </Link> 
            </p>
            <p>
              <strong>VPN (Virtual Private Network) Services: </strong>
              <Link className="text-orange">VPN for PC </Link>-
              <Link className="text-orange">VPN for Mac </Link> -
              <Link className="text-orange">VPN for Mobile </Link> -
            </p>
            <p>
              <strong>Microsoft Server Products: </strong>
              <Link className="text-orange">Windows Server </Link>-
              <Link className="text-orange">Windows Server CAL </Link> -
              <Link className="text-orange">Windows Server RDS CAL </Link> -
              <Link className="text-orange">Microsoft SQL Server </Link>
            </p>
            <p>
              <strong>Backup and Recovery Software: </strong>
              <Link className="text-orange">AOMEI </Link>-
              <Link className="text-orange">EaseUS </Link> 
            </p>
    </>
  )
}

export default ProductCatalog
