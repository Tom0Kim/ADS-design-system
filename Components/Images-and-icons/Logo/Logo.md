# Logo
A logo is a visual representation of a brand or app. It can be a word, an image, or a combination of both.
Source page: https://atlassian.design/components/logo
Source package: `@atlaskit/logo@21.4.1`

## Examples

> **discovery**
>
> We are in the process of rolling out updated Logo designs to apps behind a feature flag.
> 	To display the new designs early, set the `shouldUseNewLogoDesign` prop to
> 	`true`.

## Types

### Icon

An icon is an image or symbol that represents a brand or app. It generally does not contain the name
of the brand or app.

**Example source:** [logo-icon.tsx](./_source/examples/constellation/logo-icon.tsx)

```tsx
import React from 'react';

import { AtlassianIcon } from '@atlaskit/logo';

const Icon = (): React.JSX.Element => {
	return <AtlassianIcon appearance="brand" />;
};

export default Icon;
```

### Lockup

A lockup is the combination of wordmark (the brand or app name) and its icon, generally referred
altogether as a logo.

**Example source:** [logo-brand.tsx](./_source/examples/constellation/logo-brand.tsx)

```tsx
import React from 'react';

import { AtlassianLogo } from '@atlaskit/logo';

const LogoBlue = (): React.JSX.Element => {
	return <AtlassianLogo appearance="brand" />;
};

export default LogoBlue;
```

## Appearance

By default, the lockup and icon inherit their colors from the parent element, however, this can lead
to incorrect color combinations. Moving forward, all usages of `@atlaskit/logo` should use the
`appearance` prop to choose between three brand-approved appearances: brand, neutral, and inverse.

### Brand

Brand app logos are used in situations that demand a bold brand presence against a neutral
background.

**Example source:** [logo-brand.tsx](./_source/examples/constellation/logo-brand.tsx)

```tsx
import React from 'react';

import { AtlassianLogo } from '@atlaskit/logo';

const LogoBlue = (): React.JSX.Element => {
	return <AtlassianLogo appearance="brand" />;
};

export default LogoBlue;
```

### Neutral

Neutral app logos can be used when the hierarchy calls for the logo to recede, but should always be
evaluated for adequate contrast.

**Example source:** [logo-neutral.tsx](./_source/examples/constellation/logo-neutral.tsx)

```tsx
import React from 'react';

import { AtlassianLogo } from '@atlaskit/logo';

const LogoNeutral = (): React.JSX.Element => {
	return <AtlassianLogo appearance="neutral" />;
};

export default LogoNeutral;
```

### Inverse

Inverse app logos should be used to contrast against bold backgrounds.

**Example source:** [logo-inverse.tsx](./_source/examples/constellation/logo-inverse.tsx)

```tsx
import React from 'react';

import { AtlassianLogo } from '@atlaskit/logo';

const LogoInverse = (): React.JSX.Element => {
	return <AtlassianLogo appearance="inverse" />;
};

export default LogoInverse;
```

## Size

### Xxsmall

The `xxsmall` size (16px) is the smallest available size.

**Example source:** [logo-xxsmall.tsx](./_source/examples/constellation/logo-xxsmall.tsx)

```tsx
import React from 'react';

import { AtlassianIcon } from '@atlaskit/logo';

const LogoXxsmall = (): React.JSX.Element => {
	return <AtlassianIcon size="xxsmall" appearance="brand" />;
};

export default LogoXxsmall;
```

### Xsmall

The `xsmall` size (20px) can be used in compact UI elements.

**Example source:** [logo-xsmall.tsx](./_source/examples/constellation/logo-xsmall.tsx)

```tsx
import React from 'react';

import { AtlassianIcon } from '@atlaskit/logo';

const LogoXsmall = (): React.JSX.Element => {
	return <AtlassianIcon size="xsmall" appearance="brand" />;
};

export default LogoXsmall;
```

### Small

The `small` size (24px) can be used in areas with minimal space or that contain many logos in close
proximity. For example, the icon component, the marketing footer, or the emoji picker.

**Example source:** [logo-small.tsx](./_source/examples/constellation/logo-small.tsx)

```tsx
import React from 'react';

import { AtlassianIcon } from '@atlaskit/logo';

const LogoSmall = (): React.JSX.Element => {
	return <AtlassianIcon size="small" appearance="brand" />;
};

export default LogoSmall;
```

### Medium

The `medium` size (32px) is the default size.

**Example source:** [logo-medium.tsx](./_source/examples/constellation/logo-medium.tsx)

```tsx
import React from 'react';

import { AtlassianLogo } from '@atlaskit/logo';

const LogoMedium = (): React.JSX.Element => {
	return <AtlassianLogo size="medium" appearance="brand" />;
};

export default LogoMedium;
```

### Large

The `large` size (40px) can be used for prominent placements.

**Example source:** [logo-large.tsx](./_source/examples/constellation/logo-large.tsx)

```tsx
import React from 'react';

import { AtlassianLogo } from '@atlaskit/logo';

const LogoLarge = (): React.JSX.Element => {
	return <AtlassianLogo size="large" appearance="brand" />;
};

export default LogoLarge;
```

### Xlarge

The `xlarge` size (48px) is rarely used. It may be used for a hero piece. For example, Statuspage's
login.

**Example source:** [logo-xlarge.tsx](./_source/examples/constellation/logo-xlarge.tsx)

```tsx
import React from 'react';

import { AtlassianLogo } from '@atlaskit/logo';

const LogoXlarge = (): React.JSX.Element => {
	return <AtlassianLogo size="xlarge" appearance="brand" />;
};

export default LogoXlarge;
```

## Company / Program logos

### Atlassian

**Example source:** [logo-atlassian.tsx](./_source/examples/constellation/generated/logo-atlassian.tsx)

```tsx
import React from 'react';

import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<AtlassianLogo appearance="brand" />}
		icon={<AtlassianIcon appearance="brand" />}
	/>
);
```

### Atlassian Access

**Example source:** [logo-atlassian-access.tsx](./_source/examples/constellation/generated/logo-atlassian-access.tsx)

```tsx
import React from 'react';

import { AtlassianAccessIcon, AtlassianAccessLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<AtlassianAccessLogo appearance="brand" />}
		icon={<AtlassianAccessIcon appearance="brand" />}
	/>
);
```

### Atlassian Marketplace

**Example source:** [logo-atlassian-marketplace.tsx](./_source/examples/constellation/generated/logo-atlassian-marketplace.tsx)

```tsx
import React from 'react';

import { AtlassianMarketplaceIcon, AtlassianMarketplaceLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<AtlassianMarketplaceLogo appearance="brand" />}
		icon={<AtlassianMarketplaceIcon appearance="brand" />}
	/>
);
```

## App (Product) logos

### Home

**Example source:** [logo-home.tsx](./_source/examples/constellation/generated/logo-home.tsx)

```tsx
import React from 'react';

import { HomeIcon, HomeLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<HomeLogo appearance="brand" />} icon={<HomeIcon appearance="brand" />} />
);
```

### Hub

**Example source:** [logo-hub.tsx](./_source/examples/constellation/generated/logo-hub.tsx)

```tsx
import React from 'react';

import { HubIcon, HubLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<HubLogo appearance="brand" />} icon={<HubIcon appearance="brand" />} />
);
```

### Confluence

**Example source:** [logo-confluence.tsx](./_source/examples/constellation/generated/logo-confluence.tsx)

```tsx
import React from 'react';

import { ConfluenceIcon, ConfluenceLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<ConfluenceLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<ConfluenceIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Jira

**Example source:** [logo-jira.tsx](./_source/examples/constellation/generated/logo-jira.tsx)

```tsx
import React from 'react';

import { JiraIcon, JiraLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<JiraLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<JiraIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Loom

`Loom` can be displayed in either blue, or Loom Blurple.

**Example source:** [logo-loom.tsx](./_source/examples/constellation/generated/logo-loom.tsx)

```tsx
import React from 'react';

import { LoomBlurpleIcon, LoomBlurpleLogo, LoomIcon, LoomLogo } from '@atlaskit/logo';
import { Stack } from '@atlaskit/primitives/compiled';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<Stack space="space.100">
		<LogoTable
			logo={[
				<LoomLogo appearance="brand" shouldUseNewLogoDesign />,
				<LoomBlurpleLogo appearance="brand" />,
			]}
			icon={[
				<LoomIcon appearance="brand" shouldUseNewLogoDesign />,
				<LoomBlurpleIcon appearance="brand" />,
			]}
		/>
	</Stack>
);
```

### Loom Attribution

**Example source:** [logo-loom-attribution.tsx](./_source/examples/constellation/generated/logo-loom-attribution.tsx)

```tsx
import React from 'react';

import { LoomAttributionIcon, LoomAttributionLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<LoomAttributionLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<LoomAttributionIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Rovo

**Example source:** [logo-rovo.tsx](./_source/examples/constellation/generated/logo-rovo.tsx)

```tsx
import React from 'react';

import { RovoIcon, RovoLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<RovoLogo appearance="brand" />} icon={<RovoIcon appearance="brand" />} />
);
```

### Align

`Align` replaces the deprecated `Jira Align` logo components.

**Example source:** [logo-align.tsx](./_source/examples/constellation/generated/logo-align.tsx)

```tsx
import React from 'react';

import { AlignIcon, AlignLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<AlignLogo appearance="brand" />} icon={<AlignIcon appearance="brand" />} />
);
```

### Focus

**Example source:** [logo-focus.tsx](./_source/examples/constellation/generated/logo-focus.tsx)

```tsx
import React from 'react';

import { FocusIcon, FocusLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<FocusLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<FocusIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Talent

**Example source:** [logo-talent.tsx](./_source/examples/constellation/generated/logo-talent.tsx)

```tsx
import React from 'react';

import { TalentIcon, TalentLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<TalentLogo appearance="brand" />} icon={<TalentIcon appearance="brand" />} />
);
```

### Jira Product Discovery

**Example source:** [logo-jira-product-discovery.tsx](./_source/examples/constellation/generated/logo-jira-product-discovery.tsx)

```tsx
import React from 'react';

import { JiraProductDiscoveryIcon, JiraProductDiscoveryLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<JiraProductDiscoveryLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<JiraProductDiscoveryIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Feedback

**Example source:** [logo-feedback.tsx](./_source/examples/constellation/generated/logo-feedback.tsx)

```tsx
import React from 'react';

import { FeedbackIcon, FeedbackLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		icon={<FeedbackIcon appearance="brand" />}
		logo={<FeedbackLogo appearance="brand" />}
	/>
);
```

### Bitbucket

**Example source:** [logo-bitbucket.tsx](./_source/examples/constellation/generated/logo-bitbucket.tsx)

```tsx
import React from 'react';

import { BitbucketIcon, BitbucketLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<BitbucketLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<BitbucketIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Compass

**Example source:** [logo-compass.tsx](./_source/examples/constellation/generated/logo-compass.tsx)

```tsx
import React from 'react';

import { CompassIcon, CompassLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<CompassLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<CompassIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Dx

**Example source:** [logo-dx.tsx](./_source/examples/constellation/generated/logo-dx.tsx)

```tsx
import React from 'react';

import { DxIcon } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => <LogoTable icon={<DxIcon appearance="brand" />} />;
```

### Rovo Dev

**Example source:** [logo-rovo-dev.tsx](./_source/examples/constellation/generated/logo-rovo-dev.tsx)

```tsx
import React from 'react';

import { RovoDevIcon, RovoDevLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<RovoDevLogo appearance="brand" />} icon={<RovoDevIcon appearance="brand" />} />
);
```

### Jira Service Management

**Example source:** [logo-jira-service-management.tsx](./_source/examples/constellation/generated/logo-jira-service-management.tsx)

```tsx
import React from 'react';

import { JiraServiceManagementIcon, JiraServiceManagementLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<JiraServiceManagementLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<JiraServiceManagementIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Assets

**Example source:** [logo-assets.tsx](./_source/examples/constellation/generated/logo-assets.tsx)

```tsx
import React from 'react';

import { AssetsIcon, AssetsLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<AssetsLogo appearance="brand" />} icon={<AssetsIcon appearance="brand" />} />
);
```

### Customer Service Management

**Example source:** [logo-customer-service-management.tsx](./_source/examples/constellation/generated/logo-customer-service-management.tsx)

```tsx
import React from 'react';

import { CustomerServiceManagementIcon, CustomerServiceManagementLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<CustomerServiceManagementLogo appearance="brand" />}
		icon={<CustomerServiceManagementIcon appearance="brand" />}
	/>
);
```

### Opsgenie

**Example source:** [logo-opsgenie.tsx](./_source/examples/constellation/generated/logo-opsgenie.tsx)

```tsx
import React from 'react';

import { OpsgenieIcon, OpsgenieLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<OpsgenieLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<OpsgenieIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Statuspage

**Example source:** [logo-statuspage.tsx](./_source/examples/constellation/generated/logo-statuspage.tsx)

```tsx
import React from 'react';

import { StatuspageIcon, StatuspageLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<StatuspageLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<StatuspageIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Trello

**Example source:** [logo-trello.tsx](./_source/examples/constellation/generated/logo-trello.tsx)

```tsx
import React from 'react';

import { TrelloIcon, TrelloLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<TrelloLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<TrelloIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Admin

`Admin` replaces the deprecated `Atlassian Administration` and `Atlassian Admin` logo components.

**Example source:** [logo-admin.tsx](./_source/examples/constellation/generated/logo-admin.tsx)

```tsx
import React from 'react';

import { AdminIcon, AdminLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<AdminLogo appearance="brand" />} icon={<AdminIcon appearance="brand" />} />
);
```

### Analytics

`Analytics` replaces the deprecated `Atlassian Analytics` logo components.

**Example source:** [logo-analytics.tsx](./_source/examples/constellation/generated/logo-analytics.tsx)

```tsx
import React from 'react';

import { AnalyticsIcon, AnalyticsLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<AnalyticsLogo appearance="brand" />}
		icon={<AnalyticsIcon appearance="brand" />}
	/>
);
```

### Chat

**Example source:** [logo-chat.tsx](./_source/examples/constellation/generated/logo-chat.tsx)

```tsx
import React from 'react';

import { ChatIcon, ChatLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<ChatLogo appearance="brand" />} icon={<ChatIcon appearance="brand" />} />
);
```

### Goals

**Example source:** [logo-goals.tsx](./_source/examples/constellation/generated/logo-goals.tsx)

```tsx
import React from 'react';

import { GoalsIcon, GoalsLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<GoalsLogo appearance="brand" />} icon={<GoalsIcon appearance="brand" />} />
);
```

### Guard

**Example source:** [logo-guard.tsx](./_source/examples/constellation/generated/logo-guard.tsx)

```tsx
import React from 'react';

import { GuardIcon, GuardLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<GuardLogo appearance="brand" shouldUseNewLogoDesign />}
		icon={<GuardIcon appearance="brand" shouldUseNewLogoDesign />}
	/>
);
```

### Projects

**Example source:** [logo-projects.tsx](./_source/examples/constellation/generated/logo-projects.tsx)

```tsx
import React from 'react';

import { ProjectsIcon, ProjectsLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<ProjectsLogo appearance="brand" />}
		icon={<ProjectsIcon appearance="brand" />}
	/>
);
```

### Search

**Example source:** [logo-search.tsx](./_source/examples/constellation/generated/logo-search.tsx)

```tsx
import React from 'react';

import { SearchIcon, SearchLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<SearchLogo appearance="brand" />} icon={<SearchIcon appearance="brand" />} />
);
```

### Studio

**Example source:** [logo-studio.tsx](./_source/examples/constellation/generated/logo-studio.tsx)

```tsx
import React from 'react';

import { StudioIcon, StudioLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<StudioLogo appearance="brand" />} icon={<StudioIcon appearance="brand" />} />
);
```

### Teams

**Example source:** [logo-teams.tsx](./_source/examples/constellation/generated/logo-teams.tsx)

```tsx
import React from 'react';

import { TeamsIcon, TeamsLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<TeamsLogo appearance="brand" />} icon={<TeamsIcon appearance="brand" />} />
);
```

### Jira Data Center

**Example source:** [logo-jira-data-center.tsx](./_source/examples/constellation/generated/logo-jira-data-center.tsx)

```tsx
import React from 'react';

import { JiraDataCenterIcon, JiraDataCenterLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<JiraDataCenterLogo appearance="brand" />}
		icon={<JiraDataCenterIcon appearance="brand" />}
	/>
);
```

### Jira Service Management Data Center

**Example source:** [logo-jira-service-management-data-center.tsx](./_source/examples/constellation/generated/logo-jira-service-management-data-center.tsx)

```tsx
import React from 'react';

import {
	JiraServiceManagementDataCenterIcon,
	JiraServiceManagementDataCenterLogo,
} from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<JiraServiceManagementDataCenterLogo appearance="brand" />}
		icon={<JiraServiceManagementDataCenterIcon appearance="brand" />}
	/>
);
```

### Confluence Data Center

**Example source:** [logo-confluence-data-center.tsx](./_source/examples/constellation/generated/logo-confluence-data-center.tsx)

```tsx
import React from 'react';

import { ConfluenceDataCenterIcon, ConfluenceDataCenterLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<ConfluenceDataCenterLogo appearance="brand" />}
		icon={<ConfluenceDataCenterIcon appearance="brand" />}
	/>
);
```

### Bitbucket Data Center

**Example source:** [logo-bitbucket-data-center.tsx](./_source/examples/constellation/generated/logo-bitbucket-data-center.tsx)

```tsx
import React from 'react';

import { BitbucketDataCenterIcon, BitbucketDataCenterLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<BitbucketDataCenterLogo appearance="brand" />}
		icon={<BitbucketDataCenterIcon appearance="brand" />}
	/>
);
```

### Bamboo

**Example source:** [logo-bamboo.tsx](./_source/examples/constellation/generated/logo-bamboo.tsx)

```tsx
import React from 'react';

import { BambooIcon, BambooLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<BambooLogo appearance="brand" />} icon={<BambooIcon appearance="brand" />} />
);
```

### Crowd

**Example source:** [logo-crowd.tsx](./_source/examples/constellation/generated/logo-crowd.tsx)

```tsx
import React from 'react';

import { CrowdIcon, CrowdLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable logo={<CrowdLogo appearance="brand" />} icon={<CrowdIcon appearance="brand" />} />
);
```

## Agent logos

### Rovo Dev Agent

**Example source:** [logo-rovo-dev-agent.tsx](./_source/examples/constellation/generated/logo-rovo-dev-agent.tsx)

```tsx
import React from 'react';

import { RovoDevAgentIcon, RovoDevAgentLogo } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable
		logo={<RovoDevAgentLogo appearance="brand" />}
		icon={<RovoDevAgentIcon appearance="brand" />}
	/>
);
```

### Jira Coding Agent

**Example source:** [logo-jira-coding-agent.tsx](./_source/examples/constellation/generated/logo-jira-coding-agent.tsx)

```tsx
import React from 'react';

import { JiraCodingAgentIcon } from '@atlaskit/logo';

import LogoTable from '../utils/logo-table';

export default (): React.JSX.Element => (
	<LogoTable icon={<JiraCodingAgentIcon appearance="brand" />} />
);
```

> **information**
>
> 
> 		
> 			To use these logos outside of Atlassian apps, you can
> 			download the logos here.
> 		
> 		
> 			Logos used to represent third-party integrations are available in
> 			
> 				Atlaskit staging (Atlassians only)
> 			
> 			.
> 		
> 	

## Usage

### Color

It's important to be mindful of the context of logos and their usage.

Inside Atlassian apps, our logos work best on surface tokens such as `color.surface` or bold
backgrounds such as `color.background.brand.bold`.

![logo color](images/logo-color.png)

### Types

There are two types of app logos – the lockup and logomark.

#### Lockup

Lockups include both the logomark and app name. These are used in signup and login.

![logomarks](images/logo-lockup.png)

#### Logomark

Logomark doesn’t include the app name. Only use logomarks on their own when the context is very
clear and where possible pair with descriptive text.

![logomarks](images/logo-logomark.png)

## Accessibility

Make sure app or brand name is always included as alternative text when you use a logo lockup or
logomark.

Don’t include the word ‘logo’ in the alternative text. Instead, describe what the logo is for. For
example, if a logo is being used as a link in the header, the alt text could be ‘Go to the Atlassian
home page.’

## Props

> **warning**
>
> The following props are deprecated and will be removed in a future major release:
> 	`iconColor` and `textColor`. The `appearance` prop should be used
> 	instead.

### `@atlaskit/logo` — `AtlassianLogo`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"brand" \| "neutral" \| "inverse"` | Choice of logo appearance between 3 brand-approved color combinations that will be hooked up to design tokens and theming. | No |
| `iconColor` | No | `string` | @deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-172 Internal documentation for deprecation (no external access)} CSS color to be applied to the non-gradient icon portion of the logo SVG. The use of this prop is not recommended as it is not compatible with design tokens; use the `appearance` prop instead. | Yes |
| `label` | No | `string` | Accessible text to be used for screen readers (it's optional since the default props provide a label that matches the logo). | No |
| `shouldUseNewLogoDesign` | No | `boolean` | @deprecated This prop no longer has any effect. The new logo design is now always used following the full launch of the `platform-logo-rebrand` feature flag. This prop is maintained for backwards compatibility only and will be removed in a future release. | Yes |
| `size` | No | `"xxsmall" \| "xsmall" \| "small" \| "medium" \| "large" \| "xlarge"` | The size of the icon. | No |
| `testId` | No | `string` | A testId prop is provided for specified elements, which is a unique string that appears as a data attribute data-testid in the rendered code, serving as a hook for automated tests.<br>- `{testId}--wrapper` to access the svg element's wrapper | No |
| `textColor` | No | `string` | @deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-171 Internal documentation for deprecation (no external access)} CSS color to be applied to the wordmark portion of the logo SVG. The use of this prop is not recommended as it is not compatible with design tokens; use the `appearance` prop instead. | Yes |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
