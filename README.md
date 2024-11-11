## OmniAutomation Plugins

More details can be found on this absolute monstrosity of a website, if you're able to navigate it: https://omni-automation.com/

All plugins are in the `/plugins` directory, along with [a more detailed README](./plugins/README.md) for each plugin.

## ChatGPT for Plugin Generation

I've been using this custom GPT for generating plugins. It does a pretty good job! https://chat.openai.com/g/g-1bLam9r4W-omniautomation-assistant

## Available Plugins

### convert-to-project
This automation solves the problem where converting a task to a project puts it in the outermost level of the folder hierarchy. This causes all sorts of issues when focusing on specific folders/contexts.

### export-custom-perspective
Choose a perspective to export out to a file that, when opened, can be added to another user's OmniFocus installation.

### export-project-taskpaper
Given a selected project, export a plain-text taskpaper export of the project. In an OmniFocus context, this taskpaper file can be copied, pasted to the inbox, then converted to a project.

### export-database
Export your entire database to your clipboard, for use in things like ChatGPT prompts or advanced reporting/manipulation.

### productivity-report
Send a summary of your completed work for the last day or week to a webhook.
