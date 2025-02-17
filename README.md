# OmniAutomation Plugins

A collection of automation plugins for OmniFocus to enhance productivity and workflow management.

## Installation

1. Download the desired `.omnijs` plugin file
2. Open OmniFocus
3. Select Automation > Configure from the menu bar
4. Click the `+` button and select the downloaded plugin file

## Available Plugins

### Convert to Project (`convert-to-project.omnijs`)
A smart task-to-project converter that maintains folder hierarchy and task properties. Features:
- Preserves task metadata (notes, due dates, defer dates)
- Intelligent folder selection with customizable defaults
- Option to create a subtask within the new project
- Automatically focuses on the newly created project

### Export Custom Perspective (`export-custom-perspective.omnijs`)
Share your custom perspectives with other OmniFocus users:
- Export any custom perspective to a file
- Simple interface for perspective selection
- Enables perspective sharing and backup
- Includes perspective configuration and rules

### Export Database to JSON (`export-database-to-json.omnijs`)
Export your OmniFocus database in a rich JSON format for external processing:
- Complete hierarchical structure of folders, projects, and tasks
- Includes perspective data (Inbox, Forecast, custom perspectives)
- Preserves task metadata and relationships
- Ideal for data analysis or AI tool integration

### Productivity Report (`productivity-report.omnijs`)
Generate detailed productivity summaries and send them to a webhook:
- Daily or weekly report options
- Tracks completed tasks, progressed projects, and due items
- Separates inbox vs. project task completion
- Monitors overdue tasks and project completion rates
- Configurable webhook integration for external processing

## Development

More details about OmniAutomation can be found in the [official documentation](https://omni-automation.com/).
