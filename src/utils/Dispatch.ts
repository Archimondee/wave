interface Payload {
  data?: any;
}
interface Params {
  type: string;
  payload?: Payload | any;
}
export type Dispatch = (params: Params | void) => void;
