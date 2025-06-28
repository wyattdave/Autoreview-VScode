# Autoreview README
Code Review tool for Power Automate and Logic Apps

## Features
Extracts key information from Power Automate solutoin file.

### Flow Review
Extracts key information and scores flow based on AutoReview standard config.

![Extracts info](https://powerdevbox.com/images/vsCode/review.gif)

### Flow Actions
Lists all flow actions

### Flow Connections
Lists all flow connections

### Flow Diagram
Shows visual diagram of the flow (powered by nomnoml)

### Flow Deails
Quick show message showing count of actions, trigger, and if it is premium

## Guide
- Export flow solution
- Unzip solution
- Navigate to flows in Workflows folder
- Open flow json file

Full guide: [https://docs.powerdevbox.com/autoreview/autoreview-vs-code-extension](https://docs.powerdevbox.com/autoreview/autoreview-vs-code-extension)

![workflows in zip](https://powerdevbox.com/images/vsCode/files.png)

- Ctrl+shift+p

![options](https://powerdevbox.com/images/vsCode/options.png)

- Select action

## More info
AutoReview is also available in:

- Chromium Extentsion
- Pogressive Web App
- Power Platfrom Connector
- API

Find out more information here: [https://powerdevbox.com/autoreview.html](https://powerdevbox.com/autoreview.html)

## Known Issues

None so far, but its early days 😎

## Release Notes

### 1.0.1

Initial release of AutoReview 

### 1.0.2

Added diagram

### 1.0.3

Improved compatability

### 1.0.4

Bug fix on certain definition schemas

## 1.0.5

Changed connectionReference to connection Reference name

# 1.0.6

Occassional issue with parent actions loading json not string and breaking diagram fixed