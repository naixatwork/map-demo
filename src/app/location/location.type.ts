export interface Location {
  id: number;
  name: string;
  coordinates: { lat: number, lng: number },
  type: { value: "university" | "cafe" | "store" | "business" };
  imageUrl: { value: string };
}

/*
*
*
{lat: 51.52480999771798, lng: -0.14479637145996097}
*
* */
