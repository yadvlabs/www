import type {ReactNode} from 'react';
import {useMediaQuery} from '@astryxdesign/core/hooks';
import {Theme} from '@astryxdesign/core/theme';
import {
  VStack,
  HStack,
  Layout,
  LayoutContent,
  LayoutHeader,
} from '@astryxdesign/core/Layout';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {Icon} from '@astryxdesign/core/Icon';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Divider} from '@astryxdesign/core/Divider';
import {yadvTheme} from '../themes/yadv/yadv';
import '../themes/yadv/yadv.css';
import '@astryxdesign/theme-stone/fonts.css';
import {ColorModeToggle, useColorMode} from './ColorMode';
import type {ColorMode} from './ColorMode';
import {GitHubMark} from './GitHubMark';
import {Logo} from './Logo';

export const GITHUB_ORG = 'https://github.com/yadvlabs';
export const PARENT_SITE = 'https://yadv.in';

type Page = 'home' | 'work' | 'old' | 'reef' | 'crustydex';

/** Top navigation, and which pages light up each item. */
const NAV: ReadonlyArray<{label: string; href: string; pages: Page[]}> = [
  {label: 'Projects', href: '/', pages: ['home', 'reef', 'old']},
  {label: 'Work', href: '/work/', pages: ['work']},
  {label: 'Crustydex', href: '/crustydex/', pages: ['crustydex']},
];

/** Theme, pinned header, page frame and footer shared by every page. */
export function SiteShell({page, children}: {page: Page; children: ReactNode}) {
  const colorMode = useColorMode();
  return (
    <Theme theme={yadvTheme} mode={colorMode.mode}>
      <Layout
        height="fill"
        contentWidth={1200}
        header={
          <LayoutHeader hasDivider>
            <Header
              page={page}
              colorMode={colorMode.resolved}
              onToggleColorMode={colorMode.toggle}
            />
          </LayoutHeader>
        }
        content={
          <LayoutContent padding={6}>
            <VStack gap={10}>
              {children}
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

function Header({
  page,
  colorMode,
  onToggleColorMode,
}: {
  page: Page;
  colorMode: ColorMode;
  onToggleColorMode: () => void;
}) {
  // On phones the mark alone leaves room for every nav item.
  const isNarrow = useMediaQuery('(max-width: 560px)');
  return (
    <TopNav
      label="Main"
      heading={
        <TopNavHeading
          logo={<Logo size={28} title={isNarrow ? 'YADV Labs home' : undefined} />}
          heading={isNarrow ? undefined : 'YADV Labs'}
          headingHref="/"
        />
      }
      endContent={
        <HStack gap={1} vAlign="center">
          {NAV.map(item => (
            <TopNavItem
              key={item.href}
              label={item.label}
              href={item.href}
              isSelected={item.pages.includes(page)}
            />
          ))}
          <TopNavItem
            label="YADV Labs on GitHub"
            href={GITHUB_ORG}
            isIconOnly
            icon={<Icon icon={GitHubMark} />}
          />
          <ColorModeToggle
            resolved={colorMode}
            onToggle={onToggleColorMode}
          />
        </HStack>
      }
    />
  );
}

function Footer() {
  return (
    <HStack hAlign="between" vAlign="center" wrap="wrap" gap={3}>
      <Text type="supporting">
        © {new Date().getFullYear()} Rohit Yadav ·{' '}
        <Link href={PARENT_SITE} size="sm" color="inherit" hasUnderline>
          yadv.in
        </Link>
      </Text>
      <HStack gap={4} vAlign="center">
        <Link href={GITHUB_ORG} isStandalone color="secondary">
          github.com/yadvlabs
        </Link>
        <Link href="/crustydex/" label="Crusty, the YADV Labs mascot">
          <img
            src="/crusty/peekaboo.svg"
            alt=""
            width={40}
            height={40}
            loading="lazy"
          />
        </Link>
      </HStack>
    </HStack>
  );
}
