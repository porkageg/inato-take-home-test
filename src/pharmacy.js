export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

function computeBenefitLoss(drug) {
  let loss
  switch(drug.name) {
    case "Magic Pill":
      loss = 0;
      break;
    case "Herbal Tea":
      loss = 1
      break;
    case "Fervex":
      if (drug.expiresIn <= 0) {
        loss = -1 * drug.benefit
      } else if (drug.expiresIn <= 5) {
        loss = 3
      } else if (drug.expiresIn <= 10) {
        loss = 2
      } else {
        loss = 1
      }
      break;
    case "Dafalgan":
      loss = -2
      break;
    default:
      loss = -1
  }
  return loss
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      // Compute loss
      const loss = computeBenefitLoss(this.drugs[i])

      // Decrease expireIn
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }

      // Update benefit
      if (this.drugs[i].expiresIn < 0 && loss < 0) {
        this.drugs[i].benefit += loss * 2
      } else {
        this.drugs[i].benefit += loss
      }

      // Check bebefit final value 0 =< b <= 50
      this.drugs[i].benefit = this.drugs[i].benefit > 0 ? this.drugs[i].benefit : 0
      this.drugs[i].benefit = this.drugs[i].benefit < 50 ? this.drugs[i].benefit : 50
    }
    return this.drugs;
  }
}
