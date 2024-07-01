import { useCallback } from "react";
import { Button } from "@mui/material";
import Email from "./Email";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PageContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center max-w-full shrink-0 ${className}`}
    >
      <form className="m-0 w-[580px] rounded-21xl overflow-hidden shrink-0 flex flex-col items-start justify-start p-12 box-border gap-[32px] max-w-full mq675:gap-[16px] mq675:py-[31px] mq675:px-6 mq675:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[37px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[53px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <h1 className="m-0 relative text-21xl font-medium font-body-2-bold text-darkslategray text-center mq450:text-5xl mq750:text-13xl">
                Welcome back
              </h1>
            </div>
            <h3 className="m-0 relative text-5xl font-normal font-body-2-bold text-gray-01 text-center mq450:text-lgi">
              We’re so excited to see you again!
            </h3>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <Email label="Email or phone number" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <Email label="Password" />
            <div className="flex flex-row items-start justify-start p-0.5">
              <div className="relative text-base [text-decoration:underline] font-medium font-body-2-bold text-gray-300 text-left">
                Forget your password
              </div>
            </div>
          </div>
        </div>
        <Button
          className="self-stretch h-16 opacity-[0.25] cursor-pointer mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "22",
            background: "#d71e28",
            borderRadius: "32px",
            "&:hover": { background: "#d71e28" },
            height: 64,
          }}
          onClick={onButtonClick}
        >
          Log in
        </Button>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="flex flex-row items-start justify-start p-0.5">
            <div className="relative text-base text-left whitespace-nowrap">
              <span className="font-body-2-bold text-gray-01">{`Don’t have an acount? `}</span>
              <span className="[text-decoration:underline] font-medium font-body-2-bold text-gray-300 whitespace-pre-wrap">{`Sign up  `}</span>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;
