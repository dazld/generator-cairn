const generators = require('yeoman-generator');
const path = require('path');
const fs = require('fs');
const updateNotifier = require('update-notifier');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        // this.config.save();
    },
    initializing: function() {
        const pkg = require('../package.json');
        const notifier = updateNotifier({pkg});
        notifier.notify();
        this.log('I am a full stack react, redux & express generator.');
    },
    prompting: function() {
        var done = this.async();
        this.prompt([{
            type    : 'input',
            name    : 'appname',
            message : 'Your project name',
            default : this.appname // Default to current folder name
        }], function (answers) {
            this.appname = answers.appname;
            done();
        }.bind(this));
    },
    writing: function() {

        const files = fs.readdirSync(this.templatePath());
        const tplPath = this.templatePath();
        const data = {
            title: this.appname
        };

        const processFile =  (root, filePath) => {
            const fullPath = path.resolve(root, filePath);
            const stats = fs.statSync(fullPath);
            const destFolder = root.replace(this.templatePath(),'');

            if (stats.isDirectory()) {
                fs.readdirSync(fullPath).forEach(processFile.bind(null, fullPath));
            } else {
                if (filePath.indexOf('_template') !== -1) {
                    filePath = filePath.replace('_template','');
                }
                const destPath = path.join('.', destFolder, filePath);
                this.fs.copyTpl(fullPath, destPath, data);
            }
        };

        files.forEach(processFile.bind(null, tplPath));

    },
    install: function(){
        this.log('Initializing your git repo...');
        this.spawnCommand('git', ['init']);
        this.log('Installing dependencies... this may take a while...');
        this.spawnCommand('npm', ['install']);
    }
});
