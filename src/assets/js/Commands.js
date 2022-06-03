import { Command } from "./Command"

export default [
    new Command(
        "help",
        [ "man" ],
        "help",
        "You just did this one!",
        [
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
        30
    ),
    new Command(
        "about",
        [ "whois" ],
        "about",
        "Who is Connor Eaves? 🤷",
        [
            "<br>",
            "    Hey! I'm Connor 👋",
            "    I'm a full-stack software engineer with a passion for building web applications.",
            "<br>",
            "    I specialize in back-end API development using C# .Net Core and Laravel PHP.",
            "<br>",
            "    << More to come >>",
            "<br>",
            "    When I'm not coding I like to:",
            "<br>",
            "        Try to tackle my enormous Steam backlog 🎮",
            "        Play some music 🎸",
            "        Host game and movie nights 🎲",
            "        Watch the Lord of the Rings (again) 🧙",
            "<br>",
            "    << More to come >>",
            "<br>",
        ],
        30
    ),
    new Command(
        "projects",
        [],
        "about",
        "View some of my projects 🖥️",
        [
            "<br>",
            "    Here's a very carefully curated list of some of my personal projects:",
            "<br>",
            '    <a href="" class="link">connoreaves.com<svg xmlns="http://www.w3.org/2000/svg" class="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>    This website',
            '    <a href="" class="link">Sokoban<svg xmlns="http://www.w3.org/2000/svg" class="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>            Classic arcade game focusing on vertical slices and Test Driven Development',
            "<br>",
            "    << More to come >>",
            "<br>",
        ],
        30
    ),
    new Command(
        "work",
        [ "career" ],
        "work",
        "View my work history 📃",
        [
            "<br>",
            "    <span class='branch timestamp'>(now)</span>                 ○    78cfb6    (<span class='branch head'>HEAD</span>, <span class='branch tps-alert'>career/tps-alert</span>) Replace legacy web application",
            "                          <span class='branch tps-alert'>|</span>              using Domain Driven Design and Test Driven Development",
            "                          <span class='branch tps-alert'>|</span>",
            "    <span class='branch timestamp'>(February, 2022)</span>      ○    a91bb9    Start learning VueJS",
            "                          <span class='branch tps-alert'>|</span>",
            "    <span class='branch timestamp'>(December, 2020)</span>      ○    52cf43    Start learning Laravel PHP",
            "                          <span class='branch tps-alert'>|</span>",
            "    <span class='branch timestamp'>(November, 2020)</span>      ○    0f3a4b    Start working at TPS Alert",
            "                         <span class='branch tps-alert'>/</span>",
            "    <span class='branch timestamp'>(March, 2020)</span>       ○      0f3a4b    (<span class='branch career'>career</span>) Merge <span class='branch cerasis'>career/cerassis</span> into <span class='branch career'>career</span>",
            "                        <span class='branch career'>|</span><span class='branch cerasis'>\\</span>",
            "    <span class='branch timestamp'>(February, 2020)</span>    <span class='branch career'>|</span> ○    0f3a4b    (<span class='branch cerasis'>career/cerassis</span>) Aquired by GlobalTranz",
            "                        <span class='branch career'>|</span> <span class='branch cerasis'>|</span>",
            "    (February, 2020)    <span class='branch career'>|</span> ○    0f3a4b    Message",
            "                        <span class='branch career'>|</span> <span class='branch cerasis'>|</span>",
            "    <span class='branch timestamp'>(May, 2019)</span>         <span class='branch career'>|</span> ○    0f3a4b    Start working at Cerasis",
            "                        <span class='branch career'>|</span><span class='branch cerasis'>/</span>",
            "<br>",
            "    << Work in Progress >>",
            "<br>",
        ],
        15
    ),
    new Command(
        "links",
        [],
        "work",
        "View my online presence 🔗",
        [
            "<br>",
            '    <a href="https://www.linkedin.com/in/connor-eaves/" target="_blank" class="link">linkedIn<svg xmlns="http://www.w3.org/2000/svg" class="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>    Add me to your network',
            '    <a href="https://github.com/Kishotta" target="_blank" class="link">github<svg xmlns="http://www.w3.org/2000/svg" class="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>      All the good stuff was me, all the bad was... somebody else 😬',
            "<br>",
        ],
        30
    ),
    new Command(
        "linkedin",
        [],
        "work",
        "View my LinkedIn profile",
        [
            "<br>",
            "    Opening LinkedIn...",
            "<br>",
        ],
        30,
        function(terminal) {
            setTimeout(() => {
                window.open('https://www.linkedin.com/in/connor-eaves/', "_blank");
            }, 1000);
        }
    ),
    new Command(
        "github",
        [],
        "work",
        "View my GitHub profile",
        [
            "<br>",
            "    Opening GitHub...",
            "<br>",
        ],
        30,
        function(terminal) {
            setTimeout(() => {
                window.open('https://github.com/Kishotta', "_blank");
            }, 1000);
        }
    ),
    new Command(
        "banner",
        [ "header" ],
        "meta",
        "View the header",
        [
            "<span class='accent'> _____                                _____</span>",
            "<span class='accent'>/  __ \\                              |  ___|</span>",
            "<span class='accent'>| /  \\/ ___  _ __  _ __   ___  _ __  | |__  __ ___   _____  ___</span>",
            "<span class='accent'>| |    / _ \\| '_ \\| '_ \\ / _ \\| '__| |  __|/ _` \\ \\ / / _ \\/ __|</span>",
            "<span class='accent'>| \\__/\\ (_) | | | | | | | (_) | |    | |__| (_| |\\ V /  __/\\__ \\</span>",
            "<span class='accent'> \\____/\\___/|_| |_|_| |_|\\___/|_|    \\____/\\__,_| \\_/ \\___||___/</span>",
            "Type '<span class='command'>help</span>' for a list of available commands"
        ],
        30
    ),
    new Command(
        "clear",
        [ "cls" ],
        "meta",
        "Clear the terminal",
        [],
        30,
        function(terminal) {
            terminal.splice(0, terminal.length);
        }
    ),
    new Command(
        "notfound",
        [],
        "meta",
        "View command not found message",
        [
            "<br>",
            "    Command not found. For a list of comands, type '<span class='command'>help</span>'.",
            "<br>"
        ],
        30
    )
]
