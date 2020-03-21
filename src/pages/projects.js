import React from 'react';
import { Flex } from 'rebass/styled-components';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

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
      { link: 'https://www.gitify.io/', icon: 'website' },
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
      { link: 'https://www.uicolor.io/', icon: 'website' },
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
      { link: 'https://www.drfdocs.com/', icon: 'website' },
    ],
    description: `Django Rest Framework Docs (DRF Docs) allows you to document Web APIs made with <a href="http://www.django-rest-framework.org/" target="_blank">Django Rest Framework</a>. Available on PyPi. Supports Python 2 and 3, Django Rest Framework 3 and above.`,
  },
  {
    name: 'NPM Click',
    uses: ['React', 'NPM', 'Browserify', 'LESS'],
    image: '/images/projects/npmclick.png',
    links: [
      { link: 'https://www.npm.click/', icon: 'website' },
      {
        link: 'https://www.github.com/manosim/npm-click',
        icon: 'github',
      },
    ],
    description: `Compare your project's NPM dependencies. Copy and paste or upload your "package.json" to see which of your (dev)dependencies are up to date or not.`,
  },
  {
    name: 'Trevor',
    uses: ['Ionic Framework', 'Angular', 'Apache Cordova', 'Gulp', 'Travis CI'],
    image: '/images/projects/trevor.png',
    links: [
      {
        link: 'https://blog.travis-ci.com/2015-04-06-meet-trevor-hybrid-app',
        icon: 'article',
      },
      {
        link: 'https://www.github.com/manosim/trevor',
        icon: 'github',
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
        icon: 'link',
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

    <Flex flexDirection="column" sx={{ maxWidth: 730, mx: 'auto' }}>
      <h2>Projects</h2>

      {projects.map(item => (
        <div className="row project">
          <div className="col-sm-2">
            {item.image && (
              <img className="img-fluid" alt={item.name} src={item.image} />
            )}
          </div>
          <div className="col-sm-12">
            <h3>{item.name}</h3>

            {item.links.map(link => (
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}

            <div className="tags-wrapper">
              <strong>Tech</strong>:
              <ul className="tags">
                {item.uses.map(techItem => (
                  <li>{techItem}</li>
                ))}
              </ul>
            </div>
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </div>
      ))}
    </Flex>
  </Layout>
);

export default ProjectsPage;
