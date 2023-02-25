import tw from 'twin.macro';
import Meta from '@components/core/Meta';
import H1Title from '@componentLib/H1Title';
import HomeWidget from '@widgets/HomeWidget';
import homePageData from '@data/homePageData';
import { BaseInnerWrapper, BaseWrapper } from '@coreStyles';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw(BaseWrapper)`flex-col gap-10`;

const InnerWrapper = tw(
  BaseInnerWrapper
)`flex flex-col justify-center items-center gap-20 mx-auto`;
//######################### COMPONENT ######################################################

const Home: NextPage<Props> = () => {
  return (
    <>
      <Meta title='Homepage' />
      <Wrapper>
        <InnerWrapper>
          <H1Title title={homePageData.title} sub={homePageData.sub} />

          <HomeWidget data={homePageData.widget} />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Home;
