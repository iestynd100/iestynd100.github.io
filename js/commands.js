var youtube = "https://www.youtube.com/@iestynd100/";
var photo = "https://www.instagram.com/iestlooksat.trains/"
var linkedin = "https://www.linkedin.com/in/iestyn-davies-390170217/";
var instagram = "https://www.instagram.com/iestynd100/";
var github = "https://github.com/iestynd100/";
var email = 'mailto:me"iestynd100.com';

const launchDate = new Date('2025-10-26');

function getWebsiteAge() {
  const now = new Date();
  const diffTime = Math.abs(now - launchDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function getUptime() {
  const now = new Date();
  const sessionStart = window.performance.timing.navigationStart;
  const uptime = now - sessionStart;
  
  const hours = Math.floor(uptime / (1000 * 60 * 60));
  const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
  
  if (hours > 0) {
    return `${hours} hr ${minutes} min ${seconds} sec`;
  } else if (minutes > 0) {
    return `${minutes} min ${seconds} sec`;
  } else {
    return `${seconds} sec`;
  }

}

whois = [
  "<br>",
  "Hey, I'm Iestyn.",
  "I am an A Level student studying Computer Science, Maths, and Further Maths.",
  "I am fascinated by systems, networking, homelabbing, Docker, and Kubernetes.",
  "My favorite programming language is Flutter and I have a strong obsession with it.",
  "I also know C, SQL, and Python which I learned through CS50.",
  "I have experience with VB.NET, though I rarely use it.",
  "Currently, I am learning COBOL and PASCAL",
  "to explore the roots of computer science and understand its foundations.",
  "At secondary school, I led a team that developed an app",
  "which went on to win a Welsh innovation award at Cardiff University.",
  "This experience sparked my passion for building, problem solving, and technology.",
  "I love to code, whether it is experimenting with new tools,",
  "automating workflows, or exploring new technologies.",
  "Outside of coding, I am a marathon runner",
  "and enjoy the fact I can focus while running and love the challenge that comes with it.",
  "<br>"
];


whoami = [
  "<br>",
  "whoami: 404 self not found process of becoming still in progress",
  "<br>"
];

social = [
  "<br>",
  'youtube        <a href="' + youtube + '" target="_blank">youtube/iestynd100' + "</a>",
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/iestyndavies' + "</a>",
  'instagram      <a href="' + instagram + '" target="_blank">instagram/iestynd100' + '</a>',
  'github         <a href="' + github + '" target="_blank">github/iestynd100' + "</a>",
  "<br>"
];

projects = [
  "<br>",
  "Project: Wellbeing365",
  "Description: An award-winning mental health app powered by an AI chatbot,",
  "programmed in Flutter and trained using NHS data with open-source tools.",
  "It includes a large wellbeing library to support users in improving their mental health,",
  "providing insights, practical tips, and comprehensive information on mental health,",
  "nutrition, fitness, and other areas to help build healthy habits and wellness routines.",
  "Status: Live",
  "<br>",
  "Project: TfW Redesign App",
  "Description: A bespoke self-service ticket machine app for Transport for Wales (TfW),",
  "programmed in Flutter and designed to modernize ticket purchasing while improving accessibility.",
  "TfW Rail operates trains across Wales and parts of England, managing over 248 stations,",
  "but current ticket machines have convoluted interfaces and hidden best-value fares,",
  "leading to overcharging and customer frustration.",
  "This project analyzes TfW and other UK Train Operating Companies’ systems to identify improvements",
  "and aims to create an intuitive, reliable, and accessible self-service system",
  "based on real-world investigations and existing ticket machine models.",
  "Status: In development",
  "<br>",
  "Project: The Quill Cryptocurrency",
  "Description: A decentralized cryptocurrency built on SPL Tokens in Solana,",
  "designed to simulate an economy and provide a safe educational platform for learning economics.",
  "The Quill allows users to engage in transactions and trades to understand economic principles,",
  "but it has no real-world value and is not intended for exchange trading, serving purely as a learning tool.",
  "This project demonstrates a practical application of economics and innovative approaches learning finance.",
  "Technologies: JavaScript, TypeScript, Solana CLI, Google Cloud.",
  "Status: Live",
 "<br>",
  "Project: TapTalk - Accessibility Communication App",
  "Description: Developed in Flutter as part of my Welsh Baccalaureate A-level project,",
  "this Augmentative and Alternative Communication (AAC) app supports individuals with speech and cognitive impairments,",
  "as well as their caregivers.",
  "The app provides an accessible, customisable interface with features such as PECS, Easy Read, BSL, TTS fuctions,",
  "and other additional accessibility options.",
  "TapTalk is the first communication app to include full Welsh language support,",
  "addressing the needs of Welsh-speaking households and Welsh medium education.",
  "Alongside the app, I produced an academic report investigating how people with disabilities are disadvantaged when using",
  "online services.",
  "Status: Designed and prototyped, project will not be developed further",
  "<br>"
];


help = [
  "<br>",
  '<span class="command">whois</span>          Who is Iestyn?',
  '<span class="command">whoami</span>         Who are you?',
  '<span class="command">video</span>          Open youtube',
  '<span class="command">photos</span>         View train photography',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You already know this',
  '<span class="command">email</span>          Feel free to email me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">fastfetch</span>      Display fastfetch',
  "<br>",
];

const banner = [
  '<span class="whiter">© 2025 Iestyn Davies. All rights reserved.</span>',
  `<pre class="ascii color3">
            .-------------------------:                      @ : Created by my neofetch.
          .+=========================.                    ┌──────────────────────────────────────────┐
         :++===++==================-       :++-              Me : Shwmae, I'm Iestyn! 
        :*++====+++++=============-        .==:              What I do : Websites, apps, docker
       -*+++=====+***++==========:                           Languages : Welsh (ish), Flutter, C, Python
      =*++++========------------:                            Interests : homelab, running, shenanigans 
     =*+++++=====-                     ...                   Location  : Cymru (sometimes 127.0.0.1)
   .+*+++++=-===:                    .=+++=:                 Fun fact  : I have more RAM than braincells
  :++++=====-==:                     -*****+                 Daily OS : CachyOS + MacOS
 :++========-=.                      .=+**+.                 Timezone : Cardiff time (Google is free)
.+==========-.                          .                 └──────────────────────────────────────────┘
 :+++++++====-                                .--==-.
  :++==========.                             :+++++++:       @ : iestynd100.com
   .-===========.                            =*****+*+    ┌──────────────────────────────────────────┐
    .-===========:                           .+*****+:       Hosted on : Github Pages (not localhost!)
      -=======++++:::::::::::::::::::::::::-:  .---:         Codebase  : HTML, CSS, Javascript
       :======++++====+++******************=.                Security  : Absolutely none
        :=====+++==========++++++++++++++*-                  Dependencies  : Yes
         .====++==============++++++++++*-                   Website Age   : ${getWebsiteAge()} days old
          .===+==================+++++++:                    Uptime  : <span class="uptime-display">${getUptime()}</span>
           .-=======================+++:                  └──────────────────────────────────────────┘
             ..........................

</pre>`,
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
];


setInterval(function() {
  const uptimeElements = document.querySelectorAll('.uptime-display');
  uptimeElements.forEach(el => {
    el.textContent = getUptime();
  });
}, 1000); 