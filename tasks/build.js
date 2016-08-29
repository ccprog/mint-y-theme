module.exports = function(grunt) {

    var join = require('path').join;
    var unlink = require('fs').unlink;

    var src = 'src/';
    var base = 'usr/share/themes/';

    grunt.registerTask('distribute-theme', 'Move current source files to destination',
            function() {
        var dest, mappings = [];

        function set_mappings (cwd, folder, move, rename) {
            cwd = join(src, cwd);
            folder = join(dest, folder);
            grunt.file.expand(join(folder, '*')).forEach(function (path) {
                if (grunt.file.isFile(path) || grunt.file.isDir(path)) {
                    grunt.file.delete(path);
                } else {
                    // delete the symlinks in xfwm4
                    unlink(path);
                }
            });
            mappings = mappings.concat(
                grunt.file.expandMapping(move, folder, {
                    expand: true,
                    cwd: cwd
                })
            );
            if (rename) {
                rename.forEach(function (rel) {
                    mappings.push({
                        src: [join(cwd, rel.src)],
                        dest: join(folder, rel.dest)
                    });
                });
            }
        }

        // Mint-Y
        dest = join(base, 'Mint-Y/');
        mappings.push({
            src: [join(src, 'index.theme')],
            dest: join(dest, 'index.theme')
        });

        // Cinnamon
        set_mappings('cinnamon/', 'cinnamon/', [
            'common-assets/**',
            'light-assets/**',
            'cinnamon.css'
        ], [
            { src: 'mint-y-thumbnail.png', dest: 'thumbnail.png' }
        ]);

        // GTK 2.0
        set_mappings('gtk-2.0/', 'gtk-2.0/', [
            'assets/*',
            'menubar-toolbar/*',
            '*.rc',
            'gtkrc'
        ]);

        // GTK 3.18
        set_mappings('gtk-3.0/3.18/', 'gtk-3.0/', [
                'assets/*',
                'gtk.css',
                'thumbnail.png'
        ]);

        // Metacity
        set_mappings('metacity-1/', 'metacity-1/', [
            '*.svg',
            '!assets.svg',
            'metacity-theme-2.xml',
            'metacity-theme-3.xml',
            'thumbnail.png'
        ]);

        // XFCE-Notify
        set_mappings('xfce-notify-4.0/', 'xfce-notify-4.0/', [
            '*'
        ]);

        // XFWM
        set_mappings('xfwm4/light-assets/', 'xfwm4/', [
            '*'
        ]);
        set_mappings('xfwm4/', 'xfwm4/', [
            'themerc'
        ]);

        // Mint-Y-Darker
        dest = base + 'Mint-Y-Darker/';
        mappings.push({
            src: [join(src, 'index.theme-darker')],
            dest: join(dest, 'index.theme')
        });

        // GTK 2.0
        set_mappings('gtk-2.0/', 'gtk-2.0/', [
            'assets/*',
            'menubar-toolbar/*',
            '*.rc'
        ], [
            { src: 'gtkrc-darker', dest: 'gtkrc' }
        ]);

        // GTK 3.18
        set_mappings('gtk-3.0/3.18/', 'gtk-3.0/', [
            'assets/*',
            'gtk-dark.css',
            'thumbnail.png'
        ], [
            { src: 'gtk-darker.css', dest: 'gtk.css' }
        ]);

        // XFCE-Notify
        set_mappings('xfce-notify-4.0/', 'xfce-notify-4.0/', [
            '*'
        ]);

        // XFWM
        set_mappings('xfwm4/dark-assets/', 'xfwm4/', [
            '*'
        ]);
        set_mappings('xfwm4/', 'xfwm4/', [], [
            { src: 'themerc-dark', dest: 'themerc' }
        ]);

        // Mint-Y-Dark
        dest = base + 'Mint-Y-Dark/';
        mappings.push({
            src: [join(src, 'index.theme-dark')],
            dest: join(dest, 'index.theme')
        });

        // Cinnamon
        set_mappings('cinnamon/', 'cinnamon/', [
            'common-assets/**',
            'dark-assets/**'
        ], [
            { src: 'cinnamon-dark.css', dest: 'cinnamon.css' },
            { src: 'mint-y-dark-thumbnail.png', dest: 'thumbnail.png' }
        ]);

        // GTK 2.0
        set_mappings('gtk-2.0/assets-dark/', 'gtk-2.0/assets/', [
            '*'
        ]);
        set_mappings('gtk-2.0/', 'gtk-2.0/', [
            'menubar-toolbar/*',
            '*.rc'
         ], [
            { src: 'gtkrc-dark', dest: 'gtkrc' }
        ]);

        // GTK 3.18
        set_mappings('gtk-3.0/3.18/', 'gtk-3.0/', [
            'assets/*'
        ], [
            { src: 'gtk-dark.css', dest: 'gtk.css' },
            { src: 'thumbnail-dark.png', dest: 'thumbnail.png' }
        ]);

        // Metacity
        set_mappings('metacity-1/', 'metacity-1/', [
            '*.svg',
            '!assets.svg'
        ], [
            { src: 'metacity-theme-2-dark.xml', dest: 'metacity-theme-2.xml' },
            { src: 'metacity-theme-3-dark.xml', dest: 'metacity-theme-3.xml' },
            { src: 'thumbnail-dark.png', dest: 'thumbnail.png' }
        ]);

        // XFCE-Notify
        set_mappings('xfce-notify-4.0/', 'xfce-notify-4.0/', [
            '*'
        ]);

        // XFWM
        set_mappings('xfwm4/dark-assets/', 'xfwm4/', [
            '*'
        ]);
        set_mappings('xfwm4/', 'xfwm4/', [], [
            { src: 'themerc-dark', dest: 'themerc' }
        ]);

        // execute copying
        mappings.forEach(function (pair) {
            grunt.file.copy(pair.src[0], pair.dest);
        });
    });
};