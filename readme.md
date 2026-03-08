## What is the difference between var, let, and const?
---

We can declare tree type of variable type like var, let, const. But they are has diffrent chareture. 
Now i’ll describe all thoes things
Var 
Old system 
variable type has scoped limitations
same variable we can declare multiple times which is not good practice

Let
This let terms comes from ES6
This variable type work in {} inner the bracket 
Same name variable can’t declare multiple time but only we can chage the value 

Const
This type is block scoped 
If we declear the value it’s immutable 
This type we use for store constant value





## What is the spread operator (...)?
---

spread operator (…) it’s used for spread the elements of array and object. This operator helps a lot because some time we can’t predict how many param will comes into the function. So here this spread operator will help dynamically . 

This operator generally used for: 
For copy array
For adding new elements




## What is the difference between map(), filter(), and forEach()?
---

this three method used for array

forEach()
It itrate each element of array
But this method will not return new array

Map()
This also itrate each element of array
map method will return new array

Filter()
According to array  conditionally this method retrieved element and return a new array




## What is an arrow function?
---

Arrow function is a shortcut way of writing function. It’s comes from ES6. This function keyword will reduce code. 
 Ex: we know General function 
	function add(a, b)
	{
	return a+b;
	}

Arrow function  const add = (a, b) => {return a+b}; 

One more thing is this arrow function can called callback function. 



## What are template literals?
---

In string any where easily we can use variable or expression. For this we used backtick `` symbol
If we used template literals code will cleand.