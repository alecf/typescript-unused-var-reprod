export interface WithArgs<EA extends any[]> {
  aMethod(...args: EA);
}
