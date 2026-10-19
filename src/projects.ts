export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  tags: string[];
  license: string;
  href: string;
};

export type StealthProject = {
  /** Base camps on the way up; each stealth project is one stage of the climb. */
  codename: string;
  altitude: string;
  hint: string;
};

export const projects: Project[] = [
  {
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
  },
];

export const stealthProjects: StealthProject[] = [
  {codename: 'Camp I', altitude: '4,200 m', hint: 'Acclimatising'},
  {codename: 'Camp II', altitude: '5,100 m', hint: 'Route being fixed'},
  {codename: 'Camp III', altitude: '6,000 m', hint: 'Waiting for a weather window'},
];
