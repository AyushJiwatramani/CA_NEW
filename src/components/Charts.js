import AccountType from "./AccountType";
import PropTypes from "prop-types";

const Charts = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-5 box-border max-w-full text-left text-base text-gray-02 font-regular-16-24 ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[36px] max-w-full lg:flex-wrap mq750:gap-[18px]">
        <div className="w-[486px] flex flex-col items-start justify-start min-w-[486px] min-h-[346px] max-w-full lg:flex-1 mq750:min-w-full">
          <AccountType />
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[63px] box-border max-w-full mt-[-280px] text-17xl text-black font-button-2 mq750:pl-[31px] mq750:pr-[31px] mq750:box-border">
            <h1 className="m-0 w-[342px] relative text-inherit leading-[150%] font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[32px] mq1050:text-10xl mq1050:leading-[43px]">{`PROFIT DISTRIBUTION PIE CHART `}</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start relative min-w-[522px] max-w-full text-lg text-black font-button-2 mq750:min-w-full">
          <AccountType />
          <b className="w-[242px] absolute !m-[0] top-[12px] left-[35px] leading-[140%] inline-block z-[1]">
            Profit Comparison
          </b>
          <div className="w-[165px] absolute !m-[0] top-[39px] left-[35px] text-2xs leading-[16px] font-regular-16-24 inline-block z-[1]">
            <span>{` `}</span>
            <span className="text-primary-4">(+5%)</span>
            <span> Since last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Charts.propTypes = {
  className: PropTypes.string,
};

export default Charts;
