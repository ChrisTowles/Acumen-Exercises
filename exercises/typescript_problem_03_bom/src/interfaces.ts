
export interface BillOfMaterial {
    part_num: string;
    sub_part_num: string | null;
    quantity_required: number;
}
  
export interface Sale {
    part_num: string;
    total_quantity_sold: number;
}


/**
 * SalesReport - Expected shape of results returned from generate_report()
 * Example:
 * {
 *  "X-Wing": 100,
 *  "Tie Fighter": 200,
 *  "Max Engine": 800,
 *  ...
 * }
 */
export interface SalesReport {
    [key: string]: number;
}
  