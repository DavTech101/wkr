import tw, { styled } from 'twin.macro';

//########################### UTILITY STYLES ################################

// CONTENT PADDING
export const XPadding = tw`px-8 sm:(px-10) md:(px-20)`;
export const YPadding = tw`py-4 md:(py-8)`;

// MAX INNDER WIDTH
export const MaxInnerWidth = tw`max-w-7xl`;

// CENTER FLEX
export const CenteredFlexRow = tw`flex flex-row items-center justify-center`;
export const CenteredFlexColumn = tw`flex flex-col items-center justify-center`;

//############################################################################

//########################### DIV STYLING ####################################

// FLEX DIV
export const FlexDivCol = styled.div`
  ${CenteredFlexColumn}
`;

// BASE WRAPPER STYLE
export const BaseWrapper = styled.div`
  ${XPadding}
  ${YPadding}
  ${tw`flex w-full`}
`;

// BASE INNERWRAPPER STYLE
export const BaseInnerWrapper = styled.div`
  ${MaxInnerWidth}
  ${tw`flex flex-col w-full`}
`;

//############################################################################

//########################### SECTION STYLES #################################

// SECTION WRAPPERS
export const BaseSection = styled.section`
  ${XPadding}
  ${tw`overflow-hidden w-full`}
`;

// SECTION FLEX STYLE
export const BaseFlexSection = styled(BaseSection)`
  ${CenteredFlexColumn}
`;

// SECTION CONTENT STYLE
export const BaseSectionContent = tw`text-lg`;

//############################################################################

//########################### TITLES ########################################

// TITLE STYLE
export const BaseTitle = tw.h2`text-3xl text-center tracking-widest`;
export const ItalicTitle = tw(BaseTitle)`italic`;

//SUBTITLE STYLE
export const BaseSubTitle = tw.h3`font-bold text-white cursor-default`;

//############################################################################

//########################### Footer #########################################

// Footer
export const FooterWrapper = styled.footer`
  ${XPadding}
  ${CenteredFlexColumn}
`;

export const InnerFooterWrapper = styled.div`
  ${MaxInnerWidth}
  ${tw`w-full mx-auto`}
`;

//############################################################################

//########################### VARIANTS #######################################

export const spacingVariants = {
  sm: tw`gap-2`,
  md: tw`gap-4`,
  lg: tw`gap-6`,
  xl: tw`gap-8`,
  '2xl': tw`gap-10`,
  '3xl': tw`gap-12`,
  '4xl': tw`gap-14`,
};

export const listVariants = {
  none: tw`list-none`,
  unordered: tw`list-disc`,
  ordered: tw`list-decimal`,
};

export const columnVariants = {
  1: tw`grid-cols-1`,
  2: tw`grid-cols-1 lg:grid-cols-2`,
  3: tw`grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3`,
};

//############################################################################
