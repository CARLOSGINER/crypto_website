import CoinRow from "./CoinRow"
import {useEffect, useState} from 'react';

function TableCoins({coins,search,setSearchPlaceholder,setSelectedCoins,selectedCoins}:
{selectedCoins:string[],coins:any,search:string,setSearchPlaceholder:any,setSelectedCoins:any}) {

 

    // hooks and states

    const [coinCount, setCoinCount] = useState<number>(0);
    const [stopAddingCoins, setStopAddingCoins] = useState<boolean>(false);
    

    useEffect(()=>{
        if(coinCount>=8){
            setSearchPlaceholder('✅ Eight coins already selected!');
            setStopAddingCoins(true);
        } else {
            setStopAddingCoins(false);
            setSearchPlaceholder(`🙋‍♂️ you have selected ${coinCount} coins`);
        }

    },[coinCount,setSearchPlaceholder])


    // filter the table depend on input search Bar

    const tableFilteredCoins:string[] = coins.filter((coin:any) => (
        coin.name.toLowerCase().includes(search.toLowerCase()) |
        coin.symbol.toLowerCase().includes(search.toLowerCase())        
    )); 



    // manage the coin selected, add or remove, and the coin count 

    const addCoin = (coinName:string) =>{
        setCoinCount(prevCount=>prevCount+1)
        if(!stopAddingCoins){
            setSelectedCoins((prevState: any)=>[...prevState,coinName])
        }
        return
    }

    const removeCoin = (coinName:string) =>{
        setCoinCount(prev=>prev-1)
        const filteredCoins = selectedCoins.filter((selectedCoin)=>{
            return !(coinName===selectedCoin);
        })
        setSelectedCoins(filteredCoins);
        return 
    }
    
    const handleCoinSelected =  (e:any) =>{
        const currentCoin = e.target.value;
        const checkOrNot = e.target.checked;

        if(checkOrNot){
           addCoin(currentCoin);
           
        } else {
           removeCoin(currentCoin);
        }
    }


    //Other values for render

    const titles:string[] = ['#','Coin','Price', 'Price Change','24h Volume','Select'];


    return (
      <table className="table table-light  table-hover">
          <thead>
              <tr>
                {titles.map((title:string)=>(
                    <td key={title}>{title}</td>
                ))}
              </tr>
          </thead>
          <tbody>
              {tableFilteredCoins.map((coin:any,index:number) => (
                  <CoinRow onClick={handleCoinSelected} coin={coin} key={index} index={index}/>
              ))}
          </tbody>
      </table>
    )
}

export default TableCoins
