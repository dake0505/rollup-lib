import type { SizeType } from "../SizeContext";

export interface TableProps <RecordType> {
  dataSource?: [];
  bordered?: boolean;
  size?: SizeType;
}