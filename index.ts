import inquirer from 'inquirer'
import { faker } from '@faker-js/faker';

//user data
//atm func
//atm func

interface User{
    id: number
    name: string
    pin: number
    accountNumber: number
    balance: number
}
const createUser = ()=>{
    let users: User[]= []
 for(let i=0; i<5; i++){  //10 users  ka data ayega
      let user: User={
        id: i,
        pin: 1000 + i,
        name: faker.person.fullName(),
        accountNumber: Math.floor(10000000 * Math.random()*80000),
        balance: 100000* i
      }
      users.push(user)
 }

    return users

};


//atm machine

const atmMachine = async (users:User[])=>{

  const rsp = await inquirer.prompt([{
     type: "number",
     message: "Enter your pin",
     name: "pin"}
  ]);

console.log("Welcome")
  console.log(rsp);

  const user = users.find(val=> val.pin == rsp.pin)
  if (user){
    console.log(`welcome ${user.name}`);
    atmfunc(user)
    return
  }
  console.log("Invalid PIN")
};
//atm func
 const atmfunc =async (user : User)=>{
    const ans = await inquirer.prompt({
         type: "list",
         name: "select",
         choices: ["withdraw", "balance","exit"]
    })

    if (ans.select == "withdraw"){
      const amt = await inquirer.prompt({
        type: "number",
        message: "Enter amount",
        name: "rupee"
      })
      if (amt.rupee > user.balance) {
        return console.log("insufficient balance")
      }
    
      console.log(`withdraw amount: ${amt.rupee}`)
      console.log(`balance: ${user.balance-amt.rupee}`)
    }
    if (ans.select == "balance"){
      console.log(`balance: ${user.balance}`)
      return
    }
    if (ans.select == "exit"){
      console.log("THANK YOU")
    }
    console.log(ans)
}

const users = createUser()
atmMachine(users)

 console.log(users)




 



