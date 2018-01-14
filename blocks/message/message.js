

(function () {
    'use strict';

    const Block = window.Block;

    const Input = window.Input;
    const Button = window.Button;

    class Message extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `
                <div class="message">
                    <div class="message__text js-message__text"></div>
                    <div class="footer__submit js-message__submit"></div>
                </div>                
            `;

            let button = new Button(this.node.querySelector('.js-message__submit'), {
                text: 'Отправить'
            });

            let input = new Input(this.node.querySelector('.js-message__text'), {
                value: '',
                placeholder: 'Текст'
            });

            input.render();
            button.render();
        }
    }

    window.Message = Message;
})();
