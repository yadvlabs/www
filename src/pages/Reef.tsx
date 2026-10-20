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
import {Link} from '@astryxdesign/core/Link';
import {Icon} from '@astryxdesign/core/Icon';
import {CodeBlock} from '@astryxdesign/core/CodeBlock';
import {Collapsible, CollapsibleGroup} from '@astryxdesign/core/Collapsible';
import {SiteShell} from '../components/SiteShell';
import {crustydex} from '../crusties';

/**
 * The Reef project page. Content follows the Reef site at swtch.in (source:
 * scaleninja/crusty), laid out with Astryx components.
 */

const SITE = 'https://swtch.in';
const REPO = 'https://github.com/yadvlabs/reef';
const BETA = 'mailto:contact@scaleninja.com?subject=Reef%20beta';
const DEMO = 'https://calendar.app.google/poN23LmhzVkFc1XX9';

const art: CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

const screenshot: CSSProperties = {
  display: 'block',
  width: '100%',
  height: 'auto',
};

const tools = [
  'git',
  'gh',
  'Git LFS',
  'Octokit',
  'go-github',
  'PyGithub',
  'Terraform',
  'actions/runner',
];

const outages = [
  {
    date: '3 March 2026',
    text: 'About 40% of github.com requests and 43% of API requests failed for more than an hour.',
    href: 'https://github.blog/news-insights/company-news/github-availability-report-march-2026/',
  },
  {
    date: '5 March 2026',
    text: '95% of Actions workflow runs took longer than five minutes to start, 30 minutes on average, for almost three hours.',
    href: 'https://github.blog/news-insights/company-news/github-availability-report-march-2026/',
  },
  {
    date: '6 August 2026',
    text: 'For about nine hours, Actions runs failed to start, stopped mid-run or sat in the queue, on GitHub-hosted and self-hosted runners alike.',
    href: 'https://github.blog/news-insights/company-news/github-availability-report-august-2026/',
  },
];

const resilience = [
  {
    title: 'Your servers, your uptime',
    text: 'Run several Reef instances behind a load balancer. If one host goes down, the others keep serving every repository.',
  },
  {
    title: 'A live copy of GitHub',
    text: 'Pull mirrors fetch your GitHub repositories on a schedule, so the latest code is already in Reef when GitHub isn’t answering.',
  },
  {
    title: 'GitHub stays in sync',
    text: 'Push mirrors copy every push on to GitHub, so your team can work in Reef without GitHub going stale.',
  },
  {
    title: 'CI that doesn’t need github.com',
    text: 'Mirror the actions your workflows use into Reef, or point Reef at an internal copy, and your runners never have to reach github.com.',
  },
  {
    title: 'Try it without switching',
    text: "Import a repository from GitHub in one step, keep both running side by side, and move teams over when you're ready.",
  },
];

const octokitDiff = `const octokit = new Octokit({
-  baseUrl: "https://api.github.com",
+  baseUrl: "https://your-domain/api/v3",
   auth: process.env.GITHUB_TOKEN,
});`;

const runnerDiff = `./config.sh \\
-  --url https://github.com/crusty/shell \\
+  --url https://your-domain/crusty/shell \\
   --token $RUNNER_TOKEN`;

const compatibility = [
  'REST at /api/v3 and GraphQL at /api/graphql, with GitHub’s paths, JSON, pagination and rate-limit headers',
  'Webhooks with the same X-GitHub-Event names and X-Hub-Signature-256 signatures',
  'Personal access tokens, SSH keys and gh auth login',
  'Git over HTTPS and SSH, protocol v2, partial clone and Git LFS with locks',
  'Workflows in .github/workflows on the stock actions/runner',
];

const features = [
  {title: 'Pull requests', text: 'Reviews, line comments, review requests, checks and auto-merge.'},
  {title: 'Actions', text: 'Workflows from .github/workflows on stock GitHub runners, with live logs and re-runs.'},
  {title: 'Issues', text: 'Labels, milestones, assignees, reactions and a full timeline.'},
  {title: 'Projects', text: 'Boards and tables with custom fields, saved views, insights and automations.'},
  {title: 'Wikis', text: 'A wiki for every repository and every organisation.'},
  {title: 'Releases', text: 'Releases and tags with notes, alongside the commits they point at.'},
  {title: 'Insights', text: 'Contributors, commit activity, code frequency and pulse.'},
  {title: 'Git LFS', text: 'Large files with file locking, over HTTPS and SSH.'},
];

const crustyParts = [
  {
    part: 'Claws',
    badge: 'red',
    title: 'The Rust core',
    text: 'Reef is written in Rust. It reads repositories with gitoxide and renders diffs, blame and Markdown on the server, so pages come back fast.',
  },
  {
    part: 'Shell',
    badge: 'green',
    title: 'History you keep',
    text: 'Repositories live on your own disks. Every push is checked against branch protection before it lands.',
  },
  {
    part: 'Legs',
    badge: 'blue',
    title: 'Go underneath',
    text: 'GateKeeper, the optional single sign-on service, is written in Go. It gives your team one login with passkeys and two-factor authentication, and one sign-out ends it everywhere.',
  },
] as const;

const config = `# /etc/reef/reef.conf
site_url = "https://your-domain"
data_dir = "/var/lib/reef"

[database]
url = "postgres://reef@db.internal/reef"

# Optional single sign-on: GateKeeper or any OpenID Connect provider.
# Leave it out to use built-in accounts.
[gatekeeper]
issuer    = "https://sso.your-domain"
client_id = "reef"`;

const start = `reef migrate
reef serve
# The first account you create becomes the site admin.
# git over HTTPS on 4920, over SSH on 4922, or behind your proxy on 443.`;

const runAnywhere = [
  {title: 'Fast, because it’s Rust', text: 'Compiled to native code, with no runtime to warm up. Pages, diffs and blame are rendered on the server.'},
  {title: 'One file to run', text: 'A single native binary with the web interface built in. Copy it to a server and start it.'},
  {title: 'No database to set up', text: 'SQLite is built in for small installs. Point it at PostgreSQL when you grow.'},
  {title: 'Light on resources', text: 'Runs comfortably on a small VM. The only other thing it needs installed is git.'},
];

const deployments = [
  {title: 'A team on one machine', text: 'Run one binary with SQLite on a small VM. Repositories, CI logs and the database all live in one data directory.'},
  {title: 'A company on many hosts', text: 'Put several instances behind a load balancer with PostgreSQL and a shared filesystem such as CephFS or NFS. Any instance serves any repository, with no sticky sessions.'},
  {title: 'Behind the firewall', text: 'Runners only ever talk to your Reef. Point it at an internal mirror of GitHub Actions, or host the actions in Reef itself, and nothing needs to reach github.com.'},
];

const security = [
  {title: 'Your sign-in', text: 'Built-in accounts with securely hashed passwords, or single sign-on through GateKeeper or any OpenID Connect provider. Personal access tokens are stored only as hashes.'},
  {title: 'Protected branches', text: 'Branch protection is enforced on the server, at the moment someone pushes.'},
  {title: 'Signed commits', text: 'GPG and SSH signatures are verified against each person’s registered keys.'},
  {title: 'Sealed secrets', text: 'Actions secrets are sealed when they are uploaded and encrypted at rest.'},
  {title: 'No surprise requests', text: 'Webhooks, mirrors and imports can’t reach private networks or cloud metadata endpoints unless you allow it.'},
  {title: 'An admin console', text: 'Manage users, organisations, repositories and runners, and suspend accounts, from one place.'},
];

const faq = [
  {
    q: 'Is Reef ready to use?',
    a: 'Reef is in beta. Git hosting, pull requests, issues, Projects and Actions work today. The GitHub compatibility page on swtch.in lists exactly what is still coming.',
  },
  {
    q: 'Do we have to leave GitHub?',
    a: 'No. Pull mirrors keep a live copy of your GitHub repositories in Reef, and push mirrors keep GitHub up to date. Move teams over when you are ready.',
  },
  {
    q: 'Will our GitHub Actions workflows run?',
    a: 'Workflows in .github/workflows run on the stock GitHub runner, installed on your own machines. Artifacts, caching and scheduled triggers are not there yet.',
  },
  {
    q: 'Does Reef need access to the internet?',
    a: 'No. Runners only talk to Reef. By default Reef downloads third-party actions from github.com; mirror the ones you use into Reef, or point it at an internal copy, and it never needs to.',
  },
  {
    q: 'What does it take to run?',
    a: 'One native binary with the web interface built in, plus git, on any cloud or on your own servers. SQLite is built in, so a single small VM is enough to start. Docker images and Raspberry Pi builds are coming soon. To run several instances behind a load balancer, use PostgreSQL and a shared filesystem such as CephFS or NFS.',
  },
  {
    q: 'How do people sign in?',
    a: 'With accounts built into Reef, or through single sign-on: GateKeeper, the companion service that gives your team one login with passkeys and two-factor authentication, or any OpenID Connect provider you already run, such as Okta, Microsoft Entra ID or Keycloak.',
  },
  {
    q: 'Do we need GateKeeper?',
    a: 'No. Reef manages accounts on its own: people sign up or are added by an admin, sign in with a password, and use personal access tokens and SSH keys for git and the API. Add GateKeeper later for passkeys and two-factor authentication, or connect another OpenID Connect provider for single sign-on.',
  },
];

const friends = ['chef-pincer', 'shellmes', 'orbit', 'surfer'];

export default function Reef() {
  return (
    <SiteShell page="reef">
      {/* Hero */}
      <Grid columns={{minWidth: 300, max: 2}} gap={8} align="center">
        <VStack gap={4} hAlign="start">
          <HStack gap={2} wrap="wrap">
            <Badge variant="blue" label="Beta" />
            <Badge variant="neutral" label="Self-hosted, GitHub-compatible" />
          </HStack>
          <Heading level={1} textWrap="balance">
            Self-hosted Git. Nothing new to learn.
          </Heading>
          <Text type="large" color="secondary" textWrap="pretty">
            Reef runs on your servers and speaks GitHub's REST and GraphQL
            APIs. Your gh CLI, Octokit scripts, Terraform and Actions workflows
            work as they are, and every page is where your team expects it.
            Change the host, keep everything else.
          </Text>
          <HStack gap={3} wrap="wrap">
            <Button label="Join the beta" variant="primary" href={BETA} />
            <Button
              label="Book a demo"
              href={DEMO}
              endContent={<Icon icon="externalLink" />}
            />
            <Button
              label="swtch.in"
              variant="ghost"
              href={SITE}
              endContent={<Icon icon="externalLink" />}
            />
          </HStack>
        </VStack>
        <AspectRatio ratio={1}>
          <img
            src="/crusty/crusty-standing.svg"
            alt="Crusty the tortocrab, the Reef mascot"
            style={art}
          />
        </AspectRatio>
      </Grid>

      <VStack gap={3}>
        <Text type="label">Works with the tools you already use</Text>
        <HStack gap={2} wrap="wrap">
          {tools.map(tool => (
            <Badge key={tool} variant="neutral" label={tool} />
          ))}
        </HStack>
      </VStack>

      {/* Why Reef */}
      <VStack gap={5}>
        <VStack gap={2}>
          <Heading level={2}>When GitHub goes down, keep shipping</Heading>
          <Text type="body" color="secondary" textWrap="pretty">
            Reef was built because a GitHub outage shouldn't stop a whole team.
            It runs on your own servers, so pushes, reviews and CI keep going
            while github.com recovers.
          </Text>
        </VStack>
        <Grid columns={{minWidth: 260, max: 3}} gap={4}>
          {outages.map(outage => (
            <Card key={outage.date} variant="muted" padding={5}>
              <VStack gap={2} hAlign="start">
                <Text type="label">{outage.date}</Text>
                <Text type="body" color="secondary" textWrap="pretty">
                  {outage.text}
                </Text>
                <Link href={outage.href} size="sm" hasUnderline>
                  Read GitHub's report
                </Link>
              </VStack>
            </Card>
          ))}
        </Grid>
        <Grid columns={{minWidth: 260, max: 3}} gap={4}>
          {resilience.map(item => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Grid>
      </VStack>

      {/* Compatibility */}
      <VStack gap={5}>
        <VStack gap={2}>
          <Heading level={2}>Change the host. Keep everything else.</Heading>
          <Text type="body" color="secondary" textWrap="pretty">
            Moving to Reef isn't a migration project. Anything that can be
            pointed at GitHub Enterprise Server can be pointed at Reef. Here is
            the whole diff for two of the tools most teams use.
          </Text>
        </VStack>
        <Grid columns={{minWidth: 300, max: 2}} gap={4}>
          <CodeBlock
            code={octokitDiff}
            language="javascript"
            title="Octokit"
            isDiff
            width="100%"
          />
          <CodeBlock
            code={runnerDiff}
            language="bash"
            title="actions/runner"
            isDiff
            width="100%"
          />
        </Grid>
        <VStack gap={2} as="ul">
          {compatibility.map(item => (
            <HStack key={item} as="li" gap={2} vAlign="start">
              <Icon icon="check" color="success" size="sm" />
              <Text type="body">{item}</Text>
            </HStack>
          ))}
        </VStack>
        <VStack gap={2}>
          <Text type="label">Bring a repository over, every branch and tag</Text>
          <CodeBlock
            code="git push --mirror https://your-domain/you/repo.git"
            language="bash"
            width="100%"
          />
        </VStack>
      </VStack>

      {/* Features */}
      <VStack gap={5}>
        <VStack gap={2}>
          <Heading level={2}>It looks and works like GitHub</Heading>
          <Text type="body" color="secondary" textWrap="pretty">
            Reef's interface is built with Primer, GitHub's own design system.
            Pull requests, issues, Actions runs and settings sit at the same
            paths, like /owner/repo/pull/8, so nobody needs retraining.
          </Text>
        </VStack>
        <Card padding={0} elevation="low">
          <img
            src="/images/reef-pr.webp"
            alt="A Reef pull request with an inline review comment on a diff, reviewers, a required-review notice, check status and a merge button."
            loading="lazy"
            style={screenshot}
          />
        </Card>
        <Grid columns={{minWidth: 220, max: 4}} gap={4}>
          {features.map(item => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Grid>
      </VStack>

      {/* Crusty */}
      <VStack gap={5}>
        <VStack gap={2}>
          <Heading level={2}>One creature, three jobs</Heading>
          <Text type="body" color="secondary" textWrap="pretty">
            Crusty isn't only cute. Each part of it stands for a part of Reef,
            and each part is built in the language that suits the job.
          </Text>
        </VStack>
        <Grid columns={{minWidth: 260, max: 3}} gap={4}>
          {crustyParts.map(item => (
            <Card key={item.part} padding={5}>
              <VStack gap={2} hAlign="start">
                <Badge variant={item.badge} label={item.part} />
                <Heading level={3}>{item.title}</Heading>
                <Text type="body" color="secondary" textWrap="pretty">
                  {item.text}
                </Text>
              </VStack>
            </Card>
          ))}
        </Grid>
      </VStack>

      {/* Self-hosting */}
      <VStack gap={5}>
        <VStack gap={2}>
          <Heading level={2}>Run it on your own ground</Heading>
          <Text type="body" color="secondary" textWrap="pretty">
            Reef runs on your hardware, behind your firewall. It has its own
            accounts built in, so it works on its own. For single sign-on,
            connect GateKeeper or any OpenID Connect provider you already run.
            Your code, CI logs and secrets stay on your machines.
          </Text>
        </VStack>
        <Grid columns={{minWidth: 300, max: 2}} gap={4}>
          <CodeBlock
            code={config}
            language="toml"
            title="reef.conf"
            width="100%"
            isWrapped
          />
          <CodeBlock
            code={start}
            language="bash"
            title="Start"
            width="100%"
            isWrapped
          />
        </Grid>
        <Grid columns={{minWidth: 220, max: 4}} gap={4}>
          {runAnywhere.map(item => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Grid>
        <Text type="body" color="secondary" textWrap="pretty">
          Runs on AWS, Google Cloud, Azure, DigitalOcean, Hetzner or any other
          cloud, or on your own servers. Docker images and ARM builds for small
          boards like the Raspberry Pi are coming soon.
        </Text>
        <Grid columns={{minWidth: 260, max: 3}} gap={4}>
          {deployments.map(item => (
            <FeatureCard key={item.title} {...item} muted />
          ))}
        </Grid>
      </VStack>

      {/* Security */}
      <VStack gap={5}>
        <VStack gap={2}>
          <Heading level={2}>Ready for your security review</Heading>
          <Text type="body" color="secondary" textWrap="pretty">
            Reef keeps identity, code and secrets inside your network, and gives
            admins the controls they expect.
          </Text>
        </VStack>
        <Grid columns={{minWidth: 260, max: 3}} gap={4}>
          {security.map(item => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Grid>
      </VStack>

      {/* FAQ */}
      <VStack gap={3}>
        <Heading level={2}>Questions teams ask first</Heading>
        <CollapsibleGroup hasDividers type="single">
          {faq.map(item => (
            <Collapsible
              key={item.q}
              value={item.q}
              trigger={<Text type="label">{item.q}</Text>}>
              <Text type="body" color="secondary" textWrap="pretty">
                {item.a}
              </Text>
            </Collapsible>
          ))}
        </CollapsibleGroup>
        <Text type="body" color="secondary">
          Something else? Email{' '}
          <Link href="mailto:contact@scaleninja.com" hasUnderline>
            contact@scaleninja.com
          </Link>
          , or follow the code on{' '}
          <Link href={REPO} hasUnderline>
            GitHub
          </Link>
          .
        </Text>
      </VStack>

      {/* Crustydex */}
      <Card variant="muted" padding={6}>
        <Grid columns={{minWidth: 280, max: 2}} gap={6} align="center">
          <VStack gap={3} hAlign="start">
            <Heading level={2}>Crusty has company</Heading>
            <Text type="body" color="secondary" textWrap="pretty">
              There are {crustydex.length} Crustys in the Crustydex so far, from
              Chef Pincer to Padawan, and more are molting.
            </Text>
            <Link href="/crustydex/" isStandalone weight="semibold">
              Open the Crustydex →
            </Link>
          </VStack>
          <Grid columns={4} gap={2}>
            {friends.map(slug => {
              const crusty = crustydex.find(c => c.slug === slug)!;
              return (
                <ClickableCard
                  key={slug}
                  href={`/crustydex/#${slug}`}
                  label={crusty.name}
                  padding={2}>
                  <AspectRatio ratio={1}>
                    <img src={crusty.image} alt="" loading="lazy" style={art} />
                  </AspectRatio>
                </ClickableCard>
              );
            })}
          </Grid>
        </Grid>
      </Card>

      <Text type="supporting">
        Reef is built by ScaleNinja. GitHub is a trademark of GitHub, Inc. Reef
        is not affiliated with or endorsed by GitHub.
      </Text>
    </SiteShell>
  );
}

function FeatureCard({
  title,
  text,
  muted,
}: {
  title: string;
  text: string;
  muted?: boolean;
}) {
  return (
    <Card variant={muted ? 'muted' : 'default'} padding={5} height="100%">
      <VStack gap={2}>
        <Heading level={3}>{title}</Heading>
        <Text type="body" color="secondary" textWrap="pretty">
          {text}
        </Text>
      </VStack>
    </Card>
  );
}
