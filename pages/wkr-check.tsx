import tw from 'twin.macro';
import Meta from '@components/core/Meta';
import H1Title from '@componentLib/H1Title';
import CheckWidget from '@widgets/CheckWidget';
import { BaseInnerWrapper, BaseWrapper } from '@coreStyles';
import checkPageData, { calculationWidgetData } from '@data/checkPageData';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
import CalculationWidget from '@components/widgets/CalculationWidget';
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw(BaseWrapper)`flex-col gap-10`;

const InnerWrapper = tw(
  BaseInnerWrapper
)`justify-center items-center gap-20 mx-auto`;

const Row = tw.div`flex flex-col md:flex-row gap-10`;

//######################### COMPONENT ######################################################

const WKRCheck: NextPage<Props> = () => {
  return (
    <>
      <Meta title='Homepage' />
      <Wrapper>
        <InnerWrapper>
          <H1Title title={checkPageData.title} />
          <Row>
            <CheckWidget data={checkPageData.widget} />
            <CalculationWidget data={calculationWidgetData} />
          </Row>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default WKRCheck;
