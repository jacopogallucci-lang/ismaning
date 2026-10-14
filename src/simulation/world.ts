export const MAP_SIZE = 64;

export interface World {
  readonly width: number;
  readonly height: number;
  readonly terrain: readonly 'grass'[];
}

export function createWorld(): World {
  return {
    width: MAP_SIZE,
    height: MAP_SIZE,
    terrain: Array<'grass'>(MAP_SIZE * MAP_SIZE).fill('grass'),
  };
}
