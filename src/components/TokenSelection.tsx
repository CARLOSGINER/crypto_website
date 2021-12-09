import axios from 'axios';
import {useEffect,useState} from 'react';
import TableCoins from './TableCoins';
import 'bootstrap/dist/css/bootstrap.css';
import SelectedCoin from './SelectedCoin';
import tss from '../styles/tokenSelection.module.css';



function TokenSelection() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [searchPlaceholder, setSearchPlaceholder] = useState('Hello!👋 First search or select eight coins');
    const [selectedCoins, setSelectedCoins] = useState<string[]>([]);
    const [loaderStyle, setLoaderStyle] = useState({});

    
    useEffect(()=>{
        getData();
        setTimeout(()=>{
           setLoaderStyle({
               visibility:'hidden',
               opacity:0,
               width:0,
               height:0
           }) 
        },4000)
    },[])

    const getData =async() =>{
        const resp:any = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
        setCoins(resp.data)
    }

     
    return (
    <>    
        <div className={tss["loaderBg"]} style={loaderStyle}>
            <div className={tss["loader"]} >
                <div className={tss["spinner-box"]}>
                    <div className={tss["configure-border-1"]}>  
                    <div className={tss["configure-core"]}></div>
                    </div>  
                    <div className={tss["configure-border-2"]}>
                    <div className={tss["configure-core"]}></div>
                    </div> 
                </div>
            </div>
        </div>
        
        <div className="container bg-light">
            <div className="Row">
                <input 
                    type="text" 
                    placeholder={searchPlaceholder}
                    className='form-control bg-light text-dark border-0 mb-4 mt-4 text-center'
                    onChange={(e)=>{
                        setSearch(e.target.value)}} />
                <SelectedCoin selectedCoins={selectedCoins}/>
                <TableCoins selectedCoins={selectedCoins} setSelectedCoins={setSelectedCoins} setSearchPlaceholder={setSearchPlaceholder} search={search} coins={coins}/>
            </div>
        </div>
    </>   
    )
}

export default TokenSelection
