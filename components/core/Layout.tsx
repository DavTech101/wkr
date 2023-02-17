import Meta from './Meta';
import tw, { styled } from 'twin.macro';
import React, { ReactNode } from 'react';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';

//######################### COMPONENT TYPES ################################################
type Props = {
  children?: ReactNode;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = styled.div`
  ${tw`grid min-h-screen`};
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
`;

const MainWrapper = tw.div``;
const Main = tw.main``;

//######################### COMPONENT #######################################################
const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Meta />
      <Navbar />
      <MainWrapper>
        <Main>{children}</Main>
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
