import "bootstrap/dist/css/bootstrap.css";
import { FaCheckCircle } from "react-icons/fa";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CoinCards({
  handleCloseCard,
  selectedCoins,
  coinCount,
}: {
  handleCloseCard: any;
  selectedCoins: string[];
  coinCount: number;
}) {
  const [readyStockData, setReadyStockData] = useState([]);


  useEffect(() => {
    const getSelectedCoinsData = async () => {
      if (selectedCoins.length !== 0) {
        const symbolsRequested = selectedCoins.join();
        const options: any = {
          method: "GET",
          url: "https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote",
          params: { symbols: symbolsRequested },
          headers: {
            "x-rapidapi-host":
              "stock-data-yahoo-finance-alternative.p.rapidapi.com",
            "x-rapidapi-key":
              "31b063a22amsh21c752170e3beeep1f4046jsn4f0ce84b4d68",
          },
        };

        const response = await axios.request(options);

        const stockData: object[] = response.data.quoteResponse.result.map(
          (each: any) => {
            return {
              name: each.shortName,
              symbol:each.symbol,
              price: each.regularMarketPrice,
              price_change: each.regularMarketChangePercent,
            };
          }
        );

        return stockData;
      } else {
        return [];
      }
    };
    getSelectedCoinsData().then((response: any) => setReadyStockData(response));
  }, [selectedCoins]);

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
                  {readyStockData.map((each: any) => (
                    <div key={each.name} className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div data-value={each.symbol} onClick={handleCloseCard}>
                        <CloseIcon
                          style={{
                            float: "right",
                            color: "rgb(230, 230, 230)",
                            cursor: "pointer",
                            fontSize:"1.2rem"
                          }}
                        />
                      </div>
                      <div className="solu_title">
                        <h3>{each.name},({each.symbol})</h3>
                      </div>
                      <div className="solu_description">
                        <p>{each.price} $</p>
                        <p
                          style={
                            each.price_change < 0
                              ? { color: "red" }
                              : { color: "green" }
                          }
                        >
                          {each.price_change.toFixed(2)} %
                        </p>
                        {/* <button type="button" className="read_more_btn">
                          Show Grap
                        </button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}