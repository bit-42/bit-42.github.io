const items = [
  "","",
  "██████╗ ██╗████████╗██╗  ██╗██████╗",
  "██╔══██╗██║╚══██╔══╝██║  ██║╚════██╗",
  "██████╔╝██║   ██║   ███████║ █████╔╝",
  "██╔══██╗██║   ██║   ╚════██║██╔═══╝",
  "██████╔╝██║   ██║        ██║███████╗",
  "╚═════╝ ╚═╝   ╚═╝        ╚═╝╚══════╝",
  "",
  "Welcome.                Type 'help'."
];

const help = [
  "What is bit42?",
  "",
  "We are a secret society. :)",
  "",
  "So we're a working group, too. We",
  "like to create things. Our motto is",
  "'to make life more interesting'.",
  "",
  "Want to learn more about us? (yes/no)",
  "You can also type 'projects' to see",
  "our current portfolio."
];

var yes = [
  "What is a secret society?",
  "",
  "'any of various oath-bound societies",
  "often devoted to brotherhood, moral",
  "discipline, and mutual assistance'",
  " - Merriam-Webster",
  "",
  "What is a working group?",
  "",
  "'a group of people who investigate a",
  "particular problem and suggest ways",
  "of dealing with it'",
  "",
  " - Merriam-Webster",
  "",
  "We're here to solve problems using our",
  "skillsets. We're also an oath-bound",
  "society dedicated to discipline and",
  "mutual assistance.",
  "",
  "If you're looking to join, type 'join'."
];

var no = [
  "That's okay!"
];

var projects = [
  "There's nothing to see here currently."
];

var join = [
  "Submit a PR and then join our Discord",
  "channel. Someone will be in touch.",
  "We're looking forward to meeting you."
];

var screen_pre = document.getElementById("screen");
var screen_text = document.getElementById("screen-text");
var screen_input = document.getElementById("screen-input-box");

screen_input.addEventListener('keyup', function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();

    exec(screen_input.value);

    screen_input.value = "";
  }
});

function insertLine(text) {
  screen_text.innerHTML += text + "<br>";
  screen_input.scrollIntoView();
}

function exec(cmd) {
  insertLine("<i>></i>" + cmd);

  var command = cmd.split(" ");

  if (command[0] == "help") {
    help.forEach(function(h) { insertLine(h); });
    return;
  } else if (command[0] == "yes") {
    yes.forEach(function(h) { insertLine(h); });
    return;
  } else if (command[0] == "no") {
    no.forEach(function(h) { insertLine(h); });
    return;
  } else if (command[0] == "projects") {
    projects.forEach(function(h) { insertLine(h); });
    return;
  } else if (command[0] == "join") {
    join.forEach(function(h) { insertLine(h); });
    return;
  }

  insertLine("Invalid command '" + command[0] + "'.");
}

items.forEach(function(i) {
  insertLine(i);
});
