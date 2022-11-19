interface Payload {
  data?: any;
}
interface Params {
  type: string;
  payload?: Payload;
}
export type Dispatch = (params: Params | void) => void;
