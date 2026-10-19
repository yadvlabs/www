import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Card} from '@astryxdesign/core/Card';
import {Link} from '@astryxdesign/core/Link';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {List, ListItem} from '@astryxdesign/core/List';
import {SiteShell} from '../components/SiteShell';
import {
  OLD_REPO,
  HACKLAB_REPO,
  hacklabTopics,
  contributions,
  oldProjectGroups,
  oldProjectHref,
} from '../projects';
import type {Contribution} from '../projects';

export default function Old() {
  return (
    <SiteShell page="old">
      <Grid columns={{minWidth: 280, max: 2}} gap={4} align="end">
        <Heading level={1} textWrap="balance">
          Old experiments
        </Heading>
        <VStack gap={3} hAlign="start">
          <Text type="large" color="secondary" textWrap="pretty">
            Open source contributions and earlier projects from 2008 to 2013.
            The projects are kept as they were in one archive repository and
            are no longer maintained.
          </Text>
          <Button
            label="Browse the archive on GitHub"
            href={OLD_REPO}
            endContent={<Icon icon="externalLink" />}
          />
        </VStack>
      </Grid>

      <VStack gap={4}>
        <Heading level={2}>Open source contributions</Heading>
        <Grid columns={{minWidth: 280, max: 3}} gap={4}>
          {contributions.map(contribution => (
            <ContributionCard
              key={contribution.name}
              contribution={contribution}
            />
          ))}
        </Grid>
      </VStack>

      {oldProjectGroups.map(group => (
        <List
          key={group.title}
          hasDividers
          edgeCompensation="inline"
          header={<Heading level={2}>{group.title}</Heading>}>
          {group.projects.map(project => (
            <ListItem
              key={project.path}
              label={project.name}
              href={oldProjectHref(project.path)}
              description={
                <VStack gap={1.5}>
                  <Text type="body" color="secondary" textWrap="pretty">
                    {project.summary}
                  </Text>
                  <HStack gap={2} vAlign="center">
                    <Badge variant="blue" label={project.tech} />
                    {project.years && (
                      <Text type="supporting" hasTabularNumbers>
                        {project.years}
                      </Text>
                    )}
                  </HStack>
                </VStack>
              }
            />
          ))}
        </List>
      ))}

      <Card variant="muted" padding={6}>
        <VStack gap={4}>
          <VStack gap={2}>
            <Heading level={2}>Hacklab</Heading>
            <Text type="body" color="secondary" textWrap="pretty">
              A scratchpad of small hacks, tools and learning exercises:
              algorithms and competitive programming (Project Euler, SPOJ,
              Codeforces, USACO), Stripe CTF3 levels, design patterns,
              university lab work, and first steps in a dozen languages.
            </Text>
          </VStack>
          <HStack gap={2} wrap="wrap">
            {hacklabTopics.map(topic => (
              <Badge key={topic} variant="blue" label={topic} />
            ))}
          </HStack>
          <HStack>
            <Button
              label="Browse hacklab on GitHub"
              href={HACKLAB_REPO}
              endContent={<Icon icon="externalLink" />}
            />
          </HStack>
        </VStack>
      </Card>
    </SiteShell>
  );
}

function ContributionCard({contribution}: {contribution: Contribution}) {
  return (
    <Card padding={5}>
      <VStack gap={3}>
        <VStack gap={1}>
          <HStack hAlign="between" vAlign="center" gap={2}>
            <Heading level={3}>{contribution.name}</Heading>
            <Text type="supporting" hasTabularNumbers>
              {contribution.years}
            </Text>
          </HStack>
          <Text type="supporting">{contribution.about}</Text>
        </VStack>
        <Text type="body" textWrap="pretty">
          {contribution.summary}
        </Text>
        <HStack gap={4} wrap="wrap">
          {contribution.links.map(link => (
            <Link key={link.href} href={link.href} isStandalone>
              {link.label}
            </Link>
          ))}
        </HStack>
      </VStack>
    </Card>
  );
}
