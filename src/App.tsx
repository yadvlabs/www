import type {CSSProperties} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {VStack, HStack, Layout, LayoutContent} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Link} from '@astryxdesign/core/Link';
import {Icon} from '@astryxdesign/core/Icon';
import {Divider} from '@astryxdesign/core/Divider';
import {yadvTheme} from './themes/yadv/yadv';
import './themes/yadv/yadv.css';
import '@astryxdesign/theme-stone/fonts.css';
import {Logo} from './components/Logo';
import {featured, stealthProjects} from './projects';
import type {Project, StealthProject} from './projects';

const GITHUB_ORG = 'https://github.com/yadvlabs';
const PARENT_SITE = 'https://yadv.in';

// There is no Image primitive that fills an AspectRatio box, so the images
// carry the one bit of inline style (same approach as the Astryx gallery
// templates).
const image: CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

// The featured image stretches to the height of the copy beside it.
const featuredImage: CSSProperties = {...image, minHeight: 280};

export default function App() {
  return (
    <Theme theme={yadvTheme}>
      <Layout
        height="fill"
        contentWidth={1200}
        content={
          <LayoutContent padding={6}>
            <VStack gap={10}>
              <Header />

              <Grid columns={{minWidth: 280, max: 2}} gap={4} align="end">
                <Heading level={1} textWrap="balance">
                  Projects and experiments from yadv labs
                </Heading>
                <VStack gap={3} hAlign="start">
                  <Text type="large" color="secondary" textWrap="pretty">
                    Open source tools and side projects by{' '}
                    <Link href={PARENT_SITE} size="lg" weight="semibold">
                      Rohit Yadav
                    </Link>
                    , plus a few things that are still under wraps.
                  </Text>
                </VStack>
              </Grid>

              <FeaturedProject project={featured} />

              <VStack gap={4}>
                <HStack gap={2} vAlign="center">
                  <Heading level={2}>Coming soon</Heading>
                  <Badge variant="neutral" label="Stealth" />
                </HStack>
                <Grid columns={{minWidth: 260, max: 3}} gap={6}>
                  {stealthProjects.map(project => (
                    <StealthCard key={project.name} project={project} />
                  ))}
                </Grid>
              </VStack>

              <VStack gap={4}>
                <Divider />
                <Footer />
              </VStack>
            </VStack>
          </LayoutContent>
        }
      />
    </Theme>
  );
}

function Header() {
  return (
    <HStack hAlign="between" vAlign="center" gap={3}>
      <Link href="/" color="primary" label="yadv labs home">
        <HStack gap={2} vAlign="center">
          <Logo size={32} />
          <Text type="large" weight="bold" color="inherit">
            yadv labs
          </Text>
        </HStack>
      </Link>
      <HStack gap={4} vAlign="center">
        <Link href={PARENT_SITE} isStandalone color="secondary">
          yadv.in
        </Link>
        <Link href={GITHUB_ORG} isStandalone color="secondary">
          GitHub
        </Link>
      </HStack>
    </HStack>
  );
}

function FeaturedProject({project}: {project: Project}) {
  return (
    <Card padding={0} elevation="low">
      <Grid columns={{minWidth: 320, max: 2}} gap={0}>
        <img src={project.image} alt={project.imageAlt} style={featuredImage} />
        <VStack gap={5} padding={6} vAlign="center">
          <VStack gap={2}>
            <HStack gap={2} vAlign="center" wrap="wrap">
              <Heading level={2}>{project.name}</Heading>
              <Badge variant="green" label="Open source" />
            </HStack>
            <Text type="body" color="secondary" textWrap="pretty">
              {project.summary}
            </Text>
          </VStack>
          <VStack gap={2} as="ul">
            {project.highlights.map(item => (
              <HStack key={item} as="li" gap={2} vAlign="start">
                <Icon icon="check" color="success" size="sm" />
                <Text type="body">{item}</Text>
              </HStack>
            ))}
          </VStack>
          <HStack gap={2} wrap="wrap">
            {project.tags.map(tag => (
              <Badge key={tag} variant="neutral" label={tag} />
            ))}
            <Badge variant="neutral" label={project.license} />
          </HStack>
          <HStack gap={3} wrap="wrap">
            <Button
              label="View on GitHub"
              variant="primary"
              href={project.href}
              endContent={<Icon icon="externalLink" />}
            />
          </HStack>
        </VStack>
      </Grid>
    </Card>
  );
}

function StealthCard({project}: {project: StealthProject}) {
  return (
    <VStack gap={3}>
      <Card padding={0}>
        <AspectRatio ratio={4 / 3}>
          <img src={project.image} alt="" style={image} />
        </AspectRatio>
      </Card>
      <VStack gap={1} hAlign="start">
        <HStack gap={2} vAlign="center" wrap="wrap">
          <Heading level={3}>{project.name}</Heading>
          <Badge variant="neutral" label={project.tag} />
        </HStack>
        <Text type="body" color="secondary">
          {project.summary}
        </Text>
      </VStack>
    </VStack>
  );
}

function Footer() {
  return (
    <HStack hAlign="between" vAlign="center" wrap="wrap" gap={3}>
      <Text type="supporting">
        © {new Date().getFullYear()} yadv labs · labs.yadv.in · part of{' '}
        <Link href={PARENT_SITE} size="sm" color="inherit" hasUnderline>
          yadv.in
        </Link>
      </Text>
      <Link href={GITHUB_ORG} isStandalone color="secondary">
        github.com/yadvlabs
      </Link>
    </HStack>
  );
}
