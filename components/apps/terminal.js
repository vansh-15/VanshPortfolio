import React, { Component } from 'react'
import $ from 'jquery';
import ReactGA from 'react-ga4';

export class Terminal extends Component {

    constructor() {
        super();

        this.cursor = "";
        this.terminal_rows = 1;
        this.current_directory = "~";
        this.curr_dir_name = "home";
        this.prev_commands = [];
        this.commands_index = -1;

        this.child_directories = {
            home: [
                "about",
                "education",
                "experience",
                "skills",
                "projects",
                "certifications",
                "contact"
            ],

            projects: [
                "CryptoCrack",
                "HealthConnect",
                "SolarSevaHome"
            ],

            skills: [
                "Cybersecurity",
                "Microsoft Power Platform",
                "Dynamics 365",
                "Java",
                "Python",
                "JavaScript",
                "C#",
                ".NET",
                "SQL",
                "Git",
                "Linux"
            ],

            experience: [
                "Deloitte",
                "Cosine Theta Ltd."
            ],

            certifications: [
                "PL-900 - Power Platform Fundamentals"
            ],

            education: [
                "MCA - Manipal University",
                "BCA - Allenhouse School"
            ],

            contact: [
                "email"
            ]
        };

        this.state = {
            terminal: [],
        }
    }

    componentDidMount() {
        this.reStartTerminal();
    }

    componentDidUpdate() {
        clearInterval(this.cursor);
        this.startCursor(this.terminal_rows - 2);
    }

    componentWillUnmount() {
        clearInterval(this.cursor);
    }

    reStartTerminal = () => {
        clearInterval(this.cursor);
        $('#terminal-body').empty();

        this.terminal_rows = 1;
        this.current_directory = "~";
        this.curr_dir_name = "home";

        this.setState({ terminal: [] }, () => {
            this.appendTerminalRow();
        });
    }

    appendTerminalRow = () => {
        let terminal = this.state.terminal;

        terminal.push(
            this.terminalRow(this.terminal_rows)
        );

        this.setState({ terminal });

        this.terminal_rows += 2;
    }

    terminalRow = (id) => {
        return (
            <React.Fragment key={id}>

                <div className="flex w-full h-5">

                    <div className="flex">

                        <div className="text-ubt-green">
                            vansh@portfolio
                        </div>

                        <div className="text-white mx-px font-medium">
                            :
                        </div>

                        <div className="text-ubt-blue">
                            {this.current_directory}
                        </div>

                        <div className="text-white mx-px font-medium mr-1">
                            $
                        </div>

                    </div>

                    <div
                        id="cmd"
                        onClick={this.focusCursor}
                        className="bg-transperent relative flex-1 overflow-hidden"
                    >

                        <span
                            id={`show-${id}`}
                            className="float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"
                        ></span>

                        <div
                            id={`cursor-${id}`}
                            className="float-left mt-1 w-1.5 h-3.5 bg-white"
                        ></div>

                        <input
                            id={`terminal-input-${id}`}
                            data-row-id={id}
                            onKeyDown={this.checkKey}
                            onBlur={this.unFocusCursor}
                            className="absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent"
                            spellCheck={false}
                            autoFocus={true}
                            autoComplete="off"
                            type="text"
                        />

                    </div>

                </div>

                <div
                    id={`row-result-${id}`}
                    className="my-2 font-normal"
                ></div>

            </React.Fragment>
        );
    }

    focusCursor = (e) => {
        clearInterval(this.cursor);
        this.startCursor($(e.target).data("row-id"));
    }

    unFocusCursor = (e) => {
        this.stopCursor($(e.target).data("row-id"));
    }

    startCursor = (id) => {

        clearInterval(this.cursor);

        $(`input#terminal-input-${id}`).trigger("focus");

        $(`input#terminal-input-${id}`).on(
            "input",
            function () {
                $(`#cmd span#show-${id}`).text($(this).val());
            }
        );

        this.cursor = window.setInterval(function () {

            if ($(`#cursor-${id}`).css('visibility') === 'visible') {
                $(`#cursor-${id}`).css({
                    visibility: 'hidden'
                });
            } else {
                $(`#cursor-${id}`).css({
                    visibility: 'visible'
                });
            }

        }, 500);
    }

    stopCursor = (id) => {
        clearInterval(this.cursor);
        $(`#cursor-${id}`).css({
            visibility: 'visible'
        });
    }

    removeCursor = (id) => {
        this.stopCursor(id);

        $(`#cursor-${id}`).css({
            display: 'none'
        });
    }

    clearInput = (id) => {
        $(`input#terminal-input-${id}`).trigger("blur");
    }

    checkKey = (e) => {

        if (e.key === "Enter") {

            let terminal_row_id =
                $(e.target).data("row-id");

            let command =
                $(`input#terminal-input-${terminal_row_id}`)
                    .val()
                    .trim();

            if (command.length !== 0) {

                this.removeCursor(terminal_row_id);

                this.handleCommands(
                    command,
                    terminal_row_id
                );
            }

            else {
                return;
            }

            this.prev_commands.push(command);

            this.commands_index =
                this.prev_commands.length - 1;

            this.clearInput(terminal_row_id);
        }

        else if (e.key === "ArrowUp") {

            let prev_command;

            if (this.commands_index <= -1)
                prev_command = "";
            else
                prev_command =
                    this.prev_commands[this.commands_index];

            let terminal_row_id =
                $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`)
                .val(prev_command);

            $(`#show-${terminal_row_id}`)
                .text(prev_command);

            this.commands_index--;
        }

        else if (e.key === "ArrowDown") {

            let prev_command;

            if (
                this.commands_index >=
                this.prev_commands.length
            )
                return;

            if (this.commands_index <= -1)
                this.commands_index = 0;

            if (
                this.commands_index ===
                this.prev_commands.length
            )
                prev_command = "";
            else
                prev_command =
                    this.prev_commands[this.commands_index];

            let terminal_row_id =
                $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`)
                .val(prev_command);

            $(`#show-${terminal_row_id}`)
                .text(prev_command);

            this.commands_index++;
        }
    }

    childDirectories = (parent) => {

        let files = [];

        files.push(
            `<div class="flex justify-start flex-wrap">`
        );

        this.child_directories[parent].forEach(file => {

            files.push(
                `<span class="font-bold mr-2 text-ubt-blue">'${file}'</span>`
            );

        });

        files.push(`</div>`);

        return files;
    }

    closeTerminal = () => {
        $("#close-terminal").trigger('click');
    }

    handleCommands = (command, rowId) => {

        let words =
            command.split(' ').filter(Boolean);

        let main = words[0];

        words.shift();

        let result = "";

        let rest =
            words.join(" ").trim();

        switch (main) {

            case "help":

                result = `
                    Available Commands:<br><br>
                    whoami &nbsp;&nbsp; - Display information about Vansh<br>
                    about &nbsp;&nbsp;&nbsp; - About me<br>
                    education &nbsp; - Education<br>
                    experience &nbsp;- Professional experience<br>
                    skills &nbsp;&nbsp;&nbsp; - Technical skills<br>
                    projects &nbsp;&nbsp; - Projects<br>
                    certifications - Certifications<br>
                    github &nbsp;&nbsp;&nbsp; - Open GitHub<br>
                    contact &nbsp;&nbsp; - Contact information<br>
                    ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - List directories<br>
                    pwd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Show current directory<br>
                    clear &nbsp;&nbsp;&nbsp; - Clear terminal<br>
                    exit &nbsp;&nbsp;&nbsp;&nbsp; - Close terminal
                `;

                break;

            case "whoami":

                result = `
                    <strong>Vansh Mishra</strong><br>
                    Cybersecurity Enthusiast | Management Trainee @Deloitte
                `;

                break;

            case "about":

                result = `
                    I'm Vansh Mishra, a Management Trainee at Deloitte
                    with an interest in enterprise technology and cybersecurity.
                    <br><br>
                    My long-term goal is to build a strong career in
                    cybersecurity and security engineering.
                `;

                break;

            case "education":

                result = this.childDirectories("education")
                    .join("");

                break;

            case "experience":

                result = this.childDirectories("experience")
                    .join("");

                break;

            case "skills":

                result = this.childDirectories("skills")
                    .join("");

                break;

            case "projects":

                result = this.childDirectories("projects")
                    .join("");

                break;

            case "certifications":

                result =
                    this.childDirectories("certifications")
                        .join("");

                break;

            case "contact":

                result = `
                    Email:
                    <a href="mailto:vanshmi2246@gmail.com"
                       class="text-ubt-blue">
                       vanshmi2246@gmail.com
                    </a>
                `;

                break;

            case "github":

                window.open(
                    "https://github.com/vansh-15",
                    "_blank"
                );

                result =
                    "Opening GitHub...";

                break;

            case "ls":

                let target =
                    words[0] || this.curr_dir_name;

                if (words.length > 1) {

                    result =
                        "too many arguments, arguments must be <1.";

                    break;
                }

                if (target in this.child_directories) {

                    result =
                        this.childDirectories(target)
                            .join("");

                } else {

                    result =
                        `ls: cannot access '${target}': No such file or directory`;

                }

                break;

            case "pwd":

                result =
                    "/home/vansh";

                break;

            case "cd":

                if (
                    words.length === 0 ||
                    rest === ""
                ) {

                    this.current_directory = "~";
                    this.curr_dir_name = "home";

                    break;
                }

                if (words.length > 1) {

                    result =
                        "too many arguments, arguments must be <1.";

                    break;
                }

                if (
                    rest === "." ||
                    rest === ".." ||
                    rest === "../"
                ) {

                    this.current_directory = "~";
                    this.curr_dir_name = "home";

                    break;
                }

                if (
                    this.child_directories[rest]
                ) {

                    this.current_directory =
                        "~/" + rest;

                    this.curr_dir_name =
                        rest;

                } else {

                    result =
                        `bash: cd: ${rest}: No such file or directory`;

                }

                break;

            case "code":

                if (
                    words[0] === "." ||
                    words.length === 0
                ) {

                    this.props.openApp("vscode");

                } else {

                    result =
                        "Usage: code";

                }

                break;

            case "spotify":

                if (
                    words[0] === "." ||
                    words.length === 0
                ) {

                    this.props.openApp("spotify");

                } else {

                    result =
                        "Usage: spotify";

                }

                break;

            case "chrome":

                if (
                    words[0] === "." ||
                    words.length === 0
                ) {

                    this.props.openApp("chrome");

                } else {

                    result =
                        "Usage: chrome";

                }

                break;

            case "trash":

                if (
                    words[0] === "." ||
                    words.length === 0
                ) {

                    this.props.openApp("trash");

                } else {

                    result =
                        "Usage: trash";

                }

                break;

            case "settings":

                if (
                    words[0] === "." ||
                    words.length === 0
                ) {

                    this.props.openApp("settings");

                } else {

                    result =
                        "Usage: settings";

                }

                break;

            case "sendmsg":

                if (
                    words[0] === "." ||
                    words.length === 0
                ) {

                    this.props.openApp("gedit");

                } else {

                    result =
                        "Usage: sendmsg";

                }

                break;

            case "clear":

                this.reStartTerminal();

                return;

            case "exit":

                this.closeTerminal();

                return;

            case "sudo":

                ReactGA.event({
                    category: "Sudo Access",
                    action: "lol",
                });

                result =
                    "<img class='w-2/5' src='./images/memes/used-sudo-command.webp' />";

                break;

            default:

                result =
                    `Command '${main}' not found. Type <strong>help</strong> to see available commands.`;

        }

        document.getElementById(
            `row-result-${rowId}`
        ).innerHTML = result;

        this.appendTerminalRow();
    }

    render() {

        return (
            <div
                className="h-full w-full bg-ub-drk-abrgn text-white text-sm font-bold"
                id="terminal-body"
            >
                {this.state.terminal}
            </div>
        )
    }
}

export default Terminal;

export const displayTerminal = (addFolder, openApp) => {
    return (
        <Terminal
            addFolder={addFolder}
            openApp={openApp}
        />
    );
}