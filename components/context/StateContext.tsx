import belastingData, { belastingJaren } from '@data/belastingData';
import { createContext, useContext, useState } from 'react';

//######################### COMPONENT TYPES ################################################
interface StateProps {
  children?: React.ReactNode;
}

interface IWKRContext {
  loonsom: number;
  totaalBedrag: number;
  belastingJaar: string;
  meerRuimteRente: number;
  meerRuimteBedrag: number;
  vrijeRuimteLimit: number;
  vrijeRuimteRente: number;
  vrijeRuimteBedrag: number;
  setLoonsom: (loonsom: number) => void;
  handleBelastingJaar: (jaar: string) => void;
}

//######################### UTILITIES ######################################################
const WKRContext = createContext<IWKRContext | null>(null);

export const useStateContext = () => {
  const wkrContext = useContext(WKRContext);
  if (!wkrContext)
    throw new Error(
      'No GridItemContext.Provider found when calling useGridItemContext.'
    );

  return wkrContext;
};

//######################### COMPONENT ######################################################
const StateContext: React.FC<StateProps> = ({ children }) => {
  const [loonsom, setLoonsom] = useState(0);
  const [totaalBedrag, setTotaalBedrag] = useState(0);
  const [meerRuimteRente, setMeerRuimteRente] = useState(0);
  const [vrijeRuimteLimit, setVrijeRuimteLimit] = useState(0);
  const [vrijeRuimteRente, setVrijeRuimteRente] = useState(0);
  const [meerRuimteBedrag, setMeerRuimteBedrag] = useState(0);
  const [vrijeRuimteBedrag, setVrijeRuimteBedrag] = useState(0);
  const [belastingJaar, setBelastingJaar] = useState(belastingJaren[0]);

  const berekenBedragen = () => {
    if (loonsom <= vrijeRuimteLimit) {
      setMeerRuimteBedrag(0);
      setVrijeRuimteBedrag(loonsom * vrijeRuimteRente);
    } else {
      setVrijeRuimteBedrag(vrijeRuimteLimit * vrijeRuimteRente);
      setMeerRuimteBedrag((loonsom - vrijeRuimteLimit) * meerRuimteRente);
    }

    setTotaalBedrag(meerRuimteBedrag + vrijeRuimteBedrag);
  };

  const handleBelastingJaar = (jaar: string) => {
    const jaarData = belastingData[jaar];

    setBelastingJaar(jaar);
    setMeerRuimteRente(jaarData.meerRuimteRente);
    setVrijeRuimteLimit(jaarData.vrijeRuimteLimit);
    setVrijeRuimteRente(jaarData.vrijeRuimteRente);
    berekenBedragen();
  };

  const wkrContext: IWKRContext = {
    loonsom,
    setLoonsom,
    totaalBedrag,
    belastingJaar,
    meerRuimteRente,
    meerRuimteBedrag,
    vrijeRuimteRente,
    vrijeRuimteLimit,
    vrijeRuimteBedrag,
    handleBelastingJaar,
  };

  return (
    <WKRContext.Provider value={wkrContext}>{children}</WKRContext.Provider>
  );
};

export default StateContext;
