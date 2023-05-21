// 1 typeof

function calculate<A extends number | string, B extends number | string>(
  a: A,
  b: B
): number | string | undefined {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }

  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return;
}

// 2

function sum(a: number, b?: { c?: number }): number {
  return b?.c !== undefined ? a + b.c : a;
}

// 3

function calculate2(
  a: number | string,
  b: number | boolean
): number | string | undefined {
  if (a === b) {
    return a + b;
  }

  return;
}

// 4

interface Dog {
  bark(): void;
}

interface Wolf {
  bark(): void;
  jump(): void;
}

interface Cat {
  meow(): void;
}

function makeSomeNoise(animal: Dog | Cat | Wolf) {
  if ("bark" in animal) {
    animal.bark();

    if ("jump" in animal) {
      animal.jump();
    }
  } else {
    animal.meow();
  }
}

// 5

function getStringDate(date: Date | string) {
  if (date instanceof Date) {
    return date.toUTCString();
  }

  return date;
}

// 6

interface Movie {
  title: string;
  releaseYear: number;
}

function customFetch(url: string): unknown {
  throw "";
}

function isMovie(entity: unknown): entity is Movie {
  const movie = entity as Movie | undefined;

  return (
    typeof movie?.title === "string" && typeof movie?.releaseYear === "number"
  );
}

function getMovie(): Movie | undefined {
  const movie = customFetch("/api/movie");

  if (isMovie(movie)) {
    return movie;
  }

  return;
}

// 7

interface Film {
  __typename: "Film";
  title: string;
  duration: number;
}

interface TvSeries {
  __typename: "TVSeries";
  title: string;
  seriesDuration: number;
  seriesCountInSeason: number;
  seasonCount: number;
}

interface MiniTvSeries {
  __typename: "MiniTVSeries";
  title: string;
  seriesDuration: number;
  seriesCount: number;
}

function getDuration(movie: Film | TvSeries | MiniTvSeries) {
  if (movie.__typename === "Film") {
    return movie.duration;
  }
  if (movie.__typename === "TVSeries") {
    const { seriesDuration, seasonCount, seriesCountInSeason } = movie;
    return seasonCount * seriesDuration * seriesCountInSeason;
  }

  return movie.seriesCount * movie.seriesDuration;
}
