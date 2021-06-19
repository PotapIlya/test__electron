document.addEventListener('DOMContentLoaded', () =>
{
    const remote = require('electron').remote;
    const wnd = remote.getCurrentWindow();


    /* Menu */
    const templates = [
        {
            label: "Фаил",
            submenu:  [
                {
                    label: "Открыть",
                    click: async () =>{
                        remote.dialog.showMessageBox({
                            title: "Hello World",
                            type: "info",
                            message: "Выбран пункт 'Открыть' "
                        })
                    }
                },
                {
                    label: "Сохранить",
                    click: async () =>{
                        remote.dialog.showMessageBox({
                            title: "Hello World",
                            type: "info",
                            message: "Выбран пункт 'Сохранить' "
                        })
                    }
                },
                { type: "separator" },
                { role: "close" },
            ]
        }
    ];
    const menu = remote.Menu.buildFromTemplate(templates);
    remote.Menu.setApplicationMenu(menu);


    const btnMin = document.querySelector('.btn-min');
    const btnMax = document.querySelector('.btn-max');
    const btnClose = document.querySelector('.btn-close');

    btnMin.addEventListener('click', () => {
        wnd.minimize();
    });
    btnMax.addEventListener('click', () => {
        if ( !wnd.isMaximized() )
        {
            wnd.maximize()
        } else{
            wnd.unmaximize()
        }
    });
    btnClose.addEventListener('click', () => {
        wnd.close();
    })


});