import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const TopLine = ({
  className = "",
  creditCard,
  accountNumberValue,
  balancePlaceholder,
  propAlignSelf,
  propWidth,
}) => {
  const topLineStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-gray-02 font-regular-16-24 ${className}`}
      style={topLineStyle}
    >
      <div className="h-[235px] flex-1 shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] rounded-lg bg-light-mode-white-5-ffffff flex flex-col items-start justify-start pt-6 pb-0 pr-24 pl-6 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-center justify-center pt-1 px-5 pb-3.5 border-b-[1px] border-solid border-special-bg">
          <b className="relative leading-[24px] capitalize inline-block min-w-[94px]">
            {creditCard}
          </b>
          <div className="h-8 w-[123px] hidden flex-row items-center justify-start gap-[4px] z-[2] text-right text-xs text-gray-01">
            <div className="self-stretch hidden flex-row items-start justify-start py-2 px-0">
              <div className="self-stretch relative leading-[16px] font-medium">
                Master Card
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start">
              <img
                className="h-8 w-12 relative overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mastercard@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-xl text-default-black">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
                {accountNumberValue}
              </h3>
              <div className="w-32 relative text-sm leading-[20px] text-gray-03 hidden" />
            </div>
            <div className="w-[125px] flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative leading-[28px] capitalize font-semibold mq450:text-base mq450:leading-[22px]">
                {balancePlaceholder}
              </div>
              <div className="self-stretch h-5 relative text-sm leading-[20px] text-gray-03 inline-block" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 text-base text-primary-color">
            <div className="w-[116px] relative leading-[24px] hidden shrink-0 z-[1]">
              Remove
            </div>
            <Button
              className="h-9 w-[110px]"
              endIcon={
                <img width="16px" height="16px" src="/chevronright.svg" />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#d71e28",
                borderRadius: "4px",
                "&:hover": { background: "#d71e28" },
                width: 110,
                height: 36,
              }}
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

TopLine.propTypes = {
  className: PropTypes.string,
  creditCard: PropTypes.string,
  accountNumberValue: PropTypes.string,
  balancePlaceholder: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default TopLine;
