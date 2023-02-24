import tw from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {
  title: string;
  sub?: string;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`flex flex-col justify-center items-center gap-3 text-center`;

const Title = tw.h1`font-bold text-2xl sm:text-4xl  text-custom-red uppercase`;
const Sub = tw.h2`font-bold text-xl sm:text-2xl text-custom-red`;

//######################### COMPONENT ######################################################

const H1Title: React.FC<Props> = ({ title, sub }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {sub && <Sub> {sub}</Sub>}
    </Wrapper>
  );
};

export default H1Title;
