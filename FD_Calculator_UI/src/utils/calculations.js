import { customerCategories } from '../constants/options';

export const calculateInterest = (formData) => {
  const principal = parseFloat(formData.principalAmount);
  const rate = getInterestRate(formData);
  const time = convertTenureToYears(formData);

  if (!principal || !rate || !time) {
    alert('Please fill in all required fields');
    return null;
  }

  let maturityAmount;
  let interest;

  if (formData.interestType === 'Simple') {
    interest = (principal * rate * time) / 100;
    maturityAmount = principal + interest;
  } else {
    // Compound interest - assuming quarterly compounding
    const n = 4; // quarterly
    maturityAmount = principal * Math.pow((1 + rate / (n * 100)), n * time);
    interest = maturityAmount - principal;
  }

  return {
    principal,
    interest: interest.toFixed(2),
    maturityAmount: maturityAmount.toFixed(2),
    effectiveRate: rate.toFixed(2)
  };
};

const getInterestRate = (formData) => {
  // Base interest rate
  let baseRate = 6.5;
  
  // Get bonus rates from customer categories
  const categoryRates = {};
  customerCategories.forEach(category => {
    const bonusValue = parseFloat(category.bonus.replace('%', '').replace('+', ''));
    categoryRates[category.name] = bonusValue;
  });
  
  // Add bonuses from selected categories
  const category1Bonus = categoryRates[formData.customerCategory1] || 0;
  const category2Bonus = categoryRates[formData.customerCategory2] || 0;
  
  return baseRate + category1Bonus + category2Bonus;
};

const convertTenureToYears = (formData) => {
  const tenure = parseFloat(formData.tenure);
  if (!tenure) return 0;

  switch (formData.tenureUnit) {
    case 'Days':
      return tenure / 365;
    case 'Months':
      return tenure / 12;
    case 'Years':
    default:
      return tenure;
  }
};