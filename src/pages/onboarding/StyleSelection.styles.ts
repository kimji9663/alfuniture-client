import { ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyleCard = styled(ButtonBase)(() => ({
  height: '170px',
  backgroundSize: '100% 100%',
  '& .MuiTypography-root': {
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '-0.25px'
  }
}));

// linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(<path-to-image>), lightgray 0px -33.969px / 100% 120% no-repeat, #FAFAFA;

export const StyleCardSelected = styled(ButtonBase)(() => ({
  height: '170px',
  backgroundSize: '100% 100%',
  position: 'relative',
  '::after': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    content: '""'
  },
  '& .title': {
    position: 'absolute',
    display: 'inline-block',
    zIndex: 1,
    color: 'white',
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '-0.25px'
  }
}))