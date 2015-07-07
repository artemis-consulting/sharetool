var ShareToolConfig = (function(){
    
    _domain = "@domain@";
    
    _projectPath = "@ppath@";
    
    _env = {
        local: {
            projectPath: '//localhost/share/app/',
            toolbarPath: '/sharetool-improved/sharetool/app/components/toolbar/toolbar.html',
            assetPath:   _domain + _projectPath + '',
            config: {
                root: _projectPath,
                env: 'local',
                log: _domain + _projectPath + 'log/log.php',
                model: ''
            }
        },
        dev: {
            projectPath: '//localhost/share/app/',
            toolbarPath: '/sharetool-improved/sharetool/app/components/toolbar/toolbar.html',
            assetPath:   _domain + _projectPath + '',
            config: {
                root: _projectPath,
                env: 'dev',
                log: _domain + _projectPath + 'log/log.php',
                model: ''
            }
        },
        test: {
            projectPath: 'test',
            toolbarPath: 'test',
            assetPath:   _domain + _projectPath + '',
            config: {
                root: _projectPath,
                env: 'test',
                log: _domain + _projectPath + 'log/log.php',
                model: ''
            }
        },
        stage: {
            projectPath: '//localhost/share/app/',
            toolbarPath: '/sharetool-improved/sharetool/app/components/toolbar/toolbar.html',
            assetPath:   _domain + _projectPath + '',
            config: {
                root: _projectPath,
                env: 'stage',
                log: _domain + _projectPath + 'log/log.php',
                model: ''
            }
        },
        prod: {
            projectPath: _domain + _projectPath, //'//localhost/share/app/',
            toolbarPath: _domain + _projectPath + '/components/toolbar/toolbar.html', //'/sharetool-improved/sharetool/app/components/toolbar/toolbar.html'
            assetPath:   _domain + _projectPath + '',
            config: {
                root: _projectPath,
                env: 'prod',
                log: _domain + _projectPath + 'log/log.php',
                model: ''
            }
        }
    }
    
    return {
        '_domain'       : _domain,
        '_projectPath'  : _projectPath,
        '_env'          : _env
    }
})();

var ShareToolGlobalConfig = (function(){
    env = {
        env: function(){
            var ENV = "@env@";
            var currentEnv = 'local'; 
            for(var environement in ShareToolConfig._env) { 
                if(environement.indexOf(ENV) > -1) {
                    currentEnv = ShareToolConfig._env[environement]; 
                }
            }            
            return currentEnv;
        }
    }
    
    ENV = env.env();
    
    return {
        'ENV' : ENV,
        'env' : env.env()
    }
})();    
    