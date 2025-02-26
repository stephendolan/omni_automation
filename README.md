# OmniAutomation Plugins

A collection of automation plugins for OmniFocus to enhance productivity and workflow management.

## Installation

1. Go to the [latest Release in GitHub](https://github.com/stephendolan/omni_automation/releases/latest) and download the `.omnijs` plugin file you want to install
2. Open OmniFocus
3. Select Automation > Configure from the menu bar
4. Click the `+` button and select the downloaded plugin file

You can also clone this repository and build the plugins yourself by running `npm run build`.

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

### TypeScript Setup

This repository uses TypeScript for plugin development. The TypeScript code is compiled to JavaScript and then converted to `.omnijs` files that can be used by OmniFocus.

#### Directory Structure

- `src/plugins/`: Contains the TypeScript source code for the plugins
- `src/types/`: Contains TypeScript type definitions
- `scripts/`: Contains build scripts

#### Development Workflow

1. Write your TypeScript code in the `src/plugins/` directory
2. Use the type definitions in `src/types/` for OmniFocus API
3. Run `npm run build` to compile the TypeScript code and generate the `.omnijs` files
4. The generated `.omnijs` files will be placed in the root directory

#### Commands

- `npm run build`: Build the plugins
- `npm run clean`: Remove all generated `.omnijs` files

#### Adding a New Plugin

1. Create a new TypeScript file in `src/plugins/`
2. Add any necessary type definitions in `src/types/`
3. Run `npm run build` to generate the `.omnijs` file

More details about OmniAutomation can be found in the [official documentation](https://omni-automation.com/).
