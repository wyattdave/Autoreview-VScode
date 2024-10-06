const review= require ("./assets/data generator.js");
const configs= require("./assets/config.js");
const connectors =require("./assets/connectors.js");
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const oConfigs=configs.configs();
const oConnectors=connectors.connectors();
console.log(oConnectors)
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

			let oData=review.CreateReview(
				text,
				"vs code",
				"unknown",
				oConfigs.aComplexityTemplate,
				oConfigs.oNamingTemplate,
				oConnectors.value,
				"no owner",
				"no environment"
			  ) 
console.log(oData)
            // Create a new untitled document and set its contents
            const newDocument = await vscode.workspace.openTextDocument({ content: JSON.stringify(oData) });
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
