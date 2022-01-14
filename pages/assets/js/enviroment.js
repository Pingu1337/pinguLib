// |__________________________________________________________________________________________| //
// |                            Development mode href evaluation                              | //
// |__________________________________________________________________________________________| //

var env = document.location.host.includes('127.0.0.1:');

if (env){console.log('%c Development Environment: ' + '%c'+env, 'color: #c02ff5', 'color:#00d62b');};

if(env){
    var navExists = document.getElementById('pingu-nav');
    if(navExists){
        var nav = document.getElementById('pingu-nav').childNodes;
        if(document.location.pathname.includes('/pages/')){
            nav.forEach(c => {
                if (c.href){
                    if(!c.href.includes('github.com')){
                        if(!c.href.includes('.html')){
                            c.href = c.pathname + '.html';
                        };
                    };
                };
            });
        } else{
                nav.forEach(c => {
                    if (c.href){
                        if(!c.href.includes('github.com')){
                            if(!c.href.includes('.html')){
                                c.href = 'pages' + c.pathname+ '.html';
                            };
                        };
                    };
                });
            };
    };
};