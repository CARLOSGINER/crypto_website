

function CoinRow({coin,index,onClick}:{coin:any,index:number,onClick:any}) {
    
    return (
        <tr>
            <td key={index}>{index}</td>  
            <td>
                <img src={coin.image} alt={coin.name} style={{width:'20px'}} className='me-4 img-fluid'/>
                <span>{coin.name}</span>
                <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h >0? 'text-success': 'text-danger'}> 
                {coin.price_change_percentage_24h}
            </td>
            <td>{coin.total_volume}</td>
            <td className='text-center'>
                <input type="checkbox" value={coin.name} onClick={onClick} />
            </td>
        </tr> 
    );
}

export default CoinRow
