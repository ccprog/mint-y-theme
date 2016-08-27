module.exports = function(grunt) {

  grunt.initConfig({
    svg_icon_toolbox: {
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
  grunt.task.registerTask('gtk_3_18_assets', [
    'svg_icon_toolbox:gtk_3_18'
  ]);
};