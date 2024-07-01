import Header from "../components/Header";
import AccountSummary from "../components/AccountSummary";
import Charts from "../components/Charts";
import FooterIcon from "../components/FooterIcon";
import Component from "../components/Component";

const DashBoard = () => {
  return (
    <div className="w-full relative bg-light-mode-white-5-ffffff overflow-hidden flex flex-col items-end justify-start gap-[92px] leading-[normal] tracking-[normal] text-left text-13xl text-black font-button-2 mq750:gap-[46px] mq450:gap-[23px]">
      <Header />
      <div className="w-[1429px] flex flex-row items-start justify-end pt-0 px-[30px] pb-[49px] box-border max-w-full lg:pb-8 lg:box-border mq750:pb-[21px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[54px] max-w-full mq750:gap-[27px]">
          <h1 className="m-0 relative text-inherit leading-[16px] font-bold font-inherit mq450:text-lgi mq450:leading-[10px] mq1050:text-7xl mq1050:leading-[13px]">
            Welcome Asmith
          </h1>
          <div className="w-[1345px] rounded-6xs [background:linear-gradient(90deg,_#ffcd41,_#d71e28)] flex flex-row items-start justify-between py-[3px] pr-2.5 pl-0 box-border max-w-full gap-[20px] text-smi text-light-mode-gray-80-424242 mq1050:flex-wrap mq1050:pl-2.5 mq1050:box-border">
            <div className="w-[667.5px] flex flex-row items-start justify-start gap-[15px] max-w-full mq750:flex-wrap">
              <div className="h-[83px] w-px relative box-border border-r-[1px] border-dashed border-light-mode-gray-60-757575 mq750:w-full mq750:h-px" />
              <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[423px] max-w-full shrink-0 mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[17px] font-medium">
                    01 JULY 2024
                  </div>
                  <h1 className="m-0 self-stretch relative text-13xl tracking-[-0.02em] leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
                    Today
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-[25px] w-[507.5px] hidden max-w-full" />
            <div className="w-32 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border text-light-mode-green-10-d9f0c5">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[17px] font-medium">
                  Time :
                </div>
                <b className="self-stretch relative text-13xl tracking-[-0.02em] leading-[42px] whitespace-nowrap mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
                  10:11 AM
                </b>
              </div>
            </div>
          </div>
          <AccountSummary />
          <Charts />
        </div>
      </div>
      <FooterIcon footer="/footer1@2x.png" propMarginTop="unset" />
      <Component />
    </div>
  );
};

export default DashBoard;
