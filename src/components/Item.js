import { useMemo } from "react";
import PropTypes from "prop-types";

const Item = ({
  className = "",
  gamepad2,
  gTR5,
  gadgetGear,
  itemPriceValue,
  propBorderBottom,
}) => {
  const itemStyle = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[60px] pl-0 gap-[28px] text-left text-base text-default-black font-regular-16-24 border-b-[1px] border-solid border-gray-06 mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={itemStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[131px]">
        <div className="rounded-lg bg-special-bg flex flex-row items-start justify-start p-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={gamepad2}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[24px] font-semibold">
            {gTR5}
          </div>
          <div className="relative text-xs leading-[16px] text-gray-03 inline-block min-w-[24px]">
            {gadgetGear}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center text-right text-secondary">
        <div className="relative leading-[24px] font-semibold inline-block min-w-[86px] whitespace-nowrap">
          {itemPriceValue}
        </div>
        <div className="relative text-xs leading-[16px] text-gray-03 text-left inline-block min-w-[73px]">
          17 May 2023
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  gamepad2: PropTypes.string,
  gTR5: PropTypes.string,
  gadgetGear: PropTypes.string,
  itemPriceValue: PropTypes.string,

  /** Style props */
  propBorderBottom: PropTypes.any,
};

export default Item;
