# react-cmdk

A fast, accessible, and pretty React.js command palette component

- [What is this?](#what-is-this)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Types](#types)
- [Maintainers](#maintainers)

## What is this?

This is a installable component for the web development framework React.js. The
package includes 1 component, and its TypeScript types. The goal of the
component is to save web developers their time, and not make them have to build
their own command palette component. Instead, they can just install this
component, and get a out-of-the-box command palette that's fast accessible, and
pretty.

## Screenshots

|                                                                  Light mode                                                                   |                                                                   Dark mode                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| ![CleanShot 2021-11-08 at 20 54 04@2x](https://user-images.githubusercontent.com/19674362/140808835-be7e491e-7af0-4fcc-b2ef-22404d783c04.png) | ![CleanShot 2021-11-08 at 20 54 13@2x](https://user-images.githubusercontent.com/19674362/140808862-07afa4e8-9629-42ba-9d63-5ed3a3914a96.png) |

## Installation

```
npm install react-cmdk
```

Or if you'd rather use Yarn

```
yarn add react-cmdk
```

## Usage

```javascript
import CMDK from 'react-cmdk';

const App = () => {
  const options = [
    {
      key: 'general',
      label: 'General',
      options: [
        {
          key: 'create-project',
          label: 'Create new project',
          shortcut: ['⇧', '⌘', 'N'],
          href: '/project/new',
          icon: 'Plus',
        },
        {
          key: 'account',
          label: 'My account',
          shortcut: ['⇧', '⌘', 'A'],
          href: '/account',
          icon: 'User',
        },
      ],
    },
  ];

  return (
    <>
      <CMDK options={options} />
      ...
    </>
  );
};
```

## Types

### Props

| Name    | Type                        | Default   | Required | Description                                            |
| ------- | --------------------------- | --------- | -------- | ------------------------------------------------------ |
| options | [CMDKOption[]](#cmdkoption) | undefined | true     | List of options that'll show up in the command palette |

### CMDKOption

| Name     | Type                        | Default   | Required | Description                                                  |
| -------- | --------------------------- | --------- | -------- | ------------------------------------------------------------ |
| options  | [CMDKOption[]](#cmdkoption) | undefined | false    | A list of sub-options that'll show up in the command palette |
| icon     | [CMDKIcon[]](#cmdkicon)     | undefined | false    | A [HeroIcon](https://heroicons.com) icon name                |
| shortcut | string[]                    | undefined | false    | If available, enter the shortcut for this action here        |
| href     | string                      | undefined | false    | The link that the user will be sent to apon selection        |
| label    | string                      | undefined | true     | The text that'll show up on the option                       |
| key      | string                      | undefined | true     | A unique key for the option                                  |

### CMDKIcon

- X
- Ban
- Cog
- CreditCard
- Collection
- Eye
- Key
- Map
- Rss
- Sun
- Tag
- Bell
- Cake
- Cash
- Chat
- Chip
- Code
- Cube
- Film
- Fire
- Flag
- Gift
- Hand
- Home
- Link
- Mail
- Menu
- Moon
- Play
- Plus
- Search
- Save
- Star
- Stop
- User
- Wifi
- Check
- Clock
- Cloud
- Globe
- Heart
- Inbox
- Login
- Logout
- Minus
- Pause
- Phone
- Reply
- Scale
- Share
- Table
- Trash
- Truck
- Users

## Maintainers

<a href="https://github.com/albingroen"> 
  <img src="https://avatars.githubusercontent.com/u/19674362?v=4" width="80" height="80" />
</a>
