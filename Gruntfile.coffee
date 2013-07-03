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

        develop:
            server:
                file: "app"

        regarde:
            js:
                files: ["app/*.js"]
                tasks: ["develop", "delayed-livereload"]

            css:
                files: ["public/stylesheets/*.css"]
                tasks: ["livereload"]

            jade:
                files: ["app/views/*.jade"]
                tasks: ["livereload"]

    grunt.registerTask "delayed-livereload", "delayed livereload", ->
        done = @async()
        setTimeout (->
            grunt.task.run "livereload"
            done()
        ), 500

    # Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-contrib-less'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-exec'

    # Default task(s).
    grunt.loadNpmTasks "grunt-develop"
    grunt.loadNpmTasks "grunt-regarde"
    grunt.loadNpmTasks "grunt-contrib-livereload"
    grunt.registerTask "default", ["livereload-start", "develop", "regarde"]

