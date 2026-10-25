import type {CSSProperties} from 'react';
import {ArrowDown, ArrowRight} from 'lucide-react';
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
import {SiteShell, PARENT_SITE, GITHUB_ORG} from '../components/SiteShell';
import {GitHubMark} from '../components/GitHubMark';
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

// Crusty in the hero keeps its whole outline.
const art: CSSProperties = {...image, objectFit: 'contain'};

export default function Home() {
  return (
    <SiteShell page="home">
      <Grid columns={{minWidth: 300, max: 2}} gap={8} align="center">
        <VStack gap={5} hAlign="start">
          <Badge variant="yellow" label="Meet Crusty, our tortocrab mascot" />
          <Heading level={1} type="display-1" textWrap="balance">
            Steady as a tortoise.{' '}
            <span className="yadv-gradient-text">Quick as a crab.</span>
          </Heading>
          <Text type="large" color="secondary" textWrap="pretty">
            YADV Labs is where{' '}
            <Link href={PARENT_SITE} size="lg" weight="semibold" hasUnderline>
              Rohit Yadav
            </Link>{' '}
            builds open source tools, infrastructure and side projects, plus a
            few things that are still under wraps.
          </Text>
          <HStack gap={3} wrap="wrap">
            <Button
              label="Explore projects"
              variant="primary"
              size="lg"
              href="#projects"
              endContent={<Icon icon={ArrowDown} />}
            />
            <Button
              label="GitHub"
              size="lg"
              href={GITHUB_ORG}
              icon={<Icon icon={GitHubMark} />}
            />
          </HStack>
        </VStack>
        <AspectRatio ratio={1}>
          <img
            src="/crusty/crusty-standing.svg"
            alt="Crusty the tortocrab, the YADV Labs mascot"
            style={art}
          />
        </AspectRatio>
      </Grid>

      <WorkStrip />

      <VStack gap={6}>
        <SectionHeading
          id="projects"
          eyebrow="Featured"
          title="Projects"
          count={projects.length}
        />
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i + 1} />
        ))}
      </VStack>

      <VStack gap={6}>
        <SectionHeading
          eyebrow="Stealth"
          title="Coming soon"
          count={stealthProjects.length}
        />
        <Grid columns={{minWidth: 260, max: 3}} gap={6}>
          {stealthProjects.map(project => (
            <StealthCard key={project.name} project={project} />
          ))}
        </Grid>
      </VStack>

      <Card variant="muted" padding={6}>
        <HStack hAlign="between" vAlign="center" gap={4} wrap="wrap">
          <VStack gap={1}>
            <Heading level={2}>Old experiments</Heading>
            <Text type="body" color="secondary" textWrap="pretty">
              {oldProjectCount} earlier projects from 2008 to 2013, plus
              contributions to VLMC, VLC for Android and Haiku.
            </Text>
          </VStack>
          <Button
            label="Browse old experiments"
            href="/old/"
            endContent={<Icon icon={ArrowRight} />}
          />
        </HStack>
      </Card>
    </SiteShell>
  );
}

/** A slim strip under the hero that leads to the Work page. */
function WorkStrip() {
  return (
    <Card padding={4}>
      <HStack hAlign="between" vAlign="center" gap={3} wrap="wrap">
        <HStack gap={3} vAlign="center" wrap="wrap">
          <Text type="label">Work</Text>
          <Text type="supporting">
            {workProjectCount} projects at
          </Text>
          <HStack gap={2} wrap="wrap">
            {workOrgs.map(org => (
              <Badge key={org.name} variant="neutral" label={org.name} />
            ))}
          </HStack>
        </HStack>
        <Link href="/work/" isStandalone size="sm" weight="semibold">
          See work →
        </Link>
      </HStack>
    </Card>
  );
}

const workProjectCount = workOrgs.reduce(
  (count, org) => count + org.projects.length,
  0,
);

function SectionHeading({
  id,
  eyebrow,
  title,
  count,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  count: number;
}) {
  return (
    <VStack gap={1}>
      <Text type="label" color="accent">
        {eyebrow}
      </Text>
      <HStack gap={2} vAlign="center">
        <Heading level={2} id={id}>
          {title}
        </Heading>
        <Badge variant="blue" label={String(count)} />
      </HStack>
    </VStack>
  );
}

function ProjectCard({project, index}: {project: Project; index: number}) {
  return (
    <Card padding={0} elevation="low">
      <Grid columns={{minWidth: 320, max: 2}} gap={0}>
        <img src={project.image} alt={project.imageAlt} style={projectImage} />
        <VStack gap={5} padding={6} vAlign="center">
          <VStack gap={2}>
            <Text type="label" color="accent" hasTabularNumbers>
              {String(index).padStart(2, '0')}
            </Text>
            <HStack gap={2} vAlign="center" wrap="wrap">
              <Heading level={3}>{project.name}</Heading>
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
          <Badge variant="yellow" label={project.tag} />
        </HStack>
        <Text type="body" color="secondary">
          {project.summary}
        </Text>
      </VStack>
    </VStack>
  );
}
