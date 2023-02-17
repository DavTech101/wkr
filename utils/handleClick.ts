import { NextRouter } from 'next/router';

const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  keyword: string,
  router: NextRouter,
  location?: string
) => {
  e.preventDefault();

  const queryObj = {
    keyword,
    ...(location && { location }),
  };

  router.push({
    pathname: '/search',
    query: queryObj,
  });
};

export default handleClick;
