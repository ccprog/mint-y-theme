module.exports = function(grunt) {

  var cinnamon_common_ids = {
    menu: [
      'menu-separator'
    ],
    panel: [
      'activities',
      'activities-active',
      'panel-bottom',
      'panel-top',
      'window-list-active-bottom',
      'window-list-active-top'
    ],
    misc: [
      'add-workspace',
      'add-workspace-active',
      'add-workspace-hover',
      'calendar-arrow-left',
      'calendar-arrow-right',
      'calendar-arrow-left-hover',
      'calendar-arrow-right-hover',
      'close',
      'close-active',
      'close-hover',
      'corner-ripple',
      'bg',
      'desklet',
      'desklet-header',
      'osd',
      'overview',
      'overview-hover',
      'trash-icon'
    ]
  };

  var cinnamon_variant_ids = {
    checkbox: [
      'checkbox-checked',
      'checkbox-checked-focused',
      'checkbox-unchecked',
      'checkbox-unchecked-focused'
    ],
    menu: [
      'menu',
      'menu-hover',
      'submenu'
    ],
    switch: [
      'switch-off',
      'switch-on'
    ],
    misc: [
      'button-box',
      'message',
      'modal'
    ]
  };

  grunt.initConfig({
    svg_icon_toolbox: {
      cinnamon_common: {
        src: 'src/cinnamon/assets-common.svg',
        options: {
          tasks: [
            {
              task: 'stylize',
              arg: {src: 'src/cinnamon/sass/_assets-common.scss'}
            },
            {
              task: 'write'
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_common_ids.misc,
                format: 'svg',
                dir: 'src/cinnamon/common-assets/misc/'
              }
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_common_ids.panel,
                format: 'svg',
                dir: 'src/cinnamon/common-assets/panel/'
              }
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_common_ids.menu,
                format: 'svg',
                dir: 'src/cinnamon/common-assets/menu/'
              }
            },
          ]
        }
      },
      cinnamon_light: {
        src: 'src/cinnamon/assets-light.svg',
        options: {
          tasks: [
            {
              task: 'stylize',
              arg: {src: 'src/cinnamon/sass/_assets-light.scss'}
            },
            {
              task: 'write'
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_variant_ids.checkbox,
                format: 'svg',
                dir: 'src/cinnamon/light-assets/checkbox/'
              }
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_variant_ids.menu,
                format: 'svg',
                dir: 'src/cinnamon/light-assets/menu/'
              }
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_variant_ids.switch,
                format: 'svg',
                dir: 'src/cinnamon/light-assets/switch/'
              }
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_variant_ids.misc,
                format: 'svg',
                dir: 'src/cinnamon/light-assets/misc/'
              }
            },
          ]
        }
      },
      cinnamon_dark: {
        src: 'src/cinnamon/assets-dark.svg',
        options: {
          tasks: [
            {
              task: 'stylize',
              arg: {src: 'src/cinnamon/sass/_assets-dark.scss'}
            },
            {
              task: 'write'
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_variant_ids.checkbox,
                format: 'svg',
                dir: 'src/cinnamon/dark-assets/checkbox/'
              }
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_variant_ids.menu,
                format: 'svg',
                dir: 'src/cinnamon/dark-assets/menu/'
              }
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_variant_ids.switch,
                format: 'svg',

                dir: 'src/cinnamon/dark-assets/switch/'
              }
            },
            {
              task: 'export',
              arg: {
                ids: cinnamon_variant_ids.misc,
                format: 'svg',
                dir: 'src/cinnamon/dark-assets/misc/'
              }
            },
          ]
        }
      },
      cinnamon_align: {
        src: 'src/cinnamon/assets-light.svg',
        options: {
          tasks: [
            {
              task: 'stylize',
              arg: {src: 'src/cinnamon/sass/_assets-light.scss'}
            },
            {
              task: 'write'
            },
            {
              task: 'stylize',
              arg: {src: 'src/cinnamon/sass/_assets-dark.scss'}
            },
            {
              task: 'write',
              arg: 'src/cinnamon/assets-dark.svg'
            }
          ]
        }
      },
      gtk_2_light: {
        src: 'src/gtk-2.0/assets.svg',
        options: {
          tasks: [
            {
              task: 'stylize',
              arg: {src: 'src/gtk-2.0/sass/_assets.scss'}
            },
            {
              task: 'write'
            },
            {
              task: 'export',
              arg: {
                idFile: 'src/gtk-2.0/assets.txt',
                format: 'png',
                postProcess: 'bin/optimize',
                dir: 'src/gtk-2.0/assets/'
              }
            }
          ]
        }
      },
      gtk_2_dark: {
        src: 'src/gtk-2.0/assets-dark.svg',
        options: {
          tasks: [
            {
              task: 'stylize',
              arg: {src: 'src/gtk-2.0/sass/_assets-dark.scss'}
            },
            {
              task: 'write'
            },
            {
              task: 'export',
              arg: {
                idFile: 'src/gtk-2.0/assets.txt',
                format: 'png',
                postProcess: 'bin/optimize',
                dir: 'src/gtk-2.0/assets-dark/'
              }
            }
          ]
        }
      },
      gtk_2_align: {
        src: 'src/gtk-2.0/assets.svg',
        options: {
          tasks: [
            {
              task: 'stylize',
              arg: {src: 'src/gtk-2.0/sass/_assets.scss'}
            },
            {
              task: 'write'
            },
            {
              task: 'stylize',
              arg: {src: 'src/gtk-2.0/sass/_assets-dark.scss'}
            },
            {
              task: 'write',
              arg: 'src/gtk-2.0/assets-dark.svg'
            }
          ]
        }
      },
      gtk_3_18: {
        src: 'src/gtk-3.0/3.18/assets.svg',
        options: {
          tasks: [
            {
              task: 'stylize',
              arg: {src: 'src/gtk-3.0/3.18/sass/_assets.scss'}
            },
            {
              task: 'write'
            },
            {
              task: 'export',
              arg: {
                idFile: 'src/gtk-3.0/3.18/assets.txt',
                format: 'png',
                postProcess: 'bin/optimize',
                dir: 'src/gtk-3.0/3.18/assets/'
              }
            },
            {
              task: 'export',
              arg: {
                idFile: 'src/gtk-3.0/3.18/assets.txt',
                format: 'png',
                postProcess: 'bin/optimize',
                dir: 'src/gtk-3.0/3.18/assets/',
                suffix: '@2',
                exportOptions: { dpi: 180 }
              }
            }
          ]
        }
      },
    },
  });

  grunt.task.loadNpmTasks('svg-icon-toolbox');
  grunt.task.registerTask('cinnamon_assets', [
    'svg_icon_toolbox:cinnamon_common',
    'svg_icon_toolbox:cinnamon_light',
    'svg_icon_toolbox:cinnamon_dark'
  ]);
  grunt.task.registerTask('cinnamon_align', [
    'svg_icon_toolbox:cinnamon_align'
  ]);
  grunt.task.registerTask('gtk_2_assets', [
    'svg_icon_toolbox:gtk_2_light',
    'svg_icon_toolbox:gtk_2_dark'
  ]);
  grunt.task.registerTask('gtk_2_align', [
    'svg_icon_toolbox:gtk_2_align'
  ]);
  grunt.task.registerTask('gtk_3_18_assets', [
    'svg_icon_toolbox:gtk_3_18'
  ]);
};