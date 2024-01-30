# Utils

## `getItemIndex`

A function for getting the current index of a item within the json structure

```typescript
(items: JsonStructure, listItemId: string, startIndex = 0) => number;
```

## `filterItems`

A function for filtering the json structure from a search string

```typescript
(
  items: JsonStructure,
  search: string,
  options?: { filterOnListHeading: boolean }
) => JsonStructure;
```

## `renderJsonStructure`

A function for rendering a json structure

```typescript
(items: JsonStructure) => JSX.Element[]
```

## `useHandleOpenCommandPalette`

```typescript
(fn: React.Dispatch<React.SetStateAction<boolean>>) => void
```
