import tw from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`flex justify-center items-center p-5 bg-betcity-blue text-white`;

//######################### COMPONENT ######################################################

const Navbar: React.FC<Props> = () => {
  return <Wrapper>Navbar</Wrapper>;
};

export default Navbar;
