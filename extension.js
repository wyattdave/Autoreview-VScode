const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {

	console.log('Congratulations, your extension "Autoreview" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('Autoreview.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from AutoReview!');

	});

	context.subscriptions.push(disposable);

    let arJson = vscode.commands.registerCommand('Autoreview.getJson', async function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const text = document.getText();

            // Create a new untitled document and set its contents
            const newDocument = await vscode.workspace.openTextDocument({ content: text });
            await vscode.window.showTextDocument(newDocument);
        }
    });

    context.subscriptions.push(arJson);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
