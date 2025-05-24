
window.addEventListener("load", function(){
    var ZooAudio=new Audio("./sounds/zoo-sounds.mp3");
    ZooAudio.volume=1;
    ZooAudio.play();
});

var buttons = document.querySelectorAll(".animal");

//adding event listener to the mouse click
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var key = this.getAttribute("data-key"); // משיכת האות מהכפתור
      makeSound(key);
      buttonAnimation(key);
    });
  }

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

var currentAudio; 

function makeSound(key) {

    // Pause the currently playing audio (if any)
    if (currentAudio) {
        currentAudio.pause();
    }
    switch (key) {
        case 'c':
            currentAudio = new Audio("./sounds/mixkit-cow-moo-in-the-barn-1751.wav");
            break;
        case 'd':
            currentAudio = new Audio("./sounds/mixkit-dog-barking-twice-1.wav");
            break;
        case 'm':
            currentAudio = new Audio("./sounds/mixkit-cartoon-monkey-mocking-and-giggling-108.wav");
            break;
        case 'l':
            currentAudio = new Audio("./sounds/mixkit-wild-lion-animal-roar-6.wav");
            break;
        case 'b':
            currentAudio = new Audio("./sounds/mixkit-forest-birds-singing-1212.wav");
            break;
        case 'a':
            currentAudio = new Audio("./sounds/mixkit-sweet-kitty-meow-93.wav");
            break;
        case 'k':
            currentAudio = new Audio("./sounds/mixkit-single-cricket-screech-1780.wav");
            break;
        default:
            alert("No such drum type!");
            return; // exit the function if the key is not recognized
    }

    // Play the new audio
    currentAudio.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('[data-key="' + currentKey + '"]');
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
//  אלמנט חדש שלא למדנו בכיתה: IntersectionObserver
//  מזהה מתי כל כפתור חיה נכנס אל תוך המסך וגורם לו להופיע באנימציה כאשר נגלול מטה בעת טעינת האתר
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // להפסיק לעקוב אחרי ההופעה הראשונה
      }
    });
  }, {
    threshold: 0.5 // יופעל רק כשחצי מהאלמנטים נכנסו למסך
  });
  
  document.querySelectorAll('.animal').forEach(el => {
    observer.observe(el);
  });
