

(function () {
    'use strict';

    const Block = window.Block;

    const Input = window.Input;
    const Button = window.Button;

    class Auth extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `
                <div class="auth">
                    <div class="auth__name js-auth__name"></div>
                    <div class="auth__submit js-auth__submit"></div>
                </div>
            `;

            let button = new Button(this.node.querySelector('.js-auth__submit'), {
                text: 'Войти'
            });

            let input = new Input(this.node.querySelector('.js-auth__name'), {
                value: '',
                placeholder: 'Ваше имя'
            });

            input.render();
            button.render();
        }
    }

    window.Auth = Auth;
})();
