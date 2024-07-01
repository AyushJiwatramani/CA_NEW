import TopLine from "./TopLine";
import Item from "./Item";
import PropTypes from "prop-types";

const AccountSummary = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-base text-gray-02 font-regular-16-24 ${className}`}
    >
      <div className="w-[887px] flex flex-row flex-wrap items-start justify-start gap-[39px] max-w-full mq450:gap-[19px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[276px] max-w-full">
          <TopLine
            creditCard="Transaction"
            accountNumberValue="Trade Count"
            balancePlaceholder="423"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[276px] max-w-full text-3xl">
          <div className="w-[352px] flex flex-row items-center justify-between max-w-full gap-[20px] mq450:flex-wrap">
            <h3 className="m-0 relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lg mq450:leading-[26px]">
              Recent Transaction
            </h3>
            <div className="flex flex-row items-center justify-start gap-[8px] text-xs">
              <a className="[text-decoration:none] relative leading-[16px] font-medium text-[inherit] inline-block min-w-[46px]">
                View All
              </a>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                loading="lazy"
                alt=""
                src="/chevronright-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] rounded-lg bg-light-mode-white-5-ffffff flex flex-col items-start justify-start pt-4 px-6 pb-[17px] gap-[12px] text-base text-secondary">
            <div className="w-[304px] flex flex-row items-start justify-start py-0 pr-[50px] pl-0 box-border gap-[20px] mq450:pr-5 mq450:box-border">
              <div className="flex flex-col items-start justify-start pt-2 px-2 pb-[5px] text-crimson-200 border-b-[2px] border-solid border-crimson-200">
                <b className="relative leading-[24px] capitalize inline-block min-w-[21px]">
                  All
                </b>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start p-2">
                <b className="relative leading-[24px] capitalize inline-block min-w-[68px]">
                  Revenue
                </b>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start p-2">
                <b className="relative leading-[24px] capitalize inline-block min-w-[77px]">
                  Expenses
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 text-default-black">
              <Item
                gamepad2="/gamepad2.svg"
                gTR5="Profit"
                gadgetGear="BTC"
                itemPriceValue="$16000.00"
              />
              <Item
                gamepad2="/shopping.svg"
                gTR5="Add Funds"
                gadgetGear="Wallet"
                itemPriceValue="$20000.00"
                propBorderBottom="1px solid #f3f3f3"
              />
              <Item
                gamepad2="/food.svg"
                gTR5="Withdrawal "
                gadgetGear="Bank  ****"
                itemPriceValue="$10000.00"
                propBorderBottom="1px solid #f3f3f3"
              />
              <Item
                gamepad2="/trasnport.svg"
                gTR5="Withdrawal "
                gadgetGear="Bank ****"
                itemPriceValue="$1200.00"
                propBorderBottom="1px solid #f3f3f3"
              />
              <Item
                gamepad2="/shopping.svg"
                gTR5="Profit"
                gadgetGear="ETH"
                itemPriceValue="$12000.00"
                propBorderBottom="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AccountSummary.propTypes = {
  className: PropTypes.string,
};

export default AccountSummary;
