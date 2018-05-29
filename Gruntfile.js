module.exports = function (grunt) {
    grunt.initConfig({
        connect:{
            server:{
                options:{
                    hostname: 'localhost',
                    port: 3001,
                    keepalive: true,
                    open: true
                }
            }
        }
    });
    grunt.registerTask('default',['connect:server']);
    grunt.loadNpmTasks('grunt-contrib-connect');

};