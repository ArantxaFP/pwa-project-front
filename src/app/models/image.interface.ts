export interface Image {
  id: string;               // Nom del campió de LoL
  name: string;             // Nom complet del campió
  title: string;            // Títol del campió
  blurb: string;            // Descripció curta
  image: {
    full: string;           // Nom del fitxer d'imatge (ex: "Aatrox.png")
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}
