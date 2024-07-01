import FrameComponent3 from "../components/FrameComponent3";
import BalanceDetails from "../components/BalanceDetails";
import FrameComponent2 from "../components/FrameComponent2";
import FooterIcon from "../components/FooterIcon";

const Wallet = () => {
  return (
    <div className="w-full relative bg-light-mode-white-5-ffffff overflow-hidden flex flex-col items-start justify-start gap-[49px] leading-[normal] tracking-[normal] text-left text-21xl text-gray-300 font-button-2 mq825:gap-[24px]">
      <FrameComponent3 />
      <div className="w-[612px] flex flex-row items-start justify-center pt-0 px-5 pb-[67px] box-border max-w-full">
        <h1 className="m-0 w-[406px] relative text-inherit leading-[16px] font-bold font-inherit flex items-center shrink-0 max-w-full mq450:text-5xl mq450:leading-[10px] mq825:text-13xl mq825:leading-[13px]">
          WALLET
        </h1>
      </div>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[19px] pb-14 box-border max-w-full lg:pb-9 lg:box-border mq450:pb-[23px] mq450:box-border">
        <div className="w-[1355px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[75px] max-w-full mq450:gap-[19px] mq825:gap-[37px]">
          <BalanceDetails />
          <FrameComponent2 />
        </div>
      </section>
      <FooterIcon footer="/footer@2x.png" propMarginTop="unset" />
    </div>
  );
};

export default Wallet;
