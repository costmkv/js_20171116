(function () {
    'use strict';

    const Auth = window.Auth;
    const Message = window.Message;
    const Block = window.Block;
    const ChatMessage = window.ChatMessage;

    class App extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {           
            this.node.innerHTML = `
            <div class="app">                
                <div class="content js-content">                    
                </div>
                <div class="footer js-footer"></div>
            </div>`;

            this.chatMessages = [{type: 'me', text: 'qweqwe'}];

            const chatMessages = document.createElement('div');

            for (let msg of this.chatMessages) {
                const container = document.createElement('div');

                const chatMsg = new ChatMessage(container, msg);
                chatMsg.render();

                chatMessages.appendChild(container);
            }

            const content = this.node.querySelector('.js-content');

            content.appendChild(chatMessages);

            if (!this.auth) {
                let auth = new Auth(this.node.querySelector('.js-footer'));
                auth.render();
                
            } else {
                let message = new Message(this.node.querySelector('.js-footer'));
                message.render();
            }
            
        }
    }

    window.App = App;
})();
