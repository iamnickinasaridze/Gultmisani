// ! Data from Drive
let InGeorgia = [
  "მიიღე გამოწვევები, რადგან ისინი საფეხურებია შენი უდიდესი ტრიუმფებისკენ",
  "შენი სურვილები, შენ ბედს განაგებს - ჩაიფიქრე ისინი და მიყევი მათ მეტი დაჟინებით",
  "ასხივე პოზიტივი და სამყაროც არ დააყოვნებს",
  "სამყაროს ირგვლივ მოგზაურობა იწყება პირველი ნაბიჯით - გადადგი იგი გამბედავად",
  "ირწმუნე შენში არსებული მაგიის, რადგან მას შენი სამყაროს გარდაქმნის ძალა აქვს",
  "შენი პოტენციალი უსაზღვროა, როგორც უკიდეგანო ცა, რომელმაც საზღვრები არ იცის",
  "გახსოვდეს, სიკეთეს რომელსაც დღეს დარგავ, ის ხვალ აუცილებლად ნაყოფს გამოიღებს",
  "ყოველი წარუმატებლობა არის, გრანდიოზული დაბრუნების შანსი - გააგრძელე წინსვლა",
  "ყოველ წარუმატებლობას, თანს სდევს გაკვეთილი - შეხვდი მას, ისწავლე და გაიზარდე",
  "იზეიმეთ თქვენი პროგრესი, რაც არ უნდა მცირე იყოს, რადგან თითოეული ნაბიჯი გამარჯვებაა",
  "შენი ღიმილი არის სინათლის შუქურა, რომელსაც შეუძლია გაანათოს ყველაზე ბნელი ბილიკებიც",
  "იყავი ღია ცვლილებთან, რადგან ის ერთადერთი შანსია კიდევ უფრო ფერადი გახადო შენი ცხოვრების გზა",
  "წარმატება არ არის დანიშნულება - ეს არის გზა საკუთარი თავის აღმოჩენის",
  "ენერგია, რომელიც გაგაჩნია ოთახსაც კი გაანათებს - გააზიარე პოზიტივი და კიდევ უფრო მეტად გაანათე",
  "შენი პოტენციალი საგანძურს ჰგავს - იშრომე მეტი სიმტკიცით და რწმენით",
  "მადლიერება საკმარისად აქცევს იმას, რაც გაქვს - დატკბი შენი მიღწევებით",
  "უნიკალურობა შენშია - მიეცი მას სინათლე და იბრწყინე სამყაროში",
  "წარმატება არ არის დანიშნულების ადგილი, ეს არის მხიარული ცეკვა, იმოძრავე შენი ილეთებით და ღიმილი არდაგავიწყდეს",
  "შენ ხარ, შენი სამყაროს მხატვარი - აიღე ფუნჯი და დახატე შენი გზა",
  "ერთადერთი ლიმიტი არის ის, რასაც საკუთარ თავს შენვე უყენებ - გათავისუფლდი მისით და აფრინდი მაღლა და მაღლა",
  "მიიღეთ ცხოვრების რიტმი, რადგან ქაოსშიც კი მშვენიერი მელოდია იქმნება",
  "შენი ფიქრები, შენი რეალობის არქიტექტორული ნახაზებია - ააშენე გონივრულად და იოცნებე უფრო მაღალზე",
  "მოწყენილობა არის ცუდი ტიპი, რომელიც აფუჭებს შენს ხასიათს - ცუდ ტიპებს შენს გარშემო არაფერი ესაქმებათ, გაბედნიერდი",
  "სამყარო სავსეა შესაძლებლობებით, რომლებიც სულ გელოდებიან - რაიცი რა ხდება",
  "შენი პოტენციალი მიძინებულ ვულკანს ჰგავს - დაე, ის დაჟინებით და მიზანდასახულობით ამოაფრქვიე",
  "მზე მხოლოდ იმისთვის ამოდის, რომ უკან ჩავიდეს - შენი გამოწვევები დროებითია, მაგრამ ძალა რომელიც გაქ მარადიული",
  "სამყაროს გამბედავები იზიდავს - გაბედე და უყურე სასწაულების განვითარებას",
  "შენი ცხოვრება შენია - დატკბით თითოეული ნაბიჯით, რადგან ის განსაზღვრავს თქვენს ისტორიას",
  "სიცოცხლის ბაღში გააშენე სიყვარულის, სიკეთისა და სიხარულის ყვავილები",
  "თქვენი სიკეთე არის ტალღა, რომელსაც შეუძლია შექმნას პოზიტიური ცვლილებების ტალღები სამყაროში",
  "ყოველი მზის ამოსვლა არის შეხსენება, რომ თქვენ გაქვთ ახალი ტილო თქვენი ოცნებების დასახატავად",
  "შენმა გულმა იცის გზა - ენდე მის ჩურჩულებს და მიჰყევი სიყვარულის გზას",
  "იცეკვე შენი ოცნებების რიტმზე და ნება მიეცი შენი სულის მუსიკას გიხელმძღვანელოს",
  "თქვენი პოტენციალი მდინარეს ჰგავს - მიეცით მას დინების შანსი და ის თავად გაგიკვალავს გზას",
  "ცაში ვარსკვლავები არიან შენში არსებული უსაზღვრო შესაძლებლობების მოწმეები",
  "შენ ხარ ხელოვნების ნიმუში - თავისი ნაკლოვანებებით, რაც გამორჩეულად გალამაზებენ",
  "შეაგროვე სიახლეები, რადგან ისინი არიან ფერები, რომელითაც შენს ბედს დახატავ",
  "შენი დამოკიდებულება მაგნიტს ჰგავს - მოიზიდე ენერგია, რომლის მიღებაც გინდა",
  "იზეიმეთ მცირე გამარჯვებები, რადგან ისინი დიდი წარმატების წინაპირობებია",
  "შენ სამყაროს განუყრელი ნაწილი ხარ, რომელსაც შეგიძლია სიყვარულით დაატრიალო დედამიწა",
  "ცხოვრების სიმფონია უკრავს შენი შრომის ნოტებზე - შექმენი შედევრი",
  "შენ ხარ შენი მოთხრობის ავტორი - დაწერე ისეთი მოთხრობა, რომელიც შენ გულს სიხარულით აავსებს",
  "სამყარო შენ სასარგებლოდ მოძრაობს - ენდეთ პროცესს და მიჰყევით დინებას",
  "შენი გული კომპასია - მიჰყევი მის მიმართულებას და არასოდეს დაიკარგები",
  "დარგე პოზიტივის ნაყოფი და სიხარულისა და სიუხვის ბაღს მოიმკი",
  "წარმატების საიდუმლო არის გიყვარდეს ის, რასაც აკეთებ - ვნება აღძრავს სიდიადეს",
  "შენ ხარ ვარსკვლავი კაცობრიობის თანავარსკვლავედში - გაანათე და აანთე სამყარო",
  "თქვენი პოტენციალი ალმასის მსგავსია - ღირებული, მრავალმხრივი და ბრწყინვალე",
  "ცხოვრება არის აღმოჩენების მოგზაურობა - გამოიკვლიე, ისწავლე და დატკბი თავგადასავლებით",
  "შენ ხარ სამყაროს შედევრი - მოეხვიე შენს ბრწყინვალებას და მიეცი მას გამოსხივება",
];

let inEnglish = [
  "Embrace the challenges, for they are stepping stones to your greatest triumphs",
  "Your dreams are the blueprints of your destiny – build them with passion and persistence",
  "Radiate positivity, and you will attract a universe of good vibes",
  "The journey of a thousand miles begins with a single step – take it with courage",
  "Believe in the magic within you, for it has the power to transform your world",
  "Your potential is limitless, like the vast sky that knows no bounds",
  "Seeds of kindness you plant today will blossom into a garden of happiness tomorrow",
  "Every setback is a setup for a grand comeback – keep pushing forward",
  "In every adversity lies the seed of an equivalent advantage – find it and grow",
  "Celebrate your progress, no matter how small, for each step is a victory",
  "Your smile is a beacon of light that can illuminate even the darkest paths",
  "Embrace change, for it is the only constant on the journey of life",
  "Success is not the destination; it's the rewarding journey of self-discovery",
  "The energy you bring into a room is a gift – choose positivity and spread joy",
  "Your potential is like a treasure chest – unlock it with determination and belief",
  "Gratitude turns what you have into enough – count your blessings daily",
  "Your uniqueness is your superpower – let it shine brightly in the world",
  "Success is not about the destination; it's about the joyous dance along the way",
  "You are a masterpiece in progress – embrace the artistry of your own becoming",
  "The only limit is the one you place on yourself – break free and soar",
  "Embrace the rhythm of life, for even in chaos, there is a beautiful melody",
  "Your thoughts are the architects of your reality – build wisely and dream big",
  "Adversity is the forge that shapes your character – emerge stronger and wiser",
  "The world is full of possibilities waiting to be explored – step into the unknown",
  "Your potential is like a dormant volcano – let it erupt with passion and purpose",
  "The sun sets only to rise again – your challenges are temporary, but your strength is eternal",
  "The universe applauds your courage – keep daring greatly and watch the miracles unfold",
  "Your journey is uniquely yours – savor each step, for it defines your story",
  "In the garden of life, cultivate the flowers of love, kindness, and joy",
  "Your kindness is a ripple that can create waves of positive change in the world",
  "Every sunrise is a reminder that you have a brand new canvas to paint your dreams",
  "Your heart knows the way – trust its whispers and follow the path of love",
  "Dance to the rhythm of your dreams, and let the music of your soul guide you",
  "Your potential is like a river – let it flow, and it will carve its own magnificent course",
  "The stars in the sky are witnesses to the limitless possibilities within you",
  "You are a work of art – embrace the imperfections, for they make you uniquely beautiful",
  "Embrace the unknown, for it is the canvas upon which you paint your destiny",
  "Your attitude is like a magnet – attract the energy you want to receive",
  "Celebrate the small victories, for they are the building blocks of monumental success",
  "Your presence is a gift to the world – share it generously with love and kindness",
  "The symphony of life plays in harmony with your dreams – compose a masterpiece",
  "You are the author of your story – write a narrative that fills your heart with joy",
  "The universe conspires in your favor – trust the process and surrender to the flow",
  "Your heart is a compass – follow its direction, and you will never be lost",
  "Plant the seeds of positivity, and you will harvest a garden of joy and abundance",
  "The secret to success is to love what you do – passion fuels greatness",
  "You are a star in the constellation of humanity – shine bright and light up the world",
  "Your potential is like a diamond – valuable, multifaceted, and formed under pressure",
  "Life is a journey of discovery – explore, learn, and savor the adventure",
  "You are a masterpiece of the universe – embrace your brilliance and let it radiate",
];
//!Variables for functions
let randomNumber, word;
let transferData = "";
let shouldStop = true;
let story_size = {
  id_name: "iframe1",
  isActive: false,
};
let square_size = {
  id_name: "iframe",
  isActive: false,
};
//! HTML ELEMENTS
const ortskhobila = document.querySelector(".ortskhobila");
const ortskhobilaClick = document.querySelector(".click-text");
const randomMessage = document.querySelector(".random-message");
const goBack = document.querySelector(".open-new");
const activePopup = document.querySelector(".popup-wrapper.active");
const RegularPopup = document.querySelector(".popup-wrapper");
const mainSection = document.querySelector(".main-section");
const download = document.querySelector(".download");
const closePopup = document.querySelector(".close");
const dinamicText = document.querySelector(".message");
const clickText = document.querySelector(".click-text");
const selectFormat1 = document.querySelector(".format");
const selectFormat2 = document.querySelector(".format1");
const blurtSection = document.querySelector(".main-section.blur");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");

//!Event listeners
ortskhobila.addEventListener("click", function () {
  shouldStop = false;
  removeMainPage();
  addNewSection();
  displayMessage();
});
clickText.addEventListener("click", function () {
  shouldStop = false;
  removeMainPage();
  addNewSection();
  displayMessage();
});

goBack.addEventListener("click", () => {
  shouldStop = true;
  resetPages();
});

logo.addEventListener("click", () => {
  shouldStop = true;
  resetPages();
});
download.addEventListener("click", () => {
  activateDownload();
});

closePopup.addEventListener("click", () => {
  cancelPopup();
});
overlay.addEventListener("click", () => {
  cancelPopup();
});
selectFormat1.addEventListener("click", () => {
  if (square_size.isActive) {
    square_size.isActive = false;
  }
  story_size.isActive = true;
  selectFormat2.classList.remove("selected");
  addSelected(selectFormat1);
});

selectFormat2.addEventListener("click", () => {
  if (story_size.isActive) {
    story_size.isActive = false;
  }
  square_size.isActive = true;
  selectFormat1.classList.remove("selected");
  addSelected(selectFormat2);
});

// !Functions

function resetPages() {
  randomMessage.classList.add("disabled");
  ortskhobila.classList.add("active");
  ortskhobila.classList.remove("disabled");
  ortskhobilaClick.classList.add("active");
  ortskhobilaClick.classList.remove("disabled");
}

function removeMainPage() {
  ortskhobila.classList.remove("active");
  ortskhobila.classList.add("disabled");
  ortskhobilaClick.classList.remove("active");
  ortskhobilaClick.classList.add("disabled");
}

function addNewSection() {
  randomMessage.classList.remove("disabled");
}

function displayMessage() {
  randomNumber = Math.trunc(Math.random() * 50);
  word = InGeorgia[randomNumber];
  dinamicText.textContent = "";
  dinamicText.textContent = typeText(dinamicText, word);
  transferData = word;
  localStorage.setItem("randomMessage", transferData);
}

function typeText(el, txt, i = -1) {
  el.textContent += txt[i];
  if (i === txt.length - 1 || shouldStop) {
    return;
  }

  setTimeout(() => typeText(el, txt, i + 1), 50);
}

function activateDownload() {
  overlay.classList.add("active");
  RegularPopup.classList.add("active");
  mainSection.classList.add("blur");
}

function cancelPopup() {
  overlay.classList.remove("active");
  RegularPopup.classList.remove("active");
  mainSection.classList.remove("blur");
  goBack.classList.remove("none");
}

function addSelected(el) {
  el.classList.add("selected");
}

function removeSelect(el) {
  el.classList.remove("selected");
}

// ! GSAP for Marquee element

let tween = gsap
  .to(".marquee__part", {
    yPercent: 100,
    repeat: -1,
    duration: 8,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".left-marquee__inner", { yPercent: -90 });

//  "-40"

let tween2 = gsap
  .to(".right-marquee__part", {
    yPercent: -100,
    repeat: -1,
    duration: 8,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".right-marquee__inner", { yPercent: 0 });

// ! Download HTML as an image
document.getElementById("download").addEventListener("click", function () {
  if (story_size.isActive) {
    let iframe = document.getElementById("iframe1");
    iframe.onload = function () {
      html2canvas(iframe.contentDocument.body).then(function (canvas) {
        let link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    };
    //! Reload the iframe to ensure the onload event is triggered
    iframe.contentWindow.location.reload();
  } else if (square_size.isActive) {
    let iframe = document.getElementById("iframe");
    iframe.onload = function () {
      html2canvas(iframe.contentDocument.body).then(function (canvas) {
        let link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    };
    iframe.contentWindow.location.reload();
  } else {
    console.error("Select right resolution!");
  }
});
