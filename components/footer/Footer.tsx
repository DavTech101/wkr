import tw from 'twin.macro';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`flex justify-center items-center p-5 bg-betcity-blue text-white`;

//######################### COMPONENT ######################################################

const Footer: NextPage<Props> = () => {
  return <Wrapper>Footer</Wrapper>;
};

export default Footer;
