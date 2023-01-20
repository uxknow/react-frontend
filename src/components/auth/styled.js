import { styled } from "@mui/system";
import { Box, Typography, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const formColors = {
  formBg: "linear-gradient(177.09deg, #FFFFFF 6.15%, #03a9f4 202.69%)",
  text: "#333",
  blue: "#03a9f4",
  white: "#fff",
  error: "#d32f2f",
  btnHover: "#046ea0",
  btnDisabled: "rgba(133, 190, 207, 0.9)",
  loader: "#333",
  link: "#531ee4",
};

export const StyledDivContainer = styled("div", {
  name: "StyledDivContainer",
})({
  height: "100%",
});

export const StyledForm = styled("form", {
  name: "StyledForm",
})({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  padding: "30px",
});

export const StyledBoxFormBlock = styled(Box, {
  name: "StyledBoxFormBlock",
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "540px",
  margin: "auto",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: `-1px -1px 8px 1px ${formColors.white}`,
  background: formColors.formBg,
});

//Login-register

export const StyledTypographyTitle = styled(Typography, {
  name: "StyledTypographyTitle",
})({
  fontSize: "30px",
  textAlign: "center",
  color: formColors.text,
});

export const StyledTypographySubtitle = styled(Typography, {
  name: "StyledTypographySubtitle",
})({
  marginBottom: "24px",
  textAlign: "center",
  color: formColors.text,
});

export const StyledButtonForm = styled(LoadingButton, {
  name: "StyledButtonForm",
})({
  marginTop: "16px",
  marginBottom: "16px",
  padding: "8px 16px",
  width: "260px",
  borderRadius: "8px",
  backgroundColor: formColors.blue,
  "&:hover": {
    backgroundColor: formColors.btnHover,
  },
  "&.Mui-disabled": {
    background: formColors.btnDisabled,
  },
  "& .MuiLoadingButton-loadingIndicator": {
    color: formColors.loader,
  },
});

export const StyledTypographyQuestionText = styled(Typography, {
  name: "StyledTypographyQuestionText",
})({
  color: formColors.text,
  opacity: 0.8,
});

export const StyledSpanLinkText = styled("span")({
  color: formColors.link,
  marginLeft: "6px",
  textDecoration: "underline",
  cursor: "pointer",
  "&:hover": {
    color: formColors.text,
  },
});

export const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: formColors.blue,
    },
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: formColors.blue,
      },
    },
  },
  "& .MuiInputLabel-root": {
    color: formColors.text,
    opacity: 0.9,
    "&.Mui-focused": {
      color: formColors.blue,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-input": {
    boxShadow: `0 0 0px 1000px ${formColors.white} inset`, //чтоб убрать цвет input:-webkit-autofill
    borderRadius: "8px",
    backgroundColor: formColors.white,
    color: formColors.text,
  },
  "& input:-webkit-autofill": {
    borderRadius: "8px",
    boxShadow: `0 0 0px 1000px ${formColors.white} inset`,
    textFillColor: formColors.text,
  },
  "& .MuiFormHelperText-root": {
    color: formColors.error,
  },
  "&.MuiFormControl-root": {
    height: "70px",
  },

  "&.error": {
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: formColors.error,
      },
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: formColors.error,
        },
      },
    },
    "& .MuiInputLabel-root": {
      color: formColors.error,
      "&.Mui-focused": {
        color: formColors.error,
      },
    },
  },
});
