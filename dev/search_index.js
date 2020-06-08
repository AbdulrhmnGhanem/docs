var documenterSearchIndex = {"docs":
[{"location":"userguide/editingcode/#Editing-Code-1","page":"Editing Code","title":"Editing Code","text":"","category":"section"},{"location":"devdocs/devdocs/#Developer-Documentation-1","page":"Overview","title":"Developer Documentation","text":"","category":"section"},{"location":"userguide/compilesysimage/#Compiling-Sysimages-1","page":"Compiling Sysimages","title":"Compiling Sysimages","text":"","category":"section"},{"location":"userguide/compilesysimage/#","page":"Compiling Sysimages","title":"Compiling Sysimages","text":"The Julia VS Code extension makes it easy to compile a custom sysimage for your Julia environments. The extension will also automatically use sysimages for the current environment when it starts a new Julia REPL in VS Code.","category":"page"},{"location":"userguide/compilesysimage/#","page":"Compiling Sysimages","title":"Compiling Sysimages","text":"Custom sysimages can significantly reduce load times for packages.","category":"page"},{"location":"userguide/compilesysimage/#Creating-a-sysimage-for-the-active-environment-1","page":"Compiling Sysimages","title":"Creating a sysimage for the active environment","text":"","category":"section"},{"location":"userguide/compilesysimage/#","page":"Compiling Sysimages","title":"Compiling Sysimages","text":"The Julia extension adds a build task for custom sysimages to the Visual Studio Code task system. To run this build task, select the command Tasks: Run Build Task and then select Julia: Build custom sysimage for current environment.","category":"page"},{"location":"userguide/compilesysimage/#","page":"Compiling Sysimages","title":"Compiling Sysimages","text":"The build task will create a sysimage that includes all packages in the current Julia environment. This sysimage will be saved in the same folder where the Project.toml and Manifest.toml of the current Julia environment are stored. The name of the sysimage file will be JuliaSysimage.dll (Windows) or JuliaSysimage.so.","category":"page"},{"location":"userguide/compilesysimage/#Using-custom-sysimages-1","page":"Compiling Sysimages","title":"Using custom sysimages","text":"","category":"section"},{"location":"userguide/compilesysimage/#","page":"Compiling Sysimages","title":"Compiling Sysimages","text":"Whenever the Julia extension starts a new Julia REPL process, it will first look whether a custom sysimage file exists for the current Julia environment, and whether this custom sysimage file is up-to-date (by comparing the last modified date of the sysimage file with the last modified date of the Manifest.toml file). If an up-to-date sysimage file exists, the Julia extension will automatically start the Julia REPL process with this custom sysimage loaded.","category":"page"},{"location":"userguide/understandingcode/#Understanding-Code-1","page":"Understanding Code","title":"Understanding Code","text":"","category":"section"},{"location":"setup/#Setup-1","page":"Setup","title":"Setup","text":"","category":"section"},{"location":"setup/#","page":"Setup","title":"Setup","text":"Getting the Julia extension for VS Code to work involves two steps: 1) Install VS Code and 2) install the Julia extension. In rare situations you also need to configure the extension to find your Julia installation.","category":"page"},{"location":"setup/#Installing-VS-Code-1","page":"Setup","title":"Installing VS Code","text":"","category":"section"},{"location":"setup/#","page":"Setup","title":"Setup","text":"Just head over to the VS Code homepage and follow the installation instructions for your platform. At the end of this step you should be able to start VS Code.","category":"page"},{"location":"setup/#Install-the-Julia-extension-1","page":"Setup","title":"Install the Julia extension","text":"","category":"section"},{"location":"setup/#","page":"Setup","title":"Setup","text":"First, start VS Code. Inside VS Code, go to the extensions view either by executing the View: Show Extensions command (click View->Command Palette...) or by clicking on the extension icon on the left side of the VS Code window.","category":"page"},{"location":"setup/#","page":"Setup","title":"Setup","text":"In the extensions view, simply search for the term julia in the marketplace search box, then select the Julia extension and click the install button. You might have to restart VS Code after this step.","category":"page"},{"location":"setup/#Configure-the-Julia-extension-1","page":"Setup","title":"Configure the Julia extension","text":"","category":"section"},{"location":"setup/#","page":"Setup","title":"Setup","text":"If you have installed Julia into a standard location on Mac or Windows, or if the Julia binary is on your PATH, the Julia VS Code extension should automatically find your Julia installation and you should not need to configure anything.","category":"page"},{"location":"setup/#","page":"Setup","title":"Setup","text":"If the extension does not find your Julia installation automatically, or if you want to use a different Julia installation than the default one, you can set the julia.executablePath to the full path of Julia executable that the extension should use. In that case the extension will always use that version of Julia. To edit your configuration settings, execute the Preferences: Open User Settings command (you can also access it via the menu File->Preferences->Settings), and then make sure your user settings include the julia.executablePath setting. The format of the string should follow your platform specific conventions, and be aware that the backlash \\ is the escape character in JSON, so you need to use \\\\ as the path separator character on Windows.","category":"page"},{"location":"userguide/remote/#Remote-Development-1","page":"Remote Development","title":"Remote Development","text":"","category":"section"},{"location":"userguide/tasks/#Tasks-1","page":"Tasks","title":"Tasks","text":"","category":"section"},{"location":"userguide/grid/#Data-Grid-1","page":"Data Grid","title":"Data Grid","text":"","category":"section"},{"location":"userguide/formatter/#Formatting-Code-1","page":"Formatting Code","title":"Formatting Code","text":"","category":"section"},{"location":"userguide/linter/#Linter-1","page":"Linter","title":"Linter","text":"","category":"section"},{"location":"gettingstarted/#Getting-Started-1","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"userguide/plotgallery/#Plot-Gallery-1","page":"Plot Gallery","title":"Plot Gallery","text":"","category":"section"},{"location":"userguide/debugging/#Debugging-1","page":"Debugging","title":"Debugging","text":"","category":"section"},{"location":"userguide/codenavigation/#Code-Navigation-1","page":"Code Navigation","title":"Code Navigation","text":"","category":"section"},{"location":"userguide/codenavigation/#Open-Package-Directory-1","page":"Code Navigation","title":"Open Package Directory","text":"","category":"section"},{"location":"userguide/codenavigation/#Goto-Definition-1","page":"Code Navigation","title":"Goto Definition","text":"","category":"section"},{"location":"userguide/codenavigation/#Symbols-1","page":"Code Navigation","title":"Symbols","text":"","category":"section"},{"location":"userguide/runningcode/#Running-Code-1","page":"Running Code","title":"Running Code","text":"","category":"section"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"The Julia extension provides a number of different ways to run your Julia code. This section describes all these options, except how to run code in the debugger, which is covered in a separate part of the documentation.","category":"page"},{"location":"userguide/runningcode/#Running-a-Julia-file-1","page":"Running Code","title":"Running a Julia file","text":"","category":"section"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"The VS Code command Run: Start Without Debugging (Ctrl+F5) by default starts a new Julia instance and runs the currently active Julia file. The command automatically creates a new VS Code terminal for this Julia process.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"Note that the Julia instance that is started by this command is entirely independent from the Julia REPL that the extension also supports.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"You can easily customize the behavior of Run: Start Without Debugging by creating a launch configuration. In many situations it is for example beneficial to not run the currently active file, but instead configure one file in your workspace as the main entry point for your project that is run when you press Ctrl+F5. Other customization options include custom working directories, command line arguments or a specific Julia environment (that is distinct from the active Julia environment in the VS Code window). Launch configurations also allow you to configure more complex execution scenarios where multiple Julia and non-Julia scripts are started simultaneously via compound launch configurations.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"The Julia extension itself supports the following launch configuration attributes:","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"program: a path to a .jl file. This is the Julia file that will be run when this launch configuration is used. If this attribute is not specified, it defaults to the currently active Julia file in the editor.\ncwd: a path to a folder. The Julia process that is started by the launch configuration will use this path as the initial working directory. If this attribute is not specified, it defaults to the root working folder open in VS Code.\njuliaEnv: a path to a Julia project. The Julia process will be started with this Julia project as the active project. If this attribute is not specified, it defaults to the currently active Julia environment in the VS Code window.\nargs: an array of command line arguments. The values specified in this list will be passed as command line arguments to the Julia process that is started and are available via the Base.ARGS variable in the Julia script. If this attribute is not specified, no command line arguments are passed to the Julia instance.","category":"page"},{"location":"userguide/runningcode/#The-Julia-REPL-1","page":"Running Code","title":"The Julia REPL","text":"","category":"section"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"The Julia extension provides a Julia REPL inside VS Code. You can start this REPL with the Julia: Start REPL command.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"The Julia REPL in the extension is identical to the default Julia REPL, but adds a number of additional integrations (plot pane, grid viewer, debugger etc.) that are not part of the standard REPL. Note that only the REPL that you start with the Julia: Start REPL command has these integrations. If you start Julia from a system shell inside VS Code, it won't provide these integration points.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"The REPL that is started with the Julia: Start REPL command will have the root folder of the currently active workspace as its working directory, and will be started with the Julia project that is currently active in the VS Code window.","category":"page"},{"location":"userguide/runningcode/#Running-code-in-the-Julia-REPL-1","page":"Running Code","title":"Running code in the Julia REPL","text":"","category":"section"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"There are four commands that you can use to run code from your editor in the Julia REPL: Julia: Execute Code (Ctrl+Enter), Julia: Execute Code Block (Alt+Enter), Julia: Execute Code Cell (Shift+Enter) and Julia: Execute File.","category":"page"},{"location":"userguide/runningcode/#Julia:-Execute-Code-(CtrlEnter)-1","page":"Running Code","title":"Julia: Execute Code (Ctrl+Enter)","text":"","category":"section"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"This command will either send the text that is currently selected in the active editor to the Julia REPL, or it will send the entire line where the cursor is currently positioned when no text is selected. In the latter case it will also advance the cursor to the next line of code.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"This command works a little bit like copy-paste: it will literally just copy some code from the editor into the REPL as if that code was typed in the REPL. This design has some consequences that you should keep in mind:","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"when you send something like a function definition to the REPL, no line or file information will be associated with that function. This can be annoying later on, when exceptions that are thrown in this function will not show any location information.\ninclude statements will always try to load relative paths relative to the current working directory, not relative to the file from which they are executed.\nMacros like @__DIR__ and @__FILE__ do not work properly.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"Due to these limitations, most users should use the Julia: Execute Code Block command in most cases.","category":"page"},{"location":"userguide/runningcode/#Julia:-Execute-Code-Block-(AltEnter)-1","page":"Running Code","title":"Julia: Execute Code Block (Alt+Enter)","text":"","category":"section"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"Whenever there is some Julia code selected in the currently active editor, this command will execute the selected code. If no text is selected, the command will identify the extent of the top-level language construct that the cursor is located in (except modules) and execute that code block.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"This command uses a different execution model than Julia: Execute Code that provides a more robust experience. In particular, it will associate location information with code that is executed, include will work correctly with relative paths and macros like @__DIR__ and @__FILE__ work as expected.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"For most users this should be their default command to run Julia code in the REPL.","category":"page"},{"location":"userguide/runningcode/#Julia:-Execute-Code-Cell-(ShiftEnter)-1","page":"Running Code","title":"Julia: Execute Code Cell (Shift+Enter)","text":"","category":"section"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"The extension provides support for demarking code cells in standard Julia files with a specially formatted comment: ##. This command will identify in which code cell the cursor in the active editor currently is and then execute the code in that cell. If there are no code cells used in the current file, it will execute the entire file.","category":"page"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"This command uses the same code execution techniques as the Julia: Execute Code Block command. Include statements, location information etc. all work as expected for that that is run with this command.","category":"page"},{"location":"userguide/runningcode/#Julia:-Execute-File-1","page":"Running Code","title":"Julia: Execute File","text":"","category":"section"},{"location":"userguide/runningcode/#","page":"Running Code","title":"Running Code","text":"This command runs the entire content of the currently active file in the Julia REPL. It uses the same code execution techniques as the Julia: Execute Code Block command. Include statements, location information etc. all work as expected for that that is run with this command.","category":"page"},{"location":"userguide/weave/#Julia-Markdown-Documents-1","page":"Julia Markdown Documents","title":"Julia Markdown Documents","text":"","category":"section"},{"location":"#Home-1","page":"Home","title":"Home","text":"","category":"section"},{"location":"userguide/settings/#Settings-1","page":"Settings","title":"Settings","text":"","category":"section"},{"location":"userguide/env/#Julia-Environments-1","page":"Julia Environments","title":"Julia Environments","text":"","category":"section"}]
}
