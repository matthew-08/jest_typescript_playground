export function add(x: number, y: number): number {
  return x + y;
}

export function mul(x: number, y: number): number {
  return x * y;
}

export function aCallback(data: 'option1' | 'option2') {
  return data
}
export type Callback = typeof aCallback;

