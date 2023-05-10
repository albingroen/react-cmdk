# `CommandPalette.ListItem`

| name          | type                 | required | default    | description                                     |
| ------------- | -------------------- | -------- | ---------- | ----------------------------------------------- |
| index         | number               | true     |            | Index for list item                             |
| closeOnSelect | boolean              | false    |            | Whether to close the command palette upon click |
| icon          | (IconName, React.FC) | false    | `false`    | Icon for list item                              |
| iconType      | IconType             | false    | `"solid" ` | Icon for list item                              |
| showType      | boolean              | false    | true       | Whether to show the item type                   |
| disabled      | boolean              | false    |            | Whether the item is disabled                    |
| keywords      | Array&gt;string&lt;  | false    |            | Underlying search keywords for the list item    |

:::info
The list item also extends the `HTMLAnchorElement & HTMLButtonElement` types
:::