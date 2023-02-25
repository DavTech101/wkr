import tw from 'twin.macro';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { pagesPathData } from '@data/pathData';
import { useStateContext } from '@context/StateContext';
import formErrorMessages from '@data/formErrorMessages';
import { NativeSelect, NumberInput } from '@mantine/core';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
type Props = {
  data: any;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`bg-white rounded-lg min-w-[25rem] md:min-w-[35rem] 
                      max-w-lg drop-shadow-md shadow-2xl`;

const Upper = tw.div`flex justify-center items-center bg-custom-blue 
                    rounded-t-lg py-2 text-white`;
const Title = tw.div`flex flex-col justify-center items-center py-3 text-sm font-bold`;

const Form = tw.form`flex flex-col gap-4 p-5`;

const Row = tw.div`flex justify-between items-center`;
const RowColumn = tw.div`flex items-center flex-1 basis-full max-w-[11rem] gap-2`;
const LargeCell = tw.div`flex basis-4/5`;
const SmallCell = tw.div``;

const ButtonWrapper = tw.div`bg-custom-blue text-white mt-8 cursor-pointer
                                flex justify-center items-center mx-auto
                                rounded-lg py-2 px-4 text-sm font-bold
                                hover:bg-custom-red
                                `;

const BerekenButton = tw.button`w-full h-full`;

//######################### COMPONENT ######################################################

const HomeWidget: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const loonsomNaam = 'loonsom';
  const belastingJaar = 'belastingJaar';
  const [event, setEvent] = useState<React.MouseEvent>();
  const { setLoonsom, handleBelastingJaar } = useStateContext();

  const form = useForm({
    initialValues: {
      [loonsomNaam]: 0,
      [belastingJaar]: data.belastingJaren[0],
    },

    validate: {
      [belastingJaar]: (value: any) => (value ? null : formErrorMessages.jaar),
      [loonsomNaam]: (value: any) =>
        /^\d+$/.test(value) && value > 0 ? null : formErrorMessages.number,
    },
  });

  const handleFormSubmit = async (values: any) => {
    event!.preventDefault();

    setLoonsom(values[loonsomNaam]);
    handleBelastingJaar(values[belastingJaar]);

    router.push(pagesPathData.wkrCheck.path);
  };

  return (
    <Wrapper>
      <Upper>
        <Title>{data.title}</Title>
      </Upper>
      <Form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
        <Row>
          <RowColumn>{data.jaarTitle}</RowColumn>
          <RowColumn>
            <LargeCell>
              <NativeSelect
                withAsterisk
                data={data.belastingJaren}
                {...form.getInputProps(belastingJaar)}
              />
            </LargeCell>
            <SmallCell>Info</SmallCell>
          </RowColumn>
        </Row>
        <Row>
          <RowColumn>{data.loonsomTitle}</RowColumn>
          <RowColumn>
            <LargeCell>
              <NumberInput
                min={0}
                withAsterisk
                hideControls
                defaultValue={0}
                placeholder={data.loonsomTitle}
                {...form.getInputProps(loonsomNaam)}
              />
            </LargeCell>
            <SmallCell>Info</SmallCell>
          </RowColumn>
        </Row>

        <ButtonWrapper onClick={(e) => setEvent(e)}>
          <BerekenButton type='submit'>{data.button}</BerekenButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default HomeWidget;
