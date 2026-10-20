import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Link} from '@astryxdesign/core/Link';
import {List, ListItem} from '@astryxdesign/core/List';
import {SiteShell} from '../components/SiteShell';
import {workOrgs} from '../projects';
import type {WorkOrg} from '../projects';

export default function Work() {
  return (
    <SiteShell page="work">
      <Grid columns={{minWidth: 280, max: 2}} gap={4} align="end">
        <Heading level={1} textWrap="balance">
          Work
        </Heading>
        <Text type="large" color="secondary" textWrap="pretty">
          Products and open source projects built at ScaleNinja, Kubernetes,
          the Apache Software Foundation, ShapeBlue and Wingify.
        </Text>
      </Grid>

      {workOrgs.map(org => (
        <List
          key={org.name}
          hasDividers
          edgeCompensation="inline"
          header={<OrgHeader org={org} />}>
          {org.projects.map(project => (
            <ListItem
              key={project.href}
              label={project.name}
              href={project.href}
              description={
                <VStack gap={1.5}>
                  <Text type="body" color="secondary" textWrap="pretty">
                    {project.summary}
                  </Text>
                  <HStack gap={2} vAlign="center" wrap="wrap">
                    <Badge variant="blue" label={project.tech} />
                    {project.status && (
                      <Badge variant="neutral" label={project.status} />
                    )}
                  </HStack>
                </VStack>
              }
            />
          ))}
        </List>
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
        {org.projects.flatMap(project =>
          (project.links ?? []).map(link => (
            <Link key={link.href} href={link.href} size="sm" hasUnderline>
              {link.label}
            </Link>
          )),
        )}
      </HStack>
    </VStack>
  );
}
