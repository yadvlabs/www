import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {List, ListItem} from '@astryxdesign/core/List';
import {SiteShell} from '../components/SiteShell';
import {OLD_REPO, oldProjectGroups, oldProjectHref} from '../projects';

export default function Old() {
  return (
    <SiteShell page="old">
      <Grid columns={{minWidth: 280, max: 2}} gap={4} align="end">
        <Heading level={1} textWrap="balance">
          Old experiments
        </Heading>
        <VStack gap={3} hAlign="start">
          <Text type="large" color="secondary" textWrap="pretty">
            Projects from 2008 to 2013, kept as they were in one archive
            repository. They are no longer maintained.
          </Text>
          <Button
            label="Browse the archive on GitHub"
            href={OLD_REPO}
            endContent={<Icon icon="externalLink" />}
          />
        </VStack>
      </Grid>

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
    </SiteShell>
  );
}
