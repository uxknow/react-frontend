import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "& .MuiOutlinedInput-root": {
    //обращаться к классам не включаяя первый
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        //или в конце обартиться к самому тегу(fieldset вместо класса)
        borderColor: "#03a9f4",
        borderWidth: "1px",
      },
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "14px",
  },
  "& .MuiInputLabel-root": {
    color: "#777",
    "&.Mui-focused": {
      color: "#03a9f4",
    },
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
