

let addEmployee = `
INSERT INTO 
emp
(firstName,lastName,email,dob,gender,education,company,experience,package)
VALUES 
(
?,?,?,?,?,?,?,?,?
);
`;

let getEmployee = `
SELECT * FROM emp
`;
let updateEmp =`
UPDATE emp
SET firstName = ?,lastName= ?,email= ?,dob= ?,gender= ?,education= ?,company= ?,experience= ?,package= ?
WHERE id=?
;
`;


let deleteEmp= `
DELETE FROM emp WHERE id=?;
`
module.exports={
    addEmployee,
    getEmployee,
    updateEmp,
    deleteEmp
}

