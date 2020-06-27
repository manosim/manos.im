import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrowser } from '@fortawesome/pro-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const getLinkIcon = (linkIcon) => {
  switch (linkIcon) {
    case 'browser':
      return faBrowser;
    case 'github':
      return faGithub;
    default:
      throw new Error(`Icon name ${linkIcon} is not supported.`);
  }
};

const projects = [
  {
    name: 'Gitify',
    uses: ['Electron', 'React', 'Redux', 'TypeScript'],
    image: '/images/projects/gitify.png',
    links: [
      {
        link: 'https://www.github.com/manosim/gitify',
        icon: 'github',
      },
      { link: 'https://www.gitify.io/', icon: 'browser' },
    ],
    description: `GitHub Notifications on your menu bar. A desktop app based on <a href="http://electron.atom.io/" target="_blank">Electron</a> that brings your GitHub notitifications on your menu bar. Currently supports only Mac OSX.`,
  },
  {
    name: 'UIColor.io',
    uses: ['React', 'Styled Components', 'Rebass', 'TypeScript'],
    image: '/images/projects/uicolor.png',
    links: [
      {
        link: 'https://github.com/manosim/ui-color',
        icon: 'github',
      },
      { link: 'https://www.uicolor.io/', icon: 'browser' },
    ],
    description: `UIColor is a website used to convert HEX & RGB colors to UIColor for both Objective-C and Swift featuring a colorpicker and copy to clipboard functionality making things easier.`,
  },
  {
    name: 'DRF Docs',
    uses: ['Django', 'Django Rest Framework', 'Python', 'Pypi'],
    image: '/images/projects/drfdocs.png',
    links: [
      {
        link: 'https://www.github.com/manosim/django-rest-framework-docs',
        icon: 'github',
      },
      { link: 'https://www.drfdocs.com/', icon: 'browser' },
    ],
    description: `Django Rest Framework Docs (DRF Docs) allows you to document Web APIs made with <a href="http://www.django-rest-framework.org/" target="_blank">Django Rest Framework</a>. Available on PyPi. Supports Python 2 and 3, Django Rest Framework 3 and above.`,
  },
  {
    name: 'NPM Click',
    uses: ['React', 'NPM', 'Browserify', 'LESS'],
    image: '/images/projects/npmclick.png',
    links: [
      {
        link: 'https://www.github.com/manosim/npm-click',
        icon: 'github',
      },
      { link: 'https://www.npm.click/', icon: 'browser' },
    ],
    description: `Compare your project's NPM dependencies. Copy and paste or upload your "package.json" to see which of your (dev)dependencies are up to date or not.`,
  },
  {
    name: 'Trevor',
    uses: ['Ionic Framework', 'Angular', 'Apache Cordova', 'Gulp', 'Travis CI'],
    image: '/images/projects/trevor.png',
    links: [
      {
        link: 'https://www.github.com/manosim/trevor',
        icon: 'github',
      },
      {
        link: 'https://blog.travis-ci.com/2015-04-06-meet-trevor-hybrid-app',
        icon: 'browser',
      },
    ],
    description: `Trevor is a mobile app that brings Travis CI to your phone and tablet. You can download it for free from the App Store and Google Play. It is a hybrid app based on <a href="http://www.ionicframework.com/" target="_blank">Ionic Framework</a> that utilizes the amazing <a href="http://www.travis-ci.org/" target="_blank">Travis CI</a> API.`,
  },
  {
    name: 'Go Back',
    uses: ['iOS', 'Swift', 'UIKit'],
    image: '/images/projects/goback.png',
    links: [],
    description: `A native iOS app written in Swift. Can't remember the address of your hotel? Too bothered to enter an address every time you want to return back to a particular place? Hassling trying to find your car? The app will make your life easier!`,
  },
  {
    name: 'CSS Edit Groups for Atom Editor',
    uses: ['iOS', 'Swift', 'UIKit'],
    image: '/images/projects/goback.png',
    links: [
      {
        link: 'https://www.github.com/manosim/css-edit-groups',
        icon: 'github',
      },
      {
        link: 'https://atom.io/packages/css-edit-groups',
        icon: 'browser',
      },
    ],
    description: `An Atom editor package to jump to CSS, LESS and SASS @group markers like CSSEdit.`,
  },
  {
    name: 'Back to Car',
    uses: ['Ionic Framework', 'Angular', 'Google Maps API', 'Apache Cordova'],
    image: '/images/projects/backtocar.png',
    links: [],
    description: `My first mobile app! A hybrid application available for free on the App Store & Google Play Store with thousands downloads. Get back to your car by pressing a single button.`,
  },
];

const ProjectsPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Projects"
      keywords="projects,gitify,github,notifications,open source,code,django,rest,framework,drfdocs,trevor,backtocar,uicolor,convert,hex,rgb,goback,mobile apps,mobile apps"
    />

    <div className="container flex-col">
      <div className="mt-6">
        <h2 className="font-semibold text-2xl">Projects</h2>

        {projects.map((item, idx) => (
          <div className={`my-10 ${idx === 0 ? 'mt-6' : ''}`} key={`project-${idx}`}>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex-1">
                  <h2 className="font-semibold text-xl">{item.name}</h2>

                  <div className="text-sm break-all">{item.uses.join(', ')}</div>
                </div>

                <div>
                  {item.links.map((link, linkIdx) => (
                    <a href={link.link} key={`project-link-${linkIdx}`} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={getLinkIcon(link.icon)} className="mr-3" />
                    </a>
                  ))}
                </div>
              </div>

              <div>{item.image && <img className="project-logo" alt={item.name} src={item.image} />}</div>
            </div>

            <div className="mt-2" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default ProjectsPage;
