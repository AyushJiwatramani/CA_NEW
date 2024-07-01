import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1319.5px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full text-left text-lg text-gray-gray-700 font-helvetica ${className}`}
    >
      <div className="flex-1 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] rounded-mini bg-light-mode-white-5-ffffff flex flex-col items-end justify-start pt-6 pb-[49.6px] pr-[49px] pl-[46px] box-border gap-[23.5px] max-w-full mq450:pt-5 mq450:pb-8 mq450:box-border mq1400:pl-[23px] mq1400:pr-6 mq1400:box-border">
        <div className="w-[1285.5px] h-[455px] relative shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] rounded-mini bg-light-mode-white-5-ffffff hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq825:flex-wrap">
          <div className="w-[159.5px] flex flex-col items-start justify-start pt-[5.2px] px-0 pb-0 box-border">
            <b className="self-stretch relative leading-[26.1px] z-[1]">
              Invoices
            </b>
          </div>
          <Button
            className="h-[36.5px] w-[243px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#4fd1c5",
              fontSize: "10",
              borderColor: "#4fd1c5",
              borderRadius: "12px",
              "&:hover": { borderColor: "#4fd1c5" },
              width: 243,
              height: 36.5,
            }}
          >
            VIEW ALL
          </Button>
        </div>
        <div className="self-stretch h-[321.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[69.4px] box-border gap-[25.6px] z-[1] text-sm mq450:pb-[45px] mq450:box-border mq825:h-auto">
          <div className="self-stretch h-[43.8px] flex flex-row items-start justify-between pt-0 px-0 pb-3.5 box-border gap-[20px] shrink-0">
            <div className="w-[228.7px] flex flex-col items-start justify-start gap-[4.8px]">
              <b className="self-stretch relative leading-[20.3px]">
                March, 01, 2020
              </b>
              <b className="w-[151.8px] relative text-xs leading-[18.8px] inline-block text-gray-gray-400">
                #MS-415646
              </b>
            </div>
            <div className="w-[178.1px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-right text-xs text-gray-gray-400">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <b className="w-[59.4px] relative leading-[18.8px] inline-block shrink-0 whitespace-nowrap">
                  $180
                </b>
                <div className="h-[17.2px] w-[83.5px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-left text-3xs text-gray-gray-700">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[5.4px] shrink-0">
                    <img
                      className="h-[15.7px] w-[33px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/ioniconddocumenttext.svg"
                    />
                    <b className="flex-1 relative leading-[15.7px]">PDF</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[43.8px] flex flex-row items-start justify-between pt-0 px-0 pb-3.5 box-border gap-[20px] shrink-0">
            <div className="w-[267.2px] flex flex-col items-start justify-start gap-[4.8px]">
              <b className="self-stretch relative leading-[20.3px]">
                February, 10, 2021
              </b>
              <b className="w-[147.4px] relative text-xs leading-[18.8px] inline-block text-gray-gray-400">
                #RV-126749
              </b>
            </div>
            <div className="w-[178.1px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-right text-xs text-gray-gray-400">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <b className="w-[59.4px] relative leading-[18.8px] inline-block shrink-0 whitespace-nowrap">
                  $250
                </b>
                <div className="h-[17.2px] w-[83.5px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-left text-3xs text-gray-gray-700">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[5.4px] shrink-0">
                    <img
                      className="h-[15.7px] w-[33px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/ioniconddocumenttext.svg"
                    />
                    <b className="flex-1 relative leading-[15.7px]">PDF</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq825:flex-wrap">
            <div className="w-[207.8px] flex flex-col items-start justify-start gap-[4.7px]">
              <b className="self-stretch relative leading-[20.3px]">
                April, 05, 2020
              </b>
              <b className="w-[147.4px] relative text-xs leading-[18.8px] inline-block text-gray-gray-400">
                #FB-212562
              </b>
            </div>
            <div className="w-[178.1px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-right text-xs text-gray-gray-400">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <b className="w-[59.4px] relative leading-[18.8px] inline-block shrink-0 whitespace-nowrap">
                  $560
                </b>
                <div className="h-[17.2px] w-[83.5px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-left text-3xs text-gray-gray-700">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[5.4px] shrink-0">
                    <img
                      className="h-[15.7px] w-[33px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/ioniconddocumenttext.svg"
                    />
                    <b className="flex-1 relative leading-[15.7px]">PDF</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq825:flex-wrap">
            <div className="w-[210px] flex flex-col items-start justify-start gap-[4.7px]">
              <b className="self-stretch relative leading-[20.3px]">
                June, 25, 2019
              </b>
              <b className="w-[157.3px] relative text-xs leading-[18.8px] inline-block text-gray-gray-400">
                #QW-103578
              </b>
            </div>
            <div className="w-[178.1px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-right text-xs text-gray-gray-400">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <b className="w-[59.4px] relative leading-[18.8px] inline-block shrink-0 whitespace-nowrap">
                  $120
                </b>
                <div className="h-[17.2px] w-[83.5px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-left text-3xs text-gray-gray-700">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[5.4px] shrink-0">
                    <img
                      className="h-[15.7px] w-[33px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/ioniconddocumenttext.svg"
                    />
                    <b className="flex-1 relative leading-[15.7px]">PDF</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq825:flex-wrap">
            <div className="w-[228.7px] flex flex-col items-start justify-start gap-[4.7px]">
              <b className="self-stretch relative leading-[20.3px]">
                March, 01, 2019
              </b>
              <b className="w-[150.7px] relative text-xs leading-[18.8px] inline-block text-gray-gray-400">
                #AR-803481
              </b>
            </div>
            <div className="w-[178.1px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-right text-xs text-gray-gray-400">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <b className="w-[59.4px] relative leading-[18.8px] inline-block shrink-0 whitespace-nowrap">
                  $300
                </b>
                <div className="h-[17.2px] w-[83.5px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-left text-3xs text-gray-gray-700">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[5.4px] shrink-0">
                    <img
                      className="h-[15.7px] w-[33px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/ioniconddocumenttext.svg"
                    />
                    <b className="flex-1 relative leading-[15.7px]">PDF</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
