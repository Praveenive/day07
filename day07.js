//ARRAY METHODS

//Q1) Get all the countries from the Asia continent /region using the Filter function

var rest=new XMLHttpRequest();
//Step  02:specifiy the API url
rest.open("GET","https://restcountries.com/v2/all");
//Step 03:sending the request
rest.send();
//Step 04: Once the requested data is there in server
//once the data is successfully loaded, server response 
//will be of 200 status code
//Functions: they are used to perform specific task
//Functions applications: used in all js events
rest.onload= function(){
var result=JSON.parse(rest.response);
var cont = result.filter(reg => reg.region==="Asia");
var arr = cont.map(ele =>ele.name);
console.log(arr);

//Q2 Population less than 2 lakhs countries
let population = result.filter(less => less.population<200000)
let resp = population.map(ele1 =>ele1.name);
console.log(resp);

//Q3)Print the following details name, capital, flag using forEach function
result.forEach(element => 
    {console.log(element.name,element.capital,element.flag);
});


//Q4)Print the total population of countries using reduce function

let total = result.reduce((acc,cv)=>acc+cv.population,0);
console.log(total);


//q5) print currency in US dollar

for(let i=0;i<result.length;i++)
{
    if("currencies" in result[i])
    {
        for(let j=0;j<result[i].currencies.length;j++)
        {
            if(result[i].currencies[j].symbol==="$")
            {
                console.log(result[i].name);
            }
        }
    }
}


}
