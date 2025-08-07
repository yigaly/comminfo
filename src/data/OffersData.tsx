export type Offer = {
  title: string;
  description?: string;
  priceUSD?: number;
  priceEUR?: number;
  slotsAvailable?: number;
  galleryLink?: string;
  validity?: Date;
};

export const offersData: Offer[] = [
  {
    title: "Animation",
    description: `
I really want to get into animation, and I’m looking for a way to practice. If you have an idea for a short animation, I’d love to help you bring it to life! Experimental but cheap, we can discuss price together. Also giffs are available.
`,
    priceUSD: 0,
    slotsAvailable: 1,
  },
  {
    title: "Your own website!",
    description: `
Creating this website was a lot of fun, and I’d love to keep practicing. If you want a website but don’t want to deal with all the challenges I went through, let me build it for you!
It doesn’t have to be a commission page—it could be your own portfolio or any similar idea you have in mind. $60 one-time payment, and the website belongs to you forever!
`,
    priceUSD: 60,
    slotsAvailable: 2,
  },
];
