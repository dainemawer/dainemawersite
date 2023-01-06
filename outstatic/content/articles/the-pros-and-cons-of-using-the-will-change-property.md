---
author:
  name: 'Daine Mawer'
  picture: 'https://avatars.githubusercontent.com/u/48082535?v=4'
coverImage: ''
title: 'The Pros and Cons of Using the will-change Property'
status: 'draft'
slug: 'the-pros-and-cons-of-using-the-will-change-property'
description: 'Improve the performance of your website with the will-change CSS property. Learn how to use it effectively to optimize rendering and create smoother animations. Use with caution to avoid negative impacts on performance.'
publishedAt: '2023-01-06T19:54:27.318Z'
---

The `will-change` CSS property is a useful tool for optimizing website performance. It is a way for developers to let the browser know which properties of an element are likely to change in the near future, so that the browser can optimize its rendering accordingly.

For example, consider a page with a large number of elements that all have a `transform` property set to `scale(1)`. Without the `will-change` property, the browser would have to recalculate the layout and rendering of all of these elements whenever any of them changed. However, if the developer adds the `will-change: transform` property to all of these elements, the browser can optimize its rendering in advance, making the transformation much smoother and more efficient.

There are a few things to keep in mind when using the `will-change` property. First, it should only be used when absolutely necessary, as it can have a negative impact on performance if overused. Second, it is important to be specific about which properties are likely to change, as this will allow the browser to optimize more effectively. Finally, it is a good idea to test the performance of the website both with and without the `will-change` property, to ensure that it is actually improving performance and not causing any issues.

Overall, the `will-change` CSS property is a powerful tool for optimizing the performance of websites, but it should be used with care and caution. When used correctly, it can significantly improve the user experience by making animations and other effects smoother and more responsive.

There are a few potential drawbacks to using the `will-change` property:

1. Overuse can negatively impact performance: If the `will-change` property is applied too often or to elements that do not actually change, it can actually have a negative impact on performance. This is because the browser will unnecessarily optimize the rendering of these elements, which can consume extra resources.

2. Lack of browser support: The `will-change` property is not supported in all browsers, so it may not work for all users.

3. It does not guarantee improved performance: While the `will-change` property can help the browser optimize its rendering, it does not guarantee improved performance. Factors such as the complexity of the animations and the capabilities of the user's device can also impact performance.

4. It can cause jank: In some cases, using the `will-change` property can cause jank, or choppy animation. This is because the browser is attempting to optimize the rendering of an element that is changing rapidly, which can cause it to miss frames or render them at the wrong time.

Overall, it is important to use the `will-change` property with caution and to carefully test its impact on performance before implementing it on a production website.

