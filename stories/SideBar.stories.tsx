import React from 'react';
import { Meta, Story } from '@storybook/react';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { MemoryRouter, Route } from 'react-router-dom';
import { linkTo } from '@storybook/addon-links';
import { SideBar, SideBarProps } from '../src';

const meta: Meta = {
  title: 'Navigation/SideBar',
  component: SideBar,
  argTypes: {
    onClick: { action: 'clicked' },
    title: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

// const AutoLinkTo = ({ kind, story }) => {
//   React.useEffect(() => {
//     linkTo(kind, story);
//   });
//   return null;
// };

// const withMemoryRouter = (StoryComponent, { parameters }) => {
//   const { currentURL } = parameters;
//   if (!currentURL) {
//     return <StoryComponent />;
//   }
//   const { path, route, redirectComponent, redirectStory } = currentURL;
//   if (!redirectComponent && !redirectStory) {
//     return (
//       <MemoryRouter initialEntries={[encodeURI(route)]}>
//         <Route path={path}>
//           <StoryComponent />
//         </Route>
//       </MemoryRouter>
//     );
//   }
//   return (
//     <MemoryRouter initialEntries={[encodeURI(route)]}>
//       <Route path={path}>
//         <AutoLinkTo kind={redirectComponent} story={redirectStory} />
//       </Route>
//     </MemoryRouter>
//   );
// };
const Template: Story<SideBarProps> = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
// export const Disabled = Template.bind({});
// export const Secondary = Template.bind({});
Default.args = {
  checked: true,
  SideBarItems: [
    {
      title: 'Home',
      icon: <HomeIcon color="primary" />,
      to: '/',
    },
    {
      title: 'Compliance Review',
      icon: <VisibilityIcon color="primary" />,
      to: '/compliance-review',
    },
    {
      title: 'Divisions ',
      icon: <DashboardIcon color="primary" />,
      to: '/divisions',
    },
    {
      title: 'Clients',
      icon: <PeopleIcon color="primary" />,
      to: '/clients',
    },
    {
      title: 'Home',
      icon: <HomeIcon color="primary" />,
      to: '/',
    },
    {
      title: 'Compliance Review',
      icon: <VisibilityIcon color="primary" />,
      to: '/compliance-review',
    },
    {
      title: 'Divisions ',
      icon: <DashboardIcon color="primary" />,
      to: '/divisions',
    },
    {
      title: 'Clients',
      icon: <PeopleIcon color="primary" />,
      to: '/clients',
    },
  ],
};
