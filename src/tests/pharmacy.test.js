import { Drug, Pharmacy } from "../pharmacy";

describe("Pharmacy", () => {
  // Normal cases
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease the benefit twice and expiresIn be negatif", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });
  it("should decrease the benefit and expiresIn but the benefit is never negative", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });
  // Herbal Tea case
  it("Herbal Tea increases his Benefit the older it gets", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("The Benefit of an item is never more than 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });
  // Magic Pill case
  it("Magic Pill never expires nor decreases in Benefit", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 25, 25)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 25, 25)]
    );
  });
  // Fervex case
  it("Fervex benefit's increases by 1 when expiresIn > 10", () => {
    expect(new Pharmacy([new Drug("Fervex", 11, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 11)]
    );
  });
  it("Fervex benefit's increases by 2 when expiresIn <= 10", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 12)]
    );
  });
  it("Fervex benefit's increases by 3 when expiresIn <= 5", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 33)]
    );
  });
  it("Fervex benefit's drop to 0 when expiresIn = 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
  // Dafalgan case
  it("Dafalgan degrades in Benefit twice as fast as normal drugs", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 9, 8)]
    );
  });
});
