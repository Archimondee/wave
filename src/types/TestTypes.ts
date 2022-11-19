export interface DataTestType {
  data: {
    bpi: {
      USD: {
        code: string;
        symbol: string;
        description: string;
        rate: string;
        rate_float: number;
      };
      GBP: {
        code: string;
        symbol: string;
        description: string;
        rate: string;
        rate_float: number;
      };
      EUR: {
        code: string;
        symbol: string;
        description: string;
        rate: string;
        rate_float: number;
      };
    };
    disclaimer: string;
  };
}
