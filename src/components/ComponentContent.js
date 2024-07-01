import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TopLine from "./TopLine";
import CUL from "./CUL";
import PropTypes from "prop-types";

const ComponentContent = ({ className = "" }) => {
  const [
    transactionCurrencyDateTimePickerValue,
    setTransactionCurrencyDateTimePickerValue,
  ] = useState(new Date("2021-03-07"));
  const [dogeBadgeDateTimePickerValue, setDogeBadgeDateTimePickerValue] =
    useState(new Date("2022-01-07"));
  const [blueBadgeDateTimePickerValue, setBlueBadgeDateTimePickerValue] =
    useState(new Date("2022-06-27"));
  const [solanaBadgeDateTimePickerValue, setSolanaBadgeDateTimePickerValue] =
    useState(new Date("2022-06-16"));
  const [solanaBadgeDateTimePicker1Value, setSolanaBadgeDateTimePicker1Value] =
    useState(new Date("2022-05-22"));
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section
        className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-xs text-light-mode-gray-60-757575 font-button-2 ${className}`}
      >
        <div className="w-[894px] flex flex-col items-start justify-start gap-[36px] max-w-full mq450:gap-[18px]">
          <TopLine
            creditCard="Balance"
            accountNumberValue="Linked Wallet"
            balancePlaceholder="₹ 25000"
            propAlignSelf="unset"
            propWidth="424px"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full">
            <div className="flex-1 shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] rounded-6xs bg-light-mode-white-5-ffffff flex flex-col items-start justify-start pt-0 px-0 pb-[17px] box-border gap-[8px] max-w-full">
              <div className="self-stretch flex flex-col items-end justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[41px] font-button-2 font-bold text-base text-light-mode-gray-80-424242"
                  placeholder="Arbitrage History"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "41px",
                      backgroundColor: "#fff",
                      borderRadius: "7px 7px 0px 0px",
                    },
                    "& .MuiInputBase-input": { color: "#424242" },
                  }}
                />
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px]">
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[173px] max-w-[177px]">
                    <div className="self-stretch bg-light-mode-white-5-ffffff flex flex-row items-start justify-start pt-2.5 px-[19px] pb-2 border-b-[1px] border-solid border-light-mode-gray-10-f5f5f5">
                      <b className="flex-1 relative leading-[16px] uppercase">
                        Date
                      </b>
                    </div>
                    <div className="self-stretch h-[42px]">
                      <DatePicker
                        value={transactionCurrencyDateTimePickerValue}
                        onChange={(newValue) => {
                          setTransactionCurrencyDateTimePickerValue(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "transparent",
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 1,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "transparent" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                          },
                          "& input::placeholder": {
                            textColor: "#424242",
                            fontSize: 14,
                          },
                          input: {
                            color: "#424242",
                            fontSize: 14,
                            textAlign: "left",
                            fontWeight: "400",
                          },
                          "& .MuiInputBase-root": {
                            backgroundColor: "#fafafa",
                            height: 42,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch h-[42px]">
                      <DatePicker
                        value={dogeBadgeDateTimePickerValue}
                        onChange={(newValue) => {
                          setDogeBadgeDateTimePickerValue(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "transparent",
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 1,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "transparent" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                          },
                          "& input::placeholder": {
                            textColor: "#424242",
                            fontSize: 14,
                          },
                          input: {
                            color: "#424242",
                            fontSize: 14,
                            textAlign: "left",
                            fontWeight: "400",
                          },
                          "& .MuiInputBase-root": {
                            height: 42,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch h-[42px]">
                      <DatePicker
                        value={blueBadgeDateTimePickerValue}
                        onChange={(newValue) => {
                          setBlueBadgeDateTimePickerValue(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "transparent",
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 1,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "transparent" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                          },
                          "& input::placeholder": {
                            textColor: "#424242",
                            fontSize: 14,
                          },
                          input: {
                            color: "#424242",
                            fontSize: 14,
                            textAlign: "left",
                            fontWeight: "400",
                          },
                          "& .MuiInputBase-root": {
                            backgroundColor: "#fafafa",
                            height: 42,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch h-[42px]">
                      <DatePicker
                        value={solanaBadgeDateTimePickerValue}
                        onChange={(newValue) => {
                          setSolanaBadgeDateTimePickerValue(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "transparent",
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 1,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "transparent" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                          },
                          "& input::placeholder": {
                            textColor: "#424242",
                            fontSize: 14,
                          },
                          input: {
                            color: "#424242",
                            fontSize: 14,
                            textAlign: "left",
                            fontWeight: "400",
                          },
                          "& .MuiInputBase-root": {
                            height: 42,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch h-[42px]">
                      <DatePicker
                        value={solanaBadgeDateTimePicker1Value}
                        onChange={(newValue) => {
                          setSolanaBadgeDateTimePicker1Value(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "transparent",
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 1,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "transparent" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                          },
                          "& input::placeholder": {
                            textColor: "#424242",
                            fontSize: 14,
                          },
                          input: {
                            color: "#424242",
                            fontSize: 14,
                            textAlign: "left",
                            fontWeight: "400",
                          },
                          "& .MuiInputBase-root": {
                            backgroundColor: "#fafafa",
                            height: 42,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <CUL
                    amount="amount"
                    prop="2000"
                    prop1="15000"
                    prop2="22000"
                    prop3="4000"
                    prop4="100"
                  />
                  <CUL
                    amount="Currency"
                    prop="Bitcoin"
                    prop1="Doge"
                    prop2="Bitcoin"
                    prop3="Tron"
                    prop4="Solana"
                  />
                  <CUL
                    amount="Duration"
                    prop="02 (05-06 Jul)"
                    prop1="01 (06 Jul)"
                    prop2="05 (05-06 Jul)"
                    prop3="02 (06 Jul)"
                    prop4="02 (05-06 Jul)"
                  />
                  <div className="flex-1 flex flex-col items-center justify-start min-w-[173px] max-w-[177px] z-[1] text-smi text-light-mode-blue-50-2196f3">
                    <div className="self-stretch bg-light-mode-white-5-ffffff flex flex-row items-start justify-center pt-2.5 px-2.5 pb-2 text-center text-xs text-light-mode-gray-60-757575 border-b-[1px] border-solid border-light-mode-gray-10-f5f5f5">
                      <b className="flex-1 relative leading-[16px] uppercase">
                        Status
                      </b>
                    </div>
                    <Button
                      className="self-stretch h-[42px]"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#8dc351",
                        fontSize: "13",
                        background: "#fafafa",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { background: "#fafafa" },
                        height: 42,
                      }}
                    >
                      Running
                    </Button>
                    <div className="flex flex-row items-start justify-center pt-2 px-[47px] pb-[9px] text-light-mode-red-30-ef6e68">
                      <div className="rounded bg-light-mode-red-5-ffeaed flex flex-row items-start justify-start py-1 px-1.5">
                        <div className="relative leading-[17px] font-medium inline-block min-w-[70px]">
                          Terminated
                        </div>
                      </div>
                    </div>
                    <div className="bg-light-mode-gray-5-fafafa flex flex-row items-start justify-center pt-2 px-[47px] pb-[9px]">
                      <div className="rounded bg-light-mode-blue-5-e3f2fd flex flex-row items-start justify-start py-1 px-1.5">
                        <div className="relative leading-[17px] font-medium inline-block min-w-[70px]">
                          Completed
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-center pt-2 px-[47px] pb-[9px]">
                      <div className="rounded bg-light-mode-blue-5-e3f2fd flex flex-row items-start justify-start py-1 px-1.5">
                        <div className="relative leading-[17px] font-medium inline-block min-w-[70px]">
                          Completed
                        </div>
                      </div>
                    </div>
                    <div className="bg-light-mode-gray-5-fafafa flex flex-row items-start justify-center pt-2 px-[47px] pb-[9px]">
                      <div className="rounded bg-light-mode-blue-5-e3f2fd flex flex-row items-start justify-start py-1 px-1.5">
                        <div className="relative leading-[17px] font-medium inline-block min-w-[70px]">
                          Completed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-6xs bg-light-mode-white-5-ffffff overflow-x-auto flex flex-row items-start justify-start py-3 px-[19px] gap-[18px] text-smi text-light-mode-gray-70-616161">
                <div className="w-[97px] shrink-0 flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-[9px] h-[9px] relative rounded-12xs bg-light-mode-blue-50-2196f3" />
                  </div>
                  <div className="flex-1 relative leading-[17px] font-medium">
                    Completed
                  </div>
                </div>
                <div className="w-[72px] shrink-0 flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-[9px] h-[9px] relative rounded-12xs bg-light-mode-red-30-ef6e68" />
                  </div>
                  <div className="flex-1 relative leading-[17px] font-medium">
                    Stoped
                  </div>
                </div>
                <div className="w-[72px] shrink-0 flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-[9px] h-[9px] relative rounded-12xs bg-yellowgreen" />
                  </div>
                  <div className="flex-1 relative leading-[17px] font-medium">
                    Running
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

ComponentContent.propTypes = {
  className: PropTypes.string,
};

export default ComponentContent;
