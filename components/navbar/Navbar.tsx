import Link from 'next/link';
import paths from '@data/pathData';
import tw, { styled } from 'twin.macro';
import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BaseInnerWrapper, XPadding, YPadding } from '@coreStyles';

//######################### COMPONENT TYPES ################################################
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = styled.header`
  ${tw`text-lg text-white`}
  ${tw`mb-10 bg-custom-blue`}
`;
const Nav = styled.nav`
  ${XPadding}
  ${YPadding}
  ${`w-full`}
`;

const InnerWrapper = tw(BaseInnerWrapper)`relative items-start 
                                  justify-between mx-auto
                                  lg:(flex-row items-center)`;

const Logo = tw.div`relative py-1 cursor-pointer font-bold text-2xl`;

const Hamburger = styled.div`
  ${tw`absolute top-2 right-0 py-2 px-3`}
  ${tw`flex ml-auto text-xl rounded`}
  ${tw`sm:(top-5 text-2xl) lg:(hidden)`}
  ${tw`transition-all duration-300 ease-in cursor-pointer`}
  ${tw`hover:(border-blue-600 text-red-600 bg-red-100)`}
`;

const NavbarLinks = styled.div`
  ${tw`mx-auto lg:(mx-0)`}

  ul {
    ${tw`flex-col transition-all ease-in-out duration-700`}
    ${tw`lg:(flex flex-row py-0) text-center w-full py-5`}
  }

  li {
    ${tw`block py-2 px-3 cursor-pointer rounded font-semibold`}
    ${tw`transition duration-300 ease-out`}
    ${tw`hover:(bg-custom-blue)`}
  }
`;

//######################### COMPONENT ######################################################
const Navbar: React.FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  // useEffect(() => {}, [isActive]);
  return (
    <Wrapper>
      <Nav>
        <InnerWrapper>
          <Link href='/'>
            <Logo onClick={() => setIsActive(false)}>DWKR</Logo>
          </Link>
          <Hamburger onClick={() => setIsActive(!isActive)}>
            <AiOutlineMenu />
          </Hamburger>
          <NavbarLinks>
            <ul css={[isActive ? tw`flex` : tw`hidden`]}>
              {paths.map((path, index) => (
                <li key={index} onClick={() => setIsActive(false)}>
                  <Link href={path.path}>{path.name}</Link>
                </li>
              ))}
            </ul>
          </NavbarLinks>
        </InnerWrapper>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
