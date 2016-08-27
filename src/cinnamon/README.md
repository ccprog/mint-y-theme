This theme uses libsass to process the sass/*.scss. Never edit any of the .css files
manually.

### Editing the theme

In most cases edits will done in sass/_common.scss. The sass directory contains
several other supporting style sheets:

* _colors.scss This file defines the color variables used by the theme

* _drawing.scss Drawing helper mixins/functions to allow for easier definition of
  widget drawing

Once you have made your edits run ./parse-sass.sh to update the css files

### Editing asset images

Do not edit the images in the `common-assets`, `light-assets` or `dark-assets`
folders directly. Instead do the following

* If you want to change colors or opacity, open `sass/_assets-common.scss` or
  `sass/_assets-variant.scss` and edit them there.

* If you want to change the form of an icon, open the `assets-common.svg` or
  `assets-light.svg` file in inkscape. The `assets-dark.svg` is identical save
  the stylesheet included. If you want to propagate structural changes to the
  `dark` variant, run `grunt cinnamon_align` from a terminal in the base theme folder.

* **Don't change the object ids or the structure grouping them.**
  If the structure of the icon objects needs to be changed, elements below the group
  with the object id can be altered.

* **Never set colors or opacity on elements.** Use the XML editor to be sure
  on this.

* If you have changed the structure of elements, review the classes set in
  `assets-common.svg` and adapt the colors and opacity assigned to them in
   `sass/_assets-common.scss`. For the `light` and `dark` variants, adapt
   `sass/_assets-variant.scss`.

* Run `grunt cinnamon_assets` from a terminal in the base theme folder to render the icons.

#### Class structure

Icons are grouped such that variants of the same grafical structures are held
together. The names of the classes try to be intuitive, but are not always directly
derived from icon folder names or icon names. Icons that have no variants are
grouped under `misc`.

These groups contain the icon objects. Their classes denote variants of the base
grafic like `active`, `hover` or `top`. They are added if possible and as needed
to identify single objects.

 As a standard, the elements making up an icon are identified by these classes:
 * `null` a invisible rectangle spanning the bounding box of the icon
 * `shadow` behind or around the form-giving elements. For the drop-shadows,
   these may be groups of forms emulating together a Gaussian blur. The individual
   shadows are named `shadow1`, `shadow2` etc.
 * `face`, `face2` the main form-giving elements: circles, rectangles
 * `border` borders to the form-giving elements or lines
 * `trim` decorations on top: crosses, arrows, checks
