const homePageData = {
  title: 'Doe je werkkostenregeling (WKR) check',
  sub: 'Vrije ruimte berekenen',
  widget: {
    title: 'Check je WKR ruimte NU!',
    jaarTitle: 'Belastingjaar',
    loonsomTitle: 'Totale Loonsom',
    jaren: ['2020', '2021', '2022', '2023', '2024'],
    button: 'Berekenen',
  },
};

export const jarenData = {
  2020: {
    limiet: 400_000,
    vrije_ruimte: 0.03,
    meer_ruimte: 0.0118,
  },
  2021: {
    limiet: 400_000,
    vrije_ruimte: 0.03,
    meer_ruimte: 0.0118,
  },
  2022: {
    limiet: 400_000,
    vrije_ruimte: 0.017,
    meer_ruimte: 0.0118,
  },
  2023: {
    limiet: 400_000,
    vrije_ruimte: 0.03,
    meer_ruimte: 0.0118,
  },
  2024: {
    limiet: 400_000,
    vrije_ruimte: 0.0192,
    meer_ruimte: 0.0118,
  },
};

export default homePageData;
