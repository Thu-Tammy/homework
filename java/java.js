//  *** ex while loop ***

// var side2 = 5;
// while (side1 <= 10) 
// { 
//    area = side1*side2;
//    console.log(side1 + "x" + side2 + "=" + area)
//    side1 = side1 +1;
// }

// *** ex do ... while loop ***

// var side1 = 1;
// var side2 = 5;
//  do
// { 
//    area = side1*side2;
//    console.log(side1 + "x" + side2 + "=" + area)
//    side1 = side1 +1;
// }
//    while (side1 <= 8)

// *** work with text 1 ***

// var text1 = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
// var text2 = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. ";
// console.log(text1.toLowerCase());
// console.log(text1.toUpperCase());
// console.log(text2.toUpperCase());
// var text3 = "Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
// console.log(text3.toLowerCase()+"\n");
// console.log(((text1.toLowerCase()+"\n").concat((text2.toUpperCase()+'\n'))).length);
// console.log(((text1.toLowerCase()).concat((text2.toUpperCase()))).length);
// console.log(((text1.toLowerCase()+"\n").concat((text2.toUpperCase()+'\n'))));

// *** work with text 2 ***
// const text = 'JavaScript and Java are not the same';
// const result = text.slice(0, -25); // JavaScript

// console.log(result);
// const piAsText = '3.14';

// console.log(typeof piAsText); // string

// const pi = parseFloat(piAsText);

// console.log(pi);

// console.log(typeof pi); // number

// const name = '';

// if (name === '') {
//   console.log('Please input your name');
// } else {
//   console.log('Welcome: ' + name);
// }
// const name = '';

// if (name) {
//   console.log('Welcome: ' + name);
// } else {
//   console.log('Please input your name');  
// }
// const name = null;

// if (name) {
//   console.log('welcome: ' + name);
// } else {
//   console.log('Please input your name');  
// }

// console.log(typeof name)

// *** compute 9 time table ***

// let number = 1;
// while (number <= 10) 
// {
//    console.log(9*number);
//    number++;
// }

 // *** find the fibonacci series ***
// var n = 20;
// let f = 0;
// let f1 = -1;
// let f2 = 1;
// while (f<n) 
// {
//    f = f1 +f2;
//    f1 = f2;
//    f2 = f;
//    console.log(f);
// }

// *** ex 100 ***

// var name = 'thu';
// const age = 20;
// var address = 'abcde0';
// var marriage = 'yes';
// function showUser(name, age, address, marriage)
// {
//  return name + "\n" + age + "\n"+ address + "\n"+ marriage;
// }
// showUser(name, age, address, marriage)
// console.log(showUser(name, age, address, marriage));

//*** ex 101 ***

// function evenNumbers() 
// {
//    for (let i=0; i<= 100; i++) 
//    {

//       if (i % 2 === 0)
//       {
//       console.log(i);
//       }
//    }
// }
// evenNumbers();

// *** ex 102 ***

// function showName()
// {
//    var text1 = "===========";
//    var text2 = "= Nocolas =";
//    text3 = text1 + "\n" + text2 + "\n" + text1;
//    for (let i=1; i<=2; i++)
//    {
//       console.log(text3);
//    }
// }
// showName();

// *** ex 103 ***
// var evenNumbers = 100;
// function test(evenNumbers)
// {
//    for (let j=0; j <= evenNumbers; j++) 
//       { 
//          for (let i=1; i<=5; i++)
      
//            {
//                if (j % 2 === 0)
//                {
//                 console.log(j);

               // }
//             }
//       }
// }
// test(evenNumbers);

// *** ex 104 fibocacci series ***

// var fibonacci;
// var array = [];
// function series(fibonacci, arr) 
// {   for (let i = 1; i <=3; i++)
//     {
//          let f = 0;
//          let f1 = -1;
//          let f2 = 1;
//          while (arr.length<=10)
//            {   arr.push(f); 
//                f = f1 +f2;
//                f1 = f2;
//                f2 = f;
//                console.log(f); 
//              } 
//              arr = [];
            
//       }

// }
// series(fibonacci, array);

// *** ex 105 ***

//  function meaningOfLife()
//  {return 42;}
 
//  console.log("the meaning of life is " + meaningOfLife());

// ** ex 106 ***

// function getUserID()
// {
//    return 50;}
//   var ID = getUserID();
//    console.log(ID);
//    getUserID();
// function isUserValid()
//     {
//        if (getUserID() > 30) 
//         {
//            return true;
//          }
//        else 
//        {
//           return false;
//        }
//     }
// isUserValid();
// if (isUserValid()) {
//    console.log('user valid');
// }
// else {
//    console.log('user not valid');
// }

// *** ex 107 ***

// function bigNumber(firstNumber, secondNumber) 
// {
//  if (((typeof firstNumber) == 'number') && ((typeof secondNumber) =="number")) 
//  { 
//  if (firstNumber > secondNumber) 
//      { 
//         console.log('Number '+ firstNumber +' is bigger than '+secondNumber);
//      }
//   else if (firstNumber == secondNumber) 
//    { console.log('Both numbers are '+secondNumber);
//     }
//    else 
//     {
//        console.log('Number '+firstNumber+' is smaller than '+ secondNumber);
//     }
//    }
//    else 
//    {
//       console.log('error');
//    }
// }
  
//bigNumber(8, 10);
//console.log('firstNumber:' + firstNumber + "\n" + "secondNumber: " + secondNumber);

// *** ex 108 *** 

// function sort(number1, number2, number3, highToLow)
//  { 
//    if (highToLow = true) 
//    {
//       if ((number1 < number2) && (number1 < number3)) 
//          {
//          if (number2 < number3) 
//             {
//                console.log(number3+", "+number2+", "+number1+", "+highToLow);
//             }
//          else 
//             {
//               console.log(number2+", "+number3+", "+number1+", "+highToLow);
//             }
//          } 
//       else if ((number1 > number2) && (number2 < number3))  
//          {
//              if (number1 < number3) 
//                {
//                   console.log(number3+", "+number1+", "+number2+", "+highToLow);
//                }
//             else 
//                {
//                   console.log(number1+", "+number3+", "+number2+", "+highToLow);
//                }
//        }
//       else   
//          {
//             if (number1 < number2) 
//               {
//                  console.log(number2+", "+number1+", "+number3+", "+highToLow);
//               }
//             else 
//             {
//                  console.log(number1+", "+number2+", "+number3+", "+highToLow);
//             }

//          }
//       }
//  }
//  sort(100, 120, 25, true);

// *** ex 109 ***

// function validateUser(username, password)
//  {
//    if ((username === 'nacho') && (password === 'Nerd1979'))
//     {
//        console.log('Welcome ' +username + ' nice to see you again');
//     }
//     else if ((username === 'pedro') && (password === 'Batman0217'))
//     {
//        console.log('Welcome ' +username + ' nice to see you again');
//     }
//     else if ((username === 'marta') && (password === 'Mother2312'))
//     {
//        console.log('Welcome ' +username + ' nice to see you again');
//     }
//     else
//     {
//        console.log('Please input valid credentials');
//     }
//  }
//  validateUser('nacho', 'Nerd1979');

// *** ex 110 ***

// function average(number1, number2, number3, number4, number5)
// {
//    var result = 0;
//    result = (number1+number2+number3+number4+number5)/5;
//    console.log('The average is '+result);
// }
// average(2, 4, 10, 20, 30);

// *** ex 111 ***

// function even(number)
// {
//    if (number % 2 ==0) 
//    {
//       console.log(number + ' is even');
//    }
//    else 
//    {
//       console.log(number + ' is odd');
//    }
// }
// even(8);

// *** ex 112 ***

// function showNumbers(start, end)
// {
//    if (start > end)
//    {
//       for (let i = start; i => end; i--)
//       {
//          console.log(i);
//       }
//    }
//    else if (start < end)
//    {
//       for (let j = start; j <= end; j++)
//       {
//          console.log(j);
//       }
//    }
//    else if (start === end)
//    {
//       console.log('two numbers are equal');
//    }
//    else
//    {
//       console.log('can not compare these two numbers');
//    }
// }
// showNumbers(100, "100");

// *** ex 113 ***

// function getShapePerimeter(base, height)
// {  
//    var perimeter = 0;
//    if (base == height) 
//    {
//       perimeter = 4*base;
//       console.log(perimeter + " is the square pertimeter");
//       if (perimeter < 100 )
//       {
//          console.log('The perimeter is fine');
//       }
//       else
//       {
//          console.log('The perimeter is too big');
//       }
//    }
//    else 
//    {
//       perimeter = 2*(base+height);
//       console.log(perimeter + " is the rectangle pertimeter");
//       if (perimeter < 100 )
//       {
//          console.log('The perimeter is fine');
//       }
//       else
//       {
//          console.log('The perimeter is too big');
//       }
//    }
// }
// getShapePerimeter(50, 40);

// *** ex 114 ***

// function revert(str)
// {
//       for (let i=0; i <= str.length; i++)
//       {
//       console.log(str.charAt(str.length - i-1));
//       }
// }
// revert('today is beautiful');

// *** ex 115 ***

// function getLongerText(str1, str2)
// {
//    console.log(str1 + ". "+str2);
// }
// getLongerText('Today is saturday', 'This is hallowen day');

// *** ex 116 ***

// function getHexaColor(color)
// {  
//    text = null;
//    switch (color) 
//    {
//       case "white":
//          text = "#FFFFFF";
//          break;
//       case "black":
//          text = "#000000";
//          break;
//       case "blue":
//          text = "#0b24fb";
//          break;
//       case "green":
//          text = "#0e7e12";
//          break;
//       case "yellow":
//          text = "#fffd38";
//          break;
//       case "pink":
//          text = "#fec1cc";
//          break;
//       default:
//          break;
//    }
//    console.log(text);
// }
// getHexaColor("green");

// *** ex 117 ***

// var array = ['a', 'b', 'c', 'd', 'e'];
// console.log(array[0] + ', ' + array[2] + ', '+  array[4]);

// *** ex 118 ***

// var grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var result = grades[0] + grades[2] + grades[4] + grades[9];
// console.log(result);

// *** ex 119 ***

// const data = [42, true, function() {return 'the meaning of life is: '}];
// if (data[1]==true) 
// {
//    console.log(data[2](), data[0]);
// }

// *** ex 120 ***

// var students = [];
// students[0] = 'marta';
// students[1] = 'm';
// students[2] = 'a';
// students[3] = 'rta';
// students[4] = 'ta';
// console.log(students[0]);

// *** ex 121 ***

// var games = ['Grand Theft Auto V',
// 'The Last of Us Remastered',
// 'Persona 5',
// 'Metal Gear Solid V',
// 'Uncharted 4',
// 'Journey',
// 'Bloodborne',
// 'The Witcher 3',
// 'Diablo III'];
// games[0] = 'FIFA 18';
// games[3]= 'FIFA 17';
// games[2] = 'FIFA 16';
// for (let i=0; i < games.length; i++)
// {
// console.log(games[i]);
// }

// *** ex 122 ***

// var ingredients = ['Pork', 'Tomato', 'Chicken', 'Lettuce', 'Beef', 'Carrots', 'Cucumber'];
// var vegetarian = [ingredients[1], ingredients[3], ingredients[5], ingredients[6]];
// for (let i =0; i < ingredients.length; i++)
// {
//    console.log(ingredients[i]);
// }
// for (let j=0; j < vegetarian.length; j++)
// {
//    console.log(vegetarian[j]);
// }

// *** ex 123 - 124 ***

// var names = ['thu', 'viet', 'ashlyn', 'katherine', 'dennis', 'canada', 'hawkwood', 'brentwood'];
// console.log(names[1].toUpperCase());
// console.log(names[3].toUpperCase());
// console.log(names[names.length-1]);
// console.log('the names array has '+names.length+' items');

// *** ex 125 ***

// var addFlavor = [];
// var flavorTest = 0;
// const flavor = ['vanila', 'chocolate', 'mint', 'orange', 'caramel', 'straberry', 'lemon'];
// for (let i = 0; i < flavor.length ; i++)
// {
//   flavorTest = addFlavor.push(flavor[i]);
// }
// console.log(addFlavor);
// console.log(flavorTest);

// *** ex 126 ***

// var addFlavor = [];
// var flavorTest = 0;
// const flavor = ['vanila', 'chocolate', 'mint', 'orange', 'caramel', 'straberry', 'lemon'];
// for (let i = 0; i < flavor.length ; i++)
// {
//   flavorTest = addFlavor.unshift(flavor[i]);
// }
// console.log(addFlavor);
// console.log(flavorTest);

// *** ex 127 ***

// const flavor = ['vanila', 'chocolate', 'mint', 'orange', 'caramel', 'straberry', 'lemon'];
// const vanila = flavor.shift();
// console.log(flavor);
// console.log(vanila);
// const chocolate = flavor.shift();
// console.log(flavor);
// console.log(chocolate);

// *** ex 128 ***

// const flavor = ['vanila', 'chocolate', 'mint', 'orange', 'caramel', 'straberry', 'lemon'];
// const lemon = flavor.pop();
// console.log(flavor);
// console.log(lemon);
// const straberry = flavor.pop();
// console.log(flavor);
// console.log(straberry);
// const caramel = flavor.pop();
// console.log(flavor);
// console.log(caramel);

// *** ex 129 ***

// const flavor = ['vanila', 'chocolate', 'mint', 'orange', 'caramel', 'straberry', 'lemon'];
// flavor.forEach(function(fla){console.log(fla);});

// *** ex 130 ***
// var mutants = ['Professor X', 'Cyclops','Iceman', 'Angel', 'Beast', 'Phoenix'];
// console.log(mutants);
// var sort = mutants.sort();
// console.log(sort);
// var reversedList = mutants.reverse();
// console.log(reversedList);
// var join = mutants.join(' * ');
// console.log(join);

// *** ex 131 ***

// var femaleStudents = ['ashlyn', 'katherine', 'aliza', 'alison', 'emma'];
// var maleStudents = ['dennis', 'alex', 'justin', 'bob', 'mathew'];
// var student = femaleStudents.concat(maleStudents);
// console.log(student);
// var sortFemale = femaleStudents.sort();
// sortFemale.forEach(function(female, index){console.log('index: ', index); console.log(female);});
// var students = student.sort();
// students.forEach(function(name){console.log(name);});

// *** ex 132 ***

// var mutants = ['Professor X', 'Cyclops','Iceman', 'Angel', 'Beast', 'Phoenix', 'Logan'];
// if (mutants.indexOf('Logan') > -1 && mutants.indexOf('Professor X') > -1) 
// {
//    console.log('We love X-men');
// }
// if (mutants.indexOf('Gambit')  === -1)
// {
//    console.log('X-men sucks');
// }

// *** ex 133 ***


// var mutants = ['Professor X', 'Cyclops','Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
// var bool=true;
//     mutants.forEach(function(name){
//         if (name != "Magneto" && bool==true) 
//         {
//             console.log(name);
//         }else{
//             bool=false
//         }

//     });
//}
//}
//mutants.splice(mutants.indexOf('Magneto'), 1);
//mutants.forEach(function(name, index){console.log('index: ', index); console.log(name.toUpperCase());});


// *** ex 134 ***

// var number = [];
// sum();
// function sum() {
//     var sumAll =0;
// for (let i=1; i<= 1000; i++) {
    
//     let Arr = number.push(i);
//     console.log(Arr);
//     sumAll += Arr;
//     console.log(sumAll); 
// }
// if (sumAll ==500500) {
//     console.log("Good job!");
// }
// else {
//     console.log("take a look to see if something is wrong");
// }
// }

// *** ex 136 ***

// var mutants = [ "Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit" ];
// mutants.forEach(function(names){
//    // console.log(name);
//     if (names === "Iceman" ||names === "Beast" || names === "Logan" ) {
//        name = names  ;
//        console.log(name.toString());
//    }
// }) 

// *** ex 137 ***
var number = [];
var numbers = [];

for (let i=1; i<= 1000; i++) {
    let Arr = number.push(i);
    let Arrs = Arr[i];
    console.log("index: "+i+", "+"original number: "+Arr+ ", "+"incremented value: "+Arrs);
     // console.log(Arr);
}

