import { Button } from "@mui/material";
import PropTypes from "prop-types";

const BalanceDetails = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[78px] max-w-full text-center text-lg text-black font-button-2 mq450:gap-[19px] mq825:gap-[39px] ${className}`}
    >
      <div className="w-60 flex flex-row items-start justify-start pt-[120px] px-[60px] pb-11 box-border relative">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
          <img
            className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[20px] [transform:scale(1.208)]"
            loading="lazy"
            alt=""
            src="/salary.svg"
          />
        </div>
        <b className="flex-1 relative leading-[140%] z-[1]">
          <p className="m-0">Balance</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">₹ 50000</p>
        </b>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[661px] max-w-full text-left text-xl text-gray-gray-700 font-abhaya-libre mq825:min-w-full">
        <div className="self-stretch shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] rounded-mini bg-light-mode-white-5-ffffff flex flex-col items-end justify-start pt-[11px] pb-[63.2px] pr-6 pl-5 box-border gap-[20.6px] max-w-full">
          <div className="w-[1017px] h-[227px] relative shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] rounded-mini bg-light-mode-white-5-ffffff hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq825:flex-wrap">
            <div className="w-[115.6px] flex flex-col items-start justify-start pt-[20.7px] px-0 pb-0 box-border">
              <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit z-[1] mq450:text-base mq450:leading-[22px]">
                ADD FUNDS
              </h3>
            </div>
            <div className="h-[46.2px] w-[302.2px] flex flex-row items-start justify-start gap-[25.8px]">
              <Button
                className="self-stretch flex-1 z-[1]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "linear-gradient(81.62deg, #e13c45, #d71e28)",
                  borderRadius: "12px",
                  "&:hover": {
                    background: "linear-gradient(81.62deg, #e13c45, #d71e28)",
                  },
                }}
              >
                ADD FUNDS
              </Button>
              <Button
                className="self-stretch flex-1 z-[1]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "linear-gradient(81.62deg, #e13c45, #d71e28)",
                  borderRadius: "12px",
                  "&:hover": {
                    background: "linear-gradient(81.62deg, #e13c45, #d71e28)",
                  },
                }}
              >
                ADD FUNDS
              </Button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[29.8px] max-w-full text-sm text-gray-gray-400 lg:flex-wrap">
            <div className="flex-[0.9301] rounded-mini bg-light-mode-white-5-ffffff box-border overflow-hidden flex flex-col items-start justify-start py-8 px-[35px] min-w-[353px] max-w-full z-[1] border-[1px] border-solid border-gray-gray-200 mq450:flex-1 mq825:min-w-full">
              <div className="w-[143px] relative leading-[140%] inline-block">
                ENTER AMOUNT
              </div>
              <img
                className="w-[35px] h-[3.5px] relative hidden"
                alt=""
                src="/password-text.svg"
              />
              <div className="h-0 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[74px] box-border">
                <div className="h-0 w-0 relative" />
              </div>
            </div>
            <div className="flex-1 rounded-mini bg-light-mode-white-5-ffffff box-border overflow-hidden flex flex-row items-start justify-between py-[31px] px-5 min-w-[353px] max-w-full gap-[20px] z-[1] border-[1px] border-solid border-gray-gray-200 mq825:min-w-full">
              <img
                className="h-[3.5px] w-[35px] relative hidden"
                alt=""
                src="/password-text1.svg"
              />
              <div className="w-[187.5px] flex flex-row items-start justify-start gap-[15px]">
                <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                  <img
                    className="w-[24.5px] h-[8.5px] relative"
                    loading="lazy"
                    alt=""
                    src="/visa-icon.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[143px] relative leading-[140%] inline-block">
                    7812 2139 0823 XXXX
                  </div>
                  <div className="self-stretch h-0 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[74px] box-border">
                    <div className="h-0 w-0 relative" />
                  </div>
                </div>
              </div>
              <img
                className="h-5 w-5 relative object-contain min-h-[20px]"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BalanceDetails.propTypes = {
  className: PropTypes.string,
};

export default BalanceDetails;
