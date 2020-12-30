const isElement = (o) => {
   return typeof HTMLElement === 'object'
      ? o instanceof HTMLElement
      : o &&
           typeof o === 'object' &&
           o !== null &&
           o.nodeType === 1 &&
           typeof o.nodeName === 'string'
}

const setCookie = (name, val, days) => {
   if (navigator.cookieEnabled) {
      const cookieName = encodeURIComponent(name)
      const cookieVal = encodeURIComponent(val)
      const data = new Date()
      data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000)
      const cookieText = `${cookieName}=${cookieVal}; expires=${data.toGMTString()}`
      document.cookie = cookieText
   }
}

const getCookie = (name) => {
   if (document.cookie !== '') {
      const cookies = document.cookie.split(/; */)

      for (let i = 0; i < cookies.length; i++) {
         const cookiePart = cookies[i].split('=')
         const cookieName = cookiePart[0]
         const cookieVal = cookiePart[1]
         if (cookieName === decodeURIComponent(name)) {
            return decodeURIComponent(cookieVal)
         }
      }
   }
   return false
}

class CookiesInfo {
   constructor({
      cssPrefix = 'ci',
      title = 'Polityka Cookies',
      description = 'Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.',
      acceptText = 'Akceptuje',
      acceptExpired = 30,
      removeDelay = 1000,
      showDelay = 100,
      infoButton = {},
      templateFn = null,
      debugMode = false,
   }) {
      if (getCookie('cookiesAccepted') === 'true') {
         if (debugMode) {
            console.log('DebugMode: Cookies are accepted')
         } else {
            return
         }
      }

      const { text, link, blank } = infoButton

      this.config = {
         cssPrefix,
         title,
         description,
         acceptText,
         acceptExpired,
         removeDelay,
         showDelay,
         infoButton: {
            text: text || 'Dowiedz się więcej',
            link: link || null,
            blank: blank || false,
         },
         templateFn,
         debugMode,
      }

      this.wrapperRef = null
      this.acceptButtonRef = null
      this.infoButtonRef = null

      this.handleAcceptClick = this.#acceptClick.bind(this)
      this.createElement = this.#createElement.bind(this)

      this.#init()
   }

   #acceptClick() {
      setCookie('cookiesAccepted', 'true', this.config.acceptExpired)
      this.wrapperRef.classList.remove(`${this.config.cssPrefix}-show`)
      this.acceptButtonRef.removeEventListener('click', this.handleAcceptClick)
      setTimeout(() => {
         if (this.config.debugMode) {
            console.log('DebugMode: DOM element would be removed now')
         } else {
            this.wrapperRef.remove()
         }
      }, this.config.removeDelay)
   }

   #init() {
      if (this.config.templateFn) {
         try {
            this.config.templateFn(
               {
                  title: this.config.title,
                  description: this.config.description,
                  acceptText: this.config.acceptText,
                  infoButton: {
                     text: this.config.infoButton.text,
                     link: this.config.infoButton.link,
                     blank: this.config.infoButton.blank,
                  },
               },
               {
                  wrapper: (obj) => {
                     this.wrapperRef = this.#createElement(obj)
                     return this.wrapperRef
                  },
                  acceptButton: (obj) => {
                     this.acceptButtonRef = this.#createElement(obj)
                     return this.acceptButtonRef
                  },
                  infoButton: (obj) => {
                     this.infoButtonRef = this.#createElement(obj)
                     return this.infoButtonRef
                  },
               }
            )
         } catch (e) {
            console.error('Invalid template function')
         }
      }

      this.#renderHtml()
   }

   #renderHtml() {
      this.acceptButtonRef = this.acceptButtonRef
         ? this.acceptButtonRef
         : this.#createElement({
              element: 'button',
              className: 'accept-button',
              children: this.config.acceptText,
           })

      this.acceptButtonRef.addEventListener('click', this.handleAcceptClick)

      if (this.config.infoButton.text && this.config.infoButton.link) {
         this.infoButtonRef = this.infoButtonRef
            ? this.infoButtonRef
            : this.#createElement({
                 element: 'a',
                 className: 'info-button',
                 children: this.config.infoButton.text,
                 attributes: {
                    href: this.config.infoButton.link,
                    target: this.config.infoButton.blank ? '_blank' : '_self',
                 },
              })
      }

      this.wrapperRef = this.wrapperRef
         ? this.wrapperRef
         : this.#createElement({
              element: 'section',
              className: 'wrapper',
              children: [
                 {
                    element: 'div',
                    className: 'container',
                    children: [
                       {
                          element: 'div',
                          className: 'information',
                          children: [
                             {
                                element: 'h1',
                                className: 'title',
                                children: this.config.title,
                             },
                             {
                                element: 'p',
                                className: 'description',
                                children: this.config.description,
                             },
                          ],
                       },
                       {
                          element: 'div',
                          className: 'actions',
                          children: [this.infoButtonRef, this.acceptButtonRef],
                       },
                    ],
                 },
              ],
           })

      document.body.appendChild(this.wrapperRef)

      setTimeout(() => {
         this.wrapperRef.classList.add(`${this.config.cssPrefix}-show`)
      }, this.config.showDelay)
   }

   #createElement({ element, className, children = null, attributes = null }) {
      const documentElement = document.createElement(element)
      documentElement.setAttribute(
         'class',
         `${this.config.cssPrefix}-${className}`
      )
      if (attributes) {
         for (const [key, value] of Object.entries(attributes)) {
            documentElement.setAttribute(key, value)
         }
      }
      if (children) {
         if (!Array.isArray(children)) {
            children = [children]
         }
         children.map((child) => {
            const createdChild = this.#createChild(child)
            if (createdChild) documentElement.append(createdChild)
         })
      }
      return documentElement
   }

   #createChild(child) {
      if (child === null) {
         return null
      } else if (isElement(child)) {
         return child
      } else if (
         typeof child === 'object' &&
         child.element &&
         child.className
      ) {
         const { element, className, children = null } = child
         return this.#createElement({
            element,
            className,
            children,
         })
      } else if (typeof child === 'string') {
         return document.createTextNode(child)
      }
      return null
   }
}

global.CookiesInfo = (args) => new CookiesInfo(args)
