export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  tags: string[];
  /** Omitted until the repository declares one. */
  license?: string;
  /** Shown next to the name; defaults to "Open source". */
  status?: {label: string; variant: 'green' | 'blue'};
  href: string;
  /** A second link shown beside "View on GitHub". */
  website?: {label: string; href: string};
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

export type Contribution = {
  name: string;
  about: string;
  summary: string;
  years: string;
  links: ReadonlyArray<{label: string; href: string}>;
};

export const OLD_REPO = 'https://github.com/yadvlabs/old';
export const HACKLAB_REPO = 'https://github.com/yadvlabs/hacklab';

/** Topics in the hacklab scratchpad, shown as tags. */
export const hacklabTopics = [
  'Algorithms',
  'Competitive programming',
  'Stripe CTF3',
  'Design patterns',
  'Lab work',
  'RabbitMQ',
  'Erlang',
  'Elixir',
  'Haskell',
  'Lisp',
  'Rust',
  'Go',
  'x86 assembly',
];

export const projects: Project[] = [
  {
    name: 'armsense',
    summary:
      'A firewall and router distribution for arm64, built on FreeBSD and based on the open source pfSense code.',
    highlights: [
      'Firewall and routing on 64-bit Arm (AArch64) hardware',
      'Built on FreeBSD and based on open source pfSense',
    ],
    tags: ['FreeBSD', 'arm64', 'Firewall'],
    status: {label: 'In development', variant: 'blue'},
    href: 'https://github.com/yadvlabs/armsense',
    image: '/images/armsense.svg',
    imageAlt:
      'A firewall appliance with an arm64 chip, routing traffic between network ports',
  },
  {
    name: 'reef',
    summary:
      "Self-hosted Git that works with your GitHub tools. Reef speaks GitHub's REST and GraphQL APIs, so gh, Octokit, Terraform and Actions workflows can point at your own host.",
    highlights: [
      'GitHub-compatible REST and GraphQL APIs, webhooks and personal access tokens',
      'Pull requests, issues, Actions, Projects, wikis and releases in a familiar UI',
      'Actions workflows run on the standard actions/runner',
      'Pull and push mirrors with GitHub, to keep working through outages',
      'A single Rust binary, with SQLite for small installs or PostgreSQL to scale',
    ],
    tags: ['Rust', 'Git', 'Self-hosted'],
    status: {label: 'Beta', variant: 'blue'},
    href: 'https://github.com/yadvlabs/reef',
    website: {label: 'Website', href: 'https://swtch.in/'},
    image: '/images/reef.svg',
    imageAlt: 'Crusty the tortocrab, the Reef mascot',
  },
  {
    name: 'dsync',
    summary:
      'DriveSync: a small, fast command-line tool that keeps a local folder and a Google Drive folder in sync.',
    highlights: [
      'Shows the plan and asks before changing anything, and never deletes by default',
      'Cheap repeat runs, using the Drive Changes API and a local SQLite hash cache',
      "Every transfer is checked against Drive's MD5, with parallel, resumable uploads",
      'JSON output and stable error codes, so scripts and GUIs can drive it',
    ],
    tags: ['Rust', 'Google Drive', 'CLI'],
    license: 'MIT',
    href: 'https://github.com/yadvlabs/dsync',
    website: {label: 'Mac app', href: 'https://scaleninja.com/drivesync/'},
    image: '/images/dsync.svg',
    imageAlt:
      'A local folder and a Google Drive folder kept in sync by dsync push and pull',
  },
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

export const contributions: Contribution[] = [
  {
    name: 'VLMC',
    about: "VideoLAN's free, cross-platform non-linear video editor.",
    summary:
      'About 200 commits, starting as a Google Summer of Code project: sharing to YouTube and Vimeo, Windows and macOS packaging, translations and renderer fixes.',
    years: '2010–12',
    links: [
      {
        label: 'View commits',
        href: 'https://code.videolan.org/videolan/vlmc/-/commits/master?author=rohityadav89@gmail.com',
      },
    ],
  },
  {
    name: 'VLC for Android',
    about: 'The VLC media player for Android.',
    summary:
      'Early JNI bindings for the LibVLC media player, and a fix for a media player memory leak.',
    years: '2011',
    links: [
      {
        label: 'View commits',
        href: 'https://github.com/videolan/vlc-android/commits?author=yadvr',
      },
    ],
  },
  {
    name: 'Haiku',
    about: 'An open source operating system inspired by BeOS.',
    summary:
      'Patches that fix file permission checks in the BFS and ext2 file system drivers (ticket #6750).',
    years: '2010',
    links: [
      {
        label: 'BFS commit',
        href: 'https://github.com/haiku/haiku/commit/48ec4fbb40a9ac5327e0351486946403d0b533b8',
      },
      {
        label: 'ext2 commit',
        href: 'https://github.com/haiku/haiku/commit/ea75a051ad0471a7fdeecd3be146bf73ca640716',
      },
    ],
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
    title: 'Libraries and tooling',
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

export type WorkProject = {
  name: string;
  summary: string;
  tech: string;
  href: string;
  /** Shown as a tag, e.g. "Beta" or "Archived". */
  status?: string;
  links?: ReadonlyArray<{label: string; href: string}>;
};

export type WorkOrg = {
  name: string;
  years: string;
  href?: string;
  projects: WorkProject[];
};

/** Projects built and maintained at other organisations, newest first. */
export const workOrgs: WorkOrg[] = [
  {
    name: 'ScaleNinja',
    years: '2026–present',
    href: 'https://scaleninja.com/',
    projects: [
      {
        name: 'MacVisor',
        summary:
          'Run macOS and Linux virtual machines on a Mac, with Windows 11 and AI sandboxes in tech preview.',
        tech: 'macOS',
        status: 'Beta',
        href: 'https://scaleninja.com/macvisor/',
      },
      {
        name: 'DeltaSnap',
        summary:
          'An APFS snapshot manager for Mac: list, label, diff and restore snapshots on any volume.',
        tech: 'macOS',
        href: 'https://scaleninja.com/deltasnap/',
      },
      {
        name: 'Noject',
        summary: 'Keeps external drives mounted on a Mac.',
        tech: 'macOS',
        href: 'https://scaleninja.com/noject/',
      },
      {
        name: 'DriveSync',
        summary: 'Syncs a folder with Google Drive, one reviewed change at a time.',
        tech: 'macOS',
        href: 'https://scaleninja.com/drivesync/',
      },
      {
        name: 'DeltaSync',
        summary: 'Compares and syncs folders on a Mac.',
        tech: 'macOS',
        status: 'Free',
        href: 'https://scaleninja.com/deltasync/',
      },
    ],
  },
  {
    name: 'Kubernetes',
    years: '2022–present',
    href: 'https://kubernetes.io/',
    projects: [
      {
        name: 'CloudStack Cluster API Provider',
        summary:
          'A Kubernetes Cluster API provider for Apache CloudStack, for creating and managing Kubernetes clusters on CloudStack.',
        tech: 'Go',
        href: 'https://github.com/kubernetes-sigs/cluster-api-provider-cloudstack',
      },
    ],
  },
  {
    name: 'Apache Software Foundation',
    years: '2012–present',
    href: 'https://www.apache.org/',
    projects: [
      {
        name: 'CloudStack',
        summary:
          'An open source platform for building and running infrastructure-as-a-service clouds.',
        tech: 'Java',
        href: 'https://github.com/apache/cloudstack/graphs/contributors?all=1',
      },
      {
        name: 'CloudMonkey',
        summary:
          "CloudStack's command-line client, cmk: an interactive shell and scriptable CLI, written in Go.",
        tech: 'Go',
        href: 'https://github.com/apache/cloudstack-cloudmonkey',
      },
      {
        name: 'CloudStack Terraform Provider',
        summary:
          'A Terraform provider for managing CloudStack resources as code.',
        tech: 'Go',
        href: 'https://github.com/apache/cloudstack-terraform-provider',
      },
      {
        name: 'Primate',
        summary:
          'A modern, role-based UI for CloudStack. It was merged into CloudStack in 2021 and is now its web UI.',
        tech: 'Vue.js',
        status: 'Archived',
        href: 'https://github.com/apache/cloudstack-primate',
      },
    ],
  },
  {
    name: 'ShapeBlue',
    years: '2014–2026',
    projects: [
      {
        name: 'hackerbook',
        summary:
          "The hacker's guide to CloudStack development: a hands-on course for new contributors.",
        tech: 'Course',
        href: 'https://github.com/shapeblue/hackerbook',
      },
      {
        name: 'mbx',
        summary:
          'MonkeyBox: build, run and test local CloudStack development and QA environments.',
        tech: 'Bash',
        href: 'https://github.com/cloudstack/mbx',
      },
    ],
  },
  {
    name: 'Wingify',
    years: '2013–2014',
    projects: [
      {
        name: 'agentredrabbit',
        summary:
          'A multithreaded agent that moves data from Redis to RabbitMQ, with a failsafe queue, graceful shutdown and recovery.',
        tech: 'Python',
        href: 'https://github.com/wingify/agentredrabbit',
        links: [
          {
            label: 'Blog: Scaling with queues',
            href: 'https://engineering.wingify.com/posts/scaling-with-queues/',
          },
        ],
      },
      {
        name: 'lua-resty-rabbitmqstomp',
        summary:
          "A RabbitMQ client for OpenResty that speaks STOMP 1.2 over nginx's cosocket API.",
        tech: 'Lua',
        href: 'https://github.com/wingify/lua-resty-rabbitmqstomp',
      },
      {
        name: 'rabbitmq-munin',
        summary:
          'Munin plug-ins that graph RabbitMQ connections, consumers, queues and memory.',
        tech: 'Shell',
        href: 'https://github.com/wingify/rabbitmq-munin',
      },
    ],
  },
];
