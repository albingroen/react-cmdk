
# `CommandPalette`

## Props

| name             | type                        | required |	default |	description                                 |
|------------------|-----------------------------|----------|-----------|-----------------------------------------------|
| onChangeSearch   | (value: string) => void     | true     | 	        |	Function for setting search value           |
| onChangeOpen     | (value: boolean) => void    | true     | 	        |	Function for setting open state             |
| children         | React.ReactNode             | true     | 	        |	Children of command palette                 |
| isOpen           | boolean                     | true     | 	        |	Open state                                  |
| search           | string                      | true     | 	        |	Search state                                |
| placeholder      | string                      | false    | `"Search"`|	Search field placeholder                    |
| page             | string                      | false    | 	        |	The current page id                         |
| renderLink       | [RenderLink](../Types/RenderLink)  | false    | 	        |	Function for customizing rendering of links |
| footer           | React.ReactNode             | false    | 	        |	Footer component                            |
| selected         | number                      | false    | 	        |	The current selected item index             |
| onChangeSelected | (value: number) => void     | false    | 	        |	Function for setting selected item index    |