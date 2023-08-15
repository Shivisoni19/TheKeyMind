import React from 'react'
import { Link } from 'react-router-dom'

const ProductCatalog = () => {
  return (
    <>
      <p>
              <strong>Windows Operating Systems: </strong>
              <Link className="text-orange" to="/windows11">Windows 11</Link>-
              <Link className="text-orange" to="/windows10">Windows 10 </Link> -
              <Link className="text-orange" to="/windows8">Windows 8 </Link> -
              <Link className="text-orange" to="/windows7">Windows 7</Link>
            </p>
            <p>
              <strong>Microsoft Office Suites: </strong>
              <Link className="text-orange" to="/microsoftoffice2021">Office 2021</Link>-
              <Link className="text-orange" to="/microsoftoffice2019">Office 2019 </Link> -
              <Link className="text-orange" to="/microsoftoffice2016">Office 2016 </Link> -
              <Link className="text-orange" to="/microsoftoffice2013">Office 2013</Link> -
              <Link className="text-orange" to="/microsoftoffice2010">Office 2010</Link> -
              <Link className="text-orange" to="/microsoftofficemac">Office for Mac</Link> -
              <Link className="text-orange" to="/microsoftofficeapp">Office for App</Link>
            </p>
            <p>
              <strong>Antivirus Software: </strong>
              <Link className="text-orange" to="/kaspersky">Kaspersky</Link>-
              <Link className="text-orange" to="/eset">ESET </Link> -
              <Link className="text-orange" to="/mcafee">McAfee </Link> -
              <Link className="text-orange" to="/avast">Avast </Link> -
              <Link className="text-orange" to="/bitdefender">Bitdefender </Link> -
              <Link className="text-orange" to="/norton">Norton </Link> 
            </p>
            <p>
              <strong>VPN (Virtual Private Network) Services: </strong>
              <Link className="text-orange" to="/vpnforpc">VPN for PC </Link>-
              <Link className="text-orange" to="/vpnformac">VPN for Mac </Link> -
              <Link className="text-orange" to="/vpnformobile">VPN for Mobile </Link> 
            </p>
            <p>
              <strong>Microsoft Server Products: </strong>
              <Link className="text-orange" to="/windowsserver">Windows Server </Link>-
              <Link className="text-orange" to="/windowsservercal">Windows Server CAL </Link> -
              <Link className="text-orange" to="/windowsserverrdscal">Windows Server RDS CAL </Link> -
              <Link className="text-orange" to="/microsoftsqlserver">Microsoft SQL Server </Link>
            </p>
            <p>
              <strong>Backup and Recovery Software: </strong>
              <Link className="text-orange" to="/aomei">AOMEI </Link>-
              <Link className="text-orange" to="/easeus">EaseUS </Link> 
            </p>
    </>
  )
}

export default ProductCatalog
