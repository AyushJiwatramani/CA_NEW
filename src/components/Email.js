import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const Email = ({ className = "", label }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-base text-gray-01 font-body-2-bold ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
        <div className="relative">{label}</div>
        <div className="h-[27px] w-[73px] relative hidden text-right text-lg text-dimgray-100">
          <img
            className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon-1.svg"
          />
          <div className="absolute top-[0px] right-[0px]">Hide</div>
        </div>
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-14 relative"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "rgba(102, 102, 102, 0.35)" },
          "& .MuiInputBase-root": { height: "56px", borderRadius: "12px" },
        }}
      />
      <div className="w-[101px] relative text-sm text-crimson-100 hidden">
        Error message
      </div>
    </div>
  );
};

Email.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Email;
