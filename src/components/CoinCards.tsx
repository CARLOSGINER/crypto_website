import "bootstrap/dist/css/bootstrap.css";
import { FaCheckCircle } from "react-icons/fa";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

export default function CoinCards({
  handleCloseCard,
  coins,
  selectedCoins,
  coinCount,
}: {
  handleCloseCard: any;
  coins: any;
  selectedCoins: string[];
  coinCount: number;
}) {
  
  //TODO : fix this, use other way to get the array of objects
  const getSelectedCoinsData = async()=>{
    if(selectedCoins.length!==0){
      const symbolsRequested = selectedCoins.join() 
      const options:any = {
        method: 'GET',
        url: 'https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote',
        params: {symbols:symbolsRequested},
        headers: {
          'x-rapidapi-host': 'stock-data-yahoo-finance-alternative.p.rapidapi.com',
          'x-rapidapi-key': '31b063a22amsh21c752170e3beeep1f4046jsn4f0ce84b4d68'
        }
      };
  
      const response = await axios.request(options);
  
      const stockData:object[] = response.data.quoteResponse.result.map((each:any)=>{
        return ({
          name:each.shortName,
          price:each.regularMarketPrice,
          price_change:each.regularMarketChangePercent
        })
      })
  
      console.log('stockData', stockData)
  
      return  stockData  
    } else {
      return [];
    }
  };

  
  
  return (
    <>
      <h3 className="Dashboard_subtitle">
        My Dashboard{" "}
        {coinCount === 8 ? (
          <FaCheckCircle style={{ color: "rgb(81, 202, 70)" }} />
        ) : (
          ""
        )}
      </h3>
      <div className="coinCards">
        <div className="section_our_solution">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//TODO: get the array of stockData. BUG: still receiving a promise pending. 

// stockData.map((each:any) => (
//   <div key={each.name} className="solution_card">
//     <div className="hover_color_bubble"></div>
//     <div  data-value={each.name} onClick={handleCloseCard}>
//       <CloseIcon
//         style={{
//           float: "right",
//           color: "rgb(230, 230, 230)",
//           cursor: "pointer",
//         }}
//       />
//     </div>
//     <div className="so_top_icon">
//       <img src={each.imageURL} alt="" />
//     </div>
//     <div className="solu_title">
//       <h3>{each.name}</h3>
//     </div>
//     <div className="solu_description">
//       <p>{each.price} $</p>
//       <p 
//         style={each.price_change<0?{color:"red"}:{color:"green"}}>{each.price_change.toFixed(2)} %</p>
//     <button type="button" className="read_more_btn">
//               Show Grap
//     </button>
//     </div>
//   </div>
// ))