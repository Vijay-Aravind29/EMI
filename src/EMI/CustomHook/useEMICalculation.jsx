import { useMemo } from 'react';

const useEMICalculation = (principal, annualRate, tenureYears) => {
  return useMemo(() => {
    const monthlyRate = annualRate / 12 / 100;
    const tenureMonths = tenureYears * 12;
    
    if (monthlyRate === 0) {
      const emi = principal / tenureMonths;
      const schedule = [];
      let balance = principal;
      
      for (let month = 1; month <= tenureMonths; month++) {
        const principalPayment = emi;
        balance -= principalPayment;
        
        schedule.push({
          month,
          payment: emi,
          principal: principalPayment,
          interest: 0,
          balance: Math.max(0, balance)
        });
      }
      
      return { emi, schedule };
    }
    
    const emi = principal * monthlyRate * 
      Math.pow(1 + monthlyRate, tenureMonths) / 
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    
    // Generate amortization schedule
    let balance = principal;
    const schedule = [];
    
    for (let month = 1; month <= tenureMonths; month++) {
      const interest = balance * monthlyRate;
      const principalPayment = emi - interest;
      balance -= principalPayment;
      
      schedule.push({
        month,
        payment: emi,
        principal: principalPayment,
        interest,
        balance: Math.max(0, balance)
      });
    }
    
    return { emi, schedule };
  }, [principal, annualRate, tenureYears]);
};

export default useEMICalculation;