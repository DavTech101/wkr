import tw from 'twin.macro';
import Meta from '@components/core/Meta';
import Widget from '@componentLib/widget';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`flex justify-center min-h-[80vh] py-10`;

//######################### COMPONENT ######################################################

const Home: NextPage<Props> = () => {
  return (
    <>
      <Meta title='Homepage' />
      <Wrapper>
        <Widget />
      </Wrapper>
    </>
  );
};

export default Home;
