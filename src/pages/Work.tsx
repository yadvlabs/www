import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Link} from '@astryxdesign/core/Link';
import {SiteShell} from '../components/SiteShell';
import {workOrgs} from '../projects';
import type {WorkOrg, WorkProject} from '../projects';

export default function Work() {
  return (
    <SiteShell page="work">
      <Grid columns={{minWidth: 280, max: 2}} gap={4} align="end">
        <Heading level={1} type="display-2" textWrap="balance">
          Work
        </Heading>
        <Text type="large" color="secondary" textWrap="pretty">
          Products and open source projects built at ScaleNinja, Kubernetes,
          the Apache Software Foundation, ShapeBlue and Wingify.
        </Text>
      </Grid>

      {workOrgs.map(org => (
        <VStack key={org.name} gap={4}>
          <OrgHeader org={org} />
          <Grid columns={{minWidth: 260, max: 3}} gap={4}>
            {org.projects.map(project => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </Grid>
        </VStack>
      ))}
    </SiteShell>
  );
}

function OrgHeader({org}: {org: WorkOrg}) {
  return (
    <VStack gap={1}>
      <Heading level={2}>{org.name}</Heading>
      <HStack gap={3} vAlign="center" wrap="wrap">
        <Text type="supporting" hasTabularNumbers>
          {org.years}
        </Text>
        {org.href && (
          <Link href={org.href} size="sm" hasUnderline>
            {new URL(org.href).hostname.replace(/^www\./, '')}
          </Link>
        )}
      </HStack>
    </VStack>
  );
}

function ProjectCard({project}: {project: WorkProject}) {
  return (
    <ClickableCard
      label={project.name}
      href={project.href}
      padding={5}
      height="100%">
      <VStack gap={3} height="100%">
        <HStack gap={2} vAlign="center" wrap="wrap">
          <Heading level={3}>{project.name}</Heading>
          {project.status && (
            <Badge variant="neutral" label={project.status} />
          )}
        </HStack>
        <Text type="body" color="secondary" textWrap="pretty">
          {project.summary}
        </Text>
        <VStack gap={3} vAlign="end" height="100%">
          <HStack gap={3} vAlign="center" wrap="wrap">
            <Badge variant="blue" label={project.tech} />
            {project.links?.map(link => (
              <Link key={link.href} href={link.href} size="sm" hasUnderline>
                {link.label}
              </Link>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </ClickableCard>
  );
}
