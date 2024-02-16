type Header = {
  title: string;
  key: string;
  sortable?: false;
  width?: number | string;
  removable?: false;
  align?: "center" | "start" | "end";
};

type HeaderProp = Header[];

type Paging = {
  page: number;
  per_page: number;
  total: number;
};

type TableProps = {
  headers: HeaderProp;
  data: any[];
  paging: Paging;
};

type DataResponse = {
  content: any[];
  page: number;
  perpage: number;
  total: number;
};

export type { Header, HeaderProp, TableProps, Paging, DataResponse };
