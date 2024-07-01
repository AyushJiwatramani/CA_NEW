import PropTypes from "prop-types";

const CUL = ({ className = "", amount, prop, prop1, prop2, prop3, prop4 }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[173px] max-w-[177px] text-left text-sm text-light-mode-gray-80-424242 font-button-2 ${className}`}
    >
      <div className="self-stretch bg-light-mode-white-5-ffffff flex flex-row items-start justify-start pt-2.5 px-[19px] pb-2 text-xs text-light-mode-gray-60-757575 border-b-[1px] border-solid border-light-mode-gray-10-f5f5f5">
        <b className="flex-1 relative leading-[16px] uppercase">{amount}</b>
      </div>
      <div className="self-stretch bg-light-mode-gray-5-fafafa flex flex-row items-start justify-start py-3 px-[19px]">
        <div className="flex-1 relative tracking-[0.02em] leading-[130%]">
          {prop}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-3 px-[19px]">
        <div className="flex-1 relative tracking-[0.02em] leading-[130%]">
          {prop1}
        </div>
      </div>
      <div className="self-stretch bg-light-mode-gray-5-fafafa flex flex-row items-start justify-start py-3 px-[19px]">
        <div className="flex-1 relative tracking-[0.02em] leading-[130%]">
          {prop2}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-3 px-[19px]">
        <div className="flex-1 relative tracking-[0.02em] leading-[130%]">
          {prop3}
        </div>
      </div>
      <div className="self-stretch bg-light-mode-gray-5-fafafa flex flex-row items-start justify-start py-3 px-[19px]">
        <div className="flex-1 relative tracking-[0.02em] leading-[130%]">
          {prop4}
        </div>
      </div>
    </div>
  );
};

CUL.propTypes = {
  className: PropTypes.string,
  amount: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  prop4: PropTypes.string,
};

export default CUL;
