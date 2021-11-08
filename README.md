# react-cmdk

A fast, accessible, and pretty React.js command palette component

- [What is this?](#what-is-this)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Maintainers](#maintainers)

## What is this?

This is a installable component for the web development framework React.js. The
package includes 1 component, and its TypeScript types. The goal of the
component is to save web developers their time, and not make them have to build
their own command palette component. Instead, they can just install this
component, and get a out-of-the-box command palette that's fast accessible, and
pretty.

## Screenshots

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
  const options: CMDKOption[] = [
    {
      key: 'general',
      label: 'General',
      options: [
        {
          key: 'create-project',
          label: 'Create new project',
          shortcut: ['⇧', '⌘', 'N'],
          icon: 'Plus',
        },
        {
          key: 'account',
          label: 'My account',
          shortcut: ['⇧', '⌘', 'A'],
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

## Maintainers

<a href="https://github.com/albingroen"> 
  <img src="https://avatars.githubusercontent.com/u/19674362?v=4" width="80" height="80" />
</a>
