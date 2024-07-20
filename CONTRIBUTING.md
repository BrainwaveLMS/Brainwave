
# Contributing to LMS Project

## Protocols to be followed

- Follow the naming conventions for branches:
  - Feature branches: `feature/your-feature-name`
  - Release branches: `release/x.y.z`
  - Hotfix branches: `hotfix/urgent-fix`

- Use meaningful commit messages to describe your changes.


## Workflow Overview

This project follows the Gitflow workflow. Please adhere to the following steps when contributing to ensure a smooth and organized development process.

## Cloning the Repository

1. Clone the repository from GitHub to get a local copy:
    ```sh
    git clone https://github.com/AyushmaanRajput/brainwave.git
    cd brainwave
    ```

## Setting Up Local `develop` Branch

2. After cloning, set up your local `develop` branch:
    ```sh
    git checkout -b develop origin/develop
    ```

## Creating a Feature Branch

3. From the `develop` branch, create a new feature branch:
    ```sh
    git checkout -b feature/your-feature-name develop
    ```

## Working and Committing Changes

4. Make your changes and commit them locally:
    ```sh
    git add .
    git commit -m "Describe your feature or fix"
    ```

## Pushing the Feature Branch to Remote

5. Push your feature branch to the remote repository:
    ```sh
    git push -u origin feature/your-feature-name
    ```

## Creating a Pull Request

6. Go to GitHub and create a pull request (PR) from `feature/your-feature-name` to `develop`.

## Running Tests

- Tests will automatically run when you create a pull request. Ensure all tests pass before merging.

## Merging Changes

7. Once the pull request is reviewed and all tests pass, the feature branch can be merged into `develop`. Your branch will be merged once a maintainer.

By following these guidelines, you ensure a consistent and organized workflow, making it easier for everyone involved in the project.

