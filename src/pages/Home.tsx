import type {CSSProperties, ReactNode} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Link} from '@astryxdesign/core/Link';
import {Icon} from '@astryxdesign/core/Icon';
import {SiteShell, PARENT_SITE} from '../components/SiteShell';
import {
  projects,
  stealthProjects,
  oldProjectCount,
  workOrgs,
} from '../projects';
import type {Project, StealthProject} from '../projects';

// There is no Image primitive that fills an AspectRatio box, so the images
// carry the one bit of inline style (same approach as the Astryx gallery
// templates).
const image: CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

// A project image stretches to the height of the copy beside it.
const projectImage: CSSProperties = {...image, minHeight: 280};

export default function Home() {
  return (
    <SiteShell page="home">
      <Grid columns={{minWidth: 280, max: 2}} gap={4} align="end">
        <Heading level={1} textWrap="balance">
          Projects and experiments from yadv labs
        </Heading>
        <VStack gap={3} hAlign="start">
          <Text type="large" color="secondary" textWrap="pretty">
            Open source tools and side projects by{' '}
            <Link href={PARENT_SITE} size="lg" weight="semibold" hasUnderline>
              Rohit Yadav
            </Link>
            , plus a few things that are still under wraps.
          </Text>
        </VStack>
      </Grid>

      <VStack gap={6}>
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </VStack>

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
        <PagePanel
          title="Work"
          href="/work/"
          linkLabel="Browse work →">
          {workProjectCount} products and open source projects built at
          ScaleNinja, Kubernetes, the Apache Software Foundation, ShapeBlue and
          Wingify.
        </PagePanel>
        <PagePanel
          title="Old experiments"
          href="/old/"
          linkLabel="Browse old experiments →">
          {oldProjectCount} earlier projects from 2008 to 2013, plus
          contributions to VLMC, VLC for Android and Haiku.
        </PagePanel>
      </VStack>
    </SiteShell>
  );
}

const workProjectCount = workOrgs.reduce(
  (count, org) => count + org.projects.length,
  0,
);

/** A panel at the foot of the page that leads to one of the other pages. */
function PagePanel({
  title,
  href,
  linkLabel,
  children,
}: {
  title: string;
  href: string;
  linkLabel: string;
  children: ReactNode;
}) {
  return (
    <Card variant="muted" padding={6}>
      <HStack hAlign="between" vAlign="center" gap={4} wrap="wrap">
        <VStack gap={1}>
          <Heading level={2}>{title}</Heading>
          <Text type="body" color="secondary" textWrap="pretty">
            {children}
          </Text>
        </VStack>
        <Link href={href} isStandalone weight="semibold">
          {linkLabel}
        </Link>
      </HStack>
    </Card>
  );
}

function ProjectCard({project}: {project: Project}) {
  return (
    <Card padding={0} elevation="low">
      <Grid columns={{minWidth: 320, max: 2}} gap={0}>
        <img src={project.image} alt={project.imageAlt} style={projectImage} />
        <VStack gap={5} padding={6} vAlign="center">
          <VStack gap={2}>
            <HStack gap={2} vAlign="center" wrap="wrap">
              <Heading level={2}>{project.name}</Heading>
              <Badge
                variant={project.status?.variant ?? 'green'}
                label={project.status?.label ?? 'Open source'}
              />
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
            {project.license && (
              <Badge variant="neutral" label={project.license} />
            )}
          </HStack>
          <HStack gap={3} wrap="wrap">
            <Button
              label="View on GitHub"
              variant="primary"
              href={project.href}
              endContent={<Icon icon="externalLink" />}
            />
            {project.website && (
              <Button
                label={project.website.label}
                href={project.website.href}
                endContent={
                  project.website.href.startsWith('http') ? (
                    <Icon icon="externalLink" />
                  ) : undefined
                }
              />
            )}
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
