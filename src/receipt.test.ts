import { describe, test, expect } from "@jest/globals";
import { addItem, deleteItem, total, tax, printReceipt } from "./fixed_receipt";

describe("Grocery Receipt Tests", () => {

  // Happy path: Calculate subtotal
  test("calculates subtotal", () => {
    expect(total()).toBeCloseTo(47.49, 2);
  });

  // Happy path: Calculate total with tax
  test("calculates total with 10% tax", () => {
    expect(tax(0.10)).toBeCloseTo(52.24, 2);
  });

  // Edge case: No tax
  test("calculates total with zero tax", () => {
    expect(tax(0)).toBeCloseTo(47.49, 2);
  });

  // Happy path: Add an item
  test("adds an item to the grocery list", () => {
    const before = total();
    addItem("milk", 3.50);
    expect(total()).toBeCloseTo(before + 3.50, 2);
  });

  // Unhappy path: Delete an item that does not exist
  test("does not delete an item that doesn't exist", () => {
    const before = total();
    deleteItem("oranges");
    expect(total()).toBeCloseTo(before, 2);
  });

  // Happy path: Delete an existing item
  test("deletes an item from the grocery list", () => {
    const before = total();
    deleteItem("eggs");
    expect(total()).toBeCloseTo(before - 6.75, 2);
  });

  // Happy path: Print receipt
  test("prints receipt without errors", () => {
    expect(() => printReceipt(0.10)).not.toThrow();
  });

});
