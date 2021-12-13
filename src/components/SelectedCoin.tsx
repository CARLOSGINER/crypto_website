
export default function SelectedCoin({selectedCoins}:{selectedCoins:any}) {
    return (
        <div className="text-center" >
            {selectedCoins.map((coin:string)=>(
                <p key={coin}  className="btn btn-info btn-sm ms-2 me-2">{coin}</p>            
            ))}
        </div>
    )
}
