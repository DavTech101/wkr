import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import formatValue from '@utils/formatValue';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`bg-white rounded-lg w-96 max-w-lg drop-shadow-md shadow-2xl`;

const Upper = tw.div`bg-betcity-blue rounded-t-lg py-2 text-white flex justify-center items-center`;
const Lower = tw.div`px-5 pb-5`;

const Row = tw.div`flex flex-col gap-1 pt-5`;
const Title = tw.div`flex flex-col justify-center items-center py-3 text-sm font-bold`;

const LoonsomLabel = tw.label`font-bold text-xl`;
const Loonsom = styled.input`
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  ${tw`w-full p-2 text-xl font-bold rounded-lg border-2 border-betcity-blue`}
`;

//######################### COMPONENT ######################################################

const Widget: NextPage<Props> = () => {
  const limit = 400_000;
  const vrijeRuimte = 0.017;
  const vrijeRuimteMeerdere = 0.0118;
  const [loonsom, setLoonsom] = useState(0);
  const [overSom, setOverSom] = useState(0);
  const [underSom, setUnderSom] = useState(0);
  const [overValue, setOverValue] = useState(0);
  const [underValue, setUnderValue] = useState(0);

  const onChange = (value: string) => {
    const re = /^[0-9,.\b]+$/;

    // if value is not blank, then test the regex
    if (value === '' || re.test(value)) {
      setLoonsom(parseFloat(value));
      if (loonsom > limit) {
        setUnderSom(limit);
        setOverSom(loonsom - limit);
      } else {
        setUnderSom(loonsom);
        setOverSom(0);
      }

      setUnderValue(underSom * vrijeRuimte);
      setOverValue(overSom * vrijeRuimteMeerdere);
    }
  };

  return (
    <Wrapper>
      <Upper>
        <Title>WKR Berekening</Title>
      </Upper>
      <Lower>
        <Row>
          <LoonsomLabel htmlFor='loonsom'>Fiscale Loonsom</LoonsomLabel>
          <Loonsom
            id='loonsom'
            type='number'
            value={loonsom}
            placeholder='Fiscale Loonsom'
            onChange={(e: any) => onChange(e.target.value)}
          />
        </Row>
        <hr />
        <Row>Vrije Ruimte: {formatValue(vrijeRuimte * 100)}%</Row>
        <Row>
          Vrije Ruimte Meerdere: {formatValue(vrijeRuimteMeerdere * 100)}%
        </Row>
        <Row>Onder: € {formatValue(underValue)}</Row>
        <Row>Over: € {formatValue(overValue)}</Row>
        <Row>Totaal: € {formatValue(overValue + underValue)} </Row>
      </Lower>
    </Wrapper>
  );
};

export default Widget;
