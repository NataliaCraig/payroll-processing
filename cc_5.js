// Employee array 
const employees = [
    {
    name: "Rylee", 
    hourlyRate: 20,
    hoursWorked: 38
    },
  {
    name: "Jackson",
    hourlyRate: 25,
    hoursWorked: 45
  },
{
    name: "Kara",
    hourlyRate: 18, 
    hoursWorked: 42
},
{
    name: "Elly",
    hourlyRate: 30,
    hoursWorked: 40
  }
];
//return pay for 40 hr
function calculateBasePay(rate, hours) {
  if (hours <= 40) {
    return rate * hours;
  } else {
    return rate * 40;
  }
}
//overtime pay
function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    let overtimeHours = hours - 40;
    return overtimeHours * rate * 1.5;
  } else {
    return 0;
  }
}
//gross pay taxes
function calculateTaxes(grossPay) {
  return grossPay * 0.15;  }
  function processPayroll(employee) {
  let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  let grossPay = basePay + overtimePay;

  //get tax amount
  let taxAmount = calculateTaxes(grossPay);

  //calculate net pay
  let netPay = grossPay - taxAmount;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
  
  //loop through
}
for (let employee of employees) {
  let payroll = processPayroll(employee);
  console.log(payroll);
}