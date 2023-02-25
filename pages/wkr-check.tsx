import tw from 'twin.macro';
import Meta from '@components/core/Meta';
import H1Title from '@componentLib/H1Title';
import CheckWidget from '@widgets/CheckWidget';
import checkPageData from '@data/checkPageData';
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

const WKRCheck: NextPage<Props> = () => {
  return (
    <>
      <Meta title='Homepage' />
      <Wrapper>
        <InnerWrapper>
          <H1Title title={checkPageData.title} />

          <CheckWidget data={checkPageData.widget} />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default WKRCheck;
