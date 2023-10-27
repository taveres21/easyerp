const { Menu } = require('electron');
action_menu = require('../actions/action_menu.js');


let menuTemplate = [
    {
        label: "Cadastro",
        submenu: [
            { 
                label: "Cliente",
                click: () => {
                    action_menu.createWindowMenu;
                }
            },
            { 
                label: "Funcionário",
                click: async () => {
                    action_menu.createWindowMenu('funcionario');
                }
            },
            { label: "Produto"}
        ]
    },
    {
      label : "Movimento",
            submenu : [
            { label : "Entrada"},
            { label : "Saída"},
            { label : "Contas a Pagar"},
            { label : "Contas a Receber"}
        ]
    }
  ];
  
let menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

