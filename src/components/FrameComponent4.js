import Card from "./Card";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[23px] pr-5 pl-[75px] box-border max-w-full text-left text-21xl text-gray-300 font-button-2 mq1400:pl-[37px] mq1400:box-border ${className}`}
    >
      <div className="w-[1175px] flex flex-col items-start justify-start gap-[63px] max-w-full mq825:gap-[16px] mq1400:gap-[31px]">
        <div className="w-[426px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit leading-[16px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[10px] mq825:text-13xl mq825:leading-[13px]">
            Top Performers
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-0 gap-[32px] text-xs text-neutrals-2 font-body-2-bold mq825:gap-[16px]">
          <Card coinSymbol="/coin-symbol.svg" priceChangeValues="-0.79%" />
          <Card
            coinSymbol="/coin-symbol-1.svg"
            priceChangeValues="-0.79%"
            propBorderRadius="16px"
            propBoxShadow="0px 64px 64px -48px rgba(15, 15, 15, 0.1)"
            propBackgroundColor="#fcfcfd"
          />
          <Card
            coinSymbol="/coin-symbol-2.svg"
            priceChangeValues="+0.79%"
            propBorderRadius="12px"
            propBoxShadow="unset"
            propBackgroundColor="unset"
          />
          <Card
            coinSymbol="/coin-symbol-3.svg"
            priceChangeValues="+0.79%"
            propBorderRadius="12px"
            propBoxShadow="unset"
            propBackgroundColor="unset"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
