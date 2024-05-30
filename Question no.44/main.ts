// QUESTION NO.44

 /* Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */

 // ANSWER NO.44

 function order_sandwich(items: string[]) {
    
    console.log(`"You ordered a sandwich with": ${items}`);
        
    }


order_sandwich(["ketchup", " chicken", " lettuce", " onions", " cucumber", " tomato", " Cheese"]);
order_sandwich(["mayonnaise"," mustard sauce"," roast beef"," tomato"," ketchup"," onion"]);
order_sandwich(["butter"," sausages"," chicken spread"]);