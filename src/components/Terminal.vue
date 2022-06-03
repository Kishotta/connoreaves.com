<script>
    import Commands from '../assets/js/Commands';

    export default {
        data() {
            return {
                terminal: [],
                history: [],
                historyPointer: -1,
                prompt: '<span class="text-green-400">visitor@connoreaves.com</span> <span class="accent">~</span> > ',
                input: '',
            }
        },
        mounted() {
             window.addEventListener('keydown', (e) => {
                this.focusInput();
                if(e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
                    e.preventDefault();
                }
                if(e.key == 'ArrowUp') {
                    this.input = this.previousCommand();
                }
                if(e.key == 'ArrowDown') {
                    this.input = this.nextCommand();
                }
                if (e.key == 'Enter') {
                    this.submitCommand(this.input);
                }
            });

            window.addEventListener('outputLineAdded', e => {
                this.focusInput();
            })

            Commands.find(command => command.signature == 'banner')?.execute(this.terminal);
        },
        watch: {
            input(newInput, oldInput) {
                this.input = newInput.replace(/\n/g, '');
            },
        },
        methods: {
            focusInput() {
                this.$nextTick(() => {
                    this.$refs.input.focus();
                    this.$refs.input.scrollIntoView({ block: "start" });
                });
            },
            stripUnsafeCharacters(unsafe)
            {
                return unsafe
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            },
            submitCommand(input) {
                this.input = '';
                input = this.stripUnsafeCharacters(input);
                this.pushCommandToHistory(input);

                this.terminal.push(this.prompt + input);

                var command = Commands.find(command => command.signature == input || command.aliases.includes(input));

                if (command)
                    command.execute(this.terminal);
                else
                    Commands.find(command => command.signature == 'notfound').execute(this.terminal);
            },
            pushCommandToHistory(command) {
                if (this.history[0] != command) {
                    this.history.unshift(command);
                }
                this.historyPointer = -1;
            },
            previousCommand() {
                if (this.history.length == 0)
                    return "";
                if (this.historyPointer < this.history.length - 1)
                    this.historyPointer++;
                return this.history[this.historyPointer];
            },
            nextCommand() {
                if (this.historyPointer >= 0)
                    this.historyPointer--;
                if (this.historyPointer < 0)
                    return "";
                return this.history[this.historyPointer];
            },
        }
    }
</script>

<template>
    <div id="shell" ref="shell">
        <div id="terminal">
            <p v-for="line in terminal"  v-html="line" class="terminal-line"></p>
        </div>
        <div id="prompt">
            <input type="text" ref="input" v-model="input" autofocus v-on:blur="focusInput">
            <div id="prompt-line">
                <span id="prompt" v-html="prompt"></span>
                <span id="input-display" v-text="input"></span>
                <b id="caret">█</b>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
    #shell {
        @apply absolute inset-0 overflow-y-scroll overflow-x-scroll pb-8 flex flex-col text-lg text-left text-zinc-300 font-mono font-medium bg-zinc-900;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    #terminal {
        @apply px-4;
    }

    #shell::-webkit-scrollbar {
        display: none;
    }

    .terminal-line {
        @apply whitespace-pre;
    }

    #prompt-line {
        @apply px-4;
    }

    .command {
        @apply text-red-400;
    }

    .accent {
        @apply font-semibold text-orange-400;
    }

    .link {
        @apply -mx-2 px-2 text-red-400 underline hover:no-underline hover:bg-red-400 hover:text-zinc-900 hover:font-semibold;
    }

    .branch {
        @apply font-black;
    }

    .timestamp {
        @apply text-zinc-500;
    }

    .head {
        @apply text-yellow-500;
    }

    .tps-alert {
        @apply text-red-500;
    }

    .cerasis {
        @apply text-green-500;
    }

    .career {
        @apply text-blue-500;
    }

    svg {
        @apply inline-block ml-1 h-4 w-4;
    }


    input {
        @apply absolute h-0 focus:outline-none;
    }

    #caret {
        @apply text-green-400 inline-block animate-blink;
    }
</style>
