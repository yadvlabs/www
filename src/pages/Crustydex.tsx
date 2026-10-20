import {useEffect, useState} from 'react';
import type {CSSProperties} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Card} from '@astryxdesign/core/Card';
import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Dialog, DialogHeader} from '@astryxdesign/core/Dialog';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {
  SegmentedControl,
  SegmentedControlItem,
} from '@astryxdesign/core/SegmentedControl';
import {SiteShell} from '../components/SiteShell';
import {crustydex, crustyParts} from '../crusties';
import type {Crusty, CrustyPart} from '../crusties';

// Same image fill as the project cards: there is no Image primitive that
// fills an AspectRatio box.
const art: CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

/** Crusty's own colours: green shell, red claws, blue legs. */
const partBadge = {shell: 'green', claw: 'red', leg: 'blue'} as const;

const partLabel = Object.fromEntries(
  crustyParts.map(({part, label}) => [part, label]),
) as Record<CrustyPart, string>;

type Filter = 'all' | CrustyPart;

function slugFromHash(): string | null {
  const slug = decodeURIComponent(window.location.hash.slice(1));
  return crustydex.some(crusty => crusty.slug === slug) ? slug : null;
}

export default function Crustydex() {
  const [filter, setFilter] = useState<Filter>('all');
  const [openSlug, setOpenSlug] = useState<string | null>(slugFromHash);

  useEffect(() => {
    const onHashChange = () => setOpenSlug(slugFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const open = (slug: string | null) => {
    setOpenSlug(slug);
    const url = slug ? `#${slug}` : window.location.pathname;
    window.history.replaceState(null, '', url);
  };

  const shown =
    filter === 'all'
      ? crustydex
      : crustydex.filter(crusty => crusty.parts.includes(filter));
  const openIndex = crustydex.findIndex(crusty => crusty.slug === openSlug);
  const step = (by: number) =>
    open(crustydex[(openIndex + by + crustydex.length) % crustydex.length].slug);

  return (
    <SiteShell page="crustydex">
      <Grid columns={{minWidth: 280, max: 2}} gap={6} align="center">
        <VStack gap={3}>
          <Heading level={1}>Crustydex</Heading>
          <Text type="large" color="secondary" textWrap="pretty">
            Crusty the tortocrab is the YADV Labs mascot: steady as a tortoise,
            quick as a crab. These are all the Crustys that have hatched so
            far. Each one takes after a part of the original: its steady shell,
            its quick claws or its busy legs.
          </Text>
        </VStack>
        <AspectRatio ratio={2}>
          <img
            src="/crusty/resting.svg"
            alt="Crusty the tortocrab, resting"
            style={art}
          />
        </AspectRatio>
      </Grid>

      <Grid columns={{minWidth: 240, max: 3}} gap={4}>
        {crustyParts.map(({part, label, about}) => (
          <Card key={part} variant="muted" padding={5}>
            <VStack gap={2} hAlign="start">
              <Badge variant={partBadge[part]} label={label} />
              <Text type="body" color="secondary" textWrap="pretty">
                {about}
              </Text>
            </VStack>
          </Card>
        ))}
      </Grid>

      <VStack gap={4}>
        <HStack hAlign="between" vAlign="center" gap={3} wrap="wrap">
          <Heading level={2}>All entries</Heading>
          <SegmentedControl
            label="Filter by part"
            value={filter}
            onChange={value => setFilter(value as Filter)}>
            <SegmentedControlItem
              value="all"
              label={`All ${crustydex.length}`}
            />
            {crustyParts.map(({part, label}) => (
              <SegmentedControlItem
                key={part}
                value={part}
                label={`${label} ${crustydex.filter(c => c.parts.includes(part)).length}`}
              />
            ))}
          </SegmentedControl>
        </HStack>
        <Grid columns={{minWidth: 200, max: 4}} gap={4}>
          {shown.map(crusty => (
            <CrustyCard
              key={crusty.slug}
              crusty={crusty}
              onOpen={() => open(crusty.slug)}
            />
          ))}
        </Grid>
      </VStack>

      {openIndex >= 0 && (
        <Dialog
          isOpen
          onOpenChange={isOpen => !isOpen && open(null)}
          width={760}
          maxHeight="90dvh">
          <CrustyEntry
            crusty={crustydex[openIndex]}
            onClose={() => open(null)}
            onStep={step}
          />
        </Dialog>
      )}
    </SiteShell>
  );
}

function PartBadges({parts}: {parts: CrustyPart[]}) {
  return (
    <HStack gap={1} wrap="wrap">
      {parts.map(part => (
        <Badge key={part} variant={partBadge[part]} label={partLabel[part]} />
      ))}
    </HStack>
  );
}

function CrustyCard({crusty, onOpen}: {crusty: Crusty; onOpen: () => void}) {
  return (
    <ClickableCard
      label={`${crusty.name}, No. ${crusty.no}`}
      onClick={onOpen}
      padding={4}
      height="100%">
      <VStack gap={3}>
        <AspectRatio ratio={1}>
          <img src={crusty.image} alt="" loading="lazy" style={art} />
        </AspectRatio>
        <VStack gap={1}>
          <Text type="supporting" hasTabularNumbers>
            No. {crusty.no}
          </Text>
          <Heading level={3}>{crusty.name}</Heading>
        </VStack>
        <PartBadges parts={crusty.parts} />
      </VStack>
    </ClickableCard>
  );
}

function CrustyEntry({
  crusty,
  onClose,
  onStep,
}: {
  crusty: Crusty;
  onClose: () => void;
  onStep: (by: number) => void;
}) {
  const stats = [
    {label: 'Steady', value: crusty.stats.steady},
    {label: 'Snap', value: crusty.stats.snap},
    {label: 'Scuttle', value: crusty.stats.scuttle},
  ];
  return (
    <VStack gap={0}>
      <DialogHeader
        title={crusty.name}
        subtitle={`No. ${crusty.no}`}
        onOpenChange={isOpen => !isOpen && onClose()}
      />
      <VStack gap={5} padding={5}>
        <Grid columns={{minWidth: 240, max: 2}} gap={5}>
          <AspectRatio ratio={1}>
            <img
              src={crusty.image}
              alt={`${crusty.name}, a Crusty variant`}
              style={art}
            />
          </AspectRatio>
          <VStack gap={4}>
            <PartBadges parts={crusty.parts} />
            <Text type="body" textWrap="pretty">
              {crusty.text}
            </Text>
            <VStack gap={1}>
              <Text type="supporting">Habitat</Text>
              <Text type="label">{crusty.habitat}</Text>
            </VStack>
            <VStack gap={1}>
              <Text type="supporting">Signature move</Text>
              <Text type="label">{crusty.move}</Text>
            </VStack>
            <VStack gap={2}>
              {stats.map(stat => (
                <ProgressBar
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  hasValueLabel
                  formatValueLabel={value => String(value)}
                />
              ))}
            </VStack>
          </VStack>
        </Grid>
        {crusty.moods && (
          <VStack gap={2}>
            <Text type="label">Moods</Text>
            <Grid columns={{minWidth: 96, max: 4}} gap={3}>
              {crusty.moods.map(mood => (
                <VStack key={mood.label} gap={1} hAlign="center">
                  <AspectRatio ratio={1}>
                    <img src={mood.image} alt="" loading="lazy" style={art} />
                  </AspectRatio>
                  <Text type="supporting">{mood.label}</Text>
                </VStack>
              ))}
            </Grid>
          </VStack>
        )}
        <HStack hAlign="between" gap={2}>
          <Button label="Previous" size="sm" onClick={() => onStep(-1)} />
          <Button label="Next" size="sm" onClick={() => onStep(1)} />
        </HStack>
      </VStack>
    </VStack>
  );
}
