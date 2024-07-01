import PropTypes from "prop-types";

const AccountType = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[346px] shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] rounded-lg bg-light-mode-white-5-ffffff flex flex-col items-start justify-start p-6 box-border gap-[16px] text-left text-base text-gray-02 font-regular-16-24 ${className}`}
    >
      <div className="w-[304px] h-11 box-border hidden flex-row items-center justify-between pt-0 px-0 pb-3 gap-[20px] border-b-[1px] border-solid border-special-bg">
        <b className="relative leading-[24px] capitalize">Balance</b>
        <div className="self-stretch w-[123px] hidden flex-row items-center justify-start gap-[4px] text-right text-xs text-gray-01">
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
      <div className="w-[304px] hidden flex-col items-start justify-start gap-[24px] text-xl text-default-black">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch h-7 relative leading-[28px] capitalize font-semibold inline-block mq450:text-base mq450:leading-[22px]">
              Linked Wallet
            </div>
            <div className="w-32 relative text-sm leading-[20px] text-gray-03 hidden" />
          </div>
          <div className="w-[125px] flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch h-7 relative leading-[28px] capitalize font-semibold inline-block whitespace-nowrap mq450:text-base mq450:leading-[22px]">
              ₹ 25000
            </div>
            <div className="self-stretch h-5 relative text-sm leading-[20px] text-gray-03 inline-block">
              Total amount
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[-19.5px] text-base text-primary-color">
          <div className="w-[116px] relative leading-[24px] hidden shrink-0 z-[1]">
            Remove
          </div>
          <div className="h-9 rounded bg-crimson-200 flex flex-row items-center justify-start py-2 px-5 box-border gap-[8px] z-[2] text-sm text-light-mode-white-5-ffffff">
            <div className="self-stretch relative leading-[20px] capitalize font-medium">
              Details
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/chevronright-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AccountType.propTypes = {
  className: PropTypes.string,
};

export default AccountType;
