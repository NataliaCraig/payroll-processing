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