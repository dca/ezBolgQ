module.exports = (grunt) ->

    # Project configuration.
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')

        jshint:
            files: ['app.js']
            options:
                globals:
                    console: true
                    module : true

        less:
            development:
                files: '<%= less.files %>'
                options:
                    yuicompress: false
            production:
                files: '<%= less.files %>'
                options:
                    yuicompress: true
            files:
                'public/stylesheets/style.css': 'src/less/style.less'
                'public/stylesheets/bootstrap.css': 'src/less/bootstrap.less'

        exec:
            restart:
                cmd: 'pm2 restartAll'

        watch:
            files: ['<%= jshint.files %>'],
            tasks: ['jshint','exec']



    # Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-contrib-less'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-exec'

    # Default task(s).
    grunt.registerTask 'default', ['jshint']