import berekenBedragen from '@utils/berekenBedragen';
import { createContext, useContext, useState } from 'react';
import belastingData, { belastingJaren } from '@data/belastingData';

//######################### COMPONENT TYPES ################################################
interface StateProps {
  children?: React.ReactNode;
}

interface IWKRContext {
  loonsom: number;
  gaDoor: boolean;
  totaalBedrag: number;
  belastingJaar: string;
  meerRuimteRente: number;
  meerRuimteBedrag: number;
  vrijeRuimteLimit: number;
  vrijeRuimteRente: number;
  vrijeRuimteBedrag: number;
  setGaDoor: (gaDoor: boolean) => void;
  setLoonsom: (loonsom: number) => void;
  handleBelastingJaar: (jaar: string, som: number) => void;
}

//######################### UTILITIES ######################################################
const WKRContext = createContext<IWKRContext | null>(null);

export const useStateContext = () => {
  const wkrContext = useContext(WKRContext);
  if (!wkrContext)
    throw new Error('No Context.Provider found when calling useContext.');

  return wkrContext;
};

//######################### COMPONENT ######################################################
const StateContext: React.FC<StateProps> = ({ children }) => {
  const [loonsom, setLoonsom] = useState(0);
  const [gaDoor, setGaDoor] = useState(false);
  const [totaalBedrag, setTotaalBedrag] = useState(0);
  const [meerRuimteRente, setMeerRuimteRente] = useState(0);
  const [vrijeRuimteLimit, setVrijeRuimteLimit] = useState(0);
  const [vrijeRuimteRente, setVrijeRuimteRente] = useState(0);
  const [meerRuimteBedrag, setMeerRuimteBedrag] = useState(0);
  const [vrijeRuimteBedrag, setVrijeRuimteBedrag] = useState(0);
  const [belastingJaar, setBelastingJaar] = useState(belastingJaren[0]);

  const handleBelastingJaar = (jaar: string, som: number) => {
    setLoonsom(som);
    console.log(som);
    const jaarData = belastingData[jaar];

    setBelastingJaar(jaar);
    setMeerRuimteRente(jaarData.meerRuimteRente);
    setVrijeRuimteLimit(jaarData.vrijeRuimteLimit);
    setVrijeRuimteRente(jaarData.vrijeRuimteRente);
    const obj = berekenBedragen(
      loonsom,
      jaarData.meerRuimteRente,
      jaarData.vrijeRuimteRente,
      jaarData.vrijeRuimteLimit
    );

    setMeerRuimteBedrag(obj.meerRuimteBedrag);
    setVrijeRuimteBedrag(obj.vrijeRuimteBedrag);
    setTotaalBedrag(obj.totaalBedrag);
    setGaDoor(true);
  };

  const wkrContext: IWKRContext = {
    gaDoor,
    loonsom,
    setGaDoor,
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
