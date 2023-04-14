import React from "react";
import "./styles.css";

type TrendingAssetCardProps = {
  assetIcon: string;
  assetName: string;
  priceValue?: { value: number | string; hasIncreased: boolean };
  assetPrice: string | number;
  assetTvl: string | number;
  popularPairs: string[];
};

export default ({
  assetName,
  assetIcon,
  assetPrice,
  assetTvl,
  popularPairs,
  priceValue,
}: TrendingAssetCardProps) => {
  const getGradientClassName = (assetName: string) => {
    return assetName.includes("Bitcoin")
      ? "bitcoinGradient"
      : assetName.includes("Solana")
      ? "solanaGradient"
      : assetName.includes("Ethereum")
      ? "ethereumGradient"
      : assetName.includes("Binance")
      ? "binanceGradient"
      : assetName.includes("Shiba")
      ? "shibainuGradient"
      : "";
  };

  return (
    <div className="cardHolder">
      <div className={`assetIconWrapper ${getGradientClassName(assetName)}`}>
        <img src={assetIcon} height={50} width={50} alt="asset icon" />
      </div>
      <div className="cardBackground">
        <div className="topCurve"></div>
        <div className="cardInnerHolder">
          <p className="assetTextIndicator">{assetName}</p>
          <div className="valueHolder">
            {assetPrice}
            {priceValue?.value ? (
              <p
                style={{
                  color: priceValue.hasIncreased ? "#00FFA3" : "#FF4D4D",
                  position: "relative",
                  left: "10px",
                }}
              >
                {priceValue.value}
              </p>
            ) : null}
          </div>
          <p className="assetTextIndicator">Price</p>
          <div className="valueHolder">{assetTvl}</div>
          <p className="assetTextIndicator">TVL</p>
          <div className="popularPairsHolder">
            {popularPairs.map((pair) => {
              return (
                <img
                  key={pair}
                  alt="pair icons"
                  src={pair}
                  height={22}
                  width={22}
                />
              );
            })}
          </div>
          <p className="assetTextIndicator">Popular pairs</p>
        </div>
      </div>
    </div>
  );
};

// Usage:

// <TrendingAssetCard
//   priceValue={priceValue}
//   assetName={assetName}
//   assetIcon={assetIcon}
//   assetPrice={assetPrice}
//   assetTvl={assetTvl}
//   popularPairs={popularPairs}
// />
