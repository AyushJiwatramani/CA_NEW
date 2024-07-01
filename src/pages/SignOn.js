import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header2 from "../components/Header2";
import { useNavigate } from "react-router-dom";
import FooterIcon from "../components/FooterIcon";

const SignOn = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="w-full relative bg-light-mode-white-5-ffffff overflow-hidden flex flex-col items-start justify-start gap-[62px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq750:gap-[31px]">
      <main className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[3px] max-w-full">
        <Header2 />
        <section className="self-stretch flex flex-col items-end justify-start gap-[23px] max-w-full text-left text-base text-darkslategray font-body-2-bold">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-5px]"
            loading="lazy"
            alt=""
            src="/line-31.svg"
          />
          <div className="w-[1420px] flex flex-row items-start justify-end py-0 px-1 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[90px] max-w-full mq450:gap-[22px] mq1150:flex-wrap mq750:gap-[45px]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[32px] min-w-[474px] max-w-full mq750:flex-wrap mq750:gap-[16px] mq750:min-w-full">
                <div className="h-8 w-8 relative rounded-[50%] bg-silver" />
                <div className="flex-1 flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border min-w-[432px] max-w-full mq750:pt-[42px] mq750:box-border mq750:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[2px] max-w-full text-13xl">
                      <h1 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi mq1025:text-7xl">{`Welcome to Crypto Arbitrage `}</h1>
                      <div className="flex flex-row items-start justify-start p-0.5 text-base text-gray-300">
                        <div
                          className="h-6 relative inline-block cursor-pointer"
                          onClick={onAlreadyHaveAnClick}
                        >
                          <span className="text-darkslategray">
                            Already have an account?
                          </span>
                          <span className="text-gray-01">{` `}</span>
                          <span className="[text-decoration:underline] whitespace-pre-wrap">{`Log in  `}</span>
                        </div>
                      </div>
                    </div>
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[87px] font-body-2-bold text-base text-gray-01"
                      placeholder="Username"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "87px",
                          borderRadius: "0px 0px 0px 0px",
                        },
                        "& .MuiInputBase-input": { color: "#666" },
                      }}
                    />
                    <div className="self-stretch flex flex-col items-start justify-start text-gray-01">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[9px] pl-0 gap-[20px] mq450:flex-wrap">
                          <div className="relative inline-block min-w-[77px]">
                            Password
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[8px] text-right text-lg text-dimgray-100">
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <img
                                className="w-6 h-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/icon-1.svg"
                              />
                            </div>
                            <div className="relative inline-block min-w-[41px]">
                              Hide
                            </div>
                          </div>
                        </div>
                        <TextField
                          className="[border:none] bg-[transparent] self-stretch h-14 relative"
                          variant="outlined"
                          sx={{
                            "& fieldset": {
                              borderColor: "rgba(102, 102, 102, 0.35)",
                            },
                            "& .MuiInputBase-root": {
                              height: "56px",
                              borderRadius: "12px",
                            },
                          }}
                        />
                        <div className="w-[101px] relative text-sm text-crimson-100 hidden">
                          Error message
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[18px] text-sm text-dimgray-200 mq750:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[151px]">
                          <div className="self-stretch flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
                            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-200" />
                            </div>
                            <div className="relative">
                              Use 8 or more characters
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
                            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-200" />
                            </div>
                            <div className="relative">
                              One special character
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[154px]">
                          <div className="self-stretch flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
                            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-200" />
                            </div>
                            <div className="relative">
                              One Uppercase character
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
                            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-200" />
                            </div>
                            <div className="relative inline-block min-w-[89px]">
                              One number
                            </div>
                          </div>
                        </div>
                        <div className="flex-[0.9602] flex flex-row items-start justify-start py-2 pr-2 pl-0 box-border gap-[8px] min-w-[151px] mq450:flex-1">
                          <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                            <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-200" />
                          </div>
                          <div className="relative">
                            One lowercase character
                          </div>
                        </div>
                        <div className="h-[37px] hidden flex-row items-center justify-center py-2 pr-2 pl-0 box-border gap-[8px]">
                          <div className="h-2 w-2 relative rounded-[50%] bg-dimgray-200 shrink-0" />
                          <div className="self-stretch relative shrink-0">{`No same sequential repeating `}</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[276px] h-[100px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] text-gray-300">
                      <Button
                        className="self-stretch flex-1 opacity-[0.25]"
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "22",
                          background: "#ee1b26",
                          borderRadius: "32px",
                          "&:hover": { background: "#ee1b26" },
                        }}
                      >
                        Create an ccount
                      </Button>
                      <div className="flex flex-row items-start justify-start p-0.5">
                        <div className="h-6 relative inline-block">
                          <span className="text-darkslategray">
                            Already have an ccount?
                          </span>
                          <span className="text-gray-01">{` `}</span>
                          <span className="[text-decoration:underline] whitespace-pre-wrap">{`Log in  `}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[690px] w-[593px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[593px] max-w-full mq1150:flex-1 mq750:min-w-full">
                <div className="self-stretch flex-1 relative max-w-full max-h-full flex items-center justify-center">
                  <img
                    className="self-stretch flex-1 overflow-hidden object-contain absolute left-[-80px] top-[57px] w-full h-full [transform:scale(1.365)] mq1150:self-stretch mq1150:w-auto"
                    loading="lazy"
                    alt=""
                    src="/placeholder01@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterIcon footer="/footer@2x.png" propMarginTop="unset" />
    </div>
  );
};

export default SignOn;
