<script>
    export default {
        data() {
            return {
                terminal: [],
                history: [],
                historyPointer: 0,
                prompt: '<span class="text-green-400">visitor@connoreaves.com</span> <span class="accent">~</span> > ',
                input: '',
                commands: {

                    help: [
                        "<br>",
                        "    <span class='command'>help</span>        You just did this one!",
                        "<br>",
                        "    <span class='command'>about</span>",
                        "    <span class='command'>whois</span>       Who is Connor Eaves? 🤷",
                        "<br>",
                        "    <span class='command'>projects</span>    View some of my projects 🖥️",
                        "    <span class='command'>work</span>        View work history 📃",
                        "    <span class='command'>links</span>       My online presence 🔗",
                        "<br>",
                        "    <span class='command'>banner</span>      Display the header",
                        "    <span class='command'>clear</span>",
                        "    <span class='command'>cls</span>         Clear the terminal",
                        "<br>"
                    ],
                    about: [
                        "<br>",
                        "    Hey! I'm Connor 👋",
                        "    I'm a full-stack software engineer with a passion for building web applications.",
                        "<br>",
                        "    << More to come >>",
                        "<br>",
                    ],
                    projects: [
                        "<br>",
                        "    Here's a very carefully curated list of some of my personal projects:",
                        "<br>",
                        '    <a href="" class="link">connoreaves.com<svg xmlns="http://www.w3.org/2000/svg" class="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>    This website',
                        '    <a href="" class="link">Sokoban<svg xmlns="http://www.w3.org/2000/svg" class="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>            Classic arcade game focusing on vertical slices and Test Driven Development',
                        "<br>",
                        "    << More to come >>",
                        "<br>",
                    ],
                    work: [
                        "<br>",
                        "    <span class='text-zinc-500'>(now)</span>                 * 78cfb6   (<span class='text-yellow-500'>HEAD</span>, <span class='text-red-500'>career/tps-alert</span>) Replace legacy web application using",
                        "                          <span class='text-red-500'>|</span>          Domain Driven Design and Test Driven Development",
                        "                          <span class='text-red-500'>|</span>",
                        "    <span class='text-zinc-500'>(February, 2022)</span>      * a91bb9   Start learning VueJS",
                        "                          <span class='text-red-500'>|</span>",
                        "    <span class='text-zinc-500'>(December, 2020)</span>      * 52cf43   Start learning Laravel PHP",
                        "                          <span class='text-red-500'>|</span>",
                        "    <span class='text-zinc-500'>(November, 2020)</span>      * 0f3a4b   Start working at TPS Alert",
                        "                         <span class='text-red-500'>/</span>",
                        "    <span class='text-zinc-500'>(March, 2020)</span>       *   0f3a4b   (<span class='text-blue-500'>career</span>)",
                        "                        <span class='text-blue-500'>|</span><span class='text-green-500'>\\</span>",
                        "    (February, 2020)    <span class='text-blue-500'>|</span> *   0f3a4b   (<span class='text-green-500'>career/cerassis</span>) Aquired by GlobalTranz",
                        "                        <span class='text-blue-500'>|</span> <span class='text-green-500'>|</span>",
                        "    (February, 2020)    <span class='text-blue-500'>|</span> *   0f3a4b   Message",
                        "                        <span class='text-blue-500'>|</span> <span class='text-green-500'>|</span>",
                        "    (February, 2020)    <span class='text-blue-500'>|</span> *   0f3a4b   Message",
                        "                        <span class='text-blue-500'>|</span> <span class='text-green-500'>|</span>",
                        "<br>",
                        "    << Work in Progress >>",
                        "<br>",
                    ],
                    links: [
                        "<br>",
                        '    <a href="https://www.linkedin.com/in/connor-eaves/" target="_blank" class="link">linkedIn<svg xmlns="http://www.w3.org/2000/svg" class="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>    Add me to your network',
                        '    <a href="https://github.com/Kishotta" target="_blank" class="link">github<svg xmlns="http://www.w3.org/2000/svg" class="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>      All the good stuff was me, all the bad was... somebody else 😬',
                        "<br>",
                    ],
                    linkedin: [
                        "<br>",
                        "    Opening LinkedIn...",
                        "<br>",
                    ],
                    github: [
                        "<br>",
                        "    Opening GitHub...",
                        "<br>",
                    ],
                    banner: [
                        // " __    ___   _      _      ___   ___       ____   __    _      ____  __  ",
                        // "/ /`  / / \\ | |\\ | | |\\ | / / \\ | |_)     | |_   / /\\  \\ \\  / | |_  ( (` ",
                        // "\\_\\_, \\_\\_/ |_| \\| |_| \\| \\_\\_/ |_| \\     |_|__ /_/--\\  \\_\\/  |_|__ _)_) ",
                        "<span class='accent'> _____                                _____</span>",
                        "<span class='accent'>/  __ \\                              |  ___|</span>",
                        "<span class='accent'>| /  \\/ ___  _ __  _ __   ___  _ __  | |__  __ ___   _____  ___</span>",
                        "<span class='accent'>| |    / _ \\| '_ \\| '_ \\ / _ \\| '__| |  __|/ _` \\ \\ / / _ \\/ __|</span>",
                        "<span class='accent'>| \\__/\\ (_) | | | | | | | (_) | |    | |__| (_| |\\ V /  __/\\__ \\</span>",
                        "<span class='accent'> \\____/\\___/|_| |_|_| |_|\\___/|_|    \\____/\\__,_| \\_/ \\___||___/</span>",
                        "Type '<span class='command'>help</span>' for a list of available commands"
                    ],
                    notFound: [
                        "<br>",
                        "    Command not found. For a list of comands, type '<span class='command'>help</span>'.",
                        "<br>",
                    ]
                }
            }
        },
        created() {
            this.history = [''];
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
            this.loopLines(this.commands.banner, 80);
        },
        watch: {
            input(newInput, oldInput) {
                this.input = newInput.replace(/\n/g, '');
            }
        },
        methods: {
            focusInput() {
                this.$nextTick(() => {
                     this.$refs.input.focus();
                     this.$refs.input.scrollIntoView({block: "start"});
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
            submitCommand(command) {
                this.input = '';
                command = this.stripUnsafeCharacters(command);
                this.pushCommandToHistory(command);
                this.terminal.push(this.prompt + command);
                switch(command.toLowerCase()) {

                    case 'help':
                        this.loopLines(this.commands.help, 80);
                        break;

                    case 'about':
                    case 'whois':
                        this.loopLines(this.commands.about, 80);
                        break;

                    case 'projects':
                        this.loopLines(this.commands.projects, 80);
                        break;
                    case 'work':
                        this.loopLines(this.commands.work, 50);
                        break;
                    case 'links':
                        this.loopLines(this.commands.links, 80);
                        break;
                    case "linkedin":
                        this.loopLines(this.commands.linkedin, 0);
                        this.newTab('https://www.linkedin.com/in/connor-eaves/');
                        break;
                    case "github":
                        this.loopLines(this.commands.github, 0);
                        this.newTab('https://github.com/Kishotta');
                        break;

                    case 'banner':
                        this.loopLines(this.commands.banner, 80);
                        break;
                    case 'clear':
                    case 'cls':
                        this.terminal.splice(0, this.terminal.length);
                        break;
                    default:
                        this.loopLines(this.commands.notFound, 80);
                        break;
                }
            },
            pushCommandToHistory(command) {
                if (this.history[this.history.length - 1] != command) {
                    this.historyPointer = 0;
                    this.history.unshift(command);
                }
            },
            previousCommand() {
                return this.history[this.historyPointer++];
            },
            nextCommand() {
                return this.history[this.historyPointer--];
            },
            addLine(text, time) {
                setTimeout(() => {
                    this.terminal.push(text);
                    this.$nextTick(() => {
                        this.$refs.input.scrollIntoView({block: "start"});
                    });
                }, time);
            },
            loopLines(name, time) {
                name.forEach((item, index) => {
                    this.addLine(item, index * time);
                });
            },
            newTab(link) {
                setTimeout(() => {
                    window.open(link, "_blank");
                }, 1000);
            }
        }
    }
</script>

<template>
    <div id="shell" ref="shell">
        <div id="terminal">
            <p v-for="line in terminal"  v-html="line" class="whitespace-pre"></p>
        </div>
        <div id="prompt">
            <input type="text" ref="input" v-model="input">
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
        @apply absolute inset-0 overflow-y-scroll pb-8 flex flex-col text-lg text-left text-zinc-300 font-mono font-medium bg-zinc-900;
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
        @apply whitespace-pre-wrap;
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
