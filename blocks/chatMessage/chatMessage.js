(function () {
    'use strict';
    
    const Block = window.Block;

    class ChatMessage extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            if (this.options.type === 'me') {                
            } else {
            }         
            
            this.node.innerHTML = `
                <div class="chat-message">
                    ${this.options.text}
                </div>
            `
        }

    }

    window.ChatMessage = ChatMessage;
})();
