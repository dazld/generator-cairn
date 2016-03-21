const generators = require('yeoman-generator');
const path = require('path');
const fs = require('fs');
const basePath = path.resolve(__dirname, 'template');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        this.sourceRoot(basePath);
        // this.log()
        // console.log(this.files)

        this.config.save();
    },
    initializing: function() {
        // ascii('cairn', console.log);
        this.log('I am a full stack react, redux & express generator.')
    },
    prompting: function() {
        var done = this.async();
        this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your project name',
            default : this.appname // Default to current folder name
        }], function (answers) {
            this.log(answers.name);
            done();
        }.bind(this));
    },
    writing: function() {
        const files = fs.readdirSync(this.templatePath());

        const tplPath = this.templatePath();

        const processFile =  (root, filePath) => {
            const fullPath = path.resolve(root, filePath);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                console.log('directory:', fullPath)
                fs.readdirSync(fullPath).forEach(processFile.bind(null, fullPath));
            } else {
                console.log(stats.isDirectory(), fullPath);
            }


        };

        files.forEach(processFile.bind(null, tplPath));

    }
});
