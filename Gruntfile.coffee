module.exports = (grunt) ->

    # Project configuration.
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')

        # JsHint
        jshint:
            files: ['app.js']
            options:
                globals:
                    console: true
                    module : true

        # Compile LESS
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

        # exec 可執行指令 (目前沒用到)
        exec:
            restart:
                cmd: 'pm2 restartAll'

        # develop 啓動伺服器
        develop:
            server:
                file: "app.js"

        # watch 監事檔案並執行task (目前沒用到)
        watch:
            options:
                livereload: true
            js:
                files: ["app.js", "app/*.js", "app/**/*.js", "config/*.js"]
                tasks: ["develop"] # 重新啓動伺服器 & livereload

            css:
                files: ["public/stylesheets/**/*.css"]

            jade:
                files: ["app/views/**/*.jade"]

        # regarde
        regarde:
            js:
                files: ["app.js", "app/**/*.js", "config/*.js"]
                tasks: ["develop", "delayed-livereload"] # 重新啓動伺服器 & livereload

            css:
                files: ["public/stylesheets/**/*.css"]
                tasks: ["livereload"] # livereload

            jade:
                files: ["app/views/**/*.jade"]
                tasks: ["livereload"] # livereload

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
    # grunt.registerTask "default", ["livereload-start", "develop", "watch"]
    grunt.registerTask "default", ["develop", "regarde"]
