import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// Font size
// HeadlineLarge	32
// HeadlineMedium	28
// HeadlineSmall	24
// TitleLarge     22
// TitleMedium    16
// TitleSmall     14
// LabelMedium    12
// LabelSmall     11

//color
//Gray9 #333333
//Gray8 #666666
//Gray7 #999999

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

export const LabelMediumRoyalBlueTypography  = styled(Typography)(() => ({
  color: '#0066FF',
  fontSize: '12px',
  lineHeight: '13px',
  letterSpacing: '-0.25px',
  borderBottom:"1px solid #0066FF",
}));


//FFF
export const TitleLargeBoldWhiteUmasquTypography  = styled(BoldTypography)(() => ({
  color: "#FFFFFF",
  fontSize: 20, 
  lineHeight:"23px", 
  position:"absolute", 
  top:"50%", 
  left:"50%", 
  transform: "translate(-50%, -50%)"
}));

export const TitleLargeBoldWhiteTypography  = styled(BoldTypography)(() => ({
  color: '#FFFFFF',
  fontSize: '22px',
}));

export const TitleSmallWhiteTypography  = styled(Typography)(() => ({
  color: '#FFFFFF',
  fontSize: '14px',
}));


//000
export const HeadlineExtraLargeBoldTypography = styled(BoldTypography)(() => ({
  fontSize: '55px',
}));

export const HeadlineLargeBoldGray6Typography  = styled(BoldTypography)(() => ({
  color: '#FAFAFA',
  fontSize: '40px',
  position: "absolute",
  zIndex: 100,
}));

export const HeadlineLargeBoldTypography = styled(BoldTypography)(() => ({
  fontSize: '32px',
}));

export const HeadlineSmallTypography  = styled(Typography)(() => ({
  fontSize: '24px'
}));

export const TitleLargeBoldTypography  = styled(BoldTypography)(() => ({
  fontSize: '22px',
}));

export const TitleMediumTypography  = styled(Typography)(() => ({
  fontSize: '16px',
  letterSpacing: '-0.25px',
}));

export const TitleMediumBoldTypography  = styled(BoldTypography)(() => ({
  fontSize: '16px',
}));

export const TitleSmallTypography  = styled(Typography)(() => ({
  fontSize: '14px',
  letterSpacing: '-0.25px',
}));

export const TitleSmallBoldTypography  = styled(BoldTypography)(() => ({
  fontSize: '14px',
  lineHeight: "20px",
  letterSpacing: '-0.25px',
}));

export const LabelMediumBoldTypography  = styled(BoldTypography)(() => ({
  fontSize: '12px',
  letterSpacing: "-0.25px",
}));


//333
export const Gray9Typography = styled(Typography)(() => ({
  color: '#333',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
}));

export const HeadlineExtraLargeBoldGray9Typography = styled(BoldTypography)(() => ({
  color: '#333333',
  fontSize: '50px',
}));

export const HeadlineExtraLargeGray9Typography = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '50px',
  lineHeight: "19px",
}));

export const TitleLargeBoldGray9Typography  = styled(BoldTypography)(() => ({
  color: '#333333',
  fontSize: '22px',
}));

export const TitleMediumBoldGray9Typography  = styled(BoldTypography)(() => ({
  color: '#333333',
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.15px',
}));

export const TitleSmallBoldGray9Typography  = styled(BoldTypography)(() => ({
  color: '#333333',
  fontSize: '14px',
  lineHeight: "20px",
  letterSpacing: '-0.25px',
}));

export const TitleSmallGray9Typography  = styled(Typography)(() => ({
  color:"#333333",
  fontSize: '14px',
}));

export const LabelMediumGray9ypography = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '-0.25px',
}));

export const LabelMediumBoldGray9Typography  = styled(BoldTypography)(() => ({
  color: '#333333',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '-0.25px',
}));

export const LabelMediumGray9Typography = styled(Typography)(() => ({
  color: '#333333',
  fontSize: '12px',
  letterSpacing: '-0.25px',
}));


//666
export const Gray8Typography = styled(Typography)(() => ({
  color: '#666',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
}));

export const TitleSmallGray8Typography  = styled(Typography)(() => ({
  color: '#666666',
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: '-0.25px',
}));

export const BoldGray8Typography = styled(BoldTypography)(() => ({
  color: '#666',
  fontSize: '12px'
}));

export const LabelMediumGray8Typography = styled(Typography)(() => ({
  color: '#666666',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '-0.25px',
}));

export const LabelMediumBoldGray8Typography = styled(BoldTypography)(() => ({
  color: '#666666',
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '-0.25px',
}));

export const LabelSmallGray8Typography  = styled(Typography)(() => ({
  color:"#666666",
  fontSize: '11px',
  letterSpacing:"-0.25px", 
}));

export const LabelSmallBoldGray8Typography  = styled(BoldTypography)(() => ({
  color:"#666666",
  fontSize: '11px',
  letterSpacing:"0.4px", 
}));


//999

export const TitleSmallGray7Typography  = styled(Typography)(() => ({
  color:"#999999",
  fontSize: '14px',
  lineHeight:"20px",
  letterSpacing:"-0.25px", 
}));

export const Gray7Typography = styled(Typography)(() => ({
  color: '#999',
  fontSize: '12px',
  lineHeight: '150%'
}));

export const LabelMediumGray7Typography = styled(Typography)(() => ({
  color: '#999999',
  fontSize: '12px',
  letterSpacing: '-0.25px',
}));


























































