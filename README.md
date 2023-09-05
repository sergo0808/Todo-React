This is a simple Todo application built with React. It allows you to add, delete, and mark todo items as completed.

## Features

- Add new todo items by entering a title and clicking the "Add" button.
- Delete todo items by clicking the "Delete" button.
- Mark todo items as completed by clicking the "Mark as Completed" button.

## Installation

1. Clone the repository:

bash
git clone <repository-url>

2. Install the dependencies:

bash
npm install

3. Start the development server:

bash
npm start

4. Open the application in your browser at `http://localhost:3000`.

## Usage

1. Enter a title for the todo item in the input field.
2. Click the "Add" button to add the todo item to the list.
3. To delete a todo item, click the "Delete" button next to it.
4. To mark a todo item as completed, click the "Mark as Completed" button next to it. The completed todo item will be styled differently.

## Dependencies

- React
- Bootstrap

## Folder Structure

- `src`: Contains the source code files
  - `App.js`: The main component that renders the Todo application
  - `Header/Header.js`: The component for the header of the application
  - `AddTodo/AddTodo.js`: The component for adding new todo items
  - `TodoList/TodoList.js`: The component for displaying the list of todo items
  - `App.module.css`: The CSS module file for styling the main App component
  - `Header/Header.module.css`: The CSS module file for styling the header component
  - `AddTodo/AddTodo.module.css`: The CSS module file for styling the AddTodo component
  - `TodoList/TodoList.module.css`: The CSS module file for styling the TodoList component

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
