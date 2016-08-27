### Editing asset images

Do not edit the images in the `light-assets` or `dark-assets`
folders directly. Instead do the following

* If you want to change colors or opacity, open `sass/_assets-variant.scss`
  and edit them there.

* If you want to change the form of an icon, open the `assets-light.svg` file
  in inkscape. The `assets-dark.svg` is identical save the stylesheet included.
  If you want to propagate structural changes to the `dark` variant, run
  `grunt xfwm4_align` from a terminal in the base theme folder.

* **Don't change the object ids or the structure grouping them.**
  If the structure of the icon objects needs to be changed, elements below the group
  with the object id can be altered.

* **Never set colors or opacity on elements.** Use the XML editor to be sure
  on this.

* If you have changed the structure of elements, review the classes set in
  `assets-light.svg`and `assets-dark.svg`  and adapt the colors and opacity assigned
  to them in `sass/_assets-variant.scss`.

* Run `grunt xfwm4_assets` from a terminal in the base theme folder to render the icons.

#### Class structure

Icons are grouped such that variants of the same grafical structures are held
together. The names of the classes try to be intuitive, but are not always directly
derived from icon names.

These groups contain the icon objects. Their classes denote the variants of the base
grafic `active`, `inactive`, `prelight` and `pressed` or further identification like
`toggled`. They are added if possible and as needed to identify single objects.

The background is added in as a clone of the the template `iconbg` object.

 As a standard, the elements making up an icon are identified by these classes:
 * `face`, the main form-giving elements: circles, rectangles
 * `border` borders to the form-giving elements or lines
 * `trim` decorations on top: crosses, arrows, checks
