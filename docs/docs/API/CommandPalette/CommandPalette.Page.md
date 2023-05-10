
# `CommandPalette.Page`

## Props 

| name             | type                        | required |	default |	description                                 |
|------------------|-----------------------------|----------|-----------|-----------------------------------------------|
| id               | string                      | true     | 	        |	A unique page id                            |
| children         | React.ReactNode             | true     | 	        |	Children of the list                        |
| searchPrefix     | string[]                    | false    | 	        |	Prefix to the left of the searchbar         |
| onEscape         | () => void                  | false    | 	        |	Function that runs upon clicking escape     |

:::info
Using pages is completely optional
:::
