// //    Task 1 

// console.log("Hello,World!");

// // 2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let personName: string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);


// // 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========

// let personName: string = "Ameer"

// console.log("LowerCase:", personName.toLowerCase());
// // for lowecase
// console.log("UpperCase:", personName.toUpperCase());
// // for upperCase 
// console.log("titleCase", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
// //  for first letter UpperCase                 for second letter lowerCase 

// // charAt specific element ko target karta hai 
// // slice target index sy pichly index ko ignor kar hai aur target index sy agy wali index print karta hai


// // 4.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// // Albert Einstein once said, “A person who never made a mistake never tried anything new.”


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// console.log("Albert Einstein once said, 'A person who never made a mistake never tried anything new'");


// // 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let famousPerson = "Albert Einstein";
// let message = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`
// console.log(message);


// // 6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let strips = "\t\n Saria \t\n"
// console.log(strips);  // Output will be printed in whitespaces and lined spaces
// console.log(strips.trim());  // this will remove whitespaces


// // 7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// console.log(5 + 3, 11 - 3, 4 * 2, 16 / 2);  // Addition,Subtraction,Multiplication,Division


// // 8.You should create four lines that look like this:

// // console.log(5 + 3)

// // Your output should simply be four lines with the number 8 appearing once on each line.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// console.log(6 + 2);  // Addition

// console.log(7 + 1);  // Addition

// console.log(5 + 3);  // Addition

// console.log(4 + 4);  // Addition


// // 9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let favoriteNumber: number = 723;

// console.log(`My favorite number is:${favoriteNumber}`);


// // 10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.                         


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// // Adding 2 comments 

// let favoriteNumber: number = 723
// console.log(`My Favorite number is:${favoriteNumber}`);
// //    My Name is Ameer Saria 
// //    This is my favorite Number


// // 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time// 


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let Name: string[] = ["Ali", "Usman", "Babar", "Imran", "Subhan"];
// // // We used for loop
// //     // initialization;condition;updation 
// // for(let i=0;i<Name.length;i++){
// //     console.log(Name[i]);
// // }    


// // 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// //  ==========            ==========
// //  ==========  Solution  ==========
// //  ==========            ==========


// // let friendName;string[]=["Ali","Usman","Babar","Imran","Subhan"];
// //     // initialization;condition;updation 
// // for(let i=0;i<friendName.length;i++){
// //     console.log(`Hello ${friendName[i]}, Would you like to learn some python today?`);   
// // }


// ///13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


// //        ==========           ==========
// //        ==========  Solution ==========
// //        ==========           ==========


// // let favoriteCar=["Revo","Cultus","Civic","Fortuner"];
// //     // initialization;condition;updation 
// // for(let i=0;i<favoriteCar.length;i++) {
// //     console.log(`I would like to own a ${favoriteCar[i]}.`);   
// // }


// // 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


// //  ========          =======
// //  ======== Solution =======
// //  ========          =======


// // let guestList=["Ali","Usman","Taha"];
// //     // initialization;condition;updation 
// // for(let i=0;i<guestList.length;i++){
// //     console.log(`Dear ${guestList[i]}, We invite you for dinner.`);   
// // }


// // 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// // • Print a second set of invitation messages, one for each person who is still in your list.  


// // =========            =========
// // =========  Solution  =========
// // =========            =========


// // let guestList=["Ali","Usman","Taha"];
// // // making a not coming variable and printing that he is not coming 
// // let notComing="Taha"
// // console.log(`${notComing} will not come to dinner`);
// // // adding new guest and exchanging with notcoming 
// // let newGuest="Ameer";
// // guestList[guestList.indexOf(notComing)] =newGuest;   // guestlist[2]=AmeerSaria 
// //     // targeting notComing in guestlist  =new Guest 
// // // Now finally printing the output 
// // for(let i=0;i<guestList.length;i++){
// //     console.log(`Dear ${guestList[i]}, Would you like to  join me for dinner`);
// // }


// //16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// // • Add one new guest to the beginning of your array.

// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// // =========            =========
// // =========  Solution  =========
// // =========            =========

// // let guestList: string [] =["Ali","Usman","Ameer Saria"];
// // console.log("Great news!We found a big dinner table");
// // guestList.unshift("Ameer Mavia"); // this will add Ameer Mavia at the start of array
// // guestList.splice(2,0,"Ameer Hamza");  /// this will add Ameer Hamza at the 2nd index (number)
// // guestList.push("Shahmeer"); /// this will add Shahmeer at the last of array
// // // console.log(guestList); 
// // for(let i=0;i<guestList.length;i++){
// //     console.log(`Dear ${guestList[i]}, would you like to join me for dinner`);
// // }


// // // 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// // • Print a message to each of the two people still on your list, letting them know they’re still invited.

// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// // ==========              ==========
// // ==========   Solution   ==========
// // ==========              ==========


// // let guestList: string[] =["Ameer Mavia","Ali","Ameer Hamza","Usman","Ameer Saria","Shahmeer"];

// // console.log("Unfortunately, We can only invite two people for dinner.");
// //         //   (condition){assigned a variable and printed that variable}
// // while(guestList.length>2){
// //     let removedGuest=guestList.pop();// this will print the indexes greater than length 2
// //     console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`); // pop jo bi value return kar rha hai us ko print kar do
// // }
// // for(let i=0;i<2;i++){
// //     console.log(`Dear ${guestList[i]}, you're still invited to dinner.`);
// // }         //this will print The first 2 indexes



// // 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// // • Store the locations in a array. Make sure the array is not in alphabetical order.

// // • Print your array in its original order.

// // • Print your array in alphabetical order without modifying the actual list.

// // • Show that your array is still in its original order by printing it.

// // • Print your array in reverse alphabetical order without changing the order of the original list.

// // • Show that your array is still in its original order by printing it again.

// // • Reverse the order of your list. Print the array to show that its order has changed.

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.

// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// //  ==========          ===========
// //  ========== Solution ===========
// //  ==========          ===========


// // let favoritePlaces=["Saudi Arabia","America","Brazil","Japan","China"]
// // console.log("Original order:", favoritePlaces);
// // // now sorting the array 
// // console.log("Alphabetical order:", [...favoritePlaces].sort());   // [... sy next time wapis ye orignal order main a jay ga jab bi isy call karain gy (favoriteplacces)]    [...favoritePlaces] use karny sy array ki copy create ho jati hai orriginal array waisa hi rehta hai

// // // now back to original order 
// // console.log("Original order:", favoritePlaces);
// // // now reversing the sorted array
// // console.log("Reverse alphabetical order:", [...favoritePlaces].sort().reverse()); // this will reverse the sorted array for eg.(A,B,C) will reverse as (C,B,A)

// // // now back to original order 
// // console.log("Original order:", favoritePlaces);
// // // now reversing the original order 
// // favoritePlaces.reverse();
// // console.log("Reversed order:", favoritePlaces);
// // // now again reversing the reversed order 
// // favoritePlaces.reverse()
// // console.log("Original order:", favoritePlaces);
// // // now sorting this double reversed order 
// // favoritePlaces.sort();
// // console.log("Alphabetical order:", favoritePlaces);
// // // now reversing the sorted order 
// // favoritePlaces.reverse();
// // console.log("Reverse alphabetical order:", favoritePlaces);


// // 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


// //  ==========          ===========
// //  ========== Solution ===========
// //  ==========          ===========


// // let guestList=["Ali","Usman","Taha"];
// // console.log(`We are inviting ${guestList.length} people to dinner.`);


// // 20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.



// //                            ==========          ==========
// //                            ========== Solution ==========
// //                            ==========          ==========



// // let natureThinking= ["Murree", "Ayoubia", "Abbotabad", "Sialkot", "Karachi"]; 
// // console.log(`I like to visit these cities: ${natureThinking} `);


// // 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// //                     ==========          ==========
// //                     ========== Solution ==========
// //                     ==========          ==========


// // let data:{name:string; developer:string;yearDeveloped:number}={
// //     name:"Javascript",
// //     developer:"Brendan Eich",
// //     yearDeveloped:1995
// // }
// // console.log(`Info: ${data.name}, By: ${data.developer}, Developed in ${data.yearDeveloped}`);


// // 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.  


// //                  ==========          ==========
// //                     ========== Solution ==========
// //                     ==========          ==========


// // let mobiles = ["Vivo","Inifnix","Tecno"];
// // // console.log(mobiles[3]);    //Intentional Error index[3] is not present in this array
// // // mobiles[2]="Tecno";     //Correction  index[2] is Tecno
// // console.log(mobiles[2]);  


// // 23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// // let car = 'subaru';

// // console.log("Is car == 'subaru'? I predict True.")

// // console.log(car == 'subaru')

// // • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



// //                         ========          =========
// //                         ======== Solution =========
// //                         ========          =========


// let firstName = "Saria";
// // checking if firstName == "Saria" 
// console.log("Is firstName == 'Saria'? I predict true")
// console.log(firstName == "Saria");
// // checking if firstName == "Ameer" 
// console.log("Is firstName == 'Ameer'? I predict False")
// console.log(firstName == "Ameer");
// // 2nd variable declaration  
// let firstMame = "Ameer";
// // checking if firstMame == "Saria" 
// console.log("Is firstMame == 'Saria'? I predict true")
// console.log(firstMame == "Saria");
// // checking if firstMame == "Ameer" 
// console.log("Is firstMame == 'Ameer'? I predict False")
// console.log(firstMame == "Ameer");
// // 3rd variable declaration  
// let firstCame = "Almas";
// // checking if firstCame == "Saria" 
// console.log("Is firstCame == 'Saria'? I predict true")
// console.log(firstCame == "Saria");
// // checking if firstCame == "Ameer" 
// console.log("Is firstCame == 'Ameer'? I predict False")
// console.log(firstCame == "Ameer");
// // checking if firstCame == "Almas" 
// console.log("Is firstCame=='Almas'? I predict True");
// console.log(firstCame == "Almas");


// // 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings

// // • Tests using the lower case function

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// // • Tests using "and" and "or" operators

// // • Test whether an item is in a array

// // • Test whether an item is not in a array



// //                     ==========          ===========
// //                     ========== Solution ===========
// //                     ==========          ===========



// // // // ```typescript
// // // // Equality with strings
// // console.log("Testing equality with strings:");
// // console.log("apple" == "apple"); // True
// // console.log("apple" === "Apple"); // False

// // // // Using the lower case function
// // console.log("Testing with lower case:");
// // console.log("Apple".toLowerCase() == "apple"); // True



// // // // Numerical tests
// // console.log("Numerical tests:");
// // console.log(10 > 5); // True
// // console.log(2 < 1); // False
// // console.log(10 >= 5); // True
// // console.log(2 <= 1); // False



// // // // Tests using "and" and "or" operators
// // console.log("Tests with 'and' and 'or':");
// // console.log(true && false); // False
// // console.log(true || false); // True

// // Test whether an item is in a array
// let numbers: number[] = [1, 2, 3, 4, 5];
// // console.log("Is '3' in numbers?");
// // console.log(3 in numbers); // True

// // // Test whether an item is not in a array
// console.log("Is '7' not in numbers?");
// console.log(!(7 in numbers)); // True   // negation(7 in number) this will convert false to true
// // // ```||


// // 25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)



// //                     ==========          ===========
// //                     ========== Solution ===========
// //                     ==========          ===========


// // let alienColor="yellow"
// // // now using if statement 
// // // checking if variable == "yellow"
// // if (alienColor =="yellow"){
// //     console.log("Player just earned 5 points");
// // }
// // // now checking if variable == "black"  
// // if(alienColor=="black"){
// //     console.log("NO output");
// // }


// // 26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// // • Write one version of this program that runs the if block and another that runs the else block.


// //  ==========          ==========
// //  ========== Solution ==========
// //  ==========          ==========


// let alienColor = "green";

// // // now using if else 
// // if(alienColor=="green"){
// //     console.log("Player just earned 5 points");
// // }else{
// //     console.log("Player just earned 10 points");
// // }

// // 2nd if else 
// if (alienColor == "blue") {
//     console.log("Player just earned 5 points");
// }
// else {
//     console.log("Player just earned 10 points");
// }


// // 27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// // • If the alien is green, print a message that the player earned 5 points.

// // • If the alien is yellow, print a message that the player earned 10 points.

// // • If the alien is red, print a message that the player earned 15 points.

// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.


// //               ==========          ==========
// //               ========== Solution ==========
// //               ==========          ==========

// let alien_color = "green";

// //    for printing if

// if (alien_color == "green") {
//     console.log("Player just earned 5 points");
// } else if
//     (alien_color == 'yellow') {
//     console.log("Player just earned 10 points");
// } else if (
//     alien_color == "red") {
//     console.log("Player just earned 15 points");

// }

// //    for printing else if

// let alienColor = "yellow";

// // if (alien_color == "green") {
// //     console.log("Player just earned 5 points");   
// // } else if
// //     (alien_color == 'yellow') {
// //     console.log("Player just earned 10 points"); 
// // }else if(
// //     alien_color == "red"){
// //     console.log("Player just earned 15 points");

// // }

// //    for printing 

// let AlienColor = "red";

// // if (alien_color == "green") {
// //     console.log("Player just earned 5 points");   
// // } else if
// //     (alien_color == 'yellow') {
// //     console.log("Player just earned 10 points"); 
// // }else if(
// //     alien_color == "red"){
// //     console.log("Player just earned 15 points");

// // }


// //28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// // • If the person is less than 2 years old, print a message that the person is a baby.

// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// // • If the person is age 65 or older, print a message that the person is an elder.



// //               ==========          ==========
// //               ========== Solution ==========
// //               ==========          ==========


// let age = 20;
// if (age < 2) {
//     console.log("This person is a baby.");
// }
// else if (age < 4) {
//     console.log("This person is a toddler.");
// } else if (age < 13) {
//     console.log("This person is a kid.");
// } else if (age <= 20) {
//     console.log("This person is a teenager.");
// } else if (age < 65) {
//     console.log("This person is an adult.");
// } else {
//     console.log("Thia person is an elder.");
// }


// // 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// // • Make a array of your three favorite fruits and call it favorite_fruits.

// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


// // ==========          ==============
// // ========== Solution ==============
// // ==========          ==============


// let favorite_fruits = ["Orange", "Kiwi", "Apple", "Banana", "Watermelon"];
// if (`${favorite_fruits[0]}` === "Orange") {
//     console.log("I like Orange")
// }
// // else {
// //     console.log("I don't like Orange.");
// // }
// if (`${favorite_fruits[1]}` === "Kiwi") {
//     console.log("I like Kiwi")
// }
// // else{
// //    console.log("I don't like Kiwi.");
// //    }
// if (`${favorite_fruits[2]}` === "Apple") {
//     console.log("I like Apple")
// }
// // else{
// //    console.log("I don't like Apple.");
// //    }
// if (`${favorite_fruits[3]}` === "Banana") {
//     console.log("You like Banana")
// }
// else {
//     console.log("I don't like fruit.");
// }
// if (`${favorite_fruits[4]}` === "Watermelon") {
//     console.log("I like Watermelon")
// }
// else {
//     console.log("I don't like fruit.");
// }


// // 30Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// // ==========          ==============
// // ========== Solution ==============
// // ==========          ==============

// // let pcUsers:string[] = ["ali","usman","taha","imran","admin"];
// // for(let i=0;i<pcUsers.length;i++){
// //     if(pcUsers[i]=="admin"){
// //         console.log("Hello admin, Would you like to check a status report"); 
// //     }else{
// //         console.log(`Hello ${pcUsers[i]},thanks for logging in`);  
// //     }
// // }


// // prctice 


// let pcUsers: string[] = ["ali", "usman", "taha", "imran", "admin"];
// for (let i = 0; i < pcUsers.length; i++) {
//     if (pcUsers[i] == "admin") { console.log(`Hello ${pcUsers[i]},would you like to view a status report`) }
//     else { console.log(`Hello ${pcUsers[i]},thanks for logging in`) }
// }



// // 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// // • If the list is empty, print the message We need to find some users!

// // • Remove all of the usernames from your array, and make sure the correct message is printed.



// // ==========          ==============
// // ========== Solution ==============
// // ==========          ==============


// // let users:string[] = ["ali","usman","taha","imran","subhan"]; // this will print if 
// let users: string[] = []; // this will print else
// //  using if else

// if (users.length > 0) {
//     console.log("WE have enough users.");
// } else {
//     console.log("We need to find some users!")
// }


// // 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// // • Make a list of five or more usernames called current_users.

// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let current_users: string[] = ["AmEer", "TaHa", "Hamza", "Inam", "Mohsin"];
// let new_users: string[] = ["Saleem", "TaHa", "Arsalan", "Inam", "Subhan"];
// // now using forEach 
// //   new_username is parameter which acces all elements in new_users 1 by 1 (single single value ko )
// // forEach method new_users waly array ky 1 1 element ko call karta hai 
// new_users.forEach(new_username => {
//     let lowerCase = new_username.toLowerCase();
//     // now checking if Saleem is in the first array
//     // .includes pory array main sy element check karay ga  
//     if (current_users.map(c_username => c_username.toLowerCase()).includes(lowerCase)) {
//         console.log(`The username ${new_username} is not available.Kindly write another username.`);
//     } else {
//         console.log(`The username ${new_username} is available.`);
//     }
// })


// // 33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// // • Store the numbers 1 through 9 in a array.

// // • Loop through the array.

// // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.



// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let suria: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // now using for of loop 
// for (let sur of suria) {
//     let ordinalEnding: string;
//     if (sur === 1) {
//         ordinalEnding = "st";
//     } else if (sur === 2) {
//         ordinalEnding = "nd";
//     }
//     else if (sur === 3) {
//         ordinalEnding = "rd";
//     }
//     else {
//         ordinalEnding = "th"
//     }
//     console.log(`${sur}${ordinalEnding}`);
// }


// // 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// // • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// // • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========

// let Pizzas: string[] = ["Pepperoni", "Cuban", "BBQ Chicken"]
// // now using for loop 
// for (let i = 0; i < Pizzas.length; i++) {
//     console.log(`I like ${Pizzas[i]} pizza`);
// }
// console.log("I really love pizza!");


// // 35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let Animals: string[] = ["dog", "cat", "rabbit"];
// // now using for loop 
// for (let i = 0; i < Animals.length; i++) {
//     console.log(`A ${Animals[i]} would make a great pet.`);
// }
// console.log("Any of these animals would make a great pet");


// // 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// function make_shirt(size: string, text: string) {
//     console.log(`Making a ${size} shirt with the message ${text}.`);
// }
// make_shirt("Large", "Hello World");


// // 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.               


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========

// // for default we declared parameters here 
// function make_shirt(size: string = "Large", text: string = "I love Typescript") {
//     console.log(`Making a ${size} shirt with message ${text}`);
// }
// make_shirt();
// make_shirt("Medium");  // I love Typescript argument is default


// // 38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.



// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// function describe_city(city: string, country: string = "France") {
//     console.log(`${city} is in ${country}.`)
// }
// describe_city("Karachi", "Pakistan");
// describe_city("Mumbai", "India");
// describe_city("Paris");  // 2nd argument is default (declared in parameters)


// // 39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// // "Lahore, Pakistan"

// // Call your function with at least three city-country pairs, and print the value that’s returned.



// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========  


// function city_country(city: string, country: string) {
//     return `${city},${country}`
// }
// console.log(city_country("Karachi", "Pakistan"));
// console.log(city_country("Mumbai", "India"));
// console.log(city_country("Paris", "France"));


// // 40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.



// // ==========          ==========
// // ========== Solution ==========
// // ==========          ========== 


// function make_album(artist: string, title: string, tracks?: number) {
//     const album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     }
//     // now adding optional parameter 
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// let album_1 = make_album("Artist 1", "Album title 1");
// console.log(album_1);
// let album_2 = make_album("Artist 2", "Album title 2");
// console.log(album_2);
// let album_3 = make_album("Artist 3", "Album title 3", 16);
// console.log(album_3);


// // 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let magician: string[] = ["Albus", "Varmux", "Charas", "Morus", "Gregory"];
// // ham ny aik array banaya then ham ny show_magician function banaya then ham ny magicians parameter banaya
// // then ham ny array ko access karny ky lye forEach ka method use KeyboardEvent{ braces main} 
// // magincians waly parameter main magician array ay ga 
// // then ham ny magicians main mojood har element ko target karny ky lye for(of) loop use kya
// // (mag) array ki har single value ko 1 by 1 print kar dy ga jab bi ham show_magicians funciton ko call karain gy 
// // show_magicians(magician ko argument likhain gy to upaar ja kar parameter ky equal ho jaye ga) 
// function show_magicians(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         console.log(magicians[i]);
//     }
// }
// show_magicians(magician) // argument hai magician and parameter hai magicians


// // 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let magician: string[] = ["Albus", "Varmux", "Charas", "Morus", "Gregory"];
// // ham ny aik array banaya then ham ny make_great function banaya then ham ny magicianArray parameter banaya
// // magicianArray waly parameter main magician array ay ga 
// // then ham ny magicianArray main mojood har element ko target karny ky lye for loop use kya
// // magicianArray[i] array ki har single value ko 1 by 1 print kar dy ga jab bi ham make_great funciton ko call karain gy 
// // make_magician(magician ko argument likhain gy to upaar ja kar parameter ky equal ho jaye ga) 


// function make_great(magicianArray: string[]) {
//     for (let i = 0; i < magicianArray.length; i++) {
//         magician[i] = "The Great " + magicianArray[i]   // updating the great in magician array
//     }
// }






// // ham ny aik array banaya then ham ny show_magician function banaya then ham ny magicians parameter banaya
// // magincians waly parameter main magician array ay ga 
// // then ham ny array ko access karny ky lye forEach ka method use KeyboardEvent{ braces main} 
// // then ham ny magicians main mojood har element ko target karny ky lye for(of) loop use kya
// // (mag) array ki har single value ko 1 by 1 print kar dy ga jab bi ham show_magicians funciton ko call karain gy 
// // show_magicians(magician ko argument likhain gy to upaar ja kar parameter ky equal ho jaye ga) 
// function show_magicians(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         console.log(magicians[i]);
//     }
// }
// make_great(magician)     // argument hai magician and parameter hai magicianArray
// show_magicians(magician) // argument hai magician and parameter hai magicians


// // 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// let magician: string[] = ["Albus", "Varmux", "Charas", "Morus", "Gregory"];
// // ham ny aik array banaya then ham ny copyArray function banaya then ham ny Arr parameter banaya
// // Arr waly parameter main magician array ay ga 
// // then we made Array copy using [...Array] 

// function copyArray(Arr: string[]) {
//     return [...Arr]
// }






// // ham ny aik array banaya then ham ny make_great function banaya then ham ny magicianArray parameter banaya
// // magicianArray waly parameter main magician array ay ga 
// // then ham ny magicianArray main mojood har element ko target karny ky lye for loop use kya
// // magicianArray[i] array ki har single value ko 1 by 1 print kar dy ga jab bi ham make_great funciton ko call karain gy 
// // make_magician(magician ko argument likhain gy to upaar ja kar parameter ky equal ho jaye ga) 


// function make_great(magicianArray: string[]) {
//     for (let i = 0; i < magicianArray.length; i++) {
//         magicianArray[i] = "The Great " + magicianArray[i]   // updating the great in magician array
//     }
// }






// // ham ny aik array banaya then ham ny show_magician function banaya then ham ny magicians parameter banaya
// // magincians waly parameter main magician array ay ga 
// // then ham ny array ko access karny ky lye forEach ka method use KeyboardEvent{ braces main} 
// // then ham ny magicians main mojood har element ko target karny ky lye for(of) loop use kya
// // (mag) array ki har single value ko 1 by 1 print kar dy ga jab bi ham show_magicians funciton ko call karain gy 
// // show_magicians(magician ko argument likhain gy to upaar ja kar parameter ky equal ho jaye ga) 
// function show_magicians(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         console.log(magicians[i]);
//     }
// }
// let copy_magician = copyArray(magician);  // argument hai magician and parameter hai Arr  jisy ham ny copy_magician variable main store kar dya  
// make_great(copy_magician)     // copy_magician variable ko ham ny argument bana dya
// console.log("This is my original Array.")
// show_magicians(magician) // argument hai magician and parameter hai magicians

// console.log("\nThis is my modified copy of the Array.\n")
// show_magicians(copy_magician)


// // 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========


// function make_sandwich(item: string[]) {
//     console.log("\nMaking your sandwich with:")
//     for (let i = 0; i < item.length; i++) {
//         console.log("- " + item[i])
//         console.log("Enjoy your sandwich.");
//     }
// }
// make_sandwich(["Ham", "Cheese", "Letture"])
// make_sandwich(["Turkey", "Bacon"])
// make_sandwich(["Peanut Butter", "Jelly"])


// // 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


// // ==========          ==========
// // ========== Solution ==========
// // ==========          ==========
// // function example(...param:string[]){
// //     console.log(param)
// // }
// // example("Ameer","Saria","meer","Mavia","Saleem")

// //                     let obj1={
// //                         num1:1,num2:2
// //                     }
// //                     let obj2={
// //                         num3:1,num2:5

// //                     }
// // let obj3=Object.assign(obj1,obj2)
// // console.log(obj3);



// // ...extraOption spread operator hai jis main bht sary arguments use ho sakty hain 
// // jab hamain property ki quantity pata na ho to ham index signature use karty hain  
// // ham ny isy bataya ky extraOption waly array main ham object store karna chahty hain 
// // [key:string]:any means that object ki property string honi chaye and us ki value any hogi  
// // then ham ny object assign use kya 
// // ... hamary object ki shallow copy banain gy  
// // .assign object ky lye use hota hai jo 2 parameters lyta hai (target and source) 

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key: string]: any }[]): object {

    let carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
};
let ans = storeCarInfo("Honda", "Civic", { color: "Black" }, { features: ["navigation", "Power Window"] })
console.log(ans);





















