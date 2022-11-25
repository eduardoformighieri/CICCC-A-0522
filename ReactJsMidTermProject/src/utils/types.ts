interface Location {
  name: string;
}

interface Origin {
  name: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  origin: Origin;
  location: Location;
  image: string;
}
