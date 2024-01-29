# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0).

Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Huddle landing page with single introductory section solution](#frontend-mentor---huddle-landing-page-with-single-introductory-section-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

Desktop:

![Desktop screenshot](./build/screenshots/huddle-landing-page-with-single-introductory-section-desktop.png)

Mobile:

![Mobile screenshot](./build/screenshots/huddle-landing-page-with-single-introductory-section-mobile.png)

### Links

- [Live Demo](https://wess-mhhw.github.io/huddle-landing-page-with-single-introductory-section/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

### What I learned

In this project, I gained valuable insights and hands-on experience with Tailwind CSS, delving into its essentials and mastering the effective use and combination of classes.

I delved into the essentials, mastering the art of using and combining classes effectively.

```html
<header class="p-7 lg:px-28 lg:py-10">
  <div class="mr-[60%]">
    <img src="images/logo.svg" alt="" />
  </div>
</header>
```

I utilized Tailwind CSS to define variables:

```css
@layer base {
  :root {
    /* COLORS */
    --clr-violet: hsl(257, 40%, 49%);
    --clr-soft-magenta: hsl(300, 69%, 71%);
  }
}
```

These variables played a key role in shaping custom themes:

```js
module.exports = {
  content: ["./build/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('../images/bg-desktop.svg')",
        "mobile-pattern": "url('../images/bg-mobile.svg')",
      },
      colors: {
        violet: "var(--clr-violet)",
        "soft-magenta": "var(--clr-soft-magenta)",
      },
      fontFamily: {
        "open-sans": ["Open Sans"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
```

Finally, I seamlessly integrated these themes into my HTML:

```html
<body
  class="bg-violet bg-mobile-pattern bg-[length:100vw_auto] bg-no-repeat lg:h-screen lg:bg-desktop-pattern lg:bg-[length:auto_100vh]"
></body>
```

Despite being my inaugural exploration into Tailwind, the challenges I encountered enriched my understanding and expanded my skill set.

## Author

- Frontend Mentor - [@wess-MHHW](https://www.frontendmentor.io/profile/wess-MHHW)
- LeetCode - [@wess-MHHW](https://leetcode.com/wess-MHHW/)
- Linkedin - [@wassim-maaoui](https://www.linkedin.com/in/wassim-maaoui/)
