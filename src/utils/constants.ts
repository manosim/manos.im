// prettier-ignore
export const siteMetadata = {
  title: 'Emmanouil Konstantinidis',
  tagline: 'Engineering Leader, Building High-Performing Teams and Driving Engineering Excellence',
  description: 'Emmanouil Konstantinidis. Head of Engineering at Travelex. Previously at NearForm, Formidable, The Times & The Sunday Times, News UK. Hobbies include JavaScript, Python, Swift and more.',
  keywords: [
    "emmanouil", "konstantinidis",
    "manos.im", "iamemmanouil", "ekonstantinidis",
    "software", "engineer", "head of engineering", "engineering", "manager", "principal",
    "travelex", "nearform", "formidable", "the times", "the sunday times", "newsuk", "dabapps", "simpplr",
    "london", "uk", "united kingdom"
  ].join(","),
  author: `@manosim_`,
};

// prettier-ignore
export const previously = [
  { 
    label: "Nearform",
    href: "https://www.nearform.com/"
  },
  { 
    label: "Formidable",
    href: "https://www.formidable.com/"
  },
  {
    label: "The Times & The Sunday Times",
    href: "https://www.thetimes.co.uk/"
  },
  {
    label: "News UK",
    href: "https://www.news.co.uk/"
  },
];

export const socials = [
  {
    label: "GitHub",
    handle: "manosim",
    href: "https://github.com/manosim",
  },
  {
    label: "LinkedIn",
    handle: "manosim",
    href: "https://uk.linkedin.com/in/manosim",
  },
];

export interface Project {
  name: string;
  year: string;
  tags: string[];
  blurb: string;
  logo: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: "Sortbilly",
    year: "2019",
    tags: ["Mobile Application", "Finance", "React Native"],
    blurb:
      "Stay on top of your upcoming subscriptions and bills, track your recurring payments effortlessly.",
    logo: "/images/projects/sortbilly.png",
    links: [
      {
        label: "Site",
        href: "https://sortbilly.com/",
      },
      {
        label: "AppStore",
        href: "https://apps.apple.com/us/app/sortbilly/id1485116891?mt=8",
      },
      {
        label: "PlayStore",
        href: "https://play.google.com/store/apps/details?id=com.sortbilly",
      },
    ],
  },
  {
    name: "Gitify",
    year: "2015",
    tags: ["Electron", "React", "Redux", "TypeScript"],
    blurb:
      "GitHub notifications on your menu bar. A desktop app built on Electron that brings your GitHub notifications to the menu bar.",
    logo: "/images/projects/gitify.png",
    links: [
      { label: "Site", href: "https://www.gitify.io/" },
      { label: "GitHub", href: "https://www.github.com/manosim/gitify" },
    ],
  },
  {
    name: "UIColor.io",
    year: "2017",
    tags: ["React", "Styled Components", "TypeScript"],
    blurb:
      "Convert HEX & RGB colors to UIColor for Objective-C and Swift, with a color picker and copy-to-clipboard.",
    logo: "/images/projects/uicolor.png",
    links: [
      { label: "Site", href: "https://www.uicolor.io/" },
      { label: "GitHub", href: "https://github.com/manosim/ui-color" },
    ],
  },
  {
    name: "DRF Docs",
    year: "2014",
    tags: ["Django", "DRF", "Python", "PyPI"],
    blurb:
      "Document Web APIs made with Django Rest Framework. Available on PyPI, supporting DRF 3 and above.",
    logo: "/images/projects/drfdocs.png",
    links: [
      { label: "Site", href: "https://www.drfdocs.com/" },
      {
        label: "GitHub",
        href: "https://www.github.com/manosim/django-rest-framework-docs",
      },
    ],
  },
  {
    name: "NPM Click",
    year: "2016",
    tags: ["React", "NPM", "Browserify", "LESS"],
    blurb:
      "Compare your project's NPM dependencies. Paste or upload your package.json to see what's up to date.",
    logo: "/images/projects/npmclick.png",
    links: [
      { label: "Site", href: "https://www.npm.click/" },
      { label: "GitHub", href: "https://www.github.com/manosim/npm-click" },
    ],
  },
  {
    name: "Trevor",
    year: "2015",
    tags: ["Ionic", "Angular", "Cordova", "Travis CI"],
    blurb:
      "A mobile app that brings Travis CI to your phone and tablet. A hybrid app built on Ionic using the Travis CI API.",
    logo: "/images/projects/trevor.png",
    links: [
      {
        label: "Article",
        href: "https://blog.travis-ci.com/2015-04-06-meet-trevor-hybrid-app",
      },
      { label: "GitHub", href: "https://www.github.com/manosim/trevor" },
    ],
  },
  {
    name: "Go Back",
    year: "2015",
    tags: ["iOS", "Swift", "UIKit"],
    blurb:
      "A native iOS app in Swift. Can't remember your hotel address or where you parked? Go Back makes finding your way simple.",
    logo: "/images/projects/goback.png",
    links: [],
  },
  {
    name: "Back to Car",
    year: "2014",
    tags: ["Ionic", "Angular", "Google Maps", "Cordova"],
    blurb:
      "My first mobile app — a hybrid app with thousands of downloads on the App Store & Play Store. Get back to your car with one button.",
    logo: "/images/projects/backtocar.png",
    links: [],
  },
];
