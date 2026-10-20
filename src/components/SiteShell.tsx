import type {ReactNode} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {VStack, HStack, Layout, LayoutContent} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Divider} from '@astryxdesign/core/Divider';
import {themes, defaultThemeSlug} from '../astryx-themes';
import {Logo} from './Logo';

export const GITHUB_ORG = 'https://github.com/yadvlabs';
export const PARENT_SITE = 'https://yadv.in';

type Page = 'home' | 'work' | 'old' | 'reef' | 'crustydex';

const NAV: ReadonlyArray<{page: Page; label: string; href: string}> = [
  {page: 'home', label: 'Projects', href: '/'},
  {page: 'crustydex', label: 'Crustydex', href: '/crustydex/'},
];

/** Theme, page frame, header and footer shared by every page. */
export function SiteShell({page, children}: {page: Page; children: ReactNode}) {
  return (
    <Theme theme={themes[defaultThemeSlug]}>
      <Layout
        height="fill"
        contentWidth={1200}
        content={
          <LayoutContent padding={6}>
            <VStack gap={10}>
              <Header page={page} />
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

function Header({page}: {page: Page}) {
  return (
    <HStack hAlign="between" vAlign="center" gap={3} wrap="wrap">
      <Link href="/" color="primary" label="YADV Labs home">
        <HStack gap={2} vAlign="center">
          <Logo size={32} />
          <Text type="large" weight="bold" color="inherit">
            YADV Labs
          </Text>
        </HStack>
      </Link>
      <HStack gap={4} vAlign="center" wrap="wrap" as="nav">
        {NAV.map(item => (
          <Link
            key={item.page}
            href={item.href}
            isStandalone
            color={item.page === page ? 'primary' : 'secondary'}
            weight={item.page === page ? 'semibold' : undefined}
            aria-current={item.page === page ? 'page' : undefined}>
            {item.label}
          </Link>
        ))}
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
