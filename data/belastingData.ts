//######################### BELASTING INTERFACE ############################################
interface IBelastingData {
  [key: string]: {
    meerRuimteRente: number;
    vrijeRuimteRente: number;
    vrijeRuimteLimit: number;
  };
}

//######################### BELASTING JAREN ################################################
export const belastingJaren: string[] = [
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
];

//######################### BELASTING DATA #################################################
export const belastingData: IBelastingData = {
  '2020': {
    vrijeRuimteLimit: 400_000,
    vrijeRuimteRente: 0.03,
    meerRuimteRente: 0.0118,
  },
  '2021': {
    vrijeRuimteLimit: 400_000,
    vrijeRuimteRente: 0.03,
    meerRuimteRente: 0.0118,
  },
  '2022': {
    vrijeRuimteLimit: 400_000,
    vrijeRuimteRente: 0.017,
    meerRuimteRente: 0.0118,
  },
  '2023': {
    vrijeRuimteLimit: 400_000,
    vrijeRuimteRente: 0.03,
    meerRuimteRente: 0.0118,
  },
  '2024': {
    vrijeRuimteLimit: 400_000,
    vrijeRuimteRente: 0.0192,
    meerRuimteRente: 0.0118,
  },
};

export default belastingData;
