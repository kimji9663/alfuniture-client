import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SpanTypography = styled((props: TypographyProps) => (
  <Typography component="span" {...props}>
    {props.children}
  </Typography>
))(() => ({}));

export const BoldTypography = styled(Typography)(() => ({
  fontWeight: 'bold'
}));

export const BoldGray9Typography = styled(BoldTypography)(() => ({
  color: '#333',
  fontSize: '14px',
  lineHeight: '1.25rem'
}));

export const ColorInheritTypography = styled(Typography)(() => ({
  color: 'inherit'
}));

export const FontSizeInheritTypography = styled(Typography)(() => ({
  fontSize: 'inherit'
}));

export const InheritSpanTypography = styled((props: TypographyProps) => (
  <Typography component="span" {...props}>
    {props.children}
  </Typography>
))(({ theme }) => ({
  fontSize: 'inherit',
  color: 'inherit'
}));

export const InheritTypography = styled(Typography)(() => ({
  fontSize: 'inherit',
  color: 'inherit'
}));

// 부모의 고정된 크기가 있어야 하고 overflow: hidden이 있어야 한다.
export const EllipsisTypography = styled(Typography)(() => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}));

export const BreakSpacesTypography = styled(Typography)(() => ({
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere'
}));

export const BreakAllTypography = styled(Typography)(() => ({
  wordBreak: 'break-all',
  overflowWrap: 'break-word'
}));

export const PreWrapTypography = styled(Typography)(() => ({
  whiteSpace: 'pre-wrap'
}));

export const PreLineTypography = styled(Typography)(() => ({
  whiteSpace: 'pre-line'
}));

export const HoverUnderLineSpanTypography = styled((props: TypographyProps) => (
  <Typography component="span" {...props}>
    {props.children}
  </Typography>
))(() => ({
  wordBreak: 'break-all',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));


//000
export const C000Fs55Fw700Typography = styled(Typography)(() => ({
  color: '#000000',
  fontSize: '55px',
  fontWeight: 700,
}));

export const C000Fs36Fw700Typography  = styled(Typography)(() => ({
  color:"#000000",
  fontSize: '36px',
  fontWeight: 700,
}));

export const C000Fs20Fw700Lh20Typography  = styled(Typography)(() => ({
  color:"#000000",
  fontSize: '20px',
  fontWeight: 700,
  lineHeight:"20px",
  letterSpacing: "-0.7px",
}));

export const C000Fs14Fw700Lh20Typography  = styled(Typography)(() => ({
  color:"#000000",
  fontSize: '14px',
  fontWeight: 700,
  lineHeight:"20px",
}));

export const C06FFs12Typography  = styled(Typography)(() => ({
  color: '#0066FF',
  fontSize: '12px',
  lineHeight: '13px',
  letterSpacing: '-0.25px',
  fontWeight: 500,
  borderBottom:"1px solid #0066FF",
}));

export const CFAFFs40Typography  = styled(Typography)(() => ({
  color: '#FAFAFA',
  fontSize: '40px',
  fontWeight: 600,
  position: "absolute",
  zIndex: 100,
}));

export const CFFFFs14Typography  = styled(Typography)(() => ({
  color: '#FFFFFF',
  fontSize: '14px',
  fontWeight: 500,
}));

export const CFFFFs14Fw700Typography  = styled(Typography)(() => ({
  color: '#FFFFFF',
  fontSize: '14px',
  fontWeight: 400,
  textAlign: "center"
}));

export const CFFFFs20Fw700Typography  = styled(Typography)(() => ({
  color: '#FFFFFF',
  fontSize: '20px',
  fontWeight: 600,
}));

export const CFFFFs20Ls24Fw700Typography  = styled(Typography)(() => ({
  color: '#FFFFFF',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: "24px",
}));

export const UmasquTypography  = styled(Typography)(() => ({
  color: "#FFFFFF",
  fontSize: 20, 
  fontWeight: "700", 
  lineHeight:"23px", 
  position:"absolute", 
  top:"50%", 
  left:"50%", 
  transform: "translate(-50%, -50%)"
}));

export const C242Fs55Typography = styled(Typography)(() => ({
  color: '#242223',
  fontSize: '55px',
  lineHeight: '19px',
  letterSpacing: '-0.25px',
  fontWeight: 700,
}));

export const C242Fs12Typography = styled(Typography)(() => ({
  color: '#242223',
  fontSize: '12px',
  letterSpacing: '-0.25px',
  fontWeight: 400,
}));

export const C7E7E7EFs10Fw400Typography  = styled(Typography)(() => ({
  color:"#7E7E7E",
  fontSize: '10px',
  fontWeight: 400,
  letterSpacing:"-0.25px", 
}));


//333
export const Gray9Typography = styled(Typography)(() => ({
  color: '#333',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: 500
}));

export const C333Fs50Typography = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '50px',
  fontWeight: 700,
}));

export const C333Fs50Fw400Typography = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '50px',
  fontWeight: 400,
  lineHeight: "19px",
}));

export const C333Fs12Fw400Typography = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '12px',
  fontWeight: 400,
}));

export const C333Fs12Lh12Typography = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '12px',
  lineHeight: '12px',
  letterSpacing: '0.4px',
  fontWeight: 500,
}));

export const C333Fs12Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '-0.25px',
  fontWeight: 400,
}));

export const C333Fs12BoldTypography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '-0.25px',
  fontWeight: 600,
}));

export const C333Fs12NoLhTypography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '12px',
  letterSpacing: '-0.25px',
  fontWeight: 400,
}));

export const C333Fs16Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.15px',
  fontWeight: 600,
}));

export const C333Fs22Fw700Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '22px',
  fontWeight: 700,
}));

export const C333Fs22Fw700Ls1Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '22px',
  fontWeight: 700,
}));

export const C333Fs22Fw700Lh28Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: "28px",
}));

export const C333Fs20Fw700Lh29Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '20px',
  lineHeight: '29px',
  fontWeight: 700,
}));

export const C333Fs20Fw700Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '20px',
  lineHeight: '24px',
  fontWeight: 700,
  letterSpacing: "-0.25px",
}));

export const C333Fs14Fw700Ls01Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: '0.1px',
}));

export const C333Fs14Fw700Typography  = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: '-0.25px',
}));

export const C333Fs14Fw500Typography  = styled(Typography)(() => ({
  color:"#333333",
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-0.25px',
}));

export const C333Fs14Fw500Ls20Typography  = styled(Typography)(() => ({
  color:"#333333",
  fontSize: '14px',
  fontWeight: 500,
  lineHeight:"20px",
  letterSpacing: '2%',
}));

export const C333Fs14Typography  = styled(Typography)(() => ({
  color:"#333333",
  fontSize: '14px',
  fontWeight: 400,
}));


//666
export const BoldGray8Typography = styled(BoldTypography)(() => ({
  color: '#666',
  fontSize: '12px'
}));

export const Gray8Typography = styled(Typography)(() => ({
  color: '#666',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
}));

export const C666Fs12Lh20Typography = styled(Typography)(() => ({
  color: '#666666',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '-0.25px',
}));

export const C666Fs12BoldTypography = styled(Typography)(() => ({
  color: '#666666',
  fontSize: '12px',
  fontWeight: 700,
}));

export const C666Fs12Lh16BoldTypography = styled(Typography)(() => ({
  color: '#666666',
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '-0.25px',
  fontWeight: 700,
}));

export const C666Fs14Fw400Typography  = styled(Typography)(() => ({
  color: '#666666',
  fontSize: '14px',
  fontWeight: 400,
}));

export const C666Fs14Lh22Typography  = styled(Typography)(() => ({
  color: '#666666',
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: '-0.25px',
}));

export const C666Fs14Typography  = styled(Typography)(() => ({
  color: '#666666',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.25px',
}));

export const C666Fs10Fw700Typography  = styled(Typography)(() => ({
  color:"#666666",
  fontSize: '10px',
  fontWeight: 700,
  letterSpacing:"0.4px", 
}));


//999
export const Gray7Typography = styled(Typography)(() => ({
  color: '#999',
  fontSize: '12px',
  lineHeight: '150%'
}));

export const C999Fs12Typography = styled(Typography)(() => ({
  color: '#999999',
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '-0.25px',
  fontWeight: 400,
}));

export const C999Fs12Lh18Typography = styled(Typography)(() => ({
  color: '#999999',
  fontSize: '12px',
  lineHeight: '18px',
  letterSpacing: '-0.25px',
}));

export const C999Fs12Lh20Typography = styled(Typography)(() => ({
  color: '#999999',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '-0.25px',
}));

export const C999Fs12Lh12Typography = styled(Typography)(() => ({
  color: '#999999',
  fontSize: '12px',
  lineHeight: '12px',
  letterSpacing: '0.4px',
  fontWeight: 500,
}));

export const C999Fs12NoLhTypography = styled(Typography)(() => ({
  color: '#999999',
  fontSize: '12px',
  letterSpacing: '-0.25px',
  fontWeight: 400,
}));

export const C999Fs12BoldTypography  = styled(Typography)(() => ({
  color: '#999999',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '-0.25px',
  fontWeight: 500,
}));

export const C999Fs14Fw400Typography  = styled(Typography)(() => ({
  color:"#999999",
  fontSize: '14px',
  fontWeight: 400,
  lineHeight:"20px",
}));

export const C999Fs14Typography  = styled(Typography)(() => ({
  color:"#999999",
  fontSize: '14px',
  fontWeight: 400,
  lineHeight:"20px",
  letterSpacing:"-0.25px", 
}));

export const C999Fs14NoLhTypography  = styled(Typography)(() => ({
  color:"#999999",
  fontSize: '14px',
  fontWeight: 400,
  letterSpacing:"-0.25px", 
}));

//색상없는 사이즈
export const Fs32Fw700Typography  = styled(Typography)(() => ({
  fontSize: '32px',
  fontWeight: 700,
}));

export const Fs16Fw400Typography  = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  letterSpacing: '-0.25px',
}));

export const Fs35Fw700Typography  = styled(Typography)(() => ({
  fontSize: '35px',
  fontWeight: 700,
}));

export const Fs22Fw700Typography  = styled(Typography)(() => ({
  fontSize: '22px',
  fontWeight: 700,
}));

export const Fs16Fw700Typography  = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 700,
}));

export const Fs12Fw700Typography  = styled(Typography)(() => ({
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: "-0.25px",
}));

export const Fs24Fw400Typography  = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 400,
}));

export const Fs14Fw400Typography  = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: "17px",
}));

export const Fs14Typography  = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 400,
  letterSpacing: '-0.25px',
}));

export const Fs14Fw700Typography  = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: '-0.25px',
}));

export const Fs14Fw700NoLhTypography  = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '-0.25px',
}));

























































