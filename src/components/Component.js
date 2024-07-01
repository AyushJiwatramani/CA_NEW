import ComponentContent from "./ComponentContent";
import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <main
      className={`w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-col items-end justify-start pt-[425px] pb-[359.5px] pr-[90px] pl-[81px] box-border gap-[149px] max-w-full z-[4] text-left text-3xs text-gray-gray-300 font-abhaya-libre mq750:gap-[74px] mq750:pl-10 mq750:pr-[45px] mq750:box-border mq450:gap-[37px] mq450:pr-5 mq450:box-border ${className}`}
    >
      <ComponentContent />
      <div className="w-[732px] flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[13.2px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-0 box-border max-w-full">
            <div className="h-[212.3px] flex-1 relative max-w-full">
              <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[18.9px] max-w-full">
                <div className="flex flex-col items-start justify-start gap-[25.1px] shrink-0">
                  <b className="w-[14.1px] relative leading-[150%] inline-block">
                    500
                  </b>
                  <b className="w-[14.1px] relative leading-[150%] inline-block">
                    400
                  </b>
                  <b className="w-[14.1px] relative leading-[150%] inline-block">
                    300
                  </b>
                  <b className="w-[14.1px] relative leading-[150%] inline-block">
                    200
                  </b>
                  <b className="w-[14.1px] relative leading-[150%] inline-block">
                    100
                  </b>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[9px]">
                    <b className="relative leading-[150%] inline-block min-w-[6px]">
                      0
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-[calc(100%_-_34px)]">
                  <div className="self-stretch h-[200.3px] flex flex-col items-start justify-start pt-0 px-0 pb-[39.1px] box-border gap-[39.1px] shrink-0 mq750:gap-[20px]">
                    <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-dashed border-gray-gray-200" />
                    <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-dashed border-gray-gray-200" />
                    <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-dashed border-gray-gray-200" />
                    <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-dashed border-gray-gray-200" />
                    <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-dashed border-gray-gray-200" />
                    <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-dashed border-gray-gray-200" />
                  </div>
                </div>
              </div>
              <img
                className="absolute h-[calc(100%_-_12.2px)] top-[6px] bottom-[6.2px] left-[34px] max-h-full w-[696px] z-[1]"
                loading="lazy"
                alt=""
                src="/lines.svg"
              />
            </div>
          </div>
          <div className="w-[698px] h-3 flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full">
            <b className="relative leading-[150%] inline-block min-w-[15px]">
              Jan
            </b>
            <b className="w-4 relative leading-[150%] inline-block shrink-0">
              Feb
            </b>
            <b className="w-[17px] relative leading-[150%] inline-block shrink-0">
              Mar
            </b>
            <b className="w-4 relative leading-[150%] inline-block shrink-0">
              Apr
            </b>
            <b className="w-[18px] relative leading-[150%] inline-block shrink-0">
              May
            </b>
            <b className="w-[15px] relative leading-[150%] inline-block shrink-0">
              Jun
            </b>
            <b className="w-[13px] relative leading-[150%] inline-block shrink-0">
              Jul
            </b>
            <b className="w-[17px] relative leading-[150%] inline-block shrink-0">
              Aug
            </b>
            <b className="w-4 relative leading-[150%] inline-block shrink-0">
              Sep
            </b>
            <b className="w-[15px] relative leading-[150%] inline-block shrink-0">
              Oct
            </b>
            <b className="w-[17px] relative leading-[150%] inline-block shrink-0">
              Nov
            </b>
            <b className="w-4 relative leading-[150%] inline-block shrink-0">
              Dec
            </b>
          </div>
        </div>
      </div>
    </main>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
