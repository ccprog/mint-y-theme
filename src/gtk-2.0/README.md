### Editing the theme

* The Colors and includes are defined in `gtkrc`, `gtkrc-dark` and `gtkrc-darker` for each theme variant.
* `main.rc` contains the major part of the theme
* `panel.rc` contains the panel styling for XFCE and Mate
* `apps.rc` contains some application specific rules

Because this theme is heavily based on the pixmap engine, a lot of the styling
comes from the images in the `assets` and `assets-dark` folders. Don't edit
these images directly. Instead do the following

* If you want to change colors or opacity, open `sass/_assets-variant.scss` and
  edit them there.

* If you want to change the form of an icon, open the `assets.svg` file in inkscape.
  The `assets-dark.svg` is identical save the stylesheet included. If you want to
  propagate structural changes to the `dark` variant, run `grunt gtk_2_align` from
  a terminal in the base theme folder.

* **Don't change the object ids or the structure grouping them.**
  If the structure of the icon objects needs to be changed, elements below the group
  with the object id can be altered.

* **Never set colors or opacity on elements.** Use the XML editor to be sure
  on this.

* If you have changed the structure of elements, review the classes set in `assets.svg`
   and `assets-dark.svg` and adapt the colors and opacity assigned to them in
   `sass/_assets-variant.scss`.

* Run `grunt gtk_2_assets` from a terminal in the base theme folder to render the icons.

#### Class structure

Icons are grouped together by the styles defined in `main.rc` and  `panel.rc`. The
id of each group takes the form `s_<stylename>`.

These groups are subdivided by groups named after the `function` parameter of each
image listed for the style, written in lower case.

These groups contain the icon objects. Their classes denote further identifying
information from parameters like `detail` (`expanded`), `orientation` (`left`, `up`)
or `state` (`active`, `insensitive`). They are added as needed to identify single
objects.

 As a standard, the elements making up an icon are identified by these classes:
 * `null` a invisible rectangle spanning the bounding box of the icon
 * `back` backgrounds behind the form-giving elements (mainly fill-ins behind
    rounded corners)
 * `face`, `face2` the main form-giving elements: circles, rectangles
 * `trim` decorations on top: crosses, arrows, checks
