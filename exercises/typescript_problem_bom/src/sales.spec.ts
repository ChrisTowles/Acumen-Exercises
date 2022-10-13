import {describe, it, expect } from 'vitest';
import type { BillOfMaterial, Sale, SalesReport } from "./interfaces";
import { materialList, sales } from "./sales-data";


/**
 * For a given list of BOMs and a list of Sales determines the
 * required amount of all materials to satisfy the sales totals.
 *
 * @param {BillOfMaterials[]} boms - An array of Bill of Materials that describe what items depend on others
 * @param {Sale[]} sales - An Array of Sales that describe how many top level items are sold
 *
 * @return {SalesReport} - The result object, containing the total number of each material required to satisfy the sales totals.
 */
function generate_report(boms: BillOfMaterial[], sales: Sale[]): SalesReport {

  // <-- ADD YOUR CODE HERE

  throw new Error("Function Not Implemented");
}

describe("Test Sales Report", () => {
  it("test data loaded", () => {
    expect(materialList.length).toBe(11);
    expect(sales.length).toBe(2);
  })

  it("should generate", () => {

    let results = generate_report(materialList, sales);
    expect(results["X-Wing"]).toBe(100);
    expect(results["Tie Fighter"]).toBe(200);
    expect(results["Max Engine"]).toBe((100 * 4) + (200 * 2));
    expect(results["Thruster"]).toBe((100 * 4 * 4) + (200 * 2 * 4));
  });
});
