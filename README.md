# CookiesInfo
Simple and quick to configure, yet comprehensive library for information about cookies.

## Basic configuration

```html
<script src="js/cookiesInfo.js"></script>
<script>
   CookiesInfo();
</script>
```
And it is already working.

## Add info link

```html
<script src="js/cookiesInfo.js"></script>
<script>
   CookiesInfo({
      infoButton: {
         link: 'link.pl',
         blank: true,
      },
   })
</script>
```

## Configuration
| option        | type       | default value                                                                                                                  | description                                                                                                                                                                       |
|---------------|------------|--------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cssPrefix     | `string`   | "ci"                                                                                                                           | prefix to css class names                                                                                                                                                         |
| title         | `string`   | "Polityka Cookies"                                                                                                             | Header title text                                                                                                                                                                 |
| description   | `string`   | "Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki." | Description paragraph text                                                                                                                                                        |
| acceptText    | `string`   | "Akceptuje"                                                                                                                    | The text on the button to accept                                                                                                                                                  |
| acceptExpired | `number`   | 30                                                                                                                             | The number of **days** after which information about cookies will reappear.                                                                                                       |
| removeDelay   | `number`   | 1000                                                                                                                           | After clicking the "Accept" button, the item with the information is removed from the DOM tree. This is the time in **milliseconds** after which the item will be deleted.        |
| showDelay     | `number`   | 100                                                                                                                            | Time in **milliseconds** until the information appears                                                                                                                            |
| infoButton    | `object`   | [Object]                                                                                                                       | Configuration of a link leading to a page with information about cookies. For the link to appear, both the `title` and `link` options must be set. Details are in the next table. |
| templateFn    | `function` | null                                                                                                                           | A function in which you can change the html structure of the information. Details are provided below.                                                                             |
| debugMode     | `boolean`  | false                                                                                                                          | Debug mode is used to hold information on the screen so that it can be tested.                                                                                                    |
