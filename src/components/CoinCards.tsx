import "bootstrap/dist/css/bootstrap.css";
import { FaCheckCircle } from "react-icons/fa";
import CloseIcon from "@material-ui/icons/Close";

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
  let selectedCoinsData: any[] = [];

  const getSelectedCoinsData = () => {
    coins.forEach((eachCoin: any) =>
      selectedCoins.forEach((eachSelected: any) => {
        if (eachCoin.name === eachSelected) {
          selectedCoinsData.push({
            imageURL: eachCoin.image,
            name: eachCoin.name,
            price: eachCoin.current_price,
            price_change: eachCoin.price_change_percentage_24h
          });
        }
      })
    );
  };

  getSelectedCoinsData();

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
                  {selectedCoinsData.map((each) => (
                    <div key={each.name} className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div  data-value={each.name} onClick={handleCloseCard}>
                        <CloseIcon
                          style={{
                            float: "right",
                            color: "rgb(230, 230, 230)",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div className="so_top_icon">
                        <img src={each.imageURL} alt="" />
                      </div>
                      <div className="solu_title">
                        <h3>{each.name}</h3>
                      </div>
                      <div className="solu_description">
                        <p>{each.price} $</p>
                        <p 
                          style={each.price_change<0?{color:"red"}:{color:"green"}}>{each.price_change.toFixed(2)} %</p>
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
