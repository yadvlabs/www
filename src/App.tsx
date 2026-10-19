import {Theme} from '@astryxdesign/core/theme';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Link} from '@astryxdesign/core/Link';
import {Icon} from '@astryxdesign/core/Icon';
import {Skeleton} from '@astryxdesign/core/Skeleton';
import {himalayaTheme} from './themes/himalaya/himalaya';
import {Landscape} from './components/Landscape';
import {Logo} from './components/Logo';
import {projects, stealthProjects} from './projects';
import type {Project, StealthProject} from './projects';

const GITHUB_ORG = 'https://github.com/yadvlabs';

export default function App() {
  return (
    <Theme theme={himalayaTheme}>
      <div className="page">
        <Hero />
        <main id="projects" className="section">
          <VStack gap={8}>
            <VStack gap={2}>
              <Text type="label" color="accent">
                Projects
              </Text>
              <Heading level={2} textWrap="balance">
                On the trail
              </Heading>
              <Text type="large" color="secondary" textWrap="pretty">
                Open source tools and experiments, plus a few climbs that are
                still under wraps.
              </Text>
            </VStack>

            {projects.map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}

            <VStack gap={3}>
              <HStack gap={2} vAlign="center">
                <Heading level={3}>Above the clouds</Heading>
                <Badge variant="gray" label="Stealth" />
              </HStack>
              <Grid columns={{minWidth: 220, max: 3}} gap={4}>
                {stealthProjects.map(stealth => (
                  <StealthCard key={stealth.codename} project={stealth} />
                ))}
              </Grid>
            </VStack>
          </VStack>
        </main>
        <Footer />
      </div>
    </Theme>
  );
}

function Hero() {
  return (
    <header className="hero">
      <Landscape />
      <div className="hero-inner">
        <nav className="hero-nav" aria-label="Primary">
          <a className="brand" href="/" aria-label="yadv labs home">
            <Logo size={34} />
            <span className="brand-name">yadv labs</span>
          </a>
          <HStack gap={4} vAlign="center">
            <a className="hero-nav-link" href="#projects">
              Projects
            </a>
            <a className="hero-nav-link" href={GITHUB_ORG}>
              GitHub
            </a>
          </HStack>
        </nav>

        <div className="hero-copy">
          <VStack gap={5} hAlign="center">
            <Heading level={1} type="display-1" color="inherit" justify="center" textWrap="balance">
              Experiments from base camp
            </Heading>
            <Text type="large" color="inherit" justify="center" textWrap="pretty">
              yadv labs is where Rohit Yadav builds, breaks and ships side
              projects, from developer tooling to ideas still being scouted.
            </Text>
            <HStack gap={3} hAlign="center" wrap="wrap">
              <Button label="See the projects" variant="primary" size="lg" href="#projects" />
              <Button
                label="Follow on GitHub"
                size="lg"
                href={GITHUB_ORG}
                endContent={<Icon icon="externalLink" />}
              />
            </HStack>
          </VStack>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({project}: {project: Project}) {
  return (
    <Card elevation="low" padding={6}>
      <Grid columns={{minWidth: 300, max: 2}} columnGap={10} rowGap={8}>
        <VStack gap={4}>
          <VStack gap={2}>
            <HStack gap={2} vAlign="center" wrap="wrap">
              <Heading level={3}>{project.name}</Heading>
              <Badge variant="green" label="Open source" />
            </HStack>
            <Text type="body" color="secondary" textWrap="pretty">
              {project.summary}
            </Text>
          </VStack>
          <HStack gap={2} wrap="wrap">
            {project.tags.map(tag => (
              <Badge key={tag} variant="blue" label={tag} />
            ))}
            <Badge variant="gray" label={project.license} />
          </HStack>
          <HStack gap={3} wrap="wrap" vAlign="center">
            <Button
              label="View on GitHub"
              variant="primary"
              href={project.href}
              endContent={<Icon icon="externalLink" />}
            />
            <Link href={`${project.href}#readme`} isStandalone>
              Read the guide
            </Link>
          </HStack>
        </VStack>

        <VStack gap={3}>
          <Text type="label">What it does</Text>
          <VStack gap={2} as="ul">
            {project.highlights.map(item => (
              <HStack key={item} as="li" gap={2} vAlign="start">
                <span className="highlight-icon">
                  <Icon icon="check" color="success" size="sm" />
                </span>
                <Text type="body" color="secondary">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Grid>
    </Card>
  );
}

function StealthCard({project}: {project: StealthProject}) {
  return (
    <Card variant="muted" padding={5}>
      <VStack gap={4}>
        <HStack hAlign="between" vAlign="center">
          <Text type="label">{project.codename}</Text>
          <Text type="supporting" hasTabularNumbers>
            {project.altitude}
          </Text>
        </HStack>
        <VStack gap={2}>
          {['92%', '78%', '54%'].map((width, i) => (
            <Skeleton key={width} width={width} height={10} radius="rounded" index={i} />
          ))}
        </VStack>
        <Text type="supporting">Stealth project. {project.hint}.</Text>
      </VStack>
    </Card>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <HStack hAlign="between" vAlign="center" wrap="wrap" gap={3}>
        <HStack gap={2} vAlign="center">
          <span className="footer-logo">
            <Logo size={22} />
          </span>
          <Text type="supporting">© {year} yadv labs · yadv.in</Text>
        </HStack>
        <Link href={GITHUB_ORG} isStandalone color="secondary">
          github.com/yadvlabs
        </Link>
      </HStack>
    </footer>
  );
}
