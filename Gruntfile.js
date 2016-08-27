module.exports = function(grunt) {

  grunt.initConfig({
    svg_icon_toolbox: {
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