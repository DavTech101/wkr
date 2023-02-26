import tw from 'twin.macro';
import { useStateContext } from '@context/StateContext';
import formatValue from '@utils/formatValue';

//######################### COMPONENT TYPES ################################################
type Props = {
  data: any;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`bg-white rounded-lg min-w-[25rem] md:min-w-[35rem] 
                      max-w-lg drop-shadow-md shadow-2xl overflow-hidden`;

const Upper = tw.div`flex justify-center items-center bg-custom-blue 
                    rounded-t-lg py-2 text-white`;
const Title = tw.div`flex flex-col justify-center items-center py-3 text-sm font-bold`;

const Lower = tw.div`flex flex-col gap-4 p-5`;
const Row = tw.div`flex justify-between items-center`;
const RowColumn = tw.div`flex items-center flex-1 basis-full gap-2 min-w-[20rem]`;
const LargeCell = tw.div`flex basis-4/5`;
const SmallCell = tw.div``;

const TotaalSpan = tw(RowColumn)`border-t-2 border-custom-blue`;

//######################### COMPONENT ######################################################

const CheckWidget: React.FC<Props> = ({ data }) => {
  const {
    totaalBedrag,
    belastingJaar,
    vrijeRuimteLimit,
    meerRuimteBedrag,
    vrijeRuimteBedrag,
  } = useStateContext();

  return (
    <Wrapper>
      <Upper>
        <Title>{data.title}</Title>
      </Upper>

      <Lower>
        <Row>
          <RowColumn>{data.jaar}</RowColumn>
          <RowColumn>{belastingJaar}</RowColumn>
        </Row>
        <Row>
          <RowColumn>{`${data.vrijeRuimte} ${formatValue(
            vrijeRuimteLimit
          )}`}</RowColumn>
          <RowColumn>€ {formatValue(vrijeRuimteBedrag)}</RowColumn>
        </Row>
        <Row>
          <RowColumn>{`${data.meerRuimte} ${formatValue(
            vrijeRuimteLimit + 1
          )}`}</RowColumn>
          <RowColumn>€ {formatValue(meerRuimteBedrag)}</RowColumn>
        </Row>
        <Row>
          <RowColumn></RowColumn>

          <TotaalSpan> € {formatValue(totaalBedrag)} </TotaalSpan>
        </Row>
      </Lower>
    </Wrapper>
  );
};

export default CheckWidget;
