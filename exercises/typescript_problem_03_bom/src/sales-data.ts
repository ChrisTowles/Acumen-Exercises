import { BillOfMaterial, Sale } from "./interfaces";

// Bill of Material
// part_num      |  sub_part_num | quantity_required
// -------------------------------------------------
// X-Wing        | Max Engine    |  4
// X-Wing        | Airplane Body |  1
// Max Engine    | Metal Plate   |  2
// Max Engine    | Thruster      |  4
// Max Engine    | 2" Screw      |  10
// Airplane Body | Metal Plate   |  4
// Metal Plate   | null          |  1
// Thruster      | null          |  1
// 2" Screw      | null          |  1
// Tie Fighter   | Max Engine    |  2
// Tie Fighter   | Airplane Body |  1

// Sales
// part_num      | total_quantity_sold
// -----------------------------------
// X-Wing        | 100
// Tie Fighter   | 200


export const materialList: BillOfMaterial[] = [
  { part_num: "X-Wing", sub_part_num: "Max Engine", quantity_required: 4 },
  { part_num: "X-Wing", sub_part_num: "Airplane Body", quantity_required: 1 },
  { part_num: "Max Engine", sub_part_num: "Metal Plate", quantity_required: 2 },
  { part_num: "Max Engine", sub_part_num: "Thruster", quantity_required: 4 },
  { part_num: "Max Engine", sub_part_num: '2" Screw', quantity_required: 10 },
  { part_num: "Airplane Body", sub_part_num: "Metal Plate", quantity_required: 4, },
  { part_num: "Metal Plate", sub_part_num: null, quantity_required: 1 },
  { part_num: "Thruster", sub_part_num: null, quantity_required: 1 },
  { part_num: '2" Screw', sub_part_num: null, quantity_required: 1 },
  { part_num: "Tie Fighter", sub_part_num: "Max Engine", quantity_required: 2 },
  { part_num: "Tie Fighter", sub_part_num: "Airplane Body", quantity_required: 1, },
];

export const sales: Sale[] = [
  { part_num: "X-Wing", total_quantity_sold: 100 },
  { part_num: "Tie Fighter", total_quantity_sold: 200 },
];
