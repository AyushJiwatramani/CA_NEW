import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[138px] flex flex-col items-start justify-start pt-0 px-0 pb-[34px] box-border gap-[3px] top-[0] z-[99] sticky max-w-full shrink-0 ${className}`}
    >
      <header className="self-stretch flex-1 flex flex-row items-start justify-between py-[30px] pr-[29px] pl-[45px] box-border relative max-w-full gap-[20px] text-center text-sm text-light-mode-white-5-ffffff font-button-2 mq750:pl-[22px] mq750:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-crimson-200" />
        <div className="w-[455px] flex flex-row items-start justify-start gap-[17.5px] max-w-full text-xl">
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <img
              className="self-stretch h-[23px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <div className="h-10 w-px relative bg-neutrals-6 z-[1]" />
          <div className="w-[199px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <a className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit] whitespace-nowrap z-[1]">
              CRYPTO ARBITRAGE
            </a>
          </div>
        </div>
        <div className="self-stretch w-[348px] hidden flex-row items-center justify-center gap-[47.1px] max-w-full z-[2]">
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-0">
            <b className="relative leading-[16px]">BOT</b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start">
            <b className="h-4 relative leading-[16px] inline-block">
              Transactions
            </b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-0">
            <b className="h-4 relative leading-[16px] inline-block">Insight</b>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center py-2 px-0">
            <div className="w-[43px] flex flex-row items-start justify-start gap-[4px]">
              <b className="h-4 flex-1 relative leading-[16px] inline-block">
                About
              </b>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsarrow-down-simpleline.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] z-[1] text-gray-200 mq675:hidden">
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
      </header>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-5px]"
        loading="lazy"
        alt=""
        src="/line-33.svg"
      />
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
