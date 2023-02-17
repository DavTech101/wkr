import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

//######################### COMPONENT TYPES ################################################

//######################### COMPONENT STYLES ###############################################
const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }
`;

//######################### COMPONENTS #####################################################

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
