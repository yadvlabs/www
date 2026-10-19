export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  tags: string[];
  license: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type StealthProject = {
  name: string;
  summary: string;
  tag: string;
  image: string;
};

export const featured: Project = {
  name: 'cmakeqt',
  summary:
    'A cross-platform CMake build system template for C++/Qt projects. It handles building, translations and packaging, so a new Qt app can ship on every desktop from its first commit.',
  highlights: [
    'Out-of-source CMake builds with the binary in bin/',
    'Qt translations: pick languages at configure time and refresh .ts files with lupdate',
    'Packages for Linux (DEB, RPM), macOS (app bundle, DMG) and Windows (NSIS, cross-built with MinGW)',
    'Debian rules ready for Launchpad PPA uploads',
  ],
  tags: ['C++', 'Qt', 'CMake'],
  license: 'GPL-2.0',
  href: 'https://github.com/yadvlabs/cmakeqt',
  image: '/images/cmakeqt.svg',
  imageAlt:
    'A CMakeLists.txt file building into .deb, .rpm, .dmg and .exe packages',
};

export const stealthProjects: StealthProject[] = [
  {
    name: 'Untitled project 01',
    summary: 'Something new is in the works. Details soon.',
    tag: 'In development',
    image: '/images/stealth-1.svg',
  },
  {
    name: 'Untitled project 02',
    summary: 'An experiment that is still taking shape.',
    tag: 'Prototype',
    image: '/images/stealth-2.svg',
  },
  {
    name: 'Untitled project 03',
    summary: 'Early sketches and ideas. Watch this space.',
    tag: 'Exploring',
    image: '/images/stealth-3.svg',
  },
];
