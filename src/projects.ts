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

export type OldProject = {
  name: string;
  summary: string;
  tech: string;
  years?: string;
  /** Path inside the yadvlabs/old repository. */
  path: string;
};

export type OldProjectGroup = {
  title: string;
  projects: OldProject[];
};

export const OLD_REPO = 'https://github.com/yadvlabs/old';

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
    image: '/images/cmakeqt.svg',
    imageAlt:
      'A CMakeLists.txt file building into .deb, .rpm, .dmg and .exe packages',
  },
  {
    name: 'tantra',
    summary:
      'A hobby Unix-like kernel for x86, written in C and assembly. Tantra (तंत्र) is Sanskrit for "system".',
    highlights: [
      'Boots through GRUB (Multiboot) from an ISO, and runs in QEMU or Bochs',
      'GDT and IDT setup, interrupt service routines and a 100 Hz PIT timer',
      'Keyboard driver and a framebuffer console',
      'Reads the memory map from GRUB and sets up paging',
      'Its own small libc: stdio, string, stdlib and ctype',
    ],
    tags: ['C', 'x86 assembly', 'Kernel'],
    license: 'BSD-2-Clause',
    href: 'https://github.com/yadvlabs/tantra',
    image: '/images/tantra.svg',
    imageAlt:
      'Tantra booting in QEMU, showing its ASCII-art banner and multiboot details',
  },
];

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

export const oldProjectGroups: OldProjectGroup[] = [
  {
    title: 'Desktop apps and games',
    projects: [
      {
        name: 'Graffiti',
        summary:
          'An interactive whiteboard for the LAN, built on a live XML protocol, with automatic peer discovery and group chat. Made with Abhishek Kumar at IIT-BHU.',
        tech: 'C++/Qt',
        years: '2009',
        path: 'graffiti',
      },
      {
        name: 'ScuttleButt',
        summary:
          'A peer-to-peer instant messenger for local networks, for hostels and offices where the internet is unreliable or restricted.',
        tech: 'Adobe AIR',
        years: '2009–10',
        path: 'scuttlebutt',
      },
      {
        name: 'IceCuBe',
        summary: 'A client/server desktop messenger.',
        tech: 'C++/wxWidgets',
        years: '2008–09',
        path: 'IceCuBe',
      },
      {
        name: 'GtkMoo',
        summary:
          'The game of Bulls and Cows, packaged for Linux and cross-compiled for Windows.',
        tech: 'C/GTK+',
        years: '2008–10',
        path: 'gtkmoo',
      },
      {
        name: 'iStudio',
        summary: 'An image editor with threshold and two-image filters.',
        tech: 'C#',
        years: '2008',
        path: 'iStudio',
      },
      {
        name: 'bluweb',
        summary: 'A minimal web browser.',
        tech: 'C#',
        path: 'bluweb',
      },
    ],
  },
  {
    title: 'Libraries, tooling and VLC',
    projects: [
      {
        name: 'libishare',
        summary:
          'A Qt library for uploading video to YouTube and Vimeo over their HTTP and REST APIs. Built for VLMC during Google Summer of Code.',
        tech: 'C++/Qt',
        years: '2010',
        path: 'libishare',
      },
      {
        name: 'AutoQt',
        summary:
          'An Autotools build template for Qt projects, and the predecessor of cmakeqt.',
        tech: 'Autotools',
        years: '2009',
        path: 'autoqt',
      },
      {
        name: 'VLC mini-mode',
        summary:
          "Patches that add a compact mini-mode player to VLC's Qt interface.",
        tech: 'C++/Qt',
        years: '2009',
        path: 'vlc-minimode',
      },
      {
        name: 'Dark Pepper',
        summary: 'A dark skin for VLC.',
        tech: 'VLC skin',
        path: 'dark-pepper.vlt',
      },
    ],
  },
  {
    title: 'Infrastructure and messaging',
    projects: [
      {
        name: 'agentredrabbit',
        summary:
          'A multithreaded agent that moves data from Redis to RabbitMQ, with a failsafe queue, graceful shutdown and recovery.',
        tech: 'Python',
        years: '2013',
        path: 'agentredrabbit',
      },
      {
        name: 'lua-resty-rabbitmqstomp',
        summary:
          "A RabbitMQ client for OpenResty that speaks STOMP 1.2 over nginx's cosocket API.",
        tech: 'Lua',
        years: '2013',
        path: 'lua-resty-rabbitmqstomp',
      },
      {
        name: 'RabbitMQ Munin plug-ins',
        summary:
          'Munin plug-ins that graph RabbitMQ connections, consumers, queues and memory.',
        tech: 'Shell',
        path: 'rabbitmqmunin',
      },
      {
        name: 'VMController',
        summary:
          "A cross-platform virtual machine controller for VirtualBox, based on CERN's BoincVM.",
        tech: 'Python',
        path: 'vmcontroller',
      },
    ],
  },
  {
    title: 'Web and embedded',
    projects: [
      {
        name: 'QuizApp',
        summary: 'A quiz app for education, with courses, quizzes and submissions.',
        tech: 'Ruby on Rails',
        path: 'quizapp',
      },
      {
        name: 'HOADIS',
        summary:
          'A college portal for students, faculty and alumni, covering results, courseware and events. Made with Ajay Chhatwal.',
        tech: 'Java/JSP',
        path: 'HOADIS',
      },
      {
        name: 'CADE9',
        summary:
          'A task scheduler for learning ATmega microcontrollers, with a small ping-pong game.',
        tech: 'C/AVR',
        path: 'cade9',
      },
    ],
  },
];

export function oldProjectHref(path: string): string {
  const kind = path.includes('.') ? 'blob' : 'tree';
  return `${OLD_REPO}/${kind}/master/${path}`;
}

export const oldProjectCount = oldProjectGroups.reduce(
  (count, group) => count + group.projects.length,
  0,
);
