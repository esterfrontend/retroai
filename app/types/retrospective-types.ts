export interface RetrospectiveType {
  success: boolean,
  data: IColumns | IQuadrant | IFree
  timestamp: string
}

export interface Column {
  id: string,
  label: string,
  description: string,
  color: string
}

export interface IColumns {
  retroType: "columns",
  columns: Column[],
  instructions: string,
  suggestions: string
}

export interface IQuadrant {
  retroType: "quadrant",
  columns: Column[],
  instructions: string,
  suggestions: string,
  metadata: {
    layout: "grid",
    rows: number,
    columns: number
  }
}

export interface IFree {
  retroType: "free",
  columns: Column[],
  instructions: string,
  suggestions: string
}