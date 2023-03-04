import "./App.css";
import TrendingAssetCard from "./components/TrendingAssetCard";
import bitcoin from "./assets/svg/bitcoin.svg";
import solana from "./assets/svg/solana.svg";
import binance from "./assets/svg/binance.svg";
import ethereum from "./assets/svg/ethereum.svg";
import shibainu from "./assets/svg/shibainu.svg";

const trendingAssets = [
  {
    assetName: "Bitcoin (BTC)",
    assetIcon: bitcoin,
    assetPrice: "$31,812.80",
    assetTvl: "$60,000",
    priceValue: {
      value: "+10%",
      hasIncreased: true,
    },
    popularPairs: [solana, binance, ethereum],
  },
  {
    assetName: "Solana (SOL)",
    assetIcon: solana,
    assetPrice: "$31,812.80",
    assetTvl: "$60,000",
    priceValue: {
      value: "-10%",
      hasIncreased: false,
    },
    popularPairs: [solana, binance, shibainu],
  },
  {
    assetName: "Ethereum (ETH)",
    assetIcon: ethereum,
    assetPrice: "$31,812.80",
    assetTvl: "$60,000",
    priceValue: {
      value: "+10%",
      hasIncreased: true,
    },
    popularPairs: [solana, shibainu, ethereum],
  },
  {
    assetName: "Binance USD (BUSD)",
    assetIcon: binance,
    assetPrice: "$31,812.80",
    assetTvl: "$60,000",
    priceValue: {
      value: "-17%",
      hasIncreased: false,
    },
    popularPairs: [solana, binance, ethereum],
  },
  {
    assetName: "Shiba Inu (SHIB)",
    assetIcon: shibainu,
    assetPrice: "$31,812.80",
    assetTvl: "$60,000",
    priceValue: {
      value: "",
      hasIncreased: false,
    },
    popularPairs: [shibainu, ethereum, binance],
  },
];

function App() {
  return (
    <div className="App">
      {trendingAssets.map((asset) => {
        return (
          <div style={{ margin: "1em" }} key={asset.assetName}>
            <TrendingAssetCard
              priceValue={asset.priceValue}
              assetName={asset.assetName}
              assetIcon={asset.assetIcon}
              assetPrice={asset.assetPrice}
              assetTvl={asset.assetTvl}
              popularPairs={asset.popularPairs}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
