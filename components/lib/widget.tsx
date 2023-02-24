import tw from 'twin.macro';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { NativeSelect, NumberInput } from '@mantine/core';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
type Props = {
  data: any;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`bg-white rounded-lg min-w-[25rem] md:min-w-[35rem] max-w-lg drop-shadow-md shadow-2xl`;

const Upper = tw.div`bg-custom-blue rounded-t-lg py-2 text-white flex justify-center items-center`;
const Lower = tw.div`flex flex-col gap-4 p-5`;

const Row = tw.div`flex justify-between items-center`;
const RowColumn = tw.div`flex items-center flex-1 basis-full max-w-[11rem] gap-2`;
const LargeCell = tw.div`flex basis-4/5`;
const SmallCell = tw.div``;

const Title = tw.div`flex flex-col justify-center items-center py-3 text-sm font-bold`;

const BerekenButton = tw.button`bg-custom-blue text-white mt-8
                                flex justify-center items-center mx-auto
                                rounded-lg py-2 px-4 text-sm font-bold`;

//######################### COMPONENT ######################################################

const Widget: NextPage<Props> = ({ data }) => {
  const [loonsom, setLoonsom] = useState(0);
  const [overSom, setOverSom] = useState(0);
  const [underSom, setUnderSom] = useState(0);
  const [overValue, setOverValue] = useState(0);
  const [underValue, setUnderValue] = useState(0);

  const onChange = (value: string) => {};

  return (
    <Wrapper>
      <Upper>
        <Title>{data.title}</Title>
      </Upper>
      <Lower>
        <Row>
          <RowColumn>{data.jaarTitle}</RowColumn>
          <RowColumn>
            <LargeCell>
              <NativeSelect data={data.jaren} withAsterisk />
            </LargeCell>
            <SmallCell>Info</SmallCell>
          </RowColumn>
        </Row>
        <Row>
          <RowColumn>{data.loonsomTitle}</RowColumn>
          <RowColumn>
            <LargeCell>
              <NumberInput
                hideControls
                withAsterisk
                defaultValue={0}
                value={loonsom}
                onChange={(value) => setLoonsom(value!)}
                placeholder={data.loonsomTitle}
              />
            </LargeCell>
            <SmallCell>Info</SmallCell>
          </RowColumn>
        </Row>

        <BerekenButton>{data.button}</BerekenButton>
      </Lower>
    </Wrapper>
  );
};

export default Widget;
