import React from 'react';

export { default as header } from './header';
import InfoActivities from '../../components/info_activities.jsx';
import InfoEnvironments from '../../components/info_environments.jsx';
import InfoSandbox from '../../components/info_sandbox.jsx';
import InfoStructure from '../../components/info_structure.jsx';
import InfoLogs from '../../components/info_logs.jsx';

export const config = {
  footer: {
    author_note: <span>A Government as a Platform product</span>,
    code_note: <a href="https://github.com/alphagov?utf8=%E2%9C%93&q=paas-&type=&language=">Coding in the open</a>,
    links: [
      {
        text: 'GOV.UK PaaS home',
        url: 'https://www.cloud.service.gov.uk'
      },
      {
        text: 'Get help for customer issues',
        url: 'https://www.cloud.service.gov.uk/support.html'
      }
    ]
  },
  docs: {
    cli: 'https://docs.cloud.service.gov.uk/#quick-setup-guide',
    concepts_roles: 'https://docs.cloudfoundry.org/concepts/roles.html',
    concepts_spaces: 'https://docs.cloud.service.gov.uk/#quick-setup-guide',
    deploying_apps: 'https://docs.cloud.service.gov.uk/#quick-setup-guide',
    use: 'https://cloud.gov/overview/overview/using-cloudgov-paas/',
    invite_user: 'https://cloud.gov/docs/apps/managing-teammates/',
    roles: 'https://docs.cloud.service.gov.uk/#managing-users',
    status: 'https://status.cloud.service.gov.uk/',
    contact: 'https://www.cloud.service.gov.uk/support.html'
  },
  snippets: {
    logs: InfoLogs
  },
  github: {
    url: 'https://github.com/18F/cg-dashboard'
  },
  platform: {
    name: 'cloud.gov',
    api_host: 'api.fr.cloud.gov',
    logs: {
      name: 'logs.fr.cloud.gov',
      url: 'https://logs.fr.cloud.gov'
    }
  },
  home: {
    tiles: [InfoActivities, InfoStructure, InfoSandbox, InfoEnvironments]
  }
};
