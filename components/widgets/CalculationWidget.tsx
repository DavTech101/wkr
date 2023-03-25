import tw from 'twin.macro';
import formatValue from '@utils/formatValue';
import { useStateContext } from '@context/StateContext';

//######################### COMPONENT TYPES ################################################
type Props = {
  data: any;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`bg-white rounded-lg min-w-[25rem] md:min-w-[35rem] 
                      max-w-lg drop-shadow-md shadow-2xl overflow-hidden`;

const Upper = tw.div`flex justify-center items-center bg-custom-red 
                    rounded-t-lg py-2 text-white`;
const Title = tw.div`flex flex-col justify-center items-center py-3 text-sm font-bold`;

const Lower = tw.div`flex flex-col gap-4 p-5`;
const Row = tw.div`flex justify-between items-center`;
const RowColumn = tw.div`flex items-center flex-1 basis-full gap-2 min-w-[20rem]`;
const RCExtra = tw(RowColumn)`justify-center`;

const TotaalSpan = tw(RowColumn)`border-t-2 border-custom-blue`;

//######################### COMPONENT ######################################################

const CalculationWidget: React.FC<Props> = ({ data }) => {
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
        <Title>
          Berekening {data.title} - {belastingJaar}
        </Title>
      </Upper>

      <Lower>
        <Row>
          <RowColumn>{data.column1}</RowColumn>
          <RowColumn>{data.column2}</RowColumn>
        </Row>
        <Row>
          <RowColumn>{`€ ${formatValue(vrijeRuimteLimit)}`}</RowColumn>
          <RCExtra>
            <span>€ {formatValue(vrijeRuimteBedrag)}</span>
            <span>€ {formatValue(vrijeRuimteBedrag)}</span>
          </RCExtra>
        </Row>
        <Row>
          <RowColumn>{`Vanaf € ${formatValue(
            vrijeRuimteLimit + 1
          )}`}</RowColumn>
          <RowColumn>€ {formatValue(meerRuimteBedrag)}</RowColumn>
        </Row>
        <Row>
          <RowColumn>Totaal</RowColumn>

          <TotaalSpan> € {formatValue(totaalBedrag)} </TotaalSpan>
        </Row>
      </Lower>
    </Wrapper>
  );
};

export default CalculationWidget;
