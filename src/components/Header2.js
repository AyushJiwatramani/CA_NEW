import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Header2 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[100px] flex flex-row items-start justify-between py-[30px] pr-[29px] pl-[45px] box-border sticky top-[0] z-[99] gap-[20px] max-w-full text-center text-xl text-light-mode-white-5-ffffff font-button-2 mq750:pl-[22px] mq750:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-crimson-200" />
      <div className="w-[455.9px] flex flex-row items-start justify-start gap-[17.5px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <img
            className="self-stretch h-[23px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logo2@2x.png"
          />
        </div>
        <div className="h-10 w-px relative bg-neutrals-6 z-[1]" />
        <div className="w-[199.4px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit] whitespace-nowrap z-[1]">
            CRYPTO ARBITRAGE
          </a>
        </div>
      </div>
      <div className="self-stretch w-[565.1px] flex flex-row items-start justify-start gap-[56.1px] max-w-full text-sm mq750:gap-[28px] mq1025:w-[404.8px]">
        <div className="self-stretch flex-1 flex flex-row items-center justify-center py-0 px-5 box-border gap-[45px] max-w-full z-[1]">
          <div className="flex flex-row items-center justify-center py-3 px-0">
            <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[41px]">
              Home
            </a>
          </div>
          <div className="self-stretch hidden flex-row items-center justify-start">
            <b className="h-4 relative leading-[16px] inline-block">
              Transactions
            </b>
          </div>
          <div className="self-stretch hidden flex-row items-center justify-center py-2 px-0">
            <b className="h-4 relative leading-[16px] inline-block">Insight</b>
          </div>
          <div className="self-stretch w-0 flex flex-col items-center justify-center py-3 px-0 box-border">
            <div className="w-0 flex-1 flex flex-row items-start justify-start gap-[4px]">
              <b className="self-stretch w-0 relative leading-[16px] inline-block" />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                alt=""
                src="/iconsarrow-down-simpleline.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] z-[1] text-gray-200 mq1025:hidden">
          <div className="rounded-71xl bg-light-mode-white-5-ffffff flex flex-row items-start justify-start py-3 px-[15px] whitespace-nowrap">
            <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[53px]">
              Sign On
            </a>
          </div>
          <Button
            className="self-stretch w-[68px]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              borderColor: "#e6e8ec",
              borderRadius: "90px",
              "&:hover": { borderColor: "#e6e8ec" },
              width: 68,
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
