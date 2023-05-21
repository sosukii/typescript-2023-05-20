export function hello(name: string) {
  console.log(`Hello, ${name}`);
}

interface Dog {
  weight: number;
  color: string;
  name?: string;
}
interface Cat {
  weight: number;
  color: string;
  name?: string;
  owner: {
    name: string;
  };
}

type PartialEntity<Entity> = {
  [Property in keyof Entity]?: Entity[Property];
};

type PartialDog = PartialEntity<Dog>;
type PartialCat = PartialEntity<Cat>;

interface Response<Data> {
  status: "success" | "error" | 200;
  errorDetails: string;
  data: Data;
}

interface Movie {
  id: string;
  title: string;
  releaseYear: number;
}

interface User {
  name: string;
  birthDate: string;
}

function fetch<Result, Param extends any[] = []>(...params: Param): Result {
  throw "";
}

function fetchMovie(movieId: string): Response<Movie> {
  return fetch<Response<Movie>, [string]>(movieId);
}

function fetchUsers(): Response<User[]> {
  return fetch<Response<User[]>>();
}

function fetch2<Result, Param extends {} = never>(params?: Param): Result {
  throw "";
}

function fetchMovie2(movieId: string): Response<Movie> {
  return fetch2<Response<Movie>, { movieId: string }>({ movieId });
}

function fetchUsers2(): Response<User[]> {
  return fetch2<Response<User[]>>();
}

const movie = fetchMovie("21312312asd").data;
const users = fetchUsers().data;

console.log(movie.title);

console.log("first user name", users[0]?.name);

// class Node<Position> {
//   position: Position;

//   constructor(startPosition: Position) {
//     this.position = startPosition;
//   }

//   getPosition(): Position {
//     return this.position;
//   }
// }

// new Node<{ x: number; y: number }>({ y: 456, x: 132 });
// new Node<{ x: number; y: number; z: number }>({ x: 132, y: 456, z: 789 });

function calculate<A extends number, B extends number>(a: A, b: B): number {
  return a + b;
}

calculate<1 | 45 | 75, 23 | 98 | 100>(45, 23);

function getProperty<Entity, Property extends keyof Entity>(
  entity: Entity,
  propertyKey: Property
): Entity[Property] {
  return entity[propertyKey];
}

getProperty<{ a: string }, "a">({ a: "" }, "a");

type Size = "s" | "m" | "l" | "xl";

const buttonStyles: Record<Size, string> = {
  s: "sButton",
  m: "mButton",
  l: "lButton",
  xl: "xlButton",
};

interface Props {
  title: string;
  releaseYear: number;
  className?: string;
  position: "fixed";
}

// Pick<Props, 'className' | 'position'> => { className?: string; position: 'fixed';}

// Partial<Pick<Props, 'className' | 'position'>> => { className?: string; position?: 'fixed';}

// Omit<Props, 'className' | 'position'> => { title: string; releaseYear: number;}

/*
 * Omit<Props, 'className' | 'position'> & Partial<Pick<Props, 'className' | 'position'>>
 *   => { title: string; releaseYear: number;} & { className?: string; position?: 'fixed';}
 *   => {title: string; releaseYear: number; className?: string; position?: 'fixed';}
 */

/*
 * Omit<Props, 'className' | 'position'> & Partial<Pick<Props, 'className' | 'position'>>
 *   => { title: string; releaseYear: number;} & { className?: string; position?: 'fixed';}
 *   => {title: string; releaseYear: number; className?: string; position?: 'fixed';}
 */
type PartialProps = Omit<Props, "className" | "position"> &
  Partial<Pick<Props, "className" | "position">>;

// const Movie = ({title}: Props) => {
//     return ...;
// }

// const MovieContainer = ({...props}: PartialProps) => {
//     const title = props.title || getTitle();
//     const releaseYear = props.releaseYear || getReleaseYear();

//     return <Movie title={title} releaseYear={releaseYear} {...props} />
// }
