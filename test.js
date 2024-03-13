/*
Requirment 

Develop a function which calculate total salary of each employee and out as object which contain key as emp name and value as total salary 
*/

// Employee list
const emp = [
  { name: "a", sal: 200 },
  { name: "b", sal: 200 },
  { name: "a", sal: 500 },
  { name: "b", sal: 200 },
  { name: "c", sal: 300 },
];

const GetSalary = (empData) => {
  const newObj = {};
  empData.forEach((i) => {
    if (newObj[i.name]) {
      const existValue = newObj[i.name];
      newObj[i.name] = existValue + i.sal;
    } else {
      newObj[i.name] = i.sal;
    }
  });
  return newObj;
};

const newData = GetSalary(emp);
console.log(newData);
