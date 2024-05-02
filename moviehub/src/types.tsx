export interface Movie {
    id: number;
    name: string;
    poster: {
      previewUrl: string;
    };
    rating: {
      kp: number;
    };
    year: number;
    description: string;
  }