export interface TableStructure {
  id: string;
  propertyPath: string;
}

export interface TableRecordData {
  record: unknown;
  index: number;
  data: unknown;
}
