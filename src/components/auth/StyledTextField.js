import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "14px",
  },
  "& .MuiOutlinedInput-input": {
    boxShadow: "0 0 0px 1000px white inset", //чтоб убрать цвет input:-webkit-autofill
    borderRadius: "14px",
    backgroundColor: "white",
    color: "#777",
  },
  "& input:-webkit-autofill": {
    borderRadius: "14px",
    boxShadow: "0 0 0px 1000px white inset",
    textFillColor: "#777",
  },
  "& .MuiFormHelperText-root": {
    color: "#d32f2f",
  },
  "&.MuiFormControl-root": {
    height: "70px",
  },
});
