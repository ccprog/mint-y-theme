This theme uses libsass to process the sass/*.scss. Never edit any of the .css files manually.

### Editing the theme

In most cases edits will done in sass/_common.scss or sass/_applications.scss. This is where the style of each widget is actually defined. The sass directory contains several other supporting style sheets:

* _colors.scss This file contains the global color definitions

* _colors-public.scss SCSS colors exported through gtk to allow for 3rd party apps color mixing

* _drawing.scss Drawing helper mixins/functions to allow for easier definition of widget drawing

Once you have made your edits run `./parse-sass.sh` to update the css files

--

### Editing the images in the `assets` folder

Each object in the .svg file that is listed in `assets.txt` corresponds to an image
in the `assets` folder.

* If you want to change colors or opacity, open `sass/_assets.scss` and edit
  them there.

* If you want to change the form of an icon, open the `assets.svg` file in inkscape.
  Edit the template objects in the layer _Forms - edit here_.

* **Don't change the object ids.** Each of them is used by one or more icon objects.
  If the structure of their icon objects needs to be changed, define elements in
  the _Forms_ layer and reference them in the object.

* **Never set colors or opacity on elements.** Use the XML editor to be sure
  on this.

* If you have changed the structure of elements, review the classes set in `assets.svg`
  and adapt the colors and opacity assigned to them in `sass/_assets.scss`.

* Run `grunt gtk_3_18_assets` from a terminal in the base theme folder to render the icons.

#### Class structure

Icons are grouped in sections, each in their own inkscape layer, with the ids
`light`, `dark`, `header-light`, `header-dark` and `selected`.

Inside each of these, basic icon roles are identified by the groups with classes
`switch`, `check`, `radio`, `selectionmode`, `separator` and `titlebutton`.

These groups contain the icon objects. Their classes denote states like `active`,
`hover` and `insensitive`, but if appropriate also `checked`, `mixed`, `min`,
`max` or `close`.

 As a standard, the elements making up an icon are identified by these classes:
 * `null` a invisible rectangle spanning the bounding box of the icon
 * `face`, `face2` the main form-giving elements: circles, rectangles
 * `trim` decorations on top: crosses, arrows, checks
