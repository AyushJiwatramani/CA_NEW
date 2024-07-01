import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import Legend from "../components/Legend";
import DataTable from "../components/DataTable";
import FooterIcon from "../components/FooterIcon";

const Insight = () => {
  return (
    <div className="w-full relative bg-light-mode-white-5-ffffff overflow-hidden flex flex-col items-start justify-start gap-[77px] leading-[normal] tracking-[normal] text-left text-21xl text-gray-300 font-button-2 mq450:gap-[19px] mq825:gap-[38px]">
      <FrameComponent3 />
      <div className="w-[600px] flex flex-row items-start justify-center pt-0 px-5 pb-[34px] box-border max-w-full">
        <h1 className="m-0 w-[406px] relative text-inherit leading-[16px] font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-5xl mq450:leading-[10px] mq825:text-13xl mq825:leading-[13px]">
          INSIGHT
        </h1>
      </div>
      <FrameComponent4 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[42px] pr-5 pl-[74px] box-border max-w-full mq825:pb-[27px] mq825:box-border mq1400:pl-[37px] mq1400:box-border">
        <div className="w-[1175.5px] flex flex-col items-start justify-start gap-[69px] max-w-full mq825:gap-[17px] mq1400:gap-[34px]">
          <Legend />
          <DataTable />
        </div>
      </section>
      <FooterIcon footer="/footer@2x.png" propMarginTop="unset" />
    </div>
  );
};

export default Insight;
