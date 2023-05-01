const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


function dicountChain(customer) {
  let  finalAmount = (customer.refills) * (customer.pricePerRefill);
    //console.log("initial total", finalAmount)
    //console.log("sub disc", finalAmount * 0.25)


  //If a customer has a cupon and a subscription, then the customer will receive a $10 discount after the subscription discount has been applied.
if(customer.subscription && customer.coupon){
  finalAmount -= (finalAmount * 0.25);
  finalAmount -= 10;
}
 //If a customer has a subscription, then the customer will receiver a 25% after the refill total has been calculated.
  else if(customer.subscription) {
   finalAmount -= (finalAmount * 0.25);
  }

//If a customer has a $10 cupon only, then it will recieve a 10 off.
  else if(customer.coupon) {
    finalAmount -= 10;
  }

//Finally, the customer should be able to see the grand total.
  return `Your grand total is ${finalAmount}.`; 
}


console.log(dicountChain(sarah));



