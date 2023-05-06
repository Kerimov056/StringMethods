//                  Task 1
// 1) Write a JavaScript function to split a string and convert it into an array of words.

// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

let fullName = "Kerimov Ulvi";
let arr1 = fullName.split(' ');
console.log("Task 1");
console.log(arr1);
console.log("------------------------------");
// split methodu daxil etdiyiniz text'e gore bolur ve bir array'e yigir.Orjinala Toxunmur
// -----------------------------------------------------------------------------------------


//                 Task 2
// 2) Write a JavaScript function to extract a specified number of characters from a string.

// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

let name = "Robin Singh";
let truncate_string = name.slice(0, 4);
console.log("Task 2");
console.log(truncate_string);
console.log("------------------------------");
//Orjinala Toxunmur
// slice methodu stringi daixl etdiyiniz indexse gore kesir ve bir strig yaradir yalniz bir parametir olan index gondersek 
// hemen index'den axira kimi kescek.2ci overlodu 2parametr qebul edir 1ci parametr daxil etdiyiniz indexden baslayir
// 2parametire qeder goturur.
// -----------------------------------------------------------------------------------------


//               Task 3
// Write a JavaScript function that hides email addresses to prevent unauthorized access. 

// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(email) {
    let split = email.split('@');
    let user = split[0];
    let gmail = split[1];

    for (let i = 0; i <= user.length; i++) {
        user = user.substr(0, 5) + "...";
    }

    email = user + "@" + gmail;
    console.log(email);
}

// burda @ hissesine gore 2 splitnen 2 yere boluruk.cunki sonda usdune gelceyik sag terefin
// sag terefide substr le 0'dan 5'e kimi hissesini goturub usdune ... gelirik

console.log("Task 3");
protect_email("robin_singh@example.com");
console.log("------------------------------");



//               Task 4
// 4) Write a JavaScript function to repeat a string for a specified time.

// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

function repeat_string(text, repeat_number) {
    if (typeof text !== "string" || typeof repeat_number !== "number" || repeat_number < 0) {
        return "Error"
    }
    return text.repeat(repeat_number)
}
console.log("Task 4");
console.log("Repeat :" + repeat_string("a", 4));
console.log("------------------------------");

// yeni bir string yaradir. Orjinala toxunmur.
// repeat methodu 2 paramtiri olan bir methoddur ve 1ci parametirde dondermek isdediyin texti girib 
// 2ci parametirde nece defe donderceyini daxil edirsen. 



//                Task 5
// 5) Write a JavaScript function to find a word within a string.


// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."


//         hell  1
let sentence = "Bu Gun, gun, gun hava cox yagislidir";
let word = "gun";
let say = 0;
let soz = "";
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != " ") {
        soz += sentence[i];                            
        if (word.toLowerCase() == soz.toLowerCase()) {                    //Bu asagdaki cod'dan daha duzgun cod'dur.
            say++;                                                       //Burda vergulde nezeere alinib
        }
    }
    else {
        soz = "";
    }
}
console.log("Task 5");
console.log("search_number :" + say);

// burda cumleni bir loop dongusenue salib dondererek yeni empty olan bir stringin usdune charlari gelirem yalniz
// bunda evvel gelmezden evvel bir if sertide eger i'ci  bosluga beraber deyilse usdune empty olan text'in usdune gelsin
// yox bosluqdursa yeniden hemen soz emptye beraber olsun ve belece burda her bu alqoritmle cumledeki sozleri goturmus
// oluruq sonra icerde yoxlayiram axtardigimiz soze beraberdise sayi artirirq. 


//          hell 2
let sentenc = "Bu gun hava Cox, cox yagislidir";
let word1 = "cox";
let say1 = 0;
let array = sentenc.split(/\s|,/);  //regex bruda space ve , gore split edir
for (let i = 0; i < array.length; i++) {
    if (array[i].toUpperCase() == word1.toUpperCase()) {
        say1++;
    }
}
console.log("search_number :" + say1);
console.log("------------------------------");

// burda evvelce cumleni split methodu ile bosluga gore kesib bir arraye daxil etdim.
// sonra ise arrayin dondererek isdediymiz sozun hemen arrayde olub olmamasini yoxladim.

