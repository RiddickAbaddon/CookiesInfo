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

### Add info link

```html
<script src="js/cookiesInfo.js"></script>
<script>
   CookiesInfo({
      infoButton: {
         link: 'domain.com/cookiesinfo',
         blank: true,
      },
   })
</script>
```

## Configuration
| option | type | default value | description |
|-|-|-|-|
| cssPrefix | `string` | "ci" | prefix to css class names. |
| title | `string` | "Polityka Cookies" | Header title text. |
| description | `string` | "Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki." | Description paragraph text. |
| acceptText | `string` | "Akceptuje" | The text on the button to accept. |
| acceptExpired | `number` | 30 | The number of **days** after which information about cookies will reappear. |
| removeDelay | `number` | 1000 | After clicking the "Accept" button, the item with the information is removed from the DOM tree. This is the time in **milliseconds** after which the item will be deleted. |
| showDelay | `number` | 100 | Time in **milliseconds** until the information appears. |
| infoButton | `object` | [Object] | Configuration of a link leading to a page with information about cookies. For the link to appear, both the `title` and `link` options must be set. Details are in the next table. |
| templateFn | `function` | null | A function in which you can change the html structure of the information. Details are provided below. |
| debugMode | `boolean` | false | Debug mode is used to hold information on the screen so that it can be tested. |

### InfoButton configuration
| option | type | default value | description |
|-|-|-|-|
| text | `string` | "Dowiedz się więcej" | Link text. |
| link | `string` | null | Url address to the page with detailed information about cookies. |
| blank | `boolean` | false | Specifies whether the link should open in a new tab. |

### Sample Configuration
```js
CookiesInfo({
   title: "Cookies info",
   description: "This website uses cookies. By using the website, you agree to their reading or writing according to your browser settings.",
   acceptText: "Accept",
   acceptExpired: 365,
   showDelay: 1000,
   infoButton: {
      text: "Find out more",
      link: "domain.com/cookiesinfo",
      blank: true,
   },
});
```

## Template configuration
```js
CookiesInfo({
   templateFn: function (config, set) {
/*    Configuration object with the necessary properties
*     config = {
*        title,
*        description,
*        acceptText,
*        infoButton: {
*           text,
*           link,
*           blank,
*        },
*     },
*
*     Object with functions to configure essential elements
*     set = {
*        wrapper(), // Wrapper of whole DOM element
*        acceptButton(), // Accept button element
*        infoButton(), // Info link element
*     }
*/ 
   }
});
```

### Sample template
```js
CookiesInfo({
   debugMode: true, // debugMode will display error information if there is an error in the templateFn function
   templateFn: function (config, set) {
      var acceptButton = set.acceptButton({
         tag: "button",
         className: "accept-button",
         children: config.acceptText,
      });

      var infoButton = set.infoButton({
         tag: "a",
         className: "info-button",
         children: config.infoButton.text,
         attributes: {
            href: config.infoButton.link,
            target: config.infoButton.blank ? "_blank" : "_self",
         },
      });

      set.wrapper({
         tag: "section",
         className: "wrapper",
         children: [
            {
               tag: "div",
               className: "container",
               children: [
                  {
                     tag: "div",
                     className: "information",
                     children: [
                        {
                           tag: "h1",
                           className: "title",
                           children: config.title,
                        },
                        {
                           tag: "p",
                           className: "description",
                           children: config.description,
                        },
                     ],
                  },
                  {
                     tag: "div",
                     className: "actions",
                     children: [infoButton, acceptButton],
                  },
               ],
            },
         ],
      });
   },
});
```
This is default template

### Set template function configuration
`set.wrapper()` and etc. is a set template function. This function returns DOM object and takes a configuration object as an argument. The properties of the configuration object are shown below.
| option | type | is required | description |
|-|-|-|-|
| tag | `string` | **required** | HTML element tag. |
| className | `string` | **required** | The name of the class to which the prefix is attached as follows: `cssPrefix-className` |
| children | `array` | optional | Array of children elements. Takes the properties of a type: `string` (creates textNode), `DOM element` or nasted configuration `object` (creates nasted DOM element) |
| attributes | `object` | optional | Adds HTML attributes to this element. Specified as `key: value` |
