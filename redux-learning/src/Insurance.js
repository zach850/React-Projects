// People dropping off a form (Action Creators)
// This is always look like this!
const createPolicy = (name, amount) => {
  return {
    //Action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

//Dispatch is part of the redux library

//Reducers (Departments) Every Reducer is always a function that gets 2 arguments
//if value is undefined it will be replaced with an empty array []

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    //we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }

  //we dont care about the action (form!!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }

  return listOfPolicies;
};

//Redux library
const { createStore, combineReducers } = Redux;
 
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies,
});

const store = createStore(ourDepartments);

const action = createPolicy(Zach, 20);

store.dispatch(action);
store.dispatch(createClaim('Zach', 120))
store.dispatch(createClaim("Jim", 50));
store.dispatch(deletePolicy('Bob'))
store.getState();
