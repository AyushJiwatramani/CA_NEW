import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start sticky gap-[3px] top-[0] z-[99] max-w-full text-center text-sm text-light-mode-white-5-ffffff font-button-2 ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-between py-[30px] pr-[30px] pl-[46px] box-border relative gap-[20px] max-w-full text-center text-xl text-light-mode-white-5-ffffff font-button-2 mq750:pl-[23px] mq750:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-crimson-200" />
        <div className="w-[465.1px] flex flex-row items-start justify-start gap-[17.9px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <img
              className="self-stretch h-[23px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
          <div className="h-10 w-px relative bg-neutrals-6 z-[1]" />
          <div className="w-[203.4px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <a className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit] whitespace-nowrap z-[1]">
              CRYPTO ARBITRAGE
            </a>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[57.3px] max-w-full text-sm text-gray-200 mq750:gap-[29px]">
          <nav className="m-0 w-[355.7px] flex flex-row items-center justify-between py-0 px-0 box-border max-w-full gap-[20px] z-[1] text-center text-sm text-light-mode-white-5-ffffff font-button-2 mq1050:hidden">
            <div className="flex flex-row items-center justify-center py-3 px-0">
              <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[75px]">
                DashBoard
              </a>
            </div>
            <div className="flex flex-row items-center justify-start py-3 px-0">
              <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[28px]">
                BOT
              </a>
            </div>
            <div className="flex flex-row items-center justify-center py-3 px-0">
              <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[47px]">
                Insight
              </a>
            </div>
            <div className="flex flex-col items-center justify-center py-3 px-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[89px]">
                  Transactions
                </a>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                  alt=""
                  src="/iconsarrow-down-simpleline.svg"
                />
              </div>
            </div>
          </nav>
          <div className="w-[163.6px] flex flex-row items-start justify-start gap-[8px] z-[1]">
            <div className="rounded-71xl bg-light-mode-white-5-ffffff flex flex-row items-start justify-start py-3 px-4">
              <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[58px]">
                LOGOUT
              </a>
            </div>
            <div className="self-stretch rounded-71xl hidden flex-row items-center justify-center py-3 px-[13px] text-light-mode-white-5-ffffff border-[2px] border-solid border-neutrals-6">
              <b className="self-stretch relative leading-[16px]">Login</b>
            </div>
          </div>
        </div>
      </header>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-5px]"
        loading="lazy"
        alt=""
        src="/line-3.svg"
      />
      <div className="w-10 h-10 hidden z-[2]" />
      <a className="[text-decoration:none] absolute !m-[0] top-[calc(50%_-_8px)] right-[676px] leading-[16px] font-bold text-[inherit] inline-block min-w-[41px] z-[3]">
        Home
      </a>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
