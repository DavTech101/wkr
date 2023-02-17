import Head from 'next/head';

//######################### COMPONENT TYPES ################################################
const defaultProps = {
  title: 'New Project',
  keywords: 'Millionaire road',
  description: 'Process and sava data',
};

type Props = {
  description: string;
  keywords: string;
  title: string;
} & typeof defaultProps;

//######################### COMPONENT STYLES ###############################################

//######################### COMPONENT ######################################################
const Meta = ({ description, keywords, title }: Props) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link rel='icon' href='../favicon.ico' />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = defaultProps;

export default Meta;
