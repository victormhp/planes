"use client"

import { Plane } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Plane>[] = [
  {
    accessorKey: "tailnum",
    header: () => <div className="text-center">Tail Number</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("tailnum")}</div>
    },
  },
  {
    accessorKey: "year",
    header: () => <div className="text-center">Year</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("year")}</div>
    },
  },
  {
    accessorKey: "type",
    header: () => <div className="text-center">Type</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("type")}</div>
    },
  },  {
    accessorKey: "manufacturer",
    header: () => <div className="text-center">Manufacturer</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("manufacturer")}</div>
    },
  },  {
    accessorKey: "model",
    header: () => <div className="text-center">Model</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("model")}</div>
    },
  },  
  {
    accessorKey: "engines",
    header: () => <div className="text-center">Engines</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("engines")}</div>
    },
  }, 
  {
    accessorKey: "seats",
    header: () => <div className="text-center">Seats</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("seats")}</div>
    },
  },  
  {
    accessorKey: "speed",
    header: () => <div className="text-center">Speed</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("speed")}</div>
    },
  },  
  {
    accessorKey: "engine",
    header: () => <div className="text-center">Engine</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("engine")}</div>
    },
  },
]