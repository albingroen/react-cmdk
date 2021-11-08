export type CMDKProps = {
  options: CMDKOption[];
};

export type CMDKOption = {
  options?: CMDKOption[];
  shortcut?: string[];
  icon?: CMDKIcon;
  label: string;
  key: string;
};

export type CMDKIcon =
  | 'X'
  | 'Ban'
  | 'Cog'
  | 'CreditCard'
  | 'Collection'
  | 'Eye'
  | 'Key'
  | 'Map'
  | 'Rss'
  | 'Sun'
  | 'Tag'
  | 'Bell'
  | 'Cake'
  | 'Cash'
  | 'Chat'
  | 'Chip'
  | 'Code'
  | 'Cube'
  | 'Film'
  | 'Fire'
  | 'Flag'
  | 'Gift'
  | 'Hand'
  | 'Home'
  | 'Link'
  | 'Mail'
  | 'Menu'
  | 'Moon'
  | 'Play'
  | 'Plus'
  | 'Search'
  | 'Save'
  | 'Star'
  | 'Stop'
  | 'User'
  | 'Wifi'
  | 'Check'
  | 'Clock'
  | 'Cloud'
  | 'Globe'
  | 'Heart'
  | 'Inbox'
  | 'Login'
  | 'Logout'
  | 'Minus'
  | 'Pause'
  | 'Phone'
  | 'Reply'
  | 'Scale'
  | 'Share'
  | 'Table'
  | 'Trash'
  | 'Truck'
  | 'Users';
