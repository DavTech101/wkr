const berekenBedragen = (
  loonsom: number,
  meerRuimteRente: number,
  vrijeRuimteRente: number,
  vrijeRuimteLimit: number
) => {
  let meerRuimteBedrag = 0;
  let vrijeRuimteBedrag = 0;

  if (loonsom <= vrijeRuimteLimit) {
    vrijeRuimteBedrag = loonsom * vrijeRuimteRente;
  } else {
    vrijeRuimteBedrag = vrijeRuimteLimit * vrijeRuimteRente;
    meerRuimteBedrag = (loonsom - vrijeRuimteLimit) * meerRuimteRente;
  }

  const obj = {
    meerRuimteBedrag,
    vrijeRuimteBedrag,
    totaalBedrag: meerRuimteBedrag + vrijeRuimteBedrag,
  };

  console.log(obj);

  return obj;
};

export default berekenBedragen;
