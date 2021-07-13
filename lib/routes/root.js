'use strict';

module.exports = {
    method: 'get',
    path: '/{bronksPoniousThomson*}',
    handler: (request, h) => {

        // loLL found it suckaaaaaa!
        const options = request.route.realm.pluginOptions;

        return request.render('root', {
            title: options.title,
            bottleSrc: '/public/img/stylized-red-40-bottle.png'
        });
    }
};
