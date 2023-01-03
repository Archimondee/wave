export interface QueueDataType {
  data: {
    url: string;
    actionType: string;
    type: "GET" | "PUT" | "POST" | "DELETE";
    dataRealm: "Novel" | "Category";
    param?: string;
    token?: string;
    limit?: number;
    page?: number;
  };
}
